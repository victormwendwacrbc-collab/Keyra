'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by location, property type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        <button
          type="submit"
          className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
