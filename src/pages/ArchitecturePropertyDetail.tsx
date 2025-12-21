import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  MapPin, 
  Building2, 
  Ruler, 
  Layers, 
  SquareStack, 
  Car, 
  ArrowUp, 
  Footprints, 
  Calendar, 
  PenTool,
  Heart,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Send
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Architecture projects data with full details
const architectureProjectsData: Record<string, ProjectDetails> = {
  "corporate-tower": {
    id: "corporate-tower",
    title: "EliteEstates Corporate Tower",
    type: "Architecture",
    category: "Grade A Office",
    location: "Motijheel, Dhaka",
    address: "Plot 10, Commercial Area, Motijheel, Dhaka-1000",
    heroImage: slider4,
    status: "Ready",
    price: "৳5.0 Cr",
    beds: 0,
    baths: 4,
    sqft: "5,000 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 10, Commercial Area, Motijheel" },
      { icon: "type", label: "Type", value: "Architecture Building" },
      { icon: "land", label: "Land Area", value: "15.00 Katha" },
      { icon: "levels", label: "Levels", value: "20 Storied (B3+G+19)" },
      { icon: "units", label: "Commercial Unit Size", value: "1,000 - 8,000 sft" },
      { icon: "totalUnits", label: "Units", value: "50 Units" },
      { icon: "parking", label: "Parkings", value: "150" },
      { icon: "elevator", label: "Elevator", value: "06" },
      { icon: "staircase", label: "Staircase", value: "04 with Fire Door" },
      { icon: "handover", label: "Handover", value: "Ready Now" },
      { icon: "consultant", label: "Architect", value: "Corporate Architects" },
    ],
    floorPlans: [
      { name: "All Floors", status: "Completed" },
    ],
    gallery: [slider4, slider1, slider2, property3, property1, slider5],
    mapLocation: { lat: 23.7286, lng: 90.4185 },
  },
  "metro-plaza": {
    id: "metro-plaza",
    title: "EliteEstates Metro Plaza",
    type: "Architecture",
    category: "Mixed Use",
    location: "Dhanmondi, Dhaka",
    address: "House 25, Road 27, Dhanmondi, Dhaka-1209",
    heroImage: slider3,
    status: "Ongoing",
    price: "৳3.5 Cr",
    beds: 0,
    baths: 2,
    sqft: "3,200 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "House 25, Road 27, Dhanmondi" },
      { icon: "type", label: "Type", value: "Architecture Complex" },
      { icon: "land", label: "Land Area", value: "10.00 Katha" },
      { icon: "levels", label: "Levels", value: "12 Storied (B2+G+11)" },
      { icon: "units", label: "Commercial Unit Size", value: "800 - 4,000 sft" },
      { icon: "totalUnits", label: "Units", value: "35 Units" },
      { icon: "parking", label: "Parkings", value: "60" },
      { icon: "elevator", label: "Elevator", value: "03" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "September 2025" },
      { icon: "consultant", label: "Architect", value: "Metro Design Studio" },
    ],
    floorPlans: [
      { name: "Basement 01-02", status: "Completed" },
      { name: "Ground Floor", status: "Completed" },
      { name: "Level 01-06", status: "In Progress" },
      { name: "Level 07-11", status: "Upcoming" },
    ],
    gallery: [slider3, slider4, property3, slider1, property2, slider5],
    mapLocation: { lat: 23.7461, lng: 90.3742 },
  },
  "business-hub": {
    id: "business-hub",
    title: "EliteEstates Business Hub",
    type: "Architecture",
    category: "Sapphire Series",
    location: "Gulshan, Dhaka",
    address: "Plot 78, Gulshan Avenue, Gulshan-1, Dhaka-1212",
    heroImage: slider1,
    status: "Upcoming",
    price: "৳8.0 Cr",
    beds: 0,
    baths: 6,
    sqft: "8,000 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 78, Gulshan Avenue, Gulshan-1" },
      { icon: "type", label: "Type", value: "Premium Architecture Building" },
      { icon: "land", label: "Land Area", value: "20.00 Katha" },
      { icon: "levels", label: "Levels", value: "25 Storied (B4+G+24)" },
      { icon: "units", label: "Commercial Unit Size", value: "2,000 - 10,000 sft" },
      { icon: "totalUnits", label: "Units", value: "60 Units" },
      { icon: "parking", label: "Parkings", value: "200" },
      { icon: "elevator", label: "Elevator", value: "08" },
      { icon: "staircase", label: "Staircase", value: "04 with Fire Door" },
      { icon: "handover", label: "Handover", value: "2028" },
      { icon: "consultant", label: "Architect", value: "Global Architects" },
    ],
    floorPlans: [
      { name: "Project Announcement", status: "Completed" },
      { name: "Foundation", status: "Upcoming" },
      { name: "All Floors", status: "Upcoming" },
    ],
    gallery: [slider1, slider4, slider2, property3, property1, property2],
    mapLocation: { lat: 23.7808, lng: 90.4165 },
  },
  "trade-center": {
    id: "trade-center",
    title: "EliteEstates Trade Center",
    type: "Architecture",
    category: "Retail & Office",
    location: "Banani, Dhaka",
    address: "Plot 55, Road 11, Block F, Banani, Dhaka-1213",
    heroImage: property3,
    status: "Ready",
    price: "৳4.2 Cr",
    beds: 0,
    baths: 3,
    sqft: "4,500 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 55, Road 11, Block F, Banani" },
      { icon: "type", label: "Type", value: "Trade Architecture" },
      { icon: "land", label: "Land Area", value: "8.50 Katha" },
      { icon: "levels", label: "Levels", value: "10 Storied (B1+G+9)" },
      { icon: "units", label: "Commercial Unit Size", value: "500 - 5,000 sft" },
      { icon: "totalUnits", label: "Units", value: "40 Units" },
      { icon: "parking", label: "Parkings", value: "45" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "Ready Now" },
      { icon: "consultant", label: "Architect", value: "Trade Design Ltd." },
    ],
    floorPlans: [
      { name: "All Floors", status: "Completed" },
    ],
    gallery: [property3, slider4, slider1, slider2, property1, slider5],
    mapLocation: { lat: 23.7937, lng: 90.4066 },
  },
  "innovation-center": {
    id: "innovation-center",
    title: "EliteEstates Innovation Center",
    type: "Architecture",
    category: "Innovation Hub",
    location: "Tejgaon, Dhaka",
    address: "Plot 45, Industrial Area, Tejgaon, Dhaka-1208",
    heroImage: slider2,
    status: "Upcoming",
    price: "৳6.5 Cr",
    beds: 0,
    baths: 8,
    sqft: "12,000 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 45, Industrial Area, Tejgaon" },
      { icon: "type", label: "Type", value: "Innovation Architecture" },
      { icon: "land", label: "Land Area", value: "25.00 Katha" },
      { icon: "levels", label: "Levels", value: "15 Storied (B2+G+14)" },
      { icon: "units", label: "Commercial Unit Size", value: "3,000 - 15,000 sft" },
      { icon: "totalUnits", label: "Units", value: "30 Units" },
      { icon: "parking", label: "Parkings", value: "100" },
      { icon: "elevator", label: "Elevator", value: "04" },
      { icon: "staircase", label: "Staircase", value: "03 with Fire Door" },
      { icon: "handover", label: "Handover", value: "2026" },
      { icon: "consultant", label: "Architect", value: "Innovation Architects" },
    ],
    floorPlans: [
      { name: "Project Planning", status: "Completed" },
      { name: "Foundation Work", status: "Upcoming" },
      { name: "Structure", status: "Upcoming" },
      { name: "Finishing", status: "Upcoming" },
    ],
    gallery: [slider2, property1, slider4, property3, slider1, slider5],
    mapLocation: { lat: 23.7645, lng: 90.3876 },
  },
  "commercial-plaza": {
    id: "commercial-plaza",
    title: "EliteEstates Commercial Plaza",
    type: "Architecture",
    category: "Commercial Complex",
    location: "New Market, Dhaka",
    address: "Plot 88, New Market Area, Dhaka-1205",
    heroImage: slider5,
    status: "Ready",
    price: "৳3.8 Cr",
    beds: 0,
    baths: 5,
    sqft: "7,500 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 88, New Market Area" },
      { icon: "type", label: "Type", value: "Commercial Architecture" },
      { icon: "land", label: "Land Area", value: "12.00 Katha" },
      { icon: "levels", label: "Levels", value: "8 Storied (B1+G+7)" },
      { icon: "units", label: "Commercial Unit Size", value: "1,200 - 6,000 sft" },
      { icon: "totalUnits", label: "Units", value: "24 Units" },
      { icon: "parking", label: "Parkings", value: "35" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "Ready Now" },
      { icon: "consultant", label: "Architect", value: "Commercial Design Ltd." },
    ],
    floorPlans: [
      { name: "All Floors", status: "Completed" },
    ],
    gallery: [slider5, property2, slider3, property1, slider4, slider1],
    mapLocation: { lat: 23.7270, lng: 90.3968 },
  },
};

