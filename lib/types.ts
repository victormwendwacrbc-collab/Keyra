/**
 * Type definitions for Keyra application
 */

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt?: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'land' | 'other';
  features?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFilter {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: Property['propertyType'];
  location?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'recent' | 'popular';
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  count: number;
  total: number;
  page: number;
  pages: number;
}
