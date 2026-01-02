import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CategoryProvider } from "@/contexts/CategoryContext";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";

const queryClient = new QueryClient();


const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </CategoryProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;