import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";

const projects = [
  {
    id: 1,
    title: "EXPERIENCE ROYAL GRANDEUR",
    name: "EliteEstates Cityscape Heights",
    category: "Architecture",
    series: "Sapphire Series",
    location: "Gulshan",
    image: slider1,
  },
  {
    id: 2,
    title: "LUXURY REDEFINED",
    name: "EliteEstates Sunset Residences",
    category: "Interior",
    series: "Premium Collection",
    location: "Banani",
    image: slider2,
  },
  {
    id: 3,
    title: "URBAN ELEGANCE",
    name: "EliteEstates Metro Plaza",
    category: "Mixed-Use",
    series: "Diamond Series",
    location: "Dhanmondi",
    image: slider3,
  },
  {
    id: 4,
    title: "BUSINESS EXCELLENCE",
    name: "EliteEstates Corporate Tower",
    category: "Architecture",
    series: "Platinum Series",
    location: "Motijheel",
    image: slider4,
  },
  {
    id: 5,
    title: "SERENITY AWAITS",
    name: "EliteEstates Garden View",
    category: "Interior",
    series: "Premium Collection",
    location: "Uttara",
    image: slider5,
  },
];

export const FeaturedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];
  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <section className="relative bg-navy py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[80vh] relative">
        {/* Left Content */}
        <div className="lg:w-1/3 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                {currentProject.title}
              </h2>
              <p className="text-lg text-white/90 mb-2">{currentProject.name}</p>
              <p className="text-muted-foreground mb-8">
                {currentProject.category} • {currentProject.series} • {currentProject.location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Left Previous Button - vertically centered */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-white/30 text-white hover:bg-white/10 absolute left-0 top-1/2 -translate-y-1/2 z-20"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Right Slider */}
        <div className="lg:w-2/3 flex items-center gap-4 px-4 lg:px-0 py-8 lg:py-12 overflow-hidden relative">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${currentIndex}-${index}`}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ 
                opacity: 1, 
                scale: index === 0 ? 1 : 0.9, 
                x: 0,
                zIndex: index === 0 ? 10 : 5 - index,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex-shrink-0 ${
                index === 0 
                  ? "w-[60%] lg:w-[50%] h-[500px] lg:h-[600px]" 
                  : "w-[35%] lg:w-[30%] h-[400px] lg:h-[500px]"
              } rounded-lg overflow-hidden shadow-2xl`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-sm text-white/80">
                  {project.category} • {project.location}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Right Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-white/30 text-white hover:bg-white/10 absolute right-0 top-1/2 -translate-y-1/2 z-20"
            aria-label="Next Slide"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
