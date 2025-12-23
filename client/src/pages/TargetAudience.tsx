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
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Para quién tiene sentido trabajar conmigo
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 text-lg">
            <p className="text-gray-700">
              – Empresas tecnológicas o industriales que necesitan construir, no solo mantener.
            </p>
            <p className="text-gray-700">
              – Scale‑ups que quieren ordenar visión, producto y ventas antes de la siguiente fase de crecimiento o ronda.
            </p>
            <p className="text-gray-700">
              – Fundadores y Boards que buscan un perfil senior con autonomía, criterio y mentalidad de ownership, no un "empleado más".
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <p className="text-lg text-gray-800 font-medium">
              No busco estabilidad pasiva. Busco impacto, responsabilidad y resultados en entornos donde haya ambición y capacidad real de decisión.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
