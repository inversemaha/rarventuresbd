import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/sonner";
import { Calendar, Clock, MapPin, Phone, Mail, User, Building2, Home, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const visitTypes = [
  { id: "interior", label: "Interior Projects", icon: Home },
  { id: "architecture", label: "Architecture Projects", icon: Building2 },
  { id: "general", label: "General Consultation", icon: User },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];


const BookVisit = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // <-- Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // <-- Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // <-- Replace with your EmailJS public key
      );
      toast.success("Your visit request has been sent! We will contact you soon.");
      formRef.current.reset();
      setSelectedType("");
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      toast.error("Failed to send your request. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Visit - EliteEstates</title>
        <meta 
          name="description" 
          content="Schedule a visit to our premium properties and projects. Book your appointment with our expert consultants."
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" 
            }} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Schedule Your Visit
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Book a <span className="text-gradient">Visit</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Schedule a personalized visit to explore our premium properties and discuss your real estate needs with our expert consultants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-8"
                  >
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                      Visit Information
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Our Office</h4>
                          <p className="text-muted-foreground text-sm">
                            House 123, Road 15<br />
                            Dhanmondi, Dhaka-1209
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                          <p className="text-muted-foreground text-sm">
                            Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                            Friday: 9:00 AM - 5:00 PM<br />
                            Saturday: Closed
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Contact</h4>
                          <p className="text-muted-foreground text-sm">
                            +880 1234 567890<br />
                            info@eliteestates.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-card p-8 rounded-2xl border border-border/50">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                        Schedule Your Visit
                      </h3>
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Full Name *
                            </label>
                            <Input name="user_name" placeholder="Enter your full name" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Phone Number *
                            </label>
                            <Input name="user_phone" placeholder="Enter your phone number" required />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input name="user_email" type="email" placeholder="Enter your email address" required />
                        </div>

                        {/* Visit Type Selection */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-4">
                            Visit Type *
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {visitTypes.map((type) => (
                              <div key={type.id}>
                                <input
                                  type="radio"
                                  id={type.id}
                                  name="visit_type"
                                  value={type.label}
                                  checked={selectedType === type.id}
                                  onChange={(e) => setSelectedType(type.id)}
                                  className="sr-only"
                                  required
                                />
                                <label
                                  htmlFor={type.id}
                                  className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                    selectedType === type.id
                                      ? 'border-primary bg-primary/10'
                                      : 'border-border hover:border-primary/50'
                                  }`}
                                >
                                  <div className="flex flex-col items-center text-center">
                                    <type.icon className={`w-8 h-8 mb-2 ${
                                      selectedType === type.id ? 'text-primary' : 'text-muted-foreground'
                                    }`} />
                                    <span className={`text-sm font-medium ${
                                      selectedType === type.id ? 'text-primary' : 'text-foreground'
                                    }`}>
                                      {type.label}
                                    </span>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Date and Time Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Preferred Date *
                            </label>
                            <Input 
                              type="date" 
                              name="visit_date"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              required 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Preferred Time *
                            </label>
                            <select
                              name="visit_time"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="" disabled>Select time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Additional Requirements */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Additional Requirements (Optional)
                          </label>
                          <Textarea 
                            name="requirements"
                            placeholder="Please share any specific requirements or questions..."
                            className="min-h-[120px]"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button 
                          type="submit" 
                          variant="gold" 
                          size="lg" 
                          className="w-full"
                          disabled={loading}
                        >
                          <Send className="w-5 h-5 mr-2" />
                          {loading ? "Sending..." : "Schedule Visit"}
                        </Button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Why Visit <span className="text-gradient">EliteEstates</span>?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: User,
                  title: "Expert Consultation",
                  description: "Get personalized advice from our experienced real estate consultants"
                },
                {
                  icon: Building2,
                  title: "Property Tours",
                  description: "Experience our premium properties firsthand with guided tours"
                },
                {
                  icon: Mail,
                  title: "Tailored Solutions",
                  description: "Receive customized recommendations based on your specific needs"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-card rounded-xl border border-border/50"
                >
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
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

export default BookVisit;