import { useEffect, useCallback } from "react";
import { useLocation } from "wouter";

export function useScrollToHash() {
  const [location] = useLocation();

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  }, []);

  // Handle initial hash on page load
  useEffect(() => {
    if (location.includes("#")) {
      const hash = location.split("#")[1];
      if (hash) {
        setTimeout(() => scrollToElement(hash), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, scrollToElement]);

  return scrollToElement;
}
