import { CategoryType } from './categories';
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";  
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: CategoryType;
  shortDescription: string;
  fullDescription: string;
  image: string;
  location: string;
  area: string;
  price?: number;
  priceDisplay?: string;
  beds?: number;
  baths?: number;
  sqft: string;
  status: 'Ready' | 'Ongoing' | 'Upcoming';
  features: string[];
  amenities: string[];
  gallery: string[];
  tags: string[];
}

// Static project data - Single source of truth
export const PROJECTS_DATA: Project[] = [
  // Interior Projects
  {
    id: 1,
    title: "EliteEstates Sunset Residences",
    slug: "sunset-residences",
    category: "Interior",
    shortDescription: "Luxury interior design with modern amenities and premium finishes",
    fullDescription: "Experience the pinnacle of luxury living with our meticulously designed Sunset Residences. Every detail has been crafted to provide an unparalleled living experience, from the imported marble flooring to the designer fixtures and fittings. Located in the prestigious Banani area, these residences offer both comfort and convenience.",
    image: slider2,
    location: "Banani, Dhaka",
    area: "Banani",
    price: 25000000,
    priceDisplay: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "2,400 sqft",
    status: "Ready",
    features: ["Premium Interior Design", "Smart Home Technology", "Private Balcony", "24/7 Security"],
    amenities: ["Swimming Pool", "Gym", "Rooftop Garden", "Parking", "Generator"],
    gallery: [slider2, property1, property2],
    tags: ["luxury", "modern", "spacious", "prime-location"]
  },
  {
    id: 2,
    title: "EliteEstates Garden View",
    slug: "garden-view",
    category: "Interior", 
    shortDescription: "Contemporary interior spaces with garden views and natural lighting",
    fullDescription: "Immerse yourself in nature while enjoying modern luxury at Garden View. These thoughtfully designed interiors maximize natural light and offer stunning garden views. The open-plan living spaces and contemporary finishes create a perfect harmony between indoor and outdoor living.",
    image: slider5,
    location: "Uttara, Dhaka",
    area: "Uttara",
    price: 18000000,
    priceDisplay: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800 sqft",
    status: "Ongoing",
    features: ["Garden Views", "Natural Lighting", "Open Plan Living", "Modern Kitchen"],
    amenities: ["Community Garden", "Children's Play Area", "Security", "Parking"],
    gallery: [slider5, slider1, property3],
    tags: ["garden-view", "family-friendly", "contemporary"]
  },
  {
    id: 3,
    title: "EliteEstates Lily-An Tower",
    slug: "lily-an-tower",
    category: "Interior",
    shortDescription: "High-rise interior living with panoramic city views",
    fullDescription: "Rise above the city in our prestigious Lily-An Tower. These high-end interior spaces offer breathtaking panoramic views of Dhaka while providing all modern amenities. Each unit features premium materials, custom millwork, and smart home integration.",
    image: slider1,
    location: "Lalmatia, Dhaka",
    area: "Lalmatia",
    price: 22000000,
    priceDisplay: "৳2.2 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,100 sqft",
    status: "Upcoming",
    features: ["Panoramic Views", "Premium Materials", "Smart Home", "Custom Design"],
    amenities: ["Sky Lounge", "Concierge", "Valet Parking", "Fitness Center"],
    gallery: [slider1, slider3, property1],
    tags: ["high-rise", "panoramic-views", "premium", "smart-home"]
  },

  // Architecture Projects  
  {
    id: 4,
    title: "EliteEstates Corporate Tower",
    slug: "corporate-tower",
    category: "Architecture",
    shortDescription: "Modern architectural design for corporate excellence",
    fullDescription: "A testament to modern architectural innovation, the Corporate Tower represents the future of business spaces. With its striking glass facade and sustainable design elements, this building sets new standards for commercial architecture in Dhaka.",
    image: slider4,
    location: "Motijheel, Dhaka",
    area: "Motijheel",
    price: 50000000,
    priceDisplay: "৳5.0 Cr",
    beds: 0,
    baths: 4,
    sqft: "5,000 sqft",
    status: "Ready",
    features: ["Modern Architecture", "Glass Facade", "Energy Efficient", "Premium Location"],
    amenities: ["Conference Rooms", "Executive Lounge", "Parking", "24/7 Security"],
    gallery: [slider4, slider2, property2],
    tags: ["corporate", "modern-architecture", "commercial", "sustainable"]
  },
  {
    id: 5,
    title: "EliteEstates Metro Plaza",
    slug: "metro-plaza",
    category: "Architecture",
    shortDescription: "Contemporary architectural space in prime Dhanmondi location",
    fullDescription: "Metro Plaza showcases contemporary architectural excellence in the heart of Dhanmondi. This mixed-use development combines commercial and residential elements with a focus on sustainable design and community integration.",
    image: slider3,
    location: "Dhanmondi, Dhaka",
    area: "Dhanmondi",
    price: 35000000,
    priceDisplay: "৳3.5 Cr",
    beds: 0,
    baths: 2,
    sqft: "3,200 sqft", 
    status: "Ongoing",
    features: ["Mixed-Use Design", "Sustainable Architecture", "Community Spaces", "Transit Access"],
    amenities: ["Retail Spaces", "Community Center", "Green Spaces", "Public Transport"],
    gallery: [slider3, slider5, property3],
    tags: ["mixed-use", "sustainable", "community", "transit-oriented"]
  },
  {
    id: 6,
    title: "EliteEstates Business Hub",
    slug: "business-hub",
    category: "Architecture",
    shortDescription: "Cutting-edge architectural design for modern business needs",
    fullDescription: "The Business Hub represents the pinnacle of modern commercial architecture. Designed for the future of work, this building incorporates flexible spaces, advanced technology infrastructure, and environmentally conscious design principles.",
    image: slider1,
    location: "Gulshan, Dhaka", 
    area: "Gulshan",
    price: 80000000,
    priceDisplay: "৳8.0 Cr",
    beds: 0,
    baths: 6,
    sqft: "8,000 sqft",
    status: "Upcoming",
    features: ["Flexible Spaces", "Tech Infrastructure", "Green Building", "Modern Design"],
    amenities: ["Co-working Spaces", "Innovation Labs", "Cafeteria", "Wellness Center"],
    gallery: [slider1, slider4, property1],
    tags: ["business", "flexible", "technology", "green-building"]
  },

  // Landowner Projects
  {
    id: 7,
    title: "Gulshan Development Opportunity",
    slug: "gulshan-development",
    category: "Landowner",
    shortDescription: "Prime land development opportunity in Gulshan commercial district",
    fullDescription: "Exceptional land development opportunity in one of Dhaka's most prestigious locations. This project offers landowners the chance to partner with EliteEstates for maximum returns through our proven development expertise and market knowledge.",
    image: property1,
    location: "Gulshan, Dhaka",
    area: "Gulshan",
    price: 120000000,
    priceDisplay: "৳12.0 Cr",
    sqft: "15,000 sqft",
    status: "Ready",
    features: ["Prime Location", "Commercial Potential", "Partnership Model", "High Returns"],
    amenities: ["Development Consultation", "Legal Support", "Market Analysis", "Project Management"],
    gallery: [property1, slider2, slider3],
    tags: ["prime-land", "commercial", "partnership", "high-returns"]
  },
  {
    id: 8,
    title: "Banani Joint Venture Project",
    slug: "banani-joint-venture", 
    category: "Landowner",
    shortDescription: "Exclusive joint venture opportunity for luxury residential development",
    fullDescription: "Partner with EliteEstates for a luxury residential development in prestigious Banani. This joint venture model ensures maximum value extraction from your land while minimizing risks through our comprehensive development and marketing expertise.",
    image: property2,
    location: "Banani, Dhaka",
    area: "Banani",
    price: 95000000,
    priceDisplay: "৳9.5 Cr",
    sqft: "12,000 sqft",
    status: "Ongoing",
    features: ["Joint Venture Model", "Luxury Development", "Risk Mitigation", "Proven Track Record"],
    amenities: ["Full Development Service", "Marketing Support", "Sales Management", "After-sales Service"],
    gallery: [property2, slider4, slider1],
    tags: ["joint-venture", "luxury", "residential", "banani"]
  },
  {
    id: 9,
    title: "Uttara Expansion Project",
    slug: "uttara-expansion",
    category: "Landowner", 
    shortDescription: "Strategic land development in growing Uttara sector",
    fullDescription: "Take advantage of Uttara's rapid growth with our strategic development partnership. This project focuses on sustainable development practices while maximizing returns for landowners through our innovative revenue-sharing model.",
    image: property3,
    location: "Uttara, Dhaka",
    area: "Uttara", 
    price: 75000000,
    priceDisplay: "৳7.5 Cr",
    sqft: "20,000 sqft",
    status: "Upcoming",
    features: ["Growth Area", "Sustainable Development", "Revenue Sharing", "Strategic Location"],
    amenities: ["Development Planning", "Environmental Assessment", "Community Integration", "Infrastructure Development"],
    gallery: [property3, slider5, slider2],
    tags: ["growth-area", "sustainable", "revenue-sharing", "uttara"]
  }
];

