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
    title: "V-Vision finalista en la convocatoria de 2022 de Púlsar by Roche + Wayra",
    description: "V-Vision fue finalista del programa Púlsar by Roche, la aceleradora de Roche y Wayra enfocada en impulsar la innovación en oftalmología y otras áreas de la salud, seleccionada entre más de 50 startups tecnológicas con soluciones listas para validar en entornos clínicos. Gracias a esta selección, V‑Vision accedió al coworking de Wayra Madrid, así como a formaciones, eventos y sesiones con expertos del ecosistema de Telefónica y Roche, lo que fortaleció tanto la estrategia de crecimiento como la visibilidad de la compañía en el sector healthtech.",
    role: "2022",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/aHuMg2gAE5s?start=35"
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
                      <iframe
                        src={item.mediaSrc}
                        className="w-full h-64 md:h-80"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={item.title}
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
