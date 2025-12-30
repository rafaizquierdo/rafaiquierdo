import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CV from "@/pages/CV";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToHash } from "./lib/useScrollToHash";
import { motion } from "framer-motion";

// NotFound page component
function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-8xl font-bold text-primary mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          404
        </motion.div>
        
        <h1 className="text-3xl font-bold text-primary mb-6">Página no encontrada</h1>
        
        <p className="text-lg text-gray-600 mb-8 text-justify">
          Lo sentimos, pero la página que buscas no existe. Es posible que hayas seguido un enlace antiguo o que la dirección se haya escrito incorrectamente.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/"
            className="inline-flex items-center justify-center bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Volver a la página principal
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Router() {
  // Handle hash navigation
  useScrollToHash();
  
  // Get current location
  const [location] = useLocation();
  
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:postName" component={BlogPost} />
          <Route path="/cv" component={CV} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  // Set title
  useEffect(() => {
    document.title = "Rafael Izquierdo | Consultor Estratégico";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
