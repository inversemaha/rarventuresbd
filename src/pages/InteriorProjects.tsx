import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Send, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider5 from "@/assets/slider-5.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const interiorProjects = [
  {
    id: 1,
    slug: "luxury-penthouse",
    title: "EliteEstates Luxury Penthouse",
    location: "Gulshan, Dhaka",
    price: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "2,800 sqft",
    image: slider1,
    status: "Ready" as const,
    priceDisplay: "৳2.5 Cr",
  },
  {
    id: 2,
    slug: "modern-apartment",
    title: "EliteEstates Modern Apartment",
    location: "Dhanmondi, Dhaka",
    price: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "2,200 sqft",
    image: slider2,
    status: "Ongoing" as const,
    priceDisplay: "৳1.8 Cr",
  },
  {
    id: 3,
    slug: "family-villa",
    title: "EliteEstates Family Villa",
    location: "Uttara, Dhaka",
    price: "৳3.2 Cr",
    beds: 5,
    baths: 4,
    sqft: "3,500 sqft",
    image: slider5,
    status: "Upcoming" as const,
    priceDisplay: "৳3.2 Cr",
  },
  {
    id: 4,
    slug: "cozy-duplex",
    title: "EliteEstates Cozy Duplex",
    location: "Banani, Dhaka",
    price: "৳1.5 Cr",
    beds: 3,
    baths: 2,
    sqft: "2,000 sqft",
    image: property1,
    status: "Ready" as const,
    priceDisplay: "৳1.5 Cr",
  },
  {
    id: 5,
    slug: "executive-suite",
    title: "EliteEstates Executive Suite",
    location: "Wari, Dhaka",
    price: "৳2.1 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,500 sqft",
    image: property2,
    status: "Ready" as const,
    priceDisplay: "৳2.1 Cr",
  },
  {
    id: 6,
    slug: "garden-apartment",
    title: "EliteEstates Garden Apartment",
    location: "Mirpur, Dhaka",
    price: "৳1.9 Cr",
    beds: 4,
    baths: 2,
    sqft: "2,300 sqft",
    image: property3,
    status: "Ongoing" as const,
    priceDisplay: "৳1.9 Cr",
  },
];

const InteriorProjects = () => {
  return (
    <>
      <Helmet>
        <title>Interior Projects - EliteEstates</title>
        <meta 
          name="description" 
          content="Discover our exclusive interior design projects in Dhaka. Premium residential spaces designed for comfort and luxury."
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
                Premium <span className="text-gradient">Interior Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience luxury living in our meticulously designed interior spaces that combine comfort, style, and modern amenities.
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
                  <Link to={`/interior/${project.slug}`}>
                    <PropertyCard {...project} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" 
            }} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Ready to Find Your Perfect <span className="text-gradient">Interior Space</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our interior design specialists and discover spaces that reflect your personal style and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" className="px-8 py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Get Interior Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default InteriorProjects;