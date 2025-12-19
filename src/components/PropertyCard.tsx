import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "Ongoing" | "Ready" | "Upcoming";
  index?: number;
}

export const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  sqft, 
  status,
  index = 0 
}: PropertyCardProps) => {
  const statusColors = {
    Ongoing: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Ready: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Upcoming: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Status Badge */}
        <Badge 
          variant="outline" 
          className={`absolute top-4 left-4 ${statusColors[status]}`}
        >
          {status}
        </Badge>

        {/* Hover Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-lg font-semibold text-primary">{price}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Bed className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Maximize className="w-4 h-4" />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
