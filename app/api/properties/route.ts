import { NextResponse } from 'next/server';

// Mock properties data
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
  },
];

/**
 * GET /api/properties
 * Fetch properties with optional filtering
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '9999999');
  const bedrooms = parseInt(searchParams.get('bedrooms') || '0');

  // Filter properties
  const filtered = mockProperties.filter((property) => {
    const matchesSearch =
      search === '' ||
      property.title.toLowerCase().includes(search) ||
      property.location.toLowerCase().includes(search);
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;

    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  return NextResponse.json({
    success: true,
    data: filtered,
    count: filtered.length,
  });
}
