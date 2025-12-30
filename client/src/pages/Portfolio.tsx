import { motion } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  role: string;
  mediaType: "image" | "video" | "carousel";
  mediaSrc: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Proyecto de ejemplo 1",
    description: "Descripción del proyecto. Aquí se explicará el contexto, los retos y los resultados obtenidos. Este texto puede ser más largo para proyectos complejos donde haya mucho que contar.",
    role: "Consultor Estratégico",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Proyecto de ejemplo 2",
    description: "Otro proyecto con diferentes características. Aquí se pueden destacar los logros específicos, metodologías aplicadas y el impacto en el negocio del cliente.",
    role: "Director de Operaciones",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Proyecto de ejemplo 3",
    description: "Un tercer caso de estudio que demuestra experiencia en un área diferente. Cada entrada del portfolio muestra versatilidad y capacidad de adaptación a distintos contextos empresariales.",
    role: "Asesor de Startups",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
  }
];

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proyectos y colaboraciones donde he aportado valor estratégico y operativo.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemAnimation}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                data-testid={`portfolio-item-${item.id}`}
              >
                {/* Media container - elevated effect */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    className="relative z-10 rounded-xl overflow-hidden shadow-xl transform -translate-y-2 lg:-translate-y-4"
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.mediaType === "image" && (
                      <img
                        src={item.mediaSrc}
                        alt={item.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    )}
                    {item.mediaType === "video" && (
                      <video
                        src={item.mediaSrc}
                        className="w-full h-64 md:h-80 object-cover"
                        controls
                      />
                    )}
                  </motion.div>
                  {/* Shadow/elevation background */}
                  <div className="absolute inset-0 bg-accent/10 rounded-xl transform translate-x-3 translate-y-3 -z-10" />
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2 relative z-0">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                    <span className="inline-block text-sm font-medium text-accent mb-2">
                      {item.role}
                    </span>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
