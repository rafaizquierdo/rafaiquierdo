import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import * as chokidar from 'chokidar';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
  htmlContent: string;
}

class BlogManager {
  private posts: Map<string, BlogPost> = new Map();
  private postsDir = path.join(process.cwd(), 'content/posts');
  private watcher: any | null = null;

  constructor() {
    this.loadPosts();
    if (process.env.NODE_ENV === 'development') {
      this.setupWatcher();
    }
  }

  private loadPosts() {
    try {
      this.posts.clear();
      
      if (!fs.existsSync(this.postsDir)) {
        console.log('[Blog] Posts directory not found, creating...');
        fs.mkdirSync(this.postsDir, { recursive: true });
        return;
      }

      const files = fs.readdirSync(this.postsDir)
        .filter(file => file.endsWith('.md'));

      console.log(`[Blog] Loading ${files.length} posts...`);

      for (const file of files) {
        try {
          const filePath = path.join(this.postsDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data, content } = matter(fileContent);

          // Validate required fields
          if (!data.title || !data.date || !data.slug) {
            console.warn(`[Blog] Skipping ${file}: missing required fields (title, date, slug)`);
            continue;
          }

          // Convert markdown to HTML and sanitize
          const rawHtml = md.render(content);
          const htmlContent = sanitizeHtml(rawHtml, {
            allowedTags: [
              'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
              'p', 'br', 'strong', 'em', 'u', 'strike',
              'ul', 'ol', 'li',
              'blockquote', 'pre', 'code',
              'a', 'img',
              'table', 'thead', 'tbody', 'tr', 'th', 'td',
              'hr'
            ],
            allowedAttributes: {
              'a': ['href', 'title'],
              'img': ['src', 'alt', 'title'],
              'pre': ['class'],
              'code': ['class']
            },
            allowedSchemes: ['http', 'https', 'mailto']
          });

          const post: BlogPost = {
            slug: data.slug,
            title: data.title,
            date: data.date,
            author: data.author || 'Rafael Izquierdo',
            excerpt: data.excerpt || '',
            tags: data.tags || [],
            content,
            htmlContent
          };

          this.posts.set(post.slug, post);
          console.log(`[Blog] Loaded: ${post.title}`);
        } catch (error) {
          console.error(`[Blog] Error loading ${file}:`, error);
        }
      }

      console.log(`[Blog] Successfully loaded ${this.posts.size} posts`);
    } catch (error) {
      console.error('[Blog] Error loading posts:', error);
    }
  }

  private setupWatcher() {
    this.watcher = chokidar.watch(this.postsDir, {
      ignored: /^\./, 
      persistent: true
    });

    this.watcher.on('change', () => {
      console.log('[Blog] Posts changed, reloading...');
      this.loadPosts();
    });

    this.watcher.on('add', () => {
      console.log('[Blog] New post added, reloading...');
      this.loadPosts();
    });

    this.watcher.on('unlink', () => {
      console.log('[Blog] Post deleted, reloading...');
      this.loadPosts();
    });
  }

  getAllPosts(): BlogPost[] {
    return Array.from(this.posts.values())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getPost(slug: string): BlogPost | undefined {
    return this.posts.get(slug);
  }

  getPostsByTag(tag: string): BlogPost[] {
    return this.getAllPosts()
      .filter(post => post.tags.includes(tag));
  }

  destroy() {
    if (this.watcher) {
      this.watcher.close();
    }
  }
}

export const blogManager = new BlogManager();