// Global categories configuration - Single source of truth
export const CATEGORIES = {
  INTERIOR: 'Interior',
  ARCHITECTURE: 'Architecture', 
  LANDOWNER: 'Landowner'
} as const;

export type CategoryType = typeof CATEGORIES[keyof typeof CATEGORIES];

// Category metadata for UI and routing
export const CATEGORY_CONFIG = {
  [CATEGORIES.INTERIOR]: {
    id: 'interior',
    name: 'Interior',
    slug: 'interior',
    description: 'Premium interior design projects and spaces',
    icon: 'Home',
    color: 'bg-blue-50 hover:bg-blue-100',
    route: '/projects/interior'
  },
  [CATEGORIES.ARCHITECTURE]: {
    id: 'architecture', 
    name: 'Architecture',
    slug: 'architecture',
    description: 'Modern architectural projects and business spaces',
    icon: 'Building2',
    color: 'bg-green-50 hover:bg-green-100',
    route: '/projects/architecture'
  },
  [CATEGORIES.LANDOWNER]: {
    id: 'landowner',
    name: 'Landowner',
    slug: 'landowner', 
    description: 'Land development opportunities and partnerships',
    icon: 'MapPin',
    color: 'bg-orange-50 hover:bg-orange-100',
    route: '/landowner'
  }
} as const;

// Get all categories as array
export const getAllCategories = () => Object.values(CATEGORIES);

// Get category config by name
export const getCategoryConfig = (categoryName: CategoryType) => CATEGORY_CONFIG[categoryName];

// Get category route
export const getCategoryRoute = (categoryName: CategoryType) => CATEGORY_CONFIG[categoryName].route;