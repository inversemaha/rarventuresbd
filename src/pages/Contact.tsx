import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Contact as ContactComponent } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - RAR VenturesBD</title>
        <meta 
          name="description" 
          content="Get in touch with RAR VenturesBD - Contact us for premium real estate solutions in Bangladesh."
        />
      </Helmet>
      
      <main className="bg-background">
        <Navbar />
        <div className="pt-24">
          <ContactComponent />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;