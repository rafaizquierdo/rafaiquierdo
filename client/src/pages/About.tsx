import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const skills = [
    "Transformación digital",
    "Estrategia empresarial",
    "Innovación",
    "Sector salud",
    "Tecnología",
    "Automatización",
    "Ventas",
    "IA generativa"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-primary"
            variants={fadeInUp}
          >
            ¿Quién soy?
          </motion.h2>
          
          <div className="space-y-8">
            {/* Badges/Roles en la parte superior */}
            <motion.div
              className="flex flex-wrap gap-4 items-center justify-start"
              variants={fadeInUp}
            >
              <div className="flex items-center text-primary px-4 py-2 bg-gray-50 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Ingeniero
              </div>
              <div className="flex items-center text-primary px-4 py-2 bg-gray-50 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Emprendedor
              </div>
              <div className="flex items-center text-primary px-4 py-2 bg-gray-50 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                Co-Fundador de V-Vision
              </div>
            </motion.div>
            
            {/* Contenido principal */}
            <motion.div 
              className="space-y-6 text-lg"
              variants={fadeInUp}
            >
              <p className="text-justify">
                Soy ingeniero, emprendedor y Co-Fundador de V-Vision, una empresa que hace realidad soluciones innovadoras en el ámbito de la salud visual.
              </p>
              
              <p className="text-justify">
                A lo largo de mi carrera, he recorrido el exigente proceso de transformar una idea en un negocio que genera ingresos. He levantado rondas de inversión, conseguido financiación de fondos y business angels, y he recibido subvenciones como Neotec.
              </p>
              
              <p className="text-justify">
                No me vas a encontrar aquí vendiendo recetas mágicas, ni dándote consejos no solicitados. Lo que sé hacer lo hago con pasión, y lo que no, lo reconozco sin rodeos.
              </p>
              
              <p className="text-justify">
                Mi objetivo es ayudar a aquellos que se atreven a desafiar la inercia y el miedo al cambio.
              </p>
              
              <div className="pt-6">
                <div className="inline-flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-primary rounded-full text-sm"
                      whileHover={{ y: -2, backgroundColor: 'rgb(243, 244, 246)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}