import React, { useState } from 'react';
import AlumniFilter from './AlumniFilter';
import AlumniCard from './AlumniCard';

const mockAlumni = [
  {
    id: 1,
    name: 'David Kimani',
    graduationYear: 2020,
    occupation: 'Software Engineer',
    company: 'Microsoft',
    location: 'Nairobi',
    email: 'david.kimani@example.com',
    linkedin: 'https://linkedin.com/in/davidkimani',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Sarah Wanjiku',
    graduationYear: 2019,
    occupation: 'Financial Analyst',
    company: 'Equity Bank',
    location: 'Nairobi',
    email: 'sarah.wanjiku@example.com',
    linkedin: 'https://linkedin.com/in/sarahwanjiku',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'John Ochieng',
    graduationYear: 2021,
    occupation: 'Medical Doctor',
    company: 'Kenyatta National Hospital',
    location: 'Kisumu',
    email: 'john.ochieng@example.com',
    linkedin: 'https://linkedin.com/in/johnochieng',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  }
];

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');

  const filteredAlumni = mockAlumni.filter((alumni) => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = yearFilter ? alumni.graduationYear === parseInt(yearFilter) : true;
    const matchesLocation = locationFilter === 'All Locations' ? true : alumni.location === locationFilter;

    return matchesSearch && matchesYear && matchesLocation;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Alumni Directory</h1>
        <p className="text-gray-600 mt-1">Connect with fellow Kivaywa alumni</p>
      </div>

      <AlumniFilter
        onSearch={setSearchTerm}
        onFilterYear={setYearFilter}
        onFilterLocation={setLocationFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAlumni.map((alumni) => (
          <AlumniCard key={alumni.id} alumni={alumni} />
        ))}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No alumni found matching your criteria</p>
        </div>
      )}
    </div>
  );
}