// Helper functions for data access
export const getAllProjects = (): Project[] => PROJECTS_DATA;

export const getProjectsByCategory = (category: CategoryType): Project[] => 
  PROJECTS_DATA.filter(project => project.category === category);

export const getProjectBySlug = (slug: string): Project | undefined => 
  PROJECTS_DATA.find(project => project.slug === slug);

export const getProjectById = (id: number): Project | undefined =>
  PROJECTS_DATA.find(project => project.id === id);

export const searchProjects = (query: string): Project[] => 
  PROJECTS_DATA.filter(project => 
    project.title.toLowerCase().includes(query.toLowerCase()) ||
    project.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
    project.location.toLowerCase().includes(query.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

export const filterProjects = (filters: {
  category?: CategoryType;
  status?: string;
  area?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}): Project[] => {
  let filtered = PROJECTS_DATA;

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  if (filters.status) {
    filtered = filtered.filter(p => p.status === filters.status);
  }

  if (filters.area) {
    filtered = filtered.filter(p => p.area === filters.area);
  }

  if (filters.minPrice && filters.maxPrice) {
    filtered = filtered.filter(p => {
      if (!p.price) return false;
      return p.price >= filters.minPrice! && p.price <= filters.maxPrice!;
    });
  }

  if (filters.search) {
    const query = filters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  return filtered;
};