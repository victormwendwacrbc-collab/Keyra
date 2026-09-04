'use client';

import { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

export default function PropertyGrid() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        const data = await response.json();
        setProperties(data.data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-72 animate-pulse" />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No properties found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
