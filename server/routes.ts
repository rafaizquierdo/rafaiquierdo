import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { blogManager } from "./lib/blog";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure EJS as template engine
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // Blog routes
  app.get('/blog', (req, res) => {
    const posts = blogManager.getAllPosts();
    res.render('blog-index', { posts });
  });

  app.get('/blog/:slug', (req, res) => {
    const { slug } = req.params;
    const post = blogManager.getPost(slug);
    
    if (!post) {
      return res.status(404).render('404', { 
        title: 'Artículo no encontrado',
        message: 'El artículo que buscas no existe o ha sido movido.'
      });
    }
    
    res.render('blog-post', { post });
  });

  // API route to get posts (for potential future React integration)
  app.get('/api/blog/posts', (req, res) => {
    const posts = blogManager.getAllPosts();
    res.json(posts);
  });

  app.get('/api/blog/posts/:slug', (req, res) => {
    const { slug } = req.params;
    const post = blogManager.getPost(slug);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
  });
  
  // This serves the static SPA (Single Page Application)
  const httpServer = createServer(app);

  return httpServer;
}
