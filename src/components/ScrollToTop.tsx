import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Instant scroll for immediate effect
    });
  }, [pathname]);

  // Also ensure scroll to top on component mount (page reload)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};