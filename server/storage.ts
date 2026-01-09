import { type ContactMessage, type ContactMessageRecord } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(message: ContactMessage): Promise<ContactMessageRecord>;
  getContactMessages(): Promise<ContactMessageRecord[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessageRecord>;

  constructor() {
    this.contactMessages = new Map();
  }

  async createContactMessage(message: ContactMessage): Promise<ContactMessageRecord> {
    const id = randomUUID();
    const record: ContactMessageRecord = {
      ...message,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, record);
    return record;
  }

  async getContactMessages(): Promise<ContactMessageRecord[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
