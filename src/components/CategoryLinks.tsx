import { motion } from "framer-motion";
import { Building2, Home, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Home,
    title: "Interior",
    description: "Luxury interior design projects",
    link: "/projects/interior",
  },
  {
    icon: Building2,
    title: "Architecture",
    description: "Modern architectural projects",
    link: "/projects/architecture",
  },
  {
    icon: Handshake,
    title: "Landowner",
    description: "Partnership opportunities",
    link: "/landowner",
  },
];

export const CategoryLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
          <Link
            to={category.link}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <category.icon className="w-5 h-5 text-primary" />
            <span className="font-medium">{category.title}</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
