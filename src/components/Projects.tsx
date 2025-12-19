import { motion } from "framer-motion";
import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Skyline Penthouse",
    location: "Gulshan, Dhaka",
    price: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    status: "Ready" as const,
  },
  {
    image: property2,
    title: "Garden Residency",
    location: "Dhanmondi, Dhaka",
    price: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "2,400 sqft",
    status: "Ongoing" as const,
  },
  {
    image: property3,
    title: "Corporate Tower",
    location: "Banani, Dhaka",
    price: "৳45 Lac/Floor",
    beds: 0,
    baths: 4,
    sqft: "5,500 sqft",
    status: "Upcoming" as const,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Signature Showcase
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
              Featured <span className="text-gradient">Properties</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
