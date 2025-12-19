import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, MapPin, Building2, Home, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// All projects data
const allProjects = [
  // Interior
  {
    id: 1,
    slug: "sunset-residences",
    title: "EliteEstates Sunset Residences",
    location: "Banani, Dhaka",
    area: "Banani",
    price: 25000000,
    priceDisplay: "৳2.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "2,400 sqft",
    image: slider2,
    status: "Ready" as const,
    type: "Interior",
  },
  {
    id: 2,
    slug: "garden-view",
    title: "EliteEstates Garden View",
    location: "Uttara, Dhaka",
    area: "Uttara",
    price: 18000000,
    priceDisplay: "৳1.8 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800 sqft",
    image: slider5,
    status: "Ongoing" as const,
    type: "Interior",
  },
  {
    id: 3,
    slug: "lily-an-tower",
    title: "EliteEstates Lily-An Tower",
    location: "Lalmatia, Dhaka",
    area: "Lalmatia",
    price: 22000000,
    priceDisplay: "৳2.2 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,100 sqft",
    image: slider1,
    status: "Upcoming" as const,
    type: "Interior",
  },
  {
    id: 4,
    slug: "premium-heights",
    title: "EliteEstates Premium Heights",
    location: "Gulshan, Dhaka",
    area: "Gulshan",
    price: 35000000,
    priceDisplay: "৳3.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "2,800 sqft",
    image: property1,
    status: "Ready" as const,
    type: "Interior",
  },
  {
    id: 5,
    slug: "mh-heights",
    title: "EliteEstates MH Heights",
    location: "Mohammadpur, Dhaka",
    area: "Mohammadpur",
    price: 15000000,
    priceDisplay: "৳1.5 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,600 sqft",
    image: property2,
    status: "Ongoing" as const,
    type: "Interior",
  },
  {
    id: 6,
    slug: "aziz-residences",
    title: "EliteEstates Aziz Residences",
    location: "Uttara, Dhaka",
    area: "Uttara",
    price: 20000000,
    priceDisplay: "৳2.0 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,000 sqft",
    image: slider3,
    status: "Upcoming" as const,
    type: "Interior",
  },
  // Architecture
  {
    id: 7,
    slug: "corporate-tower",
    title: "EliteEstates Corporate Tower",
    location: "Motijheel, Dhaka",
    area: "Motijheel",
    price: 50000000,
    priceDisplay: "৳5.0 Cr",
    beds: 0,
    baths: 4,
    sqft: "5,000 sqft",
    image: slider4,
    status: "Ready" as const,
    type: "Architecture",
  },
  {
    id: 8,
    slug: "metro-plaza",
    title: "EliteEstates Metro Plaza",
    location: "Dhanmondi, Dhaka",
    area: "Dhanmondi",
    price: 35000000,
    priceDisplay: "৳3.5 Cr",
    beds: 0,
    baths: 2,
    sqft: "3,200 sqft",
    image: slider3,
    status: "Ongoing" as const,
    type: "Architecture",
  },
  {
    id: 9,
    slug: "business-hub",
    title: "EliteEstates Business Hub",
    location: "Gulshan, Dhaka",
    area: "Gulshan",
    price: 80000000,
    priceDisplay: "৳8.0 Cr",
    beds: 0,
    baths: 6,
    sqft: "8,000 sqft",
    image: slider1,
    status: "Upcoming" as const,
    type: "Architecture",
  },
  {
    id: 10,
    slug: "trade-center",
    title: "EliteEstates Trade Center",
    location: "Banani, Dhaka",
    area: "Banani",
    price: 42000000,
    priceDisplay: "৳4.2 Cr",
    beds: 0,
    baths: 3,
    sqft: "4,500 sqft",
    image: property3,
    status: "Ready" as const,
    type: "Architecture",
  },
];

// Get unique values for filters
const locations = [...new Set(allProjects.map(p => p.area))].sort();
const statuses = ["Ready", "Ongoing", "Upcoming"];
const types = ["Interior", "Architecture"];

