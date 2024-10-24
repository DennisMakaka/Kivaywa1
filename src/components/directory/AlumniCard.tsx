import React from 'react';
import { Mail, Linkedin, MapPin, Building } from 'lucide-react';

interface AlumniCardProps {
  alumni: {
    id: number;
    name: string;
    graduationYear: number;
    occupation: string;
    company: string;
    location: string;
    email: string;
    linkedin: string;
    imageUrl: string;
  };
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={alumni.imageUrl}
          alt={alumni.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{alumni.name}</h3>
          <p className="text-gray-600 text-sm">Class of {alumni.graduationYear}</p>
          
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Building className="w-4 h-4" />
              <span>{alumni.occupation} at {alumni.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{alumni.location}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <a
              href={`mailto:${alumni.email}`}
              className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href={alumni.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}