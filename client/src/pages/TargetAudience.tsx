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

export default function TargetAudience() {
  const audienceItems = [
    "Empresas tecnológicas o industriales que necesitan construir, no solo mantener.",
    "Scale‑ups que quieren ordenar visión, producto y ventas antes de la siguiente fase de crecimiento o ronda.",
    "Fundadores y Boards que buscan un perfil senior con autonomía, criterio y mentalidad de ownership, no un \"empleado más\"."
  ];

  const problemItems = [
    "La empresa tiene visión, pero no un plan claro",
    "Se trabaja mucho, pero no se avanza",
    "Las ventas son inconsistentes o dependen del fundador",
    "Hay demasiadas tareas manuales y poca automatización",
    "La tecnología no se traduce en valor comercial",
    "Se necesita financiación pública, pero no se sabe por dónde empezar"
  ];

  return (
    <section id="target-audience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerAnimation}
        >
          {/* A quién ayudo */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              A quién ayudo
            </h2>
            <ul className="space-y-3 text-lg">
              {audienceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Qué problemas ayudo a resolver */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Qué problemas ayudo a resolver
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Mis clientes suelen llegar cuando:
            </p>
            <ul className="space-y-3 text-lg">
              {problemItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-lg text-gray-800 font-medium">
              Me implico en organizaciones que quieren convertir la estrategia en acción: menos powerpoint, más decisiones, procesos y resultados visibles en el negocio.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
