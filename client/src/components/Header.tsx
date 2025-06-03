import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper function to get correct navigation URL
  const getNavUrl = (section: string) => {
    if (location === "/") {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  return (
    <header
      className={cn(
        "fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300",
        scrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href={getNavUrl("home")}
            className="text-xl font-semibold text-primary hover:text-accent transition-link"
          >
            Rafael Izquierdo
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden" id="menuToggle">
            <button
              className="text-primary hover:text-accent focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href={getNavUrl("home")}
              className="text-primary hover:text-accent font-medium transition-link"
            >
              Inicio
            </a>
            <a
              href={getNavUrl("about")}
              className="text-primary hover:text-accent font-medium transition-link"
            >
              Sobre Mí
            </a>
            <a
              href={getNavUrl("services")}
              className="text-primary hover:text-accent font-medium transition-link"
            >
              Servicios
            </a>
            <a
              href={getNavUrl("testimonials")}
              className="text-primary hover:text-accent font-medium transition-link"
            >
              Testimonios
            </a>
            <Link 
              href="/blog"
              className="text-primary hover:text-accent font-medium transition-link"
            >
              Blog
            </Link>
            <a
              href={getNavUrl("contact")}
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-link"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-2 bg-white border-t">
              <a
                href={getNavUrl("home")}
                onClick={closeMenu}
                className="block py-2 text-primary hover:text-accent font-medium transition-link"
              >
                Inicio
              </a>
              <a
                href={getNavUrl("about")}
                onClick={closeMenu}
                className="block py-2 text-primary hover:text-accent font-medium transition-link"
              >
                Sobre Mí
              </a>
              <a
                href={getNavUrl("services")}
                onClick={closeMenu}
                className="block py-2 text-primary hover:text-accent font-medium transition-link"
              >
                Servicios
              </a>
              <a
                href={getNavUrl("testimonials")}
                onClick={closeMenu}
                className="block py-2 text-primary hover:text-accent font-medium transition-link"
              >
                Testimonios
              </a>
              <Link 
                href="/blog"
                onClick={closeMenu}
                className="block py-2 text-primary hover:text-accent font-medium transition-link"
              >
                Blog
              </Link>
              <a
                href={getNavUrl("contact")}
                onClick={closeMenu}
                className="block py-2 text-accent font-medium transition-link"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
