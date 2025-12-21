import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, MapPin } from 'lucide-react';
import { CategoryType, getCategoryConfig } from '@/data/categories';

interface CategoryCardProps {
  category: CategoryType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return Home;
    case 'Building2':
      return Building2;
    case 'MapPin':
      return MapPin;
    default:
      return Building2;
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  className = '',
  size = 'md',
  showDescription = true 
}) => {
  const config = getCategoryConfig(category);
  const IconComponent = getIconComponent(config.icon);
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <Link to={config.route} className="block h-full">
        <div className={`
          ${config.color} 
          border border-border/50 rounded-lg h-full
          flex flex-col items-center justify-center text-center
          transition-all duration-300 hover:shadow-lg
          hover:border-primary/30
        `}>
          <div className="mb-4">
            <IconComponent className={`${iconSizes[size]} text-primary mx-auto`} />
          </div>
          <h3 className={`${textSizes[size]} font-semibold text-foreground mb-2`}>
            {config.name}
          </h3>
          {showDescription && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {config.description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};