import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Secure Partnership",
    description: "Legal protection and transparent agreements for your land investment.",
  },
  {
    icon: TrendingUp,
    title: "Maximum Returns",
    description: "Optimized development plans to maximize your property's value.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "25+ years of experience in real estate development.",
  },
  {
    icon: Handshake,
    title: "Fair Profit Sharing",
    description: "Equitable distribution of profits from the development.",
  },
];

const process = [
  "Initial Consultation & Land Assessment",
  "Feasibility Study & Valuation",
  "Partnership Agreement",
  "Project Planning & Approval",
  "Construction & Development",
  "Profit Distribution",
];

const Landowner = () => {
  return (
    <>
      <Helmet>
        <title>Landowner Partnership - EliteEstates</title>
        <meta 
          name="description" 
          content="Partner with EliteEstates for your land development. We offer secure, profitable partnerships for landowners in Dhaka."
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
                <Handshake className="w-4 h-4" />
                Landowner Partnership
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Partner With <span className="text-gradient">EliteEstates</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your land into a premium development with Bangladesh's most trusted real estate developer. 
                We handle everything while you reap the rewards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the benefits of working with a trusted developer who values your investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Our Partnership Process
                </h2>
                <p className="text-muted-foreground mb-8">
                  A transparent, step-by-step approach to turning your land into a profitable venture.
                </p>
                <ul className="space-y-4">
                  {process.map((step, index) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-2xl font-serif font-bold mb-2">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and our team will contact you within 24 hours.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Input placeholder="Land Location" />
                  <Input placeholder="Land Size (in Katha)" />
                  <Textarea placeholder="Tell us about your land and expectations..." rows={4} />
                  <Button variant="gold" className="w-full group">
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Landowner;
