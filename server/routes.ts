import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { promises as fs } from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to list blog posts
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const postsDir = path.join(process.cwd(), "content", "posts");
      const files = await fs.readdir(postsDir);
      const markdownFiles = files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
          filename: file,
          name: file.replace('.md', '')
        }));
      
      res.json(markdownFiles);
    } catch (error) {
      console.error("Error reading posts directory:", error);
      res.status(500).json({ error: "Failed to read posts" });
    }
  });

  // API endpoint to get a specific blog post
  app.get("/api/blog/posts/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      // Ensure filename ends with .md and sanitize it
      const safeFilename = filename.endsWith('.md') ? filename : `${filename}.md`;
      const filePath = path.join(process.cwd(), "content", "posts", safeFilename);
      
      // Check if file exists and is within the posts directory
      const postsDir = path.join(process.cwd(), "content", "posts");
      const resolvedPath = path.resolve(filePath);
      const resolvedPostsDir = path.resolve(postsDir);
      
      if (!resolvedPath.startsWith(resolvedPostsDir)) {
        return res.status(403).json({ error: "Access denied" });
      }
      
      const content = await fs.readFile(resolvedPath, 'utf-8');
      res.json({ 
        filename: safeFilename,
        name: safeFilename.replace('.md', ''),
        content 
      });
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        res.status(404).json({ error: "Post not found" });
      } else {
        console.error("Error reading post:", error);
        res.status(500).json({ error: "Failed to read post" });
      }
    }
  });

  // This serves the static SPA (Single Page Application)
  const httpServer = createServer(app);

  return httpServer;
}