interface ProjectDetails {
  id: string;
  title: string;
  type: string;
  category: string;
  location: string;
  address: string;
  heroImage: string;
  status: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  atAGlance: { icon: string; label: string; value: string }[];
  floorPlans: { name: string; status: string }[];
  gallery: string[];
  mapLocation: { lat: number; lng: number };
}

const iconMap: Record<string, React.ElementType> = {
  address: MapPin,
  type: Building2,
  land: Ruler,
  levels: Layers,
  units: SquareStack,
  totalUnits: SquareStack,
  parking: Car,
  elevator: ArrowUp,
  staircase: Footprints,
  handover: Calendar,
  consultant: PenTool,
};

const ArchitecturePropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState("at-a-glance");
  const [isSticky, setIsSticky] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const project = slug ? architectureProjectsData[slug] : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Architecture Project Not Found</h1>
          <Link to="/projects/architecture">
            <Button variant="gold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Architecture Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const statusColors: Record<string, string> = {
    Ongoing: "bg-amber-500/20 text-amber-400 border-amber-500/50",
    Ready: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
    Upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  };

  const tabs = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "floor-plans", label: "Floor Plans" },
    { id: "gallery", label: "Gallery" },
    { id: "map", label: "Map" },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // Get related architecture projects (excluding current)
  const relatedProjects = Object.values(architectureProjectsData)
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} - Architecture - EliteEstates</title>
        <meta 
          name="description" 
          content={`${project.title} - Architecture project in ${project.location}. ${project.sqft}, commercial space with ${project.baths} facilities. ${project.status} project.`}
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section - Full Screen */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge variant="outline" className={statusColors[project.status]}>
                  {project.type}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/50">
                  {project.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{project.location}</span>
              </div>
            </motion.div>

            {/* Add to Favorites */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute bottom-32 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              <span>{isFavorite ? "Added to Favourites" : "Add to Favourites"}</span>
            </motion.button>
          </div>
        </section>

        {/* Sticky Navigation Tabs */}
        <nav 
          className={`sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b border-border transition-all duration-300 ${
            isSticky ? "shadow-lg" : ""
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-8 py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                    activeTab === tab.id 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* At a Glance Section */}
        <section id="at-a-glance" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >
                <img 
                  src={project.gallery[0]} 
                  alt={project.title}
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>

              {/* Details */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
                >
                  At a <span className="text-gradient">Glance</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.atAGlance.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || Building2;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </span>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans / Project Progress Section */}
        <section id="floor-plans" className="py-20 bg-navy relative overflow-hidden">
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Architecture <span className="text-gradient">Progress</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Track the architectural development milestones and progress of {project.title}
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              
              {project.floorPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-card p-6 rounded-xl border border-border/50 inline-block">
                      <h4 className="font-serif font-semibold text-foreground text-lg">
                        {plan.name}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={
                          plan.status === "Completed" 
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mt-2"
                            : plan.status === "In Progress"
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/50 mt-2"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/50 mt-2"
                        }
                      >
                        {plan.status}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className={`w-4 h-4 rounded-full z-10 ${
                    plan.status === "Completed" 
                      ? "bg-emerald-500"
                      : plan.status === "In Progress"
                      ? "bg-amber-500"
                      : "bg-blue-500"
                  }`} />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Architecture <span className="text-gradient">Gallery</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
                }}
                className="absolute left-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={project.gallery[lightboxIndex]}
                alt={`Gallery ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 text-muted-foreground">
                {lightboxIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Section */}
        <section id="map" className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Location <span className="text-gradient">Map</span>
              </h2>
            </motion.div>

            <div className="rounded-2xl overflow-hidden h-[400px] bg-card border border-border">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9!2d${project.mapLocation.lng}!3d${project.mapLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Connect & <span className="text-gradient">Explore</span>
                </h2>
                <p className="text-muted-foreground">
                  Interested in {project.title}? Get in touch with us for more architectural details.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input placeholder="Your phone number" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="Your email" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input placeholder="Architecture inquiry" defaultValue={project.title} className="bg-background" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Your architectural requirements..." 
                    className="bg-background min-h-[120px]"
                  />
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Architecture Inquiry
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-navy">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between mb-12">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-serif font-bold text-white"
                >
                  Related <span className="text-gradient">Architecture Projects</span>
                </motion.h2>
                <Link to="/projects/architecture">
                  <Button variant="outline">View All Architecture</Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/architecture/${relatedProject.id}`}>
                      <PropertyCard
                        image={relatedProject.heroImage}
                        title={relatedProject.title}
                        location={relatedProject.location}
                        price={relatedProject.price}
                        beds={relatedProject.beds}
                        baths={relatedProject.baths}
                        sqft={relatedProject.sqft}
                        status={relatedProject.status as "Ongoing" | "Ready" | "Upcoming"}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
};

export default ArchitecturePropertyDetail;