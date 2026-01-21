import { motion } from "framer-motion";

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const highlights = [
  {
    icon: "🚀",
    title: "Menos tareas manuales",
    description: "Más tiempo para lo que realmente da dinero. Libérate de la burocracia innecesaria."
  },
  {
    icon: "🎯",
    title: "Más foco y decisiones claras",
    description: "Sin humo ni reuniones infinitas. Decisiones basadas en datos, no en intuición."
  },
  {
    icon: "📈",
    title: "Ventas más constantes",
    description: "Sin vivir de rachas. Sistema de ventas predecible y escalable."
  }
];

const experience = [
  { title: "De 0 a 140.000€/año de facturación", desc: "con equipo comercial mínimo." },
  { title: "3 rondas privadas: 300.000€ levantados", desc: "Experiencia en fundraising y negociación con inversores." },
  { title: "Financiación pública: 250.000€", desc: "Conocimiento profundo del ecosistema de financiación." },
  { title: "+14 años de experiencia combinada", desc: "Startup, corporativo (SAP), dirección, ventas B2B y ejecución." },
  { title: "Licencia de Fabricante de Producto Sanitario", desc: "Consecución y renovación. Experiencia en sectores regulados." },
  { title: "No asesoro desde la teoría", desc: "Creo tu sistema y lo opero contigo. Resultados tangibles." }
];

const services = [
  {
    name: "Back",
    subtitle: "Crecer sin contratar a más gente. Liberar tiempo y carga mental.",
    problems: [
      "Demasiadas tareas manuales y procesos \"artesanales\"",
      "Reporting lento, desorden y dependencia de personas clave",
      "Documentación y operativa que se come al equipo"
    ],
    deliverables: [
      "Un sistema operativo funcionando (procesos + automatizaciones + métricas)",
      "Soporte y mantenimiento mensual",
      "Mejoras y roadmap de optimización incluidos"
    ],
    examples: [
      "Automatización de presupuestos",
      "Gestión de datos de clientes",
      "Gestión de facturación",
      "Alertas inteligentes",
      "Publicaciones en redes / Campañas",
      "Dashboards de métricas"
    ],
    caseStudy: "Leads entraban por todos lados. Construí un sistema que automatiza todo el flujo de leads a contrato, permitiendo crecer sin burocracia ni horas muertas de administración."
  },
  {
    name: "Sales",
    subtitle: "Optimizar el motor de ingresos.",
    problems: [
      "Pipeline desordenado: leads que se enfrían",
      "Mensaje comercial difuso",
      "Trabajo sin métricas ni datos para decidir"
    ],
    deliverables: [
      "Proceso de ventas claro + pipeline + rutina semanal",
      "Mensajes y guiones listos para usar",
      "Sistema de seguimiento automático"
    ],
    examples: [
      "Captura de leads desde web/LinkedIn → CRM automático",
      "Emails de seguimiento automáticos",
      "\"Agenda y confirma\" reuniones",
      "Generación automática de propuestas",
      "Registro automático de llamadas/reuniones"
    ],
    caseStudy: "Aprendí a detectar rápido el encaje: ICP bien definidos, guiones efectivos, funnels pensados para distinguir grandes oportunidades de ruido comercial."
  },
  {
    name: "Strategy",
    subtitle: "Ordenar el negocio cuando hay ruido, dudas o bloqueo. Foco para hoy + visión para mañana",
    problems: [
      "Estrategia \"en la cabeza del fundador\"",
      "Tecnología que no se traduce en propuesta de valor",
      "Necesidad de financiación sin hoja de ruta realista"
    ],
    deliverables: [
      "Marco de decisión + prioridades + plan 30-90 días",
      "Claridad brutal: qué hacemos / qué no y por qué",
      "Propuesta de valor afinada (para cliente, equipo, inversores)"
    ],
    examples: [
      "Diseñar funnel: lead → conversación → propuesta → cierre",
      "Pasar de cobro por proyecto a recurrencia",
      "Roadmap de financiación"
    ],
    caseStudy: "Convertimos una idea técnica y difusa en propuesta clara para un segmento concreto, permitiendo pasar de \"tenemos buena tecnología\" a \"sabemos qué problema resolvemos y cómo crecer\"."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Handshake",
    description: "Reunión breve para conocernos, entender tu contexto y ver dónde puedo aportar valor. Si hay encaje, propuesta clara; si no, quedamos tan amigos."
  },
  {
    number: 2,
    title: "Plan de acción",
    description: "Segunda reunión para repasar la propuesta, ajustar alcance y poner fechas. Claro qué haremos en 30-90 días y cómo mediremos resultados."
  },
  {
    number: 3,
    title: "Trabajo conjunto",
    description: "Comenzamos: sesiones, implementación y acompañamiento en decisiones clave. Revisamos periódicamente y ajustamos para maximizar impacto."
  }
];

