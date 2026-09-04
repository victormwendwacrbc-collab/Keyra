import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PropertyDetailPageProps) {
  return {
    title: `Property ${params.id} | Keyra`,
    description: 'View detailed information about this property.',
  };
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  // TODO: Fetch property data based on params.id
  // For now, returning a placeholder

  const property = {
    id: params.id,
    title: 'Beautiful Modern House',
    price: 450000,
    location: 'San Francisco, CA',
    image: 'https://res.cloudinary.com/demo/image/fetch/https://example.com/property.jpg',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    description: 'A beautiful modern house with all the amenities you need.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <a href="/properties" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Properties
        </a>

        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-96 bg-gray-200">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              onError={() => {
                // Fallback for broken images
              }}
            />
          </div>

          {/* Details */}
          <div className="p-8">
            {/* Title and Price */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600">${property.price.toLocaleString()}</div>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y">
              <div className="flex items-center gap-3">
                <Bed className="text-blue-600" size={24} />
                <div>
                  <p className="text-gray-600 text-sm">Bedrooms</p>
                  <p className="text-xl font-semibold">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="text-blue-600" size={24} />
                <div>
                  <p className="text-gray-600 text-sm">Bathrooms</p>
                  <p className="text-xl font-semibold">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Square className="text-blue-600" size={24} />
                <div>
                  <p className="text-gray-600 text-sm">Square Feet</p>
                  <p className="text-xl font-semibold">{property.sqft.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">About this property</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