// Price range config (in crores)
const MIN_PRICE = 0;
const MAX_PRICE = 100000000; // 10 Cr

const formatPrice = (value: number) => {
  if (value >= 10000000) {
    return `৳${(value / 10000000).toFixed(1)} Cr`;
  }
  return `৳${(value / 100000).toFixed(0)} Lac`;
};

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedType, setSelectedType] = useState<string>(searchParams.get("type") || "all");
  const [selectedLocation, setSelectedLocation] = useState<string>(searchParams.get("location") || "all");
  const [selectedStatus, setSelectedStatus] = useState<string>(searchParams.get("status") || "all");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || MIN_PRICE,
    Number(searchParams.get("maxPrice")) || MAX_PRICE,
  ]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedType !== "all") count++;
    if (selectedLocation !== "all") count++;
    if (selectedStatus !== "all") count++;
    if (priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) count++;
    return count;
  }, [selectedType, selectedLocation, selectedStatus, priceRange]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          project.title.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.type.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Type filter
      if (selectedType !== "all" && project.type !== selectedType) {
        return false;
      }

      // Location filter
      if (selectedLocation !== "all" && project.area !== selectedLocation) {
        return false;
      }

      // Status filter
      if (selectedStatus !== "all" && project.status !== selectedStatus) {
        return false;
      }

      // Price range filter
      if (project.price < priceRange[0] || project.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedLocation, selectedStatus, priceRange]);

  // Update URL params when filters change
  const updateFilters = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all") {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedLocation("all");
    setSelectedStatus("all");
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSearchParams(new URLSearchParams());
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    updateFilters({ q: value });
  };

  return (
    <>
      <Helmet>
        <title>All Properties - EliteEstates</title>
        <meta 
          name="description" 
          content="Browse all interior and architecture properties in Dhaka. Filter by location, price range, status, and type to find your perfect property."
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-navy">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Find Your Property
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Explore Our <span className="text-gradient">Properties</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Search and filter through our collection of premium interior and architecture properties
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, location, or type..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 text-lg bg-card border-border/50 rounded-xl focus:ring-2 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-card border-b border-border sticky top-0 z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Desktop Filters */}
              <div className="hidden md:flex items-center gap-4 flex-wrap">
                {/* Type Filter */}
                <Select value={selectedType} onValueChange={(value) => {
                  setSelectedType(value);
                  updateFilters({ type: value });
                }}>
                  <SelectTrigger className="w-[160px] bg-background">
                    <div className="flex items-center gap-2">
                      {selectedType === "Interior" ? (
                        <Home className="w-4 h-4 text-primary" />
                      ) : selectedType === "Architecture" ? (
                        <Building2 className="w-4 h-4 text-primary" />
                      ) : null}
                      <SelectValue placeholder="Property Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>
                        <div className="flex items-center gap-2">
                          {type === "Interior" ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                          {type}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Location Filter */}
                <Select value={selectedLocation} onValueChange={(value) => {
                  setSelectedLocation(value);
                  updateFilters({ location: value });
                }}>
                  <SelectTrigger className="w-[160px] bg-background">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <SelectValue placeholder="Location" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Status Filter */}
                <Select value={selectedStatus} onValueChange={(value) => {
                  setSelectedStatus(value);
                  updateFilters({ status: value });
                }}>
                  <SelectTrigger className="w-[160px] bg-background">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="all">All Status</SelectItem>
                    {statuses.map(status => (
                      <SelectItem key={status} value={status}>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            status === "Ready" ? "bg-emerald-500" :
                            status === "Ongoing" ? "bg-amber-500" : "bg-blue-500"
                          }`} />
                          {status}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Price Range */}
                <div className="flex items-center gap-4 px-4 py-2 bg-background rounded-lg border border-border">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Price:</span>
                  <div className="w-48">
                    <Slider
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      step={1000000}
                      value={priceRange}
                      onValueChange={(value) => {
                        setPriceRange(value as [number, number]);
                        updateFilters({ 
                          minPrice: value[0].toString(), 
                          maxPrice: value[1].toString() 
                        });
                      }}
                      className="w-full"
                    />
                  </div>
                  <span className="text-sm text-foreground whitespace-nowrap">
                    {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </span>
                </div>
              </div>

              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden relative">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh] bg-card border-border">
                  <SheetHeader>
                    <SheetTitle>Filter Properties</SheetTitle>
                    <SheetDescription>
                      Narrow down your search with filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    {/* Type */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Property Type</label>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedType === "all" ? "gold" : "outline"}
                          size="sm"
                          onClick={() => setSelectedType("all")}
                        >
                          All
                        </Button>
                        {types.map(type => (
                          <Button
                            key={type}
                            variant={selectedType === type ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setSelectedType(type)}
                          >
                            {type === "Interior" ? <Home className="w-4 h-4 mr-1" /> : <Building2 className="w-4 h-4 mr-1" />}
                            {type}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant={selectedLocation === "all" ? "gold" : "outline"}
                          size="sm"
                          onClick={() => setSelectedLocation("all")}
                        >
                          All
                        </Button>
                        {locations.map(loc => (
                          <Button
                            key={loc}
                            variant={selectedLocation === loc ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setSelectedLocation(loc)}
                          >
                            {loc}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedStatus === "all" ? "gold" : "outline"}
                          size="sm"
                          onClick={() => setSelectedStatus("all")}
                        >
                          All
                        </Button>
                        {statuses.map(status => (
                          <Button
                            key={status}
                            variant={selectedStatus === status ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setSelectedStatus(status)}
                          >
                            <span className={`w-2 h-2 rounded-full mr-1 ${
                              status === "Ready" ? "bg-emerald-500" :
                              status === "Ongoing" ? "bg-amber-500" : "bg-blue-500"
                            }`} />
                            {status}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-4 block">
                        Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      </label>
                      <Slider
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={1000000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="w-full"
                      />
                    </div>

                    {/* Apply Button */}
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" className="flex-1" onClick={clearAllFilters}>
                        Clear All
                      </Button>
                      <Button variant="gold" className="flex-1" onClick={() => setIsFilterOpen(false)}>
                        <Check className="w-4 h-4 mr-2" />
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Results Count & Clear */}
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-sm">
                  {filteredProjects.length} {filteredProjects.length === 1 ? "property" : "properties"} found
                </span>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>

            {/* Active Filter Tags */}
            {activeFiltersCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mt-4"
              >
                {selectedType !== "all" && (
                  <Badge variant="secondary" className="gap-1 pl-3">
                    {selectedType}
                    <button onClick={() => {
                      setSelectedType("all");
                      updateFilters({ type: "all" });
                    }} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedLocation !== "all" && (
                  <Badge variant="secondary" className="gap-1 pl-3">
                    {selectedLocation}
                    <button onClick={() => {
                      setSelectedLocation("all");
                      updateFilters({ location: "all" });
                    }} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedStatus !== "all" && (
                  <Badge variant="secondary" className="gap-1 pl-3">
                    {selectedStatus}
                    <button onClick={() => {
                      setSelectedStatus("all");
                      updateFilters({ status: "all" });
                    }} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {(priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) && (
                  <Badge variant="secondary" className="gap-1 pl-3">
                    {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                    <button onClick={() => {
                      setPriceRange([MIN_PRICE, MAX_PRICE]);
                      updateFilters({ minPrice: "", maxPrice: "" });
                    }} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link to={`/project/${project.slug}`}>
                        <PropertyCard
                          image={project.image}
                          title={project.title}
                          location={project.location}
                          price={project.priceDisplay}
                          beds={project.beds}
                          baths={project.baths}
                          sqft={project.sqft}
                          status={project.status}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    No properties found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button variant="gold" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Properties;
