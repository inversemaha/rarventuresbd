import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
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

// Import centralized data
import { getAllProjects, filterProjects } from "@/data/projects";
import { getAllCategories, CategoryType } from "@/data/categories";

// Use centralized data
const allProjects = getAllProjects();
const categories = getAllCategories();

// Get unique values for filters
const locations = [...new Set(allProjects.map(p => p.area))].sort();
const statuses = ["Ready", "Ongoing", "Upcoming"];

// Price range config (in BDT)
const MIN_PRICE = 0;
const MAX_PRICE = 200000000; // 20 Cr

const formatPrice = (value: number) => {
  if (value >= 10000000) {
    return `৳${(value / 10000000).toFixed(1)} Cr`;
  }
  return `৳${(value / 100000).toFixed(0)} Lac`;
};

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedType, setSelectedType] = useState<string>(searchParams.get('category') || '');
  const [selectedArea, setSelectedArea] = useState(searchParams.get('area') || '');
  const [selectedStatus, setSelectedStatus] = useState(searchParams.get('status') || '');
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [showFilters, setShowFilters] = useState(false);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedType) params.set('category', selectedType);
    if (selectedArea) params.set('area', selectedArea);  
    if (selectedStatus) params.set('status', selectedStatus);
    if (priceRange[0] !== MIN_PRICE) params.set('minPrice', priceRange[0].toString());
    if (priceRange[1] !== MAX_PRICE) params.set('maxPrice', priceRange[1].toString());
    
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedType, selectedArea, selectedStatus, priceRange, setSearchParams]);

  // Apply filters using centralized filter function
  const filteredProjects = useMemo(() => {
    return filterProjects({
      category: selectedType as CategoryType,
      status: selectedStatus,
      area: selectedArea,
      minPrice: priceRange[0] > MIN_PRICE ? priceRange[0] : undefined,
      maxPrice: priceRange[1] < MAX_PRICE ? priceRange[1] : undefined,
      search: searchQuery
    });
  }, [allProjects, searchQuery, selectedType, selectedArea, selectedStatus, priceRange]);

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedType || selectedArea || selectedStatus || 
    priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE;

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedArea('');
    setSelectedStatus('');
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSearchParams({}, { replace: true });
  };

  const updateFilters = (newFilters: any) => {
    Object.entries(newFilters).forEach(([key, value]) => {
      if (key === 'search') setSearchQuery(value as string);
      if (key === 'category') setSelectedType(value as string);
      if (key === 'area') setSelectedArea(value as string);
      if (key === 'status') setSelectedStatus(value as string);
      if (key === 'minPrice' || key === 'maxPrice') {
        setPriceRange(prev => [
          key === 'minPrice' ? Number(value) : prev[0],
          key === 'maxPrice' ? Number(value) : prev[1]
        ]);
      }
    });
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

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                All Properties
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Search and filter through our collection of premium interior and architecture properties
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-12 py-3 text-center bg-background/80 backdrop-blur-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} propert{filteredProjects.length !== 1 ? 'ies' : 'y'} found
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex gap-3 flex-wrap items-center">
                <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                
                {categories.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(selectedType === type ? '' : type)}
                    className="min-w-[100px]"
                  >
                    {selectedType === type ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : type === "Interior" ? (
                      <Home className="w-4 h-4 mr-2" />
                    ) : (
                      <Building2 className="w-4 h-4 mr-2" />
                    )}
                    {type}
                  </Button>
                ))}
              </div>

              {/* Advanced Filters Toggle */}
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    More Filters
                    {hasActiveFilters && (
                      <Badge variant="secondary" className="ml-2 px-1 py-0 text-xs">
                        {[searchQuery, selectedType, selectedArea, selectedStatus].filter(Boolean).length + 
                         (priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE ? 1 : 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Advanced Filters</SheetTitle>
                    <SheetDescription>
                      Refine your property search with detailed filters
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-6 py-6">
                    {/* Area Filter */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Location</label>
                      <Select value={selectedArea} onValueChange={setSelectedArea}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Areas</SelectItem>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {location}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Status Filter */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Status</label>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Status</SelectItem>
                          {statuses.map((status) => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="text-sm font-medium mb-4 block">
                        Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={MAX_PRICE}
                        min={MIN_PRICE}
                        step={1000000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{formatPrice(MIN_PRICE)}</span>
                        <span>{formatPrice(MAX_PRICE)}</span>
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <Button 
                        variant="outline" 
                        onClick={clearAllFilters}
                        className="w-full"
                      >
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex gap-2 mt-4 flex-wrap"
              >
                {searchQuery && (
                  <Badge variant="secondary">
                    Search: {searchQuery}
                    <button onClick={() => updateFilters({ search: '' })} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedType && (
                  <Badge variant="secondary">
                    Category: {selectedType}
                    <button onClick={() => updateFilters({ category: '' })} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedArea && (
                  <Badge variant="secondary">
                    Area: {selectedArea}
                    <button onClick={() => updateFilters({ area: '' })} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedStatus && (
                  <Badge variant="secondary">
                    Status: {selectedStatus}
                    <button onClick={() => updateFilters({ status: '' })} className="ml-1 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {(priceRange[0] !== MIN_PRICE || priceRange[1] !== MAX_PRICE) && (
                  <Badge variant="secondary">
                    Price: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
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
                          price={project.priceDisplay || 'Price on Request'}
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
                  <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
                  <p className="text-muted-foreground mb-6">
                    No properties match your current search criteria. Try adjusting your filters.
                  </p>
                  {hasActiveFilters && (
                    <Button onClick={clearAllFilters} variant="outline">
                      Clear All Filters
                    </Button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Properties;