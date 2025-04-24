import { motion } from "framer-motion";

// Animations
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const serviceItems = [
  {
    title: "Emprendimiento y Estrategia",
    description: "Encontrar el equilibrio para atender el día a día y tener visión a largo plazo es muy complicado. Ayudo a transformar ideas en negocios sólidos, con foco en la financiación, la gestión y el crecimiento.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Tecnología y Transformación Digital",
    description: "Sí, la IA es el futuro, pero ¿sabes cómo sacarle partido hoy mismo? Acompaño a empresas tradicionales a incorporar nuevas soluciones tecnológicas que optimicen procesos y mejoren la eficiencia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Ventas y Marketing",
    description: "Levanta el teléfono y llama ya. Te ayudo a crear estrategias de ventas realistas y escalables, basadas en datos y con resultados medibles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerAnimation}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Qué puedo aportar a tu proyecto?
            </h2>
            <p className="text-lg text-gray-700 text-justify">
              Mi enfoque está en desbloquear el potencial de emprendedores y empresas que desean cambiar las reglas del juego. Ya sea que estés buscando financiamiento, optimizar tus ventas, o incorporar nuevas tecnologías, aquí no encontrarás promesas vacías. Solo soluciones prácticas y honestas.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-justify">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <p className="text-lg text-gray-700 text-justify">
              Si ves que lo que necesitas está alineado con lo que ofrezco, hablemos.
            </p>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="mailto:info@rafaizquierdo.es?body=(cuéntame algo de ti y de tu proyecto/idea/problema)"
                className="inline-flex items-center justify-center bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-accent/90 transition-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contáctame
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}