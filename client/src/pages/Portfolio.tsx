import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pulsarImage from "@assets/Captura_de_pantalla_2025-12-30_a_las_17.26.41_1767112052108.png";
import berriupImage from "@assets/spri-emprendimiento-berriup-codecontract-gravi-v-vision_1767119703100.jpg";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  year: string;
  media: MediaItem[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "V-Vision finalista en la convocatoria de 2022 de Púlsar by Roche + Wayra",
    description: "V-Vision fue finalista del programa Púlsar by Roche, la aceleradora de Roche y Wayra enfocada en impulsar la innovación en oftalmología y otras áreas de la salud, seleccionada entre más de 50 startups tecnológicas con soluciones listas para validar en entornos clínicos. Gracias a esta selección, V‑Vision accedió al coworking de Wayra Madrid, así como a formaciones, eventos y sesiones con expertos del ecosistema de Telefónica y Roche, lo que fortaleció tanto la estrategia de crecimiento como la visibilidad de la compañía en el sector healthtech.",
    year: "2022",
    media: [
      { type: "image", src: pulsarImage },
      { type: "video", src: "https://www.youtube.com/embed/aHuMg2gAE5s?start=35" }
    ]
  },
  {
    id: 2,
    title: "Ronda Pre-Seed: Entrada de EASO Ventures y Aceleración con el programa de Berri-Up",
    description: "V‑Vision fue una de las tres startups ganadoras de la 11ª convocatoria del programa de aceleración de BerriUp, lo que le permitió acceder a financiación en fase pre‑seed y a un proceso de aceleración de 4 meses, en el marco del impulso inversor asociado al programa (EASO Ventures).",
    year: "2019",
    media: [
      { type: "image", src: berriupImage },
      { type: "video", src: "https://www.youtube.com/embed/smrS_yy8q6U?start=19" }
    ]
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

function MediaCarousel({ media, title }: { media: MediaItem[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="relative">
      <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
        {currentMedia.type === "image" && (
          <img
            src={currentMedia.src}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
        )}
        {currentMedia.type === "video" && (
          <iframe
            src={currentMedia.src}
            className="w-full h-64 md:h-80"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors"
            data-testid="carousel-next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-accent/10 rounded-xl transform translate-x-3 translate-y-3 -z-10" />
    </div>
  );
}

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
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="transform -translate-y-2 lg:-translate-y-4"
                  >
                    <MediaCarousel media={item.media} title={item.title} />
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2 relative z-0">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                    <span className="inline-block text-sm font-medium text-accent mb-2">
                      {item.year}
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
