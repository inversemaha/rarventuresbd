import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";


// Smooth scroll function (for home page sections if needed)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navItems = [
  { label: "Home", href: "/", type: "link" },
  { 
    label: "Projects", 
    href: "/properties",
    type: "dropdown",
    children: [
      { label: "All Properties", href: "/properties" },
      { label: "Interior", href: "/projects/interior" },
      { label: "Architecture", href: "/projects/architecture" },
      { label: "Landowner", href: "/landowner" },
    ]
  },
  { label: "About", href: "/about", type: "link" },
  { label: "Contact", href: "/contact", type: "link" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-serif font-semibold text-foreground">
              RAR<span className="text-primary">VenturesBD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.href}
                  className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 glass-light rounded-lg border border-border/50 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+8801234567890" className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4" />
              <span>+880 1234 567 890</span>
            </a>
            <Link to="/book-visit">
              <Button variant="gold">
                Book a Visit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/book-visit" onClick={() => setIsOpen(false)}>
                <Button variant="gold" className="w-full mt-4">
                  Book a Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
