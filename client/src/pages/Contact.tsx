import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
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
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            variants={fadeInUp}
          >
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                ¿Tienes un proyecto en mente?
              </h2>
              
              <p className="text-lg mb-8 text-justify">
                Puedes escribirme directamente a mi correo electrónico. Si crees que puedo aportar valor a lo que estás construyendo, estaré encantado de hablar contigo.
              </p>
              
              <motion.a 
                href="mailto:info@rafaizquierdo.es?body=(cuéntame algo de ti y de tu proyecto/idea/problema)" 
                className="inline-flex items-center justify-center bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-accent/90 transition-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Escríbeme un email
              </motion.a>
              
              <p className="text-sm text-gray-500 mt-6">
                No comparto tu información con terceros ni envío correos comerciales.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
