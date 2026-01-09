import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const message = await storage.createContactMessage(result.data);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your enquiry. We'll be in touch shortly.",
        id: message.id
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ 
        error: "An error occurred. Please try again later." 
      });
    }
  });

  return httpServer;
}
