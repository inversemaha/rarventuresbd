import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedSlider } from "@/components/FeaturedSlider";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { SapphireSlider } from "@/components/SapphireSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EliteEstates - Premium Real Estate Developer in Bangladesh</title>
        <meta 
          name="description" 
          content="Discover luxury apartments, penthouses, and architecture spaces in Dhaka's prime locations. 25+ years of excellence in real estate development."
        />
      </Helmet>
      
      <main className="bg-background">
        <Navbar />
        <Hero />
        <FeaturedSlider />
        <Projects />
        <About />
        <SapphireSlider />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
