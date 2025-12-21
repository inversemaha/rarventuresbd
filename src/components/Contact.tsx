import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["House 42, Road 11", "Banani, Dhaka 1213"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+880 1234 567 890", "+880 9876 543 210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@eliteestates.bd", "sales@eliteestates.bd"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sat - Thu: 10AM - 7PM", "Friday: Closed"],
  },
];

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // <-- Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // <-- Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // <-- Replace with your EmailJS public key
      );
      toast.success("Message sent! We'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 rounded-l-[100px] hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Let's Start Your
              <br />
              <span className="text-gradient">Property Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Whether you're looking for your dream home or a lucrative investment opportunity, 
              our expert team is here to guide you every step of the way.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-elevated"
          >
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
              Send Us a Message
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input name="user_name" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input name="user_phone" placeholder="+880 1XXX XXX XXX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input name="user_email" type="email" placeholder="john@example.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Interested In
                </label>
                <Input name="interest" placeholder="e.g., Interior, Architecture, Investment" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                  required
                />
              </div>

              <Button 
                variant="gold" 
                size="lg" 
                className="w-full group"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
