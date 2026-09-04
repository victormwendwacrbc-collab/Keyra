/**
 * API client utilities for Keyra
 */

import { Property, PropertyFilter, ApiResponse } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

/**
 * Fetch properties with optional filters
 */
export async function fetchProperties(
  filters?: PropertyFilter
): Promise<Property[]> {
  try {
    const params = new URLSearchParams();
    
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.bedrooms) params.append('bedrooms', filters.bedrooms.toString());
    if (filters?.location) params.append('search', filters.location);

    const response = await fetch(`${API_URL}/properties?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    
    const data: ApiResponse<Property[]> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}

/**
 * Fetch a single property by ID
 */
export async function fetchProperty(id: string): Promise<Property | null> {
  try {
    const response = await fetch(`${API_URL}/properties/${id}`);
    
    if (!response.ok) {
      return null;
    }
    
    const data: ApiResponse<Property> = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching property ${id}:`, error);
    return null;
  }
}
