import { motion } from "framer-motion";
import { FileText, Calendar, ArrowLeft, Construction, Tag, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

interface BlogPost {
  filename: string;
  name: string;
  tags: string[];
}

export default function Blog() {
  const [, setLocation] = useLocation();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    if (!posts) return [];
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (!posts || selectedTags.length === 0) return posts;
    return posts.filter(post => 
      selectedTags.every(selectedTag => 
        post.tags.includes(selectedTag)
      )
    );
  }, [posts, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const handlePostClick = (postName: string) => {
    setLocation(`/blog/${postName}`);
  };

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
            <p className="text-xl text-gray-600 mb-8">
              Reflexiones sobre transformación digital, liderazgo y libertad
            </p>
            
            {/* Tag selector */}
            {allTags.length > 0 && (
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-primary">Filtrar por etiquetas</h3>
                  </div>
                  {selectedTags.length > 0 && (
                    <button
                      onClick={clearAllTags}
                      className="flex items-center space-x-1 text-sm text-gray-600 hover:text-accent transition-colors"
                      data-testid="button-clear-tags"
                    >
                      <X className="h-4 w-4" />
                      <span>Limpiar filtros</span>
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      data-testid={`tag-filter-${tag}`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Mostrando artículos con etiquetas: {selectedTags.map(tag => `#${tag}`).join(', ')}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
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

            {filteredPosts && filteredPosts.length > 0 && (
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.filename}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    onClick={() => handlePostClick(post.name)}
                    data-testid={`card-post-${post.name}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                            {post.name}
                          </h3>
                          <p className="text-gray-600 mb-2">Haz clic para leer el artículo completo</p>
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {post.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                                  data-testid={`tag-${tag}`}
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-accent rotate-180 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredPosts && filteredPosts.length === 0 && posts && posts.length > 0 && (
              <div className="text-center py-12">
                <Tag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No hay artículos con las etiquetas seleccionadas</p>
                <button
                  onClick={clearAllTags}
                  className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
                  data-testid="button-clear-filters"
                >
                  Mostrar todos los artículos
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}