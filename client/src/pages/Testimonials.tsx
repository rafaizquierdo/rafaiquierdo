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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
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
              Lo que dicen sobre mí
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl font-bold">
                    GK
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <svg className="h-5 w-5 text-accent inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 text-justify">
                    "I had the pleasure of working with Rafa when managing an acceleration program focused on extended reality. 
                    What sets Rafa apart is his respect for those he collaborates with, be it employees, investors, or peers. Additionally, his remarkable ability to navigate challenging situations while maintaining composure and focus, along with his willingness to adapt as needed.
                    Rafa's openness to new ideas and experiences not only facilitates his personal growth but also enables him to build enduring connections. 
                    He is a strong asset, and it's simply enjoyable and beneficial to work with him. It was a privilege to work alongside such a dedicated and positive person."
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary">Giovanni Khoury</h4>
                    <p className="text-gray-500">Startup Wise Guys</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Puedes encontrarme en las siguientes redes sociales:
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/rafaizquierdo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent transition-link"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://x.com/Rafa164"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent transition-link"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.09 10.09 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}