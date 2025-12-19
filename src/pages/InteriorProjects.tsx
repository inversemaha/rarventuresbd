import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider5 from "@/assets/slider-5.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const interiorProjects = [
  {
    id: 1,
    title: "EliteEstates Sunset Residences",
    location: "Banani, Dhaka",
    price: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "2,400 sqft",
    image: slider2,
    status: "Ready" as const,
  },
  {
    id: 2,
    title: "EliteEstates Garden View",
    location: "Uttara, Dhaka",
    price: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800 sqft",
    image: slider5,
    status: "Ongoing" as const,
  },
  {
    id: 3,
    title: "EliteEstates Lily-An Tower",
    location: "Lalmatia, Dhaka",
    price: "৳2.2 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,100 sqft",
    image: slider1,
    status: "Upcoming" as const,
  },
  {
    id: 4,
    title: "EliteEstates Premium Heights",
    location: "Gulshan, Dhaka",
    price: "৳3.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "2,800 sqft",
    image: property1,
    status: "Ready" as const,
  },
  {
    id: 5,
    title: "EliteEstates MH Heights",
    location: "Mohammadpur, Dhaka",
    price: "৳1.5 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,600 sqft",
    image: property2,
    status: "Ongoing" as const,
  },
  {
    id: 6,
    title: "EliteEstates Aziz Residences",
    location: "Uttara, Dhaka",
    price: "৳2.0 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,000 sqft",
    image: slider3,
    status: "Upcoming" as const,
  },
];

const InteriorProjects = () => {
  return (
    <>
      <Helmet>
        <title>Interior Projects - EliteEstates</title>
        <meta 
          name="description" 
          content="Explore our collection of luxury interior projects in Dhaka's prime locations. Premium interior designs and spaces designed for modern living."
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
                Interior Projects
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Luxury <span className="text-gradient">Living Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our premium interior projects designed for comfort, elegance, and modern lifestyle in Dhaka's most sought-after locations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorProjects.map((project, index) => (
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

export default InteriorProjects;
