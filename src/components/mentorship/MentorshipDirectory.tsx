import React, { useState } from 'react';
import { Search } from 'lucide-react';
import MentorCard from './MentorCard';

const mockMentors = [
  {
    id: 1,
    name: 'James Mwangi',
    title: 'Senior Software Engineer',
    company: 'Safaricom',
    expertise: ['Software Development', 'Cloud Architecture', 'Leadership'],
    yearsOfExperience: 8,
    menteeCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    availability: '2hrs/week'
  },
  {
    id: 2,
    name: 'Alice Kamau',
    title: 'Finance Director',
    company: 'KCB Bank',
    expertise: ['Financial Planning', 'Investment', 'Banking'],
    yearsOfExperience: 12,
    menteeCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    availability: '4hrs/week'
  },
  {
    id: 3,
    name: 'Peter Omondi',
    title: 'Medical Director',
    company: 'Aga Khan Hospital',
    expertise: ['Healthcare Management', 'Medical Practice', 'Research'],
    yearsOfExperience: 15,
    menteeCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    availability: '3hrs/week'
  }
];

export default function MentorshipDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');

  const handleMentorshipRequest = (mentorId: number) => {
    // In a real app, this would open a modal or navigate to a request form
    alert(`Mentorship request sent to mentor ${mentorId}`);
  };

  const filteredMentors = mockMentors.filter((mentor) => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesExpertise = 
      selectedExpertise === 'All' || 
      mentor.expertise.includes(selectedExpertise);

    return matchesSearch && matchesExpertise;
  });

  const allExpertise = Array.from(
    new Set(mockMentors.flatMap(mentor => mentor.expertise))
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Find a Mentor</h1>
        <p className="text-gray-600 mt-1">Connect with experienced alumni for guidance and growth</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or expertise..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <select
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="All">All Expertise</option>
            {allExpertise.map((expertise) => (
              <option key={expertise} value={expertise}>
                {expertise}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredMentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            onRequestMentorship={handleMentorshipRequest}
          />
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No mentors found matching your criteria</p>
        </div>
      )}
    </div>
  );
}