import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedLayout } from "@/components/AnimatedLayout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import InteriorProjects from "@/pages/InteriorProjects";
import ArchitectureProjects from "@/pages/ArchitectureProjects";
import Landowner from "@/pages/Landowner";
import PropertyDetail from "@/pages/PropertyDetail";
import InteriorPropertyDetail from "@/pages/InteriorPropertyDetail";
import ArchitecturePropertyDetail from "@/pages/ArchitecturePropertyDetail";
import Properties from "@/pages/Properties";
import BookVisit from "@/pages/BookVisit";
import NotFound from "@/pages/NotFound";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <AnimatedLayout>
              <Index />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <AnimatedLayout>
              <About />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <AnimatedLayout>
              <Contact />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/properties" 
          element={
            <AnimatedLayout>
              <Properties />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/projects/interior" 
          element={
            <AnimatedLayout>
              <InteriorProjects />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/projects/architecture" 
          element={
            <AnimatedLayout>
              <ArchitectureProjects />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/project/:slug" 
          element={
            <AnimatedLayout>
              <PropertyDetail />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/interior/:slug" 
          element={
            <AnimatedLayout>
              <InteriorPropertyDetail />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/architecture/:slug" 
          element={
            <AnimatedLayout>
              <ArchitecturePropertyDetail />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/landowner" 
          element={
            <AnimatedLayout>
              <Landowner />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="/book-visit" 
          element={
            <AnimatedLayout>
              <BookVisit />
            </AnimatedLayout>
          } 
        />
        <Route 
          path="*" 
          element={
            <AnimatedLayout>
              <NotFound />
            </AnimatedLayout>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};