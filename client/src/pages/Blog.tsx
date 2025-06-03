import { motion } from "framer-motion";
import { FileText, Calendar, ArrowLeft, Construction } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface BlogPost {
  filename: string;
  name: string;
}

export default function Blog() {
  // Fetch blog posts from the API
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    }
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
          {/* Back to home link */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/">
              <a className="inline-flex items-center text-primary hover:text-accent transition-colors group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al inicio
              </a>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Blog</h1>
            <p className="text-xl text-gray-600">
              Reflexiones sobre transformación digital, liderazgo y libertad
            </p>
          </motion.div>

          {/* Blog posts list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                <p className="mt-4 text-gray-600">Cargando artículos...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600">Error al cargar los artículos</p>
                </div>
              </div>
            )}

            {posts && posts.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No hay artículos disponibles</p>
              </div>
            )}

            {posts && posts.length > 0 && (
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.filename}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <Link href={`/blog/${post.name}`}>
                      <a className="block group-hover:text-accent transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-accent" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                                {post.name}
                              </h3>
                              <p className="text-gray-600">Haz clic para leer el artículo completo</p>
                            </div>
                          </div>
                          <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-accent rotate-180 group-hover:translate-x-1 transition-all" />
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}