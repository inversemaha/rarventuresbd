import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CategoryProvider } from "@/contexts/CategoryContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InteriorProjects from "./pages/InteriorProjects";
import ArchitectureProjects from "./pages/ArchitectureProjects";
import Landowner from "./pages/Landowner";
import PropertyDetail from "./pages/PropertyDetail";
import InteriorPropertyDetail from "./pages/InteriorPropertyDetail";
import ArchitecturePropertyDetail from "./pages/ArchitecturePropertyDetail";
import Properties from "./pages/Properties";
import BookVisit from "./pages/BookVisit";

const queryClient = new QueryClient();


const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/projects/interior" element={<InteriorProjects />} />
              <Route path="/projects/architecture" element={<ArchitectureProjects />} />
              <Route path="/project/:slug" element={<PropertyDetail />} />
              <Route path="/interior/:slug" element={<InteriorPropertyDetail />} />
              <Route path="/architecture/:slug" element={<ArchitecturePropertyDetail />} />
              <Route path="/landowner" element={<Landowner />} />
              <Route path="/book-visit" element={<BookVisit />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </CategoryProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;