export default function BusinessOS() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic"
            variants={fadeInUp}
          >
            <span className="text-white">Business</span>
            <span className="text-[#F5C842]">OS</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 text-gray-300 font-light max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <span className="text-[#F5C842] font-bold">Sistema operativo</span> empresarial que convierte<br className="hidden md:block" />
            caos en procesos, y procesos en resultados.
          </motion.p>
          <motion.p 
            className="text-gray-500 italic"
            variants={fadeInUp}
          >
            Rafael Izquierdo | Automatización • Ventas • Estrategia
          </motion.p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#252525] p-8 rounded-xl border-l-4 border-[#F5C842] hover:-translate-y-1 transition-all duration-300"
                variants={fadeInUp}
              >
                <h3 className="text-[#F5C842] font-semibold text-lg mb-3">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 italic"
              variants={fadeInUp}
            >
              He estado en tu silla (y sé lo que duele)
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-700 pb-6"
                  variants={fadeInUp}
                >
                  <strong className="text-[#F5C842] block mb-2">{item.title}</strong>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center italic"
              variants={fadeInUp}
            >
              Las 3 Pilares del Business <span className="text-[#F5C842]">OS</span>
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-[#252525] p-8 rounded-xl border-l-4 border-[#F5C842] hover:-translate-y-2 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-white mb-3 italic">
                    {service.name} <span className="text-[#F5C842]">OS</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 font-medium">{service.subtitle}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-[#F5C842] text-xs font-bold uppercase tracking-wide mb-3">Qué resuelvo</h4>
                    <ul className="space-y-2">
                      {service.problems.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-[#F5C842] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[#F5C842] text-xs font-bold uppercase tracking-wide mb-3">Qué te llevas</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-[#F5C842] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[#F5C842] text-xs font-bold uppercase tracking-wide mb-3">Ejemplos típicos</h4>
                    <ul className="space-y-2">
                      {service.examples.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-[#F5C842] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-3 border-[#F5C842]" style={{ borderLeftWidth: '3px', borderLeftColor: '#F5C842' }}>
                    <h5 className="text-[#F5C842] text-xs font-bold uppercase mb-3">Caso de éxito: V-Vision</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.caseStudy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center italic"
              variants={fadeInUp}
            >
              Cómo trabajamos juntos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-[#252525] p-8 rounded-xl"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F5C842] text-[#1a1a1a] rounded-full font-bold text-2xl mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center italic"
              variants={fadeInUp}
            >
              Modelo de trabajo: Setup + Suscripción
            </motion.h2>
            
            <motion.div className="bg-[#252525] p-8 rounded-xl mb-6" variants={fadeInUp}>
              <h3 className="text-[#F5C842] text-xl font-semibold mb-6">1. Setup Inicial</h3>
              <ol className="space-y-4 text-gray-400 ml-5">
                <li className="text-sm"><strong className="text-white">Diagnóstico y diseño del sistema</strong> - Entender tu operativa actual</li>
                <li className="text-sm"><strong className="text-white">Implementación de procesos + automatizaciones + métricas</strong> - Construir tu Business OS</li>
                <li className="text-sm"><strong className="text-white">Puesta en marcha y formación rápida</strong> - Lo justo para operar sin dependencia</li>
              </ol>
            </motion.div>

            <motion.div className="bg-[#252525] p-8 rounded-xl mb-6" variants={fadeInUp}>
              <h3 className="text-[#F5C842] text-xl font-semibold mb-6">2. Suscripción Mensual (Mantenimiento)</h3>
              <ol className="space-y-4 text-gray-400 ml-5">
                <li className="text-sm"><strong className="text-white">Infraestructura incluida</strong> - El sistema corre en mi Cloud</li>
                <li className="text-sm"><strong className="text-white">Soporte y mantenimiento</strong> - Para que no se rompa</li>
                <li className="text-sm"><strong className="text-white">Ajustes y mejoras</strong> - Bolsa de horas/mes + roadmap de optimización</li>
              </ol>
            </motion.div>

            <motion.div className="bg-[#252525] p-8 rounded-xl" variants={fadeInUp}>
              <h3 className="text-[#F5C842] text-xl font-semibold mb-6">Si cancelas... no te dejo tirado</h3>
              <ul className="space-y-4 text-gray-400 ml-5">
                <li className="text-sm flex items-start gap-2">
                  <span className="text-[#F5C842] font-bold">•</span>
                  <span><strong className="text-white">Te entrego toda la documentación</strong> actualizada a la fecha de cancelación</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-[#F5C842] font-bold">•</span>
                  <span><strong className="text-white">Puedo presupuestar migración</strong> para que lo ejecutes en tu Cloud si lo prefieres</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-[#F5C842] font-bold">•</span>
                  <span><strong className="text-white">Traspaso limpio:</strong> documentación, procesos y todo lo creado es tuyo</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 md:py-20">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6 italic"
            variants={fadeInUp}
          >
            ¿Estás listo para crear orden y escalar?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Vamos a convertir tu caos en un sistema que funciona mientras tú haces lo que realmente importa.
          </motion.p>
          <motion.a
            href="https://calendar.app.google/RWWuqw9SQUpbK7P38"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#1a1a1a] border-2 border-[#F5C842] rounded-xl text-[#F5C842] font-bold text-xl italic hover:bg-[#F5C842] hover:text-[#1a1a1a] transition-all duration-300"
            variants={fadeInUp}
          >
            Agendar Handshake
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-800">
        <p className="text-sm text-gray-500">
          © 2026 Rafael Izquierdo |{" "}
          <a href="mailto:info@rafaizquierdo.es" className="text-[#F5C842] hover:underline">
            info@rafaizquierdo.es
          </a>
        </p>
        <p className="text-xs mt-3 text-gray-600">
          Automatización • Ventas • Estrategia
        </p>
      </footer>
    </div>
  );
}
