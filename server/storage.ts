import { type ContactMessage, type ContactMessageRecord } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(
    message: ContactMessage,
    meta?: { ipAddress?: string | null; userAgent?: string | null },
  ): Promise<ContactMessageRecord>;
  getContactMessages(): Promise<ContactMessageRecord[]>;
  /**
   * Soft-delete (or hard-delete for in-memory) contact submissions older
   * than the given number of days. Called by the daily cleanup job to
   * honour the 12-month retention period documented in the privacy policy.
   * Returns the number of records affected.
   */
  purgeOldContactMessages(olderThanDays: number): Promise<number>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessageRecord>;

  constructor() {
    this.contactMessages = new Map();
  }

  async createContactMessage(
    message: ContactMessage,
    meta?: { ipAddress?: string | null; userAgent?: string | null },
  ): Promise<ContactMessageRecord> {
    const id = randomUUID();
    const record: ContactMessageRecord = {
      ...message,
      id,
      ipAddress: meta?.ipAddress ?? null,
      userAgent: meta?.userAgent ?? null,
      createdAt: new Date(),
      respondedAt: null,
      deletedAt: null,
    };
    this.contactMessages.set(id, record);
    return record;
  }

  async getContactMessages(): Promise<ContactMessageRecord[]> {
    return Array.from(this.contactMessages.values())
      .filter((r) => !r.deletedAt)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async purgeOldContactMessages(olderThanDays: number): Promise<number> {
    const cutoff = Date.now() - olderThanDays * 24 * 60 * 60 * 1000;
    let count = 0;
    for (const [id, rec] of Array.from(this.contactMessages.entries())) {
      if (rec.createdAt.getTime() < cutoff) {
        this.contactMessages.delete(id);
        count++;
      }
    }
    return count;
  }
}

export const storage = new MemStorage();

// ---------------------------------------------------------------------------
// Daily retention cleanup — deletes contact submissions older than 12 months.
// Documented in the privacy policy at /privacy (section 2a).
// ---------------------------------------------------------------------------
const RETENTION_DAYS = 365; // 12 months
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

if (process.env.NODE_ENV !== "test") {
  const run = async () => {
    try {
      const removed = await storage.purgeOldContactMessages(RETENTION_DAYS);
      if (removed > 0) {
        console.log(
          `[retention] contact.form purged ${removed} record(s) older than ${RETENTION_DAYS} days`,
        );
      }
    } catch (e) {
      console.error("[retention] purge failed:", e);
    }
  };
  // Run once at startup, then every 24h.
  void run();
  setInterval(run, ONE_DAY_MS).unref?.();
}
