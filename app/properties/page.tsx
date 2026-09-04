import PropertyGrid from '@/components/PropertyGrid';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';

export const metadata = {
  title: 'Properties | Keyra',
  description: 'Browse and search properties on Keyra.',
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Properties</h1>
          <p className="text-gray-600">Discover and filter through our property listings</p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {/* Sidebar Filters */}
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>

          {/* Property Grid */}
          <div className="md:col-span-3">
            <PropertyGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
