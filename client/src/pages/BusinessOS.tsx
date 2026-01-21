import { motion } from "framer-motion";
import { Link } from "wouter";
import rafaPhoto from "@assets/3_1769000674069.png";
import teamPhoto from "@assets/6_1769000674070.png";
import salesPhoto from "@assets/8_1769000674070.png";
import strategyPhoto from "@assets/10_1769000674070.png";
import modelPhoto from "@assets/12_1769000674070.png";

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
    title: "Menos tareas manuales",
    description: "(más tiempo para lo que da dinero)."
  },
  {
    title: "Más foco y decisiones claras",
    description: "(sin humo ni reuniones infinitas)."
  },
  {
    title: "Ventas más constantes",
    description: "(sin vivir de rachas)."
  }
];

const experience = [
  "De 0 a 140.000€/año de facturación con equipo comercial mínimo.",
  "3 rondas privadas: 300.000€ levantados.",
  "Financiación pública: 250.000€ conseguida.",
  "+14 años combinando: startup, corporativo (SAP), dirección, ventas B2B y ejecución.",
  "Consecución y renovación de Licencia de Fabricante de Producto Sanitario."
];

const services = [
  {
    name: "Back",
    subtitle: "Crecer sin contratar a más gente.\nLiberar tiempo y carga mental.",
    problems: [
      "Demasiadas tareas manuales y procesos \"artesanales\".",
      "Reporting lento, desorden, y dependencia de personas clave.",
      "Documentación y operativa que se come al equipo."
    ],
    deliverables: [
      "Un sistema operativo funcionando (procesos + automatizaciones + métricas) adaptado a tu forma de trabajar.",
      "Soporte y mantenimiento mensual para que no se rompa cuando cambien herramientas, equipo o procesos.",
      "Mejoras y ajustes incluidos + roadmap de optimización."
    ],
    examples: [
      "Automatización de procesos:",
      "Redacción de presupuestos",
      "Gestión de datos de clientes",
      "Gestión de facturación",
      "Alertas",
      "Publicaciones en redes / Campañas de marketing.",
      "Dashboard de métricas para decidir rápido."
    ],
    caseStudy: "Cuando lancé V-Vision, los leads entraban por todos lados: anuncios, formularios, recomendaciones. Cada uno en un sitio distinto. Probé HubSpot y otras herramientas, pero tardaba más en entender cómo funcionaban que en crear mi propio sistema automatizado con mis reglas. Se escapaban oportunidades y crecer significaba más horas de administrativo, no más ventas.\n\nAsí que construí un sistema que automatiza todo el flujo de leads a contrato y permite crecer sin aumentar la burocracia.\n\n¿Lo mejor? También me sirvió para tener los datos a 1 click y reportar a los socios, compañeros de trabajo, etc...",
    image: teamPhoto
  },
  {
    name: "Sales",
    subtitle: "Optimizar el motor de ingresos.",
    problems: [
      "Pipeline desordenado: Leads que entran pero se enfrían por falta de seguimiento y un proceso claro.",
      "Mensaje comercial difuso: buen producto pero cuesta explicarlo.",
      "Trabajo sin métricas ni datos para saber por qué se gano o se perdió."
    ],
    deliverables: [
      "Un sistema operativo: proceso de ventas claro + pipeline + rutina semanal (para que no dependa de inspiración).",
      "Mensajes y guiones listos para usar (email/LinkedIn/llamada) + manejo de objeciones y cierre.",
      "Sistema de seguimiento automático: recordatorios, tareas y \"next step\" para que ningún lead se pierda."
    ],
    examples: [
      "Captura de leads desde web/LinkedIn → alta automática en CRM/Sheet + asignación a responsable.",
      "Emails de seguimiento automáticos",
      "\"Agenda y confirma\" reuniones: recordatorio + enlace + mensaje post-reunión.",
      "Generación automática de propuestas a partir de plantilla.",
      "Registro automático de llamadas/reuniones y tareas siguientes."
    ],
    caseStudy: "Cuando empecé a vender en V-Vision, hablaba mucho y escuchaba poco. Con el tiempo aprendí a entrar en la conversación mental del cliente: qué le preocupa de verdad, qué teme y qué espera lograr. Empecé a fijarme en detalles concretos de cada reunión que me decían si nuestra propuesta encajaba, si podía ser un gran cliente o si era mejor descartarlo cuanto antes.\n\nDe ahí salieron los ICP (Ideal Customer Persona), los guiones y los funnels que uso ahora: sistemas pensados para detectar rápido el encaje y no perder tiempo ni energía en las oportunidades equivocadas.",
    image: salesPhoto
  },
  {
    name: "Strategy",
    subtitle: "Ayudo a ordenar el negocio cuando hay ruido, dudas o bloqueo. Foco para hoy + visión para mañana",
    problems: [
      "Estrategia \"en la cabeza del fundador\": el equipo ejecuta sin contexto y sin criterios.",
      "Tecnología o capacidad interna que no se traduce en propuesta de valor, ventas o margen.",
      "Necesidad de financiación (pública o privada) sin una hoja de ruta realista para conseguirla."
    ],
    deliverables: [
      "Un sistema operativo: marco de decisión + prioridades + plan 30–90 días con hitos y métricas.",
      "Claridad brutal: qué hacemos / qué no hacemos y por qué (para reducir ruido y discusiones circulares).",
      "Propuesta de valor y narrativa afinadas (para cliente, equipo, socios o inversores) sin humo."
    ],
    examples: [
      "Diseñar un funnel simple: lead → conversación → propuesta → cierre → onboarding.",
      "Pasar de \"cobro por proyecto\" a recurrencia (retainer / suscripción).",
      "Roadmap de financiación: qué pedir, cuándo, y para qué."
    ],
    caseStudy: "En V-Vision apliqué exactamente este enfoque: partimos de una idea muy técnica y difusa y la convertimos en una propuesta clara para un segmento concreto de clientes, priorizando qué líneas de producto seguir y cuáles aparcar.\n\nOrdené el modelo de negocio, preparé la narrativa para programas de aceleración, administraciones públicas e inversores y ayudé a decidir qué oportunidades tomar y cuáles rechazar. Ese trabajo estratégico permitió pasar de \"tenemos una buena tecnología\" a \"sabemos qué problema resolvemos, para quién y con qué plan de crecimiento\".",
    image: strategyPhoto
  }
];

