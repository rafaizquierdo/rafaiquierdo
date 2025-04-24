import { useEffect } from "react";
import { Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToHash } from "./lib/useScrollToHash";

function Router() {
  // Handle hash navigation
  useScrollToHash();
  
  return (
    <>
      <Header />
      <main>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </main>
      <Footer />
    </>
  );
}

function App() {
  // Set title
  useEffect(() => {
    document.title = "Rafael Izquierdo | Co-Fundador de V-Vision";
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
