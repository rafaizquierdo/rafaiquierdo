import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a static website, we don't need any API routes
  // All the content is directly rendered in the React components
  
  // This serves the static SPA (Single Page Application)
  const httpServer = createServer(app);

  return httpServer;
}
