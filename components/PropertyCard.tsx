import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    location: string;
    image: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title and Price */}
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{property.title}</h3>
          <p className="text-blue-600 font-bold text-xl mb-2">${property.price.toLocaleString()}</p>
          <p className="text-gray-600 text-sm mb-4">{property.location}</p>

          {/* Features */}
          <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} />
              <span>{property.sqft.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
