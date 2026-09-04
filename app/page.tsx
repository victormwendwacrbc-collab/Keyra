import Link from 'next/link';
import { ArrowRight, Search, MapPin, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Find Your Perfect Property</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover and explore properties with Keyra, your modern property discovery platform.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Searching <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Keyra?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="text-blue-600" size={32} />,
              title: 'Advanced Search',
              description: 'Find properties with our powerful search and filtering tools.',
            },
            {
              icon: <MapPin className="text-blue-600" size={32} />,
              title: 'Location Insights',
              description: 'Explore neighborhood details and property locations.',
            },
            {
              icon: <Star className="text-blue-600" size={32} />,
              title: 'Top Listings',
              description: 'Browse our curated collection of premium properties.',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your property?</h2>
          <p className="text-gray-600 mb-8">Browse our extensive catalog of properties and find your perfect match.</p>
          <Link
            href="/properties"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
