import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";

const sapphireProjects = [
  {
    id: 1,
    name: "EliteEstates Aziz Residences",
    status: "Upcoming",
    location: "Uttara",
    image: slider1,
  },
  {
    id: 2,
    name: "EliteEstates MH Heights",
    status: "Upcoming",
    location: "Mohammadpur",
    image: slider2,
  },
  {
    id: 3,
    name: "EliteEstates Tower",
    status: "Upcoming",
    location: "Tejgaon",
    image: slider3,
  },
  {
    id: 4,
    name: "EliteEstates Lily-An Tower",
    status: "Ongoing",
    location: "Lalmatia",
    image: slider4,
  },
  {
    id: 5,
    name: "EliteEstates Bellinda",
    status: "Ongoing",
    location: "Banani",
    image: slider5,
  },
];

export const SapphireSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % sapphireProjects.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + sapphireProjects.length) % sapphireProjects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % sapphireProjects.length;
      visible.push(sapphireProjects[index]);
    }
    return visible;
  };

  return (
    <section className="bg-navy py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider mb-4">
            SAPPHIRE
            <span className="block text-lg font-sans tracking-[0.5em] text-white/60 mt-2">
              SERIES
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            EliteEstates' Sapphire Series represents our most luxurious and iconic projects in the most popular and sought-after locations.
            Experience elegance and comfort with our bold designs, top-tier construction, and premium finishes.
          </p>
          <Button
            variant="outline"
            className="mt-8 rounded-full border-white/30 text-white hover:bg-white/10 gap-2"
          >
            Explore
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="flex items-end gap-4 px-4 overflow-hidden">
          {getVisibleProjects().map((project, index) => (
            <motion.div
              key={`${project.id}-${startIndex}-${index}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[500px] rounded-t-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Status Badge */}
              <div className={`absolute top-4 left-4 flex items-center gap-2 ${
                project.status === "Ongoing" ? "text-primary" : "text-green-400"
              }`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-white/70">
                  {project.status} • {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
