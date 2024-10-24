import React from 'react';
import { Search } from 'lucide-react';

interface AlumniFilterProps {
  onSearch: (value: string) => void;
  onFilterYear: (year: string) => void;
  onFilterLocation: (location: string) => void;
}

export default function AlumniFilter({ onSearch, onFilterYear, onFilterLocation }: AlumniFilterProps) {
  const graduationYears = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
  const locations = ['All Locations', 'Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Overseas'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search alumni..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>

        <select
          onChange={(e) => onFilterYear(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        >
          <option value="">All Years</option>
          {graduationYears.map((year) => (
            <option key={year} value={year}>
              Class of {year}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => onFilterLocation(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}