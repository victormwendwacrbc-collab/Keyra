import { NextResponse } from 'next/server';

// Reuse the mock data from the list route. Copy the same array so this route is self-contained.
const mockProperties = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: 350000,
    location: 'Downtown',
    image: 'https://res.cloudinary.com/demo/image/fetch/https://example.com/property1.jpg',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: 'A modern apartment in the city center with easy access to amenities.',
  },
  {
    id: '2',
    title: 'Spacious Family Home',
    price: 550000,
    location: 'Suburbs',
    image: 'https://res.cloudinary.com/demo/image/fetch/https://example.com/property2.jpg',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    description: 'A spacious family home with a large garden and garage.',
  },
  {
    id: '3',
    title: 'Luxury Beach Villa',
    price: 950000,
    location: 'Beachfront',
    image: 'https://res.cloudinary.com/demo/image/fetch/https://example.com/property3.jpg',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    description: 'A luxury villa with sea views and private access to the beach.',
  },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const prop = mockProperties.find((p) => p.id === id);

  if (!prop) {
    return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: prop });
}
