import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consentGiven: z.literal(true, {
    errorMap: () => ({
      message:
        "You must consent to us storing your details to respond to your enquiry.",
    }),
  }),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;

export interface ContactMessageRecord extends ContactMessage {
  id: string;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: Date;
  respondedAt: Date | null;
  deletedAt: Date | null;
}
