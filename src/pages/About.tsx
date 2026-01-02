import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { About as AboutComponent } from "@/components/About";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - RAR VenturesBD</title>
        <meta 
          name="description" 
          content="Learn about RAR VenturesBD - Premium real estate developer in Bangladesh with 25+ years of excellence."
        />
      </Helmet>
      
      <main className="bg-background">
        <Navbar />
        <div className="pt-24">
          <AboutComponent />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;