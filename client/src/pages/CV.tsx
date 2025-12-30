import { motion } from "framer-motion";
import { Printer, Mail, Linkedin, MapPin } from "lucide-react";

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 print:bg-white print:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handlePrint}
            className="no-print fixed top-24 right-6 z-50 bg-accent text-white px-4 py-2 rounded-lg shadow-md hover:bg-accent/90 transition-colors flex items-center gap-2"
            data-testid="button-print-cv"
          >
            <Printer className="h-5 w-5" />
            Imprimir CV
          </button>

          <div className="p-8 md:p-12 print:p-6">
            {/* Header */}
            <header className="border-b border-gray-200 pb-8 mb-8 print:pb-4 print:mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 print:text-2xl">
                RAFAEL IZQUIERDO BLANCO
              </h1>
              <p className="text-xl text-accent font-medium mb-4 print:text-lg print:mb-2">
                Consultor Estratégico | Startups & PYMES
              </p>
              <p className="text-gray-600 mb-4 print:text-sm print:mb-2">
                Estrategia · Tecnología · Go-to-Market · Operaciones · Financiación · Entornos Regulados
              </p>
              <div className="flex flex-wrap gap-4 text-gray-600 print:text-sm print:gap-2">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Madrid | Disponibilidad nacional e internacional
                </span>
                <a href="mailto:info@rafaizquierdo.es" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  info@rafaizquierdo.es
                </a>
                <a href="https://www.linkedin.com/in/rafaizquierdo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </header>

            {/* Perfil Profesional */}
            <section className="mb-8 print:mb-4">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Perfil Profesional
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify print:text-sm print:mb-2">
                Ingeniero Industrial y Consultor Estratégico con más de 14 años de experiencia combinando consultoría, gestión ejecutiva y dirección de negocio. He trabajado tanto en entornos corporativos internacionales (SAP) como liderando empresas tecnológicas, donde he dirigido la definición de estrategia, optimización de ventas, ejecución operativa, automatización y gestión de financiación pública.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify print:text-sm">
                Aporto una combinación poco habitual de visión estratégica, capacidad analítica y ejecución práctica, con experiencia real en toma de decisiones bajo presión y gestión de clientes, inversores y stakeholders diversos. Especializado en trabajar con startups y pymes que necesitan foco, estructura y resultados.
              </p>
            </section>

            {/* Áreas de Especialización */}
            <section className="mb-8 print:mb-4">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Áreas de Especialización
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:gap-1">
                {[
                  "Consultoría estratégica para startups y pymes",
                  "Go-to-Market y ventas B2B",
                  "Optimización de procesos y operaciones",
                  "Automatización e IA aplicada a negocio",
                  "Gestión de subvenciones y financiación pública",
                  "Trabajo en entornos regulados",
                  "Relación con clientes, inversores y dirección"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700 print:text-sm">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experiencia Profesional */}
            <section className="mb-8 print:mb-4 print:break-inside-avoid">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Experiencia Profesional
              </h2>

              {/* V-Vision */}
              <div className="mb-6 print:mb-4">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-primary print:text-base">
                    Director General (CEO) – V-Vision
                  </h3>
                  <span className="text-gray-500 text-sm">2017 – Actualidad</span>
                </div>
                <p className="text-accent font-medium mb-3 print:text-sm print:mb-2">INNOTEC VISION AVANZADA XR, SL | HealthTech / Software</p>
                <p className="text-gray-700 mb-3 text-justify print:text-sm print:mb-2">
                  Startup tecnológica especializada en soluciones software para el sector salud.
                </p>
                <ul className="space-y-1 text-gray-700 mb-4 print:text-sm print:space-y-0 print:mb-2">
                  {[
                    "Lidero la definición de estrategia, modelo de negocio y propuesta de valor.",
                    "Acompaño el desarrollo de producto y alineándolo con necesidades reales del mercado.",
                    "Diseño y ejecuto el Go-to-Market B2B, trabajando directamente en ventas.",
                    "He captado financiación privada (pre-seed y seed) con inversores nacionales e internacionales.",
                    "He obtenido más de 300.000 € de subvenciones públicas, destacando un CDTI NEOTEC.",
                    "Lideré la obtención de la licencia de fabricante de producto sanitario e implantando ISO 13485 y recientemente la hemos revalidado.",
                    "He gestionado situaciones críticas de tesorería y negociando soluciones financieras para garantizar la continuidad de la empresa.",
                    "Estoy coordinando equipos pequeños y multidisciplinares en contextos de alta exigencia."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-accent print:pl-3">
                  <p className="font-semibold text-primary mb-2 print:text-sm">Logros clave:</p>
                  <ul className="space-y-1 text-gray-700 print:text-sm print:space-y-0">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Captación de inversión privada total de 300.000€ en fases de constitución, pre-seed y seed por parte de fondos de inversión y business angels.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Resolución de una crisis de liquidez mediante la negociación de un aval de 60.000 € y reestructuración de pagos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Obtención de licencia sanitaria en una empresa de 3 personas, sin experiencia previa y en contexto COVID y su renovación en diciembre de 2025.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SAP */}
              <div className="mb-6 print:mb-4 print:break-inside-avoid">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-primary print:text-base">
                    Consultor Tecnológico / Innovation Lead – SAP España
                  </h3>
                  <span className="text-gray-500 text-sm">2011 – 2018</span>
                </div>
                <ul className="space-y-1 text-gray-700 print:text-sm print:space-y-0">
                  {[
                    "Trabajo en entornos corporativos internacionales con clientes enterprise.",
                    "Resolución de incidencias críticas y coordinación con equipos globales EMEA.",
                    "Participación en iniciativas de innovación y mejora continua.",
                    "Elaboración de documentación técnica y optimización de procesos internos.",
                    "Mentoría a nuevos empleados y liderazgo en comunicación interna."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perito */}
              <div className="print:break-inside-avoid">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-primary print:text-base">
                    Perito Técnico de Vehículos – Actividad independiente
                  </h3>
                </div>
                <ul className="space-y-1 text-gray-700 print:text-sm print:space-y-0">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Elaboración de informes periciales técnicos de vehículos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Análisis de averías, defectos y responsabilidades técnicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Comparecencia en juicio para defensa técnica de informes.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Tipos de Proyectos */}
            <section className="mb-8 print:mb-4 print:break-inside-avoid">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Tipos de Proyectos que Puedo Liderar
              </h2>
              <ul className="space-y-2 text-gray-700 print:text-sm print:space-y-1">
                {[
                  "Diseño y ejecución de planes de crecimiento para startups y PYMES tecnológicas.",
                  "Proyectos de optimización de procesos, automatización operativa e implementación de herramientas de negocio con impacto directo en resultados.",
                  "Gestión integral de convocatorias de financiación pública y estrategias de captación de inversión.",
                  "Liderazgo de proyectos de Go-to-Market, estrategia comercial B2B y desarrollo de producto orientado a cliente.",
                  "Proyectos de cumplimiento regulatorio (ISO, certificaciones sanitarias) en contextos de alta exigencia."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Formación */}
            <section className="mb-8 print:mb-4 print:break-inside-avoid">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Formación
              </h2>
              <ul className="space-y-2 text-gray-700 print:text-sm print:space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Ingeniero Industrial</strong>, Universidad Politécnica de Madrid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Máster en Ingeniería de Vehículos Híbridos y Eléctricos</strong>, INSIA - Universidad Politécnica de Madrid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Máster en Emprendimiento</strong>, Deusto Business School (proyecto ganador)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>SaaS Sales</strong> – Winning by Design</span>
                </li>
              </ul>
            </section>

            {/* Competencias y Herramientas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 print:gap-4 print:mb-4">
              {/* Competencias Clave */}
              <section className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                  Competencias Clave
                </h2>
                <ul className="space-y-1 text-gray-700 print:text-sm print:space-y-0">
                  {[
                    "Análisis estratégico y toma de decisiones",
                    "Estructuración de problemas complejos",
                    "Ventas consultivas B2B",
                    "Automatización y mejora de procesos",
                    "Gestión de clientes y stakeholders",
                    "Comunicación clara con perfiles técnicos y no técnicos",
                    "Trabajo en entornos de incertidumbre"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Herramientas */}
              <section className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                  Herramientas
                </h2>
                <div className="space-y-2 text-gray-700 print:text-sm print:space-y-1">
                  <p><strong>CRM & Marketing:</strong> HubSpot, ActiveCampaign</p>
                  <p><strong>Automatización:</strong> Zapier, Airtable</p>
                  <p><strong>IA aplicada:</strong> ChatGPT API, Replit</p>
                  <p><strong>Documentación:</strong> Confluence</p>
                  <p><strong>Visual:</strong> Canva</p>
                </div>
              </section>
            </div>

            {/* Idiomas */}
            <section className="print:break-inside-avoid">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2 print:text-lg print:mb-2">
                Idiomas
              </h2>
              <p className="text-gray-700 print:text-sm">
                <strong>Inglés:</strong> Nivel avanzado (entornos internacionales de negocio, inversión y consultoría)
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
