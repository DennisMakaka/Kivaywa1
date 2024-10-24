import React from 'react';
import { Building, MapPin, Clock, Briefcase, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedBy: {
      name: string;
      imageUrl: string;
      graduationYear: number;
    };
    description: string;
    requirements: string[];
    postedDate: string;
  };
  onApply: (jobId: number) => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Building className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{job.company}</span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{job.postedDate}</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-600 line-clamp-2">{job.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.requirements.slice(0, 3).map((req, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {req}
              </span>
            ))}
            {job.requirements.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{job.requirements.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="ml-6 flex flex-col items-end">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Posted by</p>
              <p className="text-sm text-gray-500">{job.postedBy.name} '{job.postedBy.graduationYear}</p>
            </div>
            <img
              src={job.postedBy.imageUrl}
              alt={job.postedBy.name}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <button
            onClick={() => onApply(job.id)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}