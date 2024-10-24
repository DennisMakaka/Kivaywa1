import React, { useState } from 'react';
import { Search, Briefcase } from 'lucide-react';
import JobCard from './JobCard';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Safaricom',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    salary: 'KES 200-300K',
    postedBy: {
      name: 'James Mwangi',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      graduationYear: 2015
    },
    description: 'We are seeking an experienced software engineer to join our mobile money team...',
    requirements: ['5+ years experience', 'Java', 'Spring Boot', 'Microservices', 'AWS'],
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Financial Analyst',
    company: 'KCB Bank',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    salary: 'KES 150-200K',
    postedBy: {
      name: 'Alice Kamau',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      graduationYear: 2017
    },
    description: 'Looking for a detail-oriented financial analyst to join our corporate banking division...',
    requirements: ['3+ years experience', 'CFA', 'Financial Modeling', 'Risk Analysis'],
    postedDate: '1 week ago'
  }
];

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');

  const handleApply = (jobId: number) => {
    // In a real app, this would open a modal or navigate to application form
    alert(`Applying for job ${jobId}`);
  };

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === 'All Locations' || job.location.includes(locationFilter);
    const matchesType = typeFilter === 'All Types' || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Alumni Job Board</h1>
        <p className="text-gray-600 mt-1">Discover opportunities shared by fellow alumni</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <select
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="All Locations">All Locations</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Remote">Remote</option>
          </select>

          <select
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="All Types">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Briefcase className="w-4 h-4" />
            Post a Job
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={handleApply}
          />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No jobs found matching your criteria</p>
        </div>
      )}
    </div>
  );
}