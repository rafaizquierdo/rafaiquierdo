import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostData {
  filename: string;
  name: string;
  content: string;
}

export default function BlogPost() {
  const { postName } = useParams<{ postName: string }>();

  // Fetch the specific blog post
  const { data: post, isLoading, error } = useQuery<BlogPostData>({
    queryKey: ['/api/blog/posts', postName],
    queryFn: async () => {
      const response = await fetch(`/api/blog/posts/${postName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      return response.json();
    },
    enabled: !!postName
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Navigation */}
          <motion.div 
            className="mb-8 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/blog">
              <a className="inline-flex items-center text-primary hover:text-accent transition-colors group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al blog
              </a>
            </Link>
            
            <Link href="/">
              <a className="text-primary hover:text-accent transition-colors">
                Inicio
              </a>
            </Link>
          </motion.div>

          {/* Loading state */}
          {isLoading && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              <p className="mt-4 text-gray-600">Cargando artículo...</p>
            </motion.div>
          )}

          {/* Error state */}
          {error && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-medium">Artículo no encontrado</p>
                <p className="text-red-500 text-sm mt-2">El artículo que buscas no existe o ha sido movido.</p>
              </div>
            </motion.div>
          )}

          {/* Post content */}
          {post && (
            <motion.article
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Post header */}
              <motion.header
                className="mb-8 text-center border-b border-gray-200 pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {post.name}
                </h1>
                
                <div className="flex items-center justify-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Rafael Izquierdo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Lectura de 5-10 min</span>
                  </div>
                </div>
              </motion.header>

              {/* Post body */}
              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-gray-800 leading-relaxed prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-primary mt-8 mb-4 first:mt-0">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-primary mt-5 mb-2">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-primary">
                          {children}
                        </strong>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-gray-600 bg-gray-50 py-2">
                          {children}
                        </blockquote>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-gray-700">{children}</li>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </motion.div>

              {/* Post footer */}
              <motion.footer
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    ¿Te ha resultado interesante este artículo?
                  </p>
                  <Link href="/#contact">
                    <a className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors font-medium">
                      Contáctame para más información
                    </a>
                  </Link>
                </div>
              </motion.footer>
            </motion.article>
          )}
        </motion.div>
      </div>
    </div>
  );
}