import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";
import profileImage from "@assets/foto cuerpo light.webp";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
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
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
              {/* Imagen en la columna izquierda (visible solo en pantallas grandes) */}
              <motion.div 
                className="hidden lg:block lg:w-1/3 sticky top-32"
                variants={fadeInUp}
              >
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={profileImage} 
                    alt="Rafael Izquierdo" 
                    className="w-full h-auto object-cover" 
                  />
                </motion.div>
              </motion.div>
              
              {/* Contenido en la columna derecha */}
              <motion.div className="lg:w-2/3">
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-primary"
                  variants={fadeInUp}
                >
                  No hay nada más difícil que abrir camino donde no lo hay. Pero tampoco hay nada más gratificante que conseguirlo.
                </motion.h1>
                
                {/* Imagen en pantallas pequeñas */}
                <motion.div 
                  className="lg:hidden mb-8 rounded-xl overflow-hidden shadow-md"
                  variants={fadeInUp}
                >
                  <img 
                    src={profileImage} 
                    alt="Rafael Izquierdo" 
                    className="w-full h-auto object-cover" 
                  />
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-12"
                  variants={fadeInUp}
                >
                  <p className="text-lg md:text-xl font-medium text-amber-600 mb-4">
                    Advertencia: Si esperas alguna solución mágica, no la vas a encontrar. Aquí hablamos de lo que de verdad importa: compartir experiencias, aprender y, si encajamos, ver cómo puedo ayudarte.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-6 text-lg"
                  variants={fadeInUp}
                >
                  <p className="text-justify">
                    En esta web no vas a encontrar un curso, una newsletter, ni una membresía. Solo una invitación para hablar.
                  </p>
                  
                  <p className="text-justify">
                    Soy Rafael Izquierdo, Co-Fundador de V-Vision, y me apasiona ayudar a emprendedores y empresas a transformar ideas en realidades que impacten positivamente en las personas. Lo que busco aquí es conectar, escuchar tus inquietudes y ver si puedo aportar valor a tu proyecto con mi experiencia en el mundo empresarial y tecnológico.
                  </p>
                  
                  <p className="text-justify">
                    Mi trayectoria me ha enseñado que las mejores innovaciones suelen enfrentar la mayor resistencia al cambio. Como le sucedió a Graham Bell con el teléfono, introducir nuevas tecnologías que mejoren la vida de las personas implica superar inercias profundamente arraigadas. Y cuanto más revolucionaria sea la idea, más obstáculos encontrarás en el camino.
                  </p>
                  
                  <p className="text-justify">
                    Si estás buscando un camino directo al éxito sin pasar por el esfuerzo, esta web no es para ti. Si lo que quieres es compartir lo que estás haciendo, aprender y ver cómo podemos avanzar juntos para convertir tu visión en realidad, estás en el lugar correcto.
                  </p>
                  
                  <div className="pt-4">
                    <motion.a 
                      href="mailto:info@rafaizquierdo.es?body=(cuéntame algo de ti y de tu proyecto/idea/problema)"
                      className="inline-flex items-center font-medium text-accent hover:text-accent/80 transition-link"
                      whileHover={{ x: 5 }}
                    >
                      Escríbeme un email y empecemos a hablar
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-gray-200 w-full max-w-4xl mx-auto"></div>
      
      {/* About Section */}
      <About />
      
      <div className="border-t border-gray-200 w-full max-w-4xl mx-auto"></div>
      
      {/* Services Section */}
      <Services />
      
      <div className="border-t border-gray-200 w-full max-w-4xl mx-auto"></div>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      <div className="border-t border-gray-200 w-full max-w-4xl mx-auto"></div>
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}
