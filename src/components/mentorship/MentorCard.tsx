import React from 'react';
import { Briefcase, Clock, Users, Award } from 'lucide-react';

interface MentorCardProps {
  mentor: {
    id: number;
    name: string;
    title: string;
    company: string;
    expertise: string[];
    yearsOfExperience: number;
    menteeCount: number;
    imageUrl: string;
    availability: string;
  };
  onRequestMentorship: (mentorId: number) => void;
}

export default function MentorCard({ mentor, onRequestMentorship }: MentorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <img
          src={mentor.imageUrl}
          alt={mentor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{mentor.name}</h3>
          <p className="text-gray-600">{mentor.title} at {mentor.company}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {mentor.expertise.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span>{mentor.yearsOfExperience}+ years</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{mentor.menteeCount} mentees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{mentor.availability}</span>
            </div>
          </div>

          <button
            onClick={() => onRequestMentorship(mentor.id)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Request Mentorship
          </button>
        </div>
      </div>
    </div>
  );
}