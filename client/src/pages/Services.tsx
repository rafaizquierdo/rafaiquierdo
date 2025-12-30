import { motion } from "framer-motion";

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
    title: "Dirección y construcción de negocio",
    description: "Transformo visión tecnológica en producto vendible y un go‑to‑market claro. Diseño y alineo estrategia, operaciones y ventas B2B tech. Trabajo cerca del Board en decisiones de crecimiento, inversión y foco.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Producto, ventas y automatización",
    description: "Defino y lidero producto en sectores de tecnología aplicada, salud, IA y automatización. Construyo procesos de venta y pipelines B2B realistas, medibles y escalables. Integro IA y automatización para reducir fricción operativa y liberar capacidad del equipo fundador.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Roles en los que más valor aporto",
    description: "Dirección de Producto · Desarrollo de Negocio · Dirección Comercial B2B tecnológico · Dirección de Operaciones · Asesoría para startups tecnológicas",
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
              Lo que aporto a tu empresa
            </h2>
            <p className="text-lg text-gray-700 text-justify">
              Ayudo a empresas tecnológicas e industriales a ordenar visión, producto y ventas, construyendo procesos y automatización para escalar de forma eficiente.
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
              Si lo que necesitas está alineado con esto, hablemos y veamos cómo puedo aportar en tu siguiente fase de crecimiento.
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
                Hablemos de tu negocio
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