const processSteps = [
  {
    number: 1,
    title: "Handshake (primera reunión)",
    description: "Reunión breve para conocernos, entender tu contexto y ver qué áreas puedo mejorar y cuáles no. Si hay encaje, te envío una propuesta con un plan de acción claro; si no, quedamos tan amigos."
  },
  {
    number: 2,
    title: "Plan de acción y calendario",
    description: "Segunda reunión para repasar la propuesta, ajustar el alcance si hace falta y poner fechas a los primeros pasos. Dejamos claro qué haremos en los próximos 30–90 días y cómo mediremos resultados."
  },
  {
    number: 3,
    title: "Trabajo conjunto y ajustes",
    description: "Empezamos a trabajar: sesiones, implementación y acompañamiento en decisiones clave. Revisamos periódicamente qué funciona y ajustamos el plan para maximizar el impacto en tu negocio."
  }
];

export default function BusinessOS() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            variants={fadeInUp}
          >
            <span className="bos-gradient-text-lg">Business OS</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <span className="italic text-[#F89048]">Sistema operativo</span>{" "}
            <span className="text-white">empresarial que convierte</span><br className="hidden md:block" />
            <span className="text-white">caos en procesos, y procesos en resultados.</span>
          </motion.p>
          <motion.p 
            className="text-gray-400 italic mb-4"
            variants={fadeInUp}
          >
            Rafael Izquierdo
          </motion.p>
          <motion.p 
            className="text-white font-semibold"
            variants={fadeInUp}
          >
            Automatización • Ventas • Estrategia
          </motion.p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.div className="mb-8" variants={fadeInUp}>
              <span className="bos-gradient-text text-2xl md:text-3xl">Business OS</span>
            </motion.div>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-white text-lg flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <span className="text-[#F89048]">•</span>
                  <span>
                    <strong>{item.title}</strong>{" "}
                    <span className="text-gray-400">{item.description}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.p 
              className="text-gray-500 italic text-sm mt-12 text-center"
              variants={fadeInUp}
            >
              Método aplicado desde 2019 con automatización e IA.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light italic text-white mb-12"
              variants={fadeInUp}
            >
              He estado en tu sitio
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeInUp}>
                <img 
                  src={rafaPhoto} 
                  alt="Rafael Izquierdo" 
                  className="rounded-lg w-full max-w-md"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-white mb-6">He estado en tu silla (y sé lo que duele)</p>
                <ul className="space-y-3 mb-8">
                  {experience.map((item, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-[#F89048]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <p className="text-white text-xl font-semibold">No asesoro desde la teoría:</p>
                  <p className="text-white text-xl">creo tu sistema y lo opero contigo.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-8"
                  variants={fadeInUp}
                >
                  <h3 className="bos-gradient-text text-3xl md:text-4xl whitespace-nowrap">
                    {service.name} OS
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line">{service.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={index} className="py-16 md:py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
            >
              {/* Header */}
              <motion.div className="flex flex-col md:flex-row items-start gap-6 mb-12" variants={fadeInUp}>
                <h3 className="bos-gradient-text text-4xl md:text-5xl whitespace-nowrap">
                  {service.name} OS
                </h3>
                <p className="text-[#F89048] italic text-lg md:text-xl whitespace-pre-line">
                  {service.subtitle}
                </p>
              </motion.div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div variants={fadeInUp}>
                  <div className="mb-8">
                    <h4 className="text-white text-sm font-medium mb-4">Qué resuelvo</h4>
                    <ul className="space-y-2">
                      {service.problems.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-[#F89048]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white text-sm font-medium mb-4">Qué te llevas</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-[#F89048]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-500 text-sm mb-4">Ejemplos típicos:</h4>
                    <ul className="space-y-1">
                      {service.examples.map((item, i) => (
                        <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                          <span className="text-gray-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h4 className="text-white font-semibold mb-4">Caso de éxito: V-Vision</h4>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-6">
                    {service.caseStudy}
                  </p>
                  {service.image && (
                    <img 
                      src={service.image} 
                      alt={`${service.name} OS`}
                      className="rounded-lg w-full"
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light italic text-white mb-12"
              variants={fadeInUp}
            >
              Siguientes pasos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <h3 className="text-white font-semibold mb-4">
                    <span className="text-gray-500">{step.number}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model */}
      <section className="py-16 md:py-20 bg-[#1a1a1a] relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${modelPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light italic text-white mb-4"
              variants={fadeInUp}
            >
              Modelo de trabajo
            </motion.h2>
            <motion.p className="mb-12" variants={fadeInUp}>
              <span className="bos-gradient-text text-xl">Business OS</span>
              <span className="text-white text-xl"> = Setup + Suscripción mensual</span>
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-white font-semibold mb-4">
                  <span className="text-gray-500">1.</span> Setup inicial
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Diagnóstico y diseño del sistema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Implementación de procesos + automatizaciones + métricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Puesta en marcha y formación rápida (lo justo)</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-white font-semibold mb-4">
                  <span className="text-gray-500">2.</span> Suscripción mensual (mantenimiento)
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Infraestructura incluida (el sistema corre en mi Cloud)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Soporte y mantenimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F89048]">•</span>
                    <span>Ajustes y mejoras (bolsa de horas/mes) + roadmap</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cancellation */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light italic text-white mb-2"
              variants={fadeInUp}
            >
              Modelo de trabajo
            </motion.h2>
            <motion.p 
              className="text-white text-lg mb-8"
              variants={fadeInUp}
            >
              Si cancelas...no te dejo tirado: te dejo el mapa y, si quieres, el traspaso
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">Si cancelas la suscripción</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#F89048]">•</span>
                  <span>Las automatizaciones se detienen (porque corren en mi infraestructura).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F89048]">•</span>
                  <span>Te entrego toda la documentación actualizada a la fecha de cancelación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F89048]">•</span>
                  <span>Y si quieres, puedo presupuestar un <strong className="text-white">proyecto de migración</strong> para que lo ejecutes en tu Cloud.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 md:py-28 bg-[#1a1a1a]">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
        >
          <motion.a
            href="mailto:info@rafaizquierdo.es?subject=Handshake%20BusinessOS&body=Hola%20Rafael,%0A%0AMe%20interesa%20conocer%20más%20sobre%20BusinessOS.%0A%0A(Cuéntame%20un%20poco%20sobre%20tu%20empresa%20y%20qué%20retos%20tienes)"
            className="btn-bos inline-block"
            variants={fadeInUp}
          >
            <span className="btn-bos__text text-2xl md:text-3xl">Agendar Handshake</span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 text-center">
        <p className="text-gray-500 italic">
          rafaizquierdo.es
        </p>
      </footer>
    </div>
  );
}
