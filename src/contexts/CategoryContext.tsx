import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CategoryType } from '@/data/categories';
import { Project } from '@/data/projects';

interface FilterState {
  category?: CategoryType;
  status?: string;
  area?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

interface CategoryContextType {
  // Current filters
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  updateFilters: (partialFilters: Partial<FilterState>) => void;
  clearFilters: () => void;
  
  // Current selection
  selectedCategory: CategoryType | null;
  setSelectedCategory: (category: CategoryType | null) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Helper methods
  isFilterActive: () => boolean;
  getActiveFilterCount: () => number;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>({});
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const updateFilters = (partialFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...partialFilters }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
    setSelectedCategory(null);
  };

  const isFilterActive = () => {
    return Object.values(filters).some(value => 
      value !== undefined && value !== null && value !== ''
    ) || searchQuery !== '';
  };

  const getActiveFilterCount = () => {
    let count = 0;
    Object.values(filters).forEach(value => {
      if (value !== undefined && value !== null && value !== '') count++;
    });
    if (searchQuery !== '') count++;
    return count;
  };

  const value: CategoryContextType = {
    filters,
    setFilters,
    updateFilters,
    clearFilters,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    isFilterActive,
    getActiveFilterCount,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};