import { motion } from "framer-motion";
import { Construction, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
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

          {/* Construction icon */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="inline-flex p-6 bg-orange-100 rounded-full">
              <Construction className="h-16 w-16 text-orange-500" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Blog
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Sección en construcción
          </motion.p>

          {/* Description */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-accent mr-2" />
              <span className="text-lg font-medium text-primary">Próximamente</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Estoy trabajando en crear contenido valioso sobre transformación digital, 
              liderazgo empresarial y tendencias tecnológicas. Aquí compartiré insights, 
              experiencias y conocimientos que puedan ayudar a otros emprendedores y 
              profesionales en su camino hacia el éxito.
            </p>
          </motion.div>

          {/* Features coming soon */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="bg-white/50 p-6 rounded-xl border border-white/30">
              <h3 className="font-semibold text-primary mb-2">Artículos Técnicos</h3>
              <p className="text-gray-600 text-sm">
                Análisis profundos sobre tecnologías emergentes y su impacto en los negocios
              </p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl border border-white/30">
              <h3 className="font-semibold text-primary mb-2">Casos de Estudio</h3>
              <p className="text-gray-600 text-sm">
                Experiencias reales de transformación digital en diferentes industrias
              </p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl border border-white/30">
              <h3 className="font-semibold text-primary mb-2">Consejos de Liderazgo</h3>
              <p className="text-gray-600 text-sm">
                Estrategias y reflexiones sobre liderazgo en la era digital
              </p>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-gray-600 mb-6">
              ¿Te interesa mantenerte informado sobre el lanzamiento del blog?
            </p>
            <Link href="/#contact">
              <a className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-md hover:bg-accent/90 transition-colors font-medium">
                Contáctame para más información
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}