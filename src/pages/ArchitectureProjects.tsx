import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

import slider1 from "@/assets/slider-1.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import property3 from "@/assets/property-3.jpg";

const architectureProjects = [
  {
    id: 1,
    title: "EliteEstates Corporate Tower",
    location: "Motijheel, Dhaka",
    price: "৳5.0 Cr",
    beds: 0,
    baths: 4,
    sqft: "5,000 sqft",
    image: slider4,
    status: "Ready" as const,
  },
  {
    id: 2,
    title: "EliteEstates Metro Plaza",
    location: "Dhanmondi, Dhaka",
    price: "৳3.5 Cr",
    beds: 0,
    baths: 2,
    sqft: "3,200 sqft",
    image: slider3,
    status: "Ongoing" as const,
  },
  {
    id: 3,
    title: "EliteEstates Business Hub",
    location: "Gulshan, Dhaka",
    price: "৳8.0 Cr",
    beds: 0,
    baths: 6,
    sqft: "8,000 sqft",
    image: slider1,
    status: "Upcoming" as const,
  },
  {
    id: 4,
    title: "EliteEstates Trade Center",
    location: "Banani, Dhaka",
    price: "৳4.2 Cr",
    beds: 0,
    baths: 3,
    sqft: "4,500 sqft",
    image: property3,
    status: "Ready" as const,
  },
];

const ArchitectureProjects = () => {
  return (
    <>
      <Helmet>
        <title>Architecture Projects - EliteEstates</title>
        <meta 
          name="description" 
          content="Explore our premium architecture projects in Dhaka. Modern architectural spaces and business centers designed for success."
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-navy">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Architecture Projects
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Premium <span className="text-gradient">Business Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elevate your business with our state-of-the-art architectural spaces designed for productivity and success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {architectureProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PropertyCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ArchitectureProjects;
