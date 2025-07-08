# Rafael Izquierdo Portfolio Website

## Overview

This is a full-stack web application for Rafael Izquierdo's professional portfolio and consulting website. The application features a React frontend with a Node.js/Express backend, designed to showcase Rafael's expertise in business consulting, digital transformation, and entrepreneurship. The site includes a blog system for content management and is built with modern web technologies.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### UI Design System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Design Tokens**: CSS custom properties for consistent theming
- **Typography**: Inter font family
- **Color Scheme**: Neutral base with blue accent colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Blog System
- **Content Storage**: Markdown files in `/content/posts/` directory
- **API Endpoints**: 
  - `GET /api/blog/posts` - List all blog posts
  - `GET /api/blog/posts/:filename` - Get specific post content
- **Security**: Path traversal protection for file access
- **Rendering**: ReactMarkdown with syntax highlighting and GitHub Flavored Markdown

### Page Structure
- **Home**: Multi-section landing page with hero, about, services, testimonials, and contact
- **Blog**: Post listings with search and filtering capabilities
- **Individual Posts**: Full markdown rendering with navigation
- **404 Error**: Custom not found page with smooth animations

### User Interface Components
- **Header**: Fixed navigation with scroll effects and mobile menu
- **Footer**: Social links and contact information
- **Animations**: Staggered animations for content reveal
- **Responsive**: Mobile-optimized layouts and interactions

## Data Flow

### Content Management
1. Blog posts are stored as markdown files in the file system
2. Backend API reads and serves markdown content
3. Frontend fetches and renders posts using ReactMarkdown
4. Client-side routing handles navigation between posts

### User Interactions
1. Client makes requests through TanStack Query
2. Express server handles API routes and file serving
3. Vite middleware provides hot reload in development
4. Static assets served from built frontend in production

### Authentication & Sessions
- PostgreSQL session storage configured but not actively used
- User schema defined in Drizzle for future authentication features
- Memory storage fallback for development

## External Dependencies

### Production Dependencies
- **UI Components**: Extensive Radix UI component suite
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Styling**: Tailwind CSS with various plugins
- **Forms**: @hookform/resolvers with Zod validation
- **Content**: ReactMarkdown with rehype and remark plugins
- **Utilities**: date-fns, clsx, nanoid

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database**: Drizzle Kit for schema management and migrations
- **Runtime**: tsx for TypeScript execution
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Dev Server**: Concurrent frontend (Vite) and backend (Express) servers
- **Hot Reload**: Vite middleware integrated with Express
- **TypeScript**: Real-time compilation with tsx
- **Database**: Drizzle push for schema synchronization

### Production Build
- **Frontend**: Vite builds to `/dist/public` directory
- **Backend**: esbuild bundles server to `/dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Environment**: NODE_ENV controls development vs production behavior

### Database Management
- **Schema**: Defined in `/shared/schema.ts` with Drizzle
- **Migrations**: Generated to `/migrations` directory
- **Connection**: Environment variable `DATABASE_URL` required
- **Dialect**: PostgreSQL with Neon serverless provider

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```