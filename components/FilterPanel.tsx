'use client';

import { useState } from 'react';

export default function FilterPanel() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    bedrooms: 0,
    propertyType: 'all',
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    // TODO: Apply filters to property grid
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-20">
      <h3 className="font-semibold text-lg mb-6">Filters</h3>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Min price"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <input
            type="number"
            placeholder="Max price"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange('bedrooms', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
        >
          <option value="0">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>

      {/* Property Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
        <select
          value={filters.propertyType}
          onChange={(e) => handleFilterChange('propertyType', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
        >
          <option value="all">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
}
