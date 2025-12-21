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

// Interior projects data with full details
const interiorProjectsData: Record<string, ProjectDetails> = {
  "sunset-residences": {
    id: "sunset-residences",
    title: "EliteEstates Sunset Residences",
    type: "Interior",
    category: "Premium",
    location: "Banani, Dhaka",
    address: "Plot 15/A, Road 12, Block E, Banani, Dhaka-1213",
    heroImage: slider2,
    status: "Ready",
    price: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "2,400 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 15/A, Road 12, Block E, Banani" },
      { icon: "type", label: "Type", value: "Interior Design" },
      { icon: "land", label: "Land Area", value: "8.25 Katha" },
      { icon: "levels", label: "Levels", value: "12 Storied (B2+G+10)" },
      { icon: "units", label: "Apartment Size", value: "2,200 - 2,800 sft" },
      { icon: "totalUnits", label: "Units", value: "20 Apartments" },
      { icon: "parking", label: "Parkings", value: "30" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "December 2024" },
      { icon: "consultant", label: "Interior Designer", value: "Archdynamic Ltd." },
    ],
    floorPlans: [
      { name: "Ground Floor", status: "Completed" },
      { name: "Level 01-03", status: "Completed" },
      { name: "Level 04-06", status: "Completed" },
      { name: "Level 07-09", status: "In Progress" },
      { name: "Level 10", status: "Upcoming" },
      { name: "Roof Plan", status: "Upcoming" },
    ],
    gallery: [slider1, slider2, slider3, slider4, slider5, property1, property2, property3],
    mapLocation: { lat: 23.7937, lng: 90.4066 },
  },
  "garden-view": {
    id: "garden-view",
    title: "EliteEstates Garden View",
    type: "Interior",
    category: "Classic",
    location: "Uttara, Dhaka",
    address: "Plot 22, Sector 11, Uttara, Dhaka-1230",
    heroImage: slider5,
    status: "Ongoing",
    price: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 22, Sector 11, Uttara" },
      { icon: "type", label: "Type", value: "Interior Design" },
      { icon: "land", label: "Land Area", value: "6.50 Katha" },
      { icon: "levels", label: "Levels", value: "10 Storied (B1+G+9)" },
      { icon: "units", label: "Apartment Size", value: "1,600 - 2,000 sft" },
      { icon: "totalUnits", label: "Units", value: "18 Apartments" },
      { icon: "parking", label: "Parkings", value: "20" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "March 2026" },
      { icon: "consultant", label: "Interior Designer", value: "Studio Design" },
    ],
    floorPlans: [
      { name: "Basement", status: "Completed" },
      { name: "Ground Floor", status: "Completed" },
      { name: "Level 01-05", status: "In Progress" },
      { name: "Level 06-09", status: "Upcoming" },
      { name: "Roof Plan", status: "Upcoming" },
    ],
    gallery: [slider5, slider3, slider1, property1, property2, property3],
    mapLocation: { lat: 23.8759, lng: 90.3795 },
  },
  "lily-an-tower": {
    id: "lily-an-tower",
    title: "EliteEstates Lily-An Tower",
    type: "Interior",
    category: "Sapphire Series",
    location: "Lalmatia, Dhaka",
    address: "Plot 4/4, Satmasjid Road, Block D, Lalmatia, Dhaka",
    heroImage: slider1,
    status: "Upcoming",
    price: "৳2.2 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,100 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 4/4, Satmasjid Road, Block D, Lalmatia" },
      { icon: "type", label: "Type", value: "Interior Building" },
      { icon: "land", label: "Land Area", value: "9.50 Katha" },
      { icon: "levels", label: "Levels", value: "14 Storied (B2+B1+G+13)" },
      { icon: "units", label: "Apartment Size", value: "1,900 - 2,400 sft" },
      { icon: "totalUnits", label: "Units", value: "28" },
      { icon: "parking", label: "Parkings", value: "24" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "August 2027" },
      { icon: "consultant", label: "Interior Designer", value: "VOLUMEZERO Limited" },
    ],
    floorPlans: [
      { name: "Project Start", status: "Completed" },
      { name: "Basement 01", status: "Upcoming" },
      { name: "Basement 02", status: "Upcoming" },
      { name: "Ground Level", status: "Upcoming" },
      { name: "Level 02", status: "Upcoming" },
      { name: "Level 03-14", status: "Upcoming" },
      { name: "Roof Plan", status: "Upcoming" },
    ],
    gallery: [slider1, slider2, slider4, slider5, property1, property3],
    mapLocation: { lat: 23.7525, lng: 90.3709 },
  },
  "premium-heights": {
    id: "premium-heights",
    title: "EliteEstates Premium Heights",
    type: "Interior",
    category: "Luxury",
    location: "Gulshan, Dhaka",
    address: "Plot 45, Road 103, Gulshan-2, Dhaka-1212",
    heroImage: property1,
    status: "Ready",
    price: "৳3.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "2,800 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 45, Road 103, Gulshan-2" },
      { icon: "type", label: "Type", value: "Luxury Interior" },
      { icon: "land", label: "Land Area", value: "12.00 Katha" },
      { icon: "levels", label: "Levels", value: "15 Storied (B2+G+14)" },
      { icon: "units", label: "Apartment Size", value: "2,500 - 3,200 sft" },
      { icon: "totalUnits", label: "Units", value: "15 Apartments" },
      { icon: "parking", label: "Parkings", value: "45" },
      { icon: "elevator", label: "Elevator", value: "03" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "Ready Now" },
      { icon: "consultant", label: "Interior Designer", value: "Modern Architects" },
    ],
    floorPlans: [
      { name: "All Floors", status: "Completed" },
    ],
    gallery: [property1, slider1, slider2, slider3, slider4, property2],
    mapLocation: { lat: 23.7925, lng: 90.4078 },
  },
  "mh-heights": {
    id: "mh-heights",
    title: "EliteEstates MH Heights",
    type: "Interior",
    category: "Classic",
    location: "Mohammadpur, Dhaka",
    address: "House 12, Road 5, Block C, Mohammadpur, Dhaka",
    heroImage: property2,
    status: "Ongoing",
    price: "৳1.5 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,600 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "House 12, Road 5, Block C, Mohammadpur" },
      { icon: "type", label: "Type", value: "Interior Design" },
      { icon: "land", label: "Land Area", value: "5.00 Katha" },
      { icon: "levels", label: "Levels", value: "8 Storied (G+7)" },
      { icon: "units", label: "Apartment Size", value: "1,400 - 1,800 sft" },
      { icon: "totalUnits", label: "Units", value: "14 Apartments" },
      { icon: "parking", label: "Parkings", value: "14" },
      { icon: "elevator", label: "Elevator", value: "01" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "June 2025" },
      { icon: "consultant", label: "Interior Designer", value: "Urban Studio" },
    ],
    floorPlans: [
      { name: "Ground Floor", status: "Completed" },
      { name: "Level 01-04", status: "Completed" },
      { name: "Level 05-07", status: "In Progress" },
    ],
    gallery: [property2, slider3, slider5, property1, slider2, property3],
    mapLocation: { lat: 23.7662, lng: 90.3587 },
  },
  "aziz-residences": {
    id: "aziz-residences",
    title: "EliteEstates Aziz Residences",
    type: "Interior",
    category: "Premium",
    location: "Uttara, Dhaka",
    address: "Plot 8, Sector 7, Uttara, Dhaka-1230",
    heroImage: slider3,
    status: "Upcoming",
    price: "৳2.0 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,000 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 8, Sector 7, Uttara" },
      { icon: "type", label: "Type", value: "Interior Design" },
      { icon: "land", label: "Land Area", value: "7.00 Katha" },
      { icon: "levels", label: "Levels", value: "11 Storied (B1+G+10)" },
      { icon: "units", label: "Apartment Size", value: "1,800 - 2,200 sft" },
      { icon: "totalUnits", label: "Units", value: "22 Apartments" },
      { icon: "parking", label: "Parkings", value: "25" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "December 2027" },
      { icon: "consultant", label: "Interior Designer", value: "Archdynamic Ltd." },
    ],
    floorPlans: [
      { name: "Foundation", status: "Upcoming" },
      { name: "Ground Floor", status: "Upcoming" },
      { name: "All Levels", status: "Upcoming" },
    ],
    gallery: [slider2, slider1, slider5, property1, property2, property3],
    mapLocation: { lat: 23.8759, lng: 90.3795 },
  },  "executive-suite": {
    id: "executive-suite",
    title: "EliteEstates Executive Suite",
    type: "Interior",
    category: "Executive",
    location: "Wari, Dhaka",
    address: "Plot 18, Executive Area, Wari, Dhaka-1203",
    heroImage: property2,
    status: "Ready",
    price: "৳2.1 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,500 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 18, Executive Area, Wari" },
      { icon: "type", label: "Type", value: "Executive Interior" },
      { icon: "land", label: "Land Area", value: "5.50 Katha" },
      { icon: "levels", label: "Levels", value: "8 Storied (G+7)" },
      { icon: "units", label: "Apartment Size", value: "2,200 - 2,800 sft" },
      { icon: "totalUnits", label: "Units", value: "16 Apartments" },
      { icon: "parking", label: "Parkings", value: "16" },
      { icon: "elevator", label: "Elevator", value: "02" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "Ready Now" },
      { icon: "consultant", label: "Interior Designer", value: "Executive Interiors" },
    ],
    floorPlans: [
      { name: "All Floors", status: "Completed" },
    ],
    gallery: [property2, slider1, slider3, property1, slider5, property3],
    mapLocation: { lat: 23.7104, lng: 90.4074 },
  },
  "garden-apartment": {
    id: "garden-apartment",
    title: "EliteEstates Garden Apartment",
    type: "Interior",
    category: "Garden View",
    location: "Mirpur, Dhaka",
    address: "Plot 12, Section 10, Mirpur, Dhaka-1216",
    heroImage: property3,
    status: "Ongoing",
    price: "৳1.9 Cr",
    beds: 4,
    baths: 2,
    sqft: "2,300 sqft",
    atAGlance: [
      { icon: "address", label: "Address", value: "Plot 12, Section 10, Mirpur" },
      { icon: "type", label: "Type", value: "Garden Interior" },
      { icon: "land", label: "Land Area", value: "6.00 Katha" },
      { icon: "levels", label: "Levels", value: "6 Storied (G+5)" },
      { icon: "units", label: "Apartment Size", value: "2,000 - 2,500 sft" },
      { icon: "totalUnits", label: "Units", value: "12 Apartments" },
      { icon: "parking", label: "Parkings", value: "12" },
      { icon: "elevator", label: "Elevator", value: "01" },
      { icon: "staircase", label: "Staircase", value: "02 with Fire Door" },
      { icon: "handover", label: "Handover", value: "March 2025" },
      { icon: "consultant", label: "Interior Designer", value: "Garden Design Co." },
    ],
    floorPlans: [
      { name: "Ground Floor", status: "Completed" },
      { name: "Level 01-03", status: "In Progress" },
      { name: "Level 04-05", status: "Upcoming" },
    ],
    gallery: [property3, slider2, property1, slider4, slider5, slider1],
    mapLocation: { lat: 23.8223, lng: 90.3654 },
  },};

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

const InteriorPropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState("at-a-glance");
  const [isSticky, setIsSticky] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const project = slug ? interiorProjectsData[slug] : null;

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
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Interior Project Not Found</h1>
          <Link to="/projects/interior">
            <Button variant="gold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Interior Projects
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

  // Get related interior projects (excluding current)
  const relatedProjects = Object.values(interiorProjectsData)
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} - Interior Design - EliteEstates</title>
        <meta 
          name="description" 
          content={`${project.title} - Interior design project in ${project.location}. ${project.sqft}, ${project.beds} beds, ${project.baths} baths. ${project.status} project.`}
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
                Interior <span className="text-gradient">Progress</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Track the interior design milestones and progress of {project.title}
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
                Interior <span className="text-gradient">Gallery</span>
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
                  Interested in {project.title}? Get in touch with us for more interior design details.
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
                    <Input placeholder="Interior design inquiry" defaultValue={project.title} className="bg-background" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Your interior design requirements..." 
                    className="bg-background min-h-[120px]"
                  />
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Interior Inquiry
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
                  Related <span className="text-gradient">Interior Projects</span>
                </motion.h2>
                <Link to="/projects/interior">
                  <Button variant="outline">View All Interior</Button>
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
                    <Link to={`/interior/${relatedProject.id}`}>
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

export default InteriorPropertyDetail;