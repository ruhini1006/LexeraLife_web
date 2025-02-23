import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const stats = [
  { number: '50,000+', label: 'Active Users' },
  { number: '95%', label: 'Success Rate' },
  { number: '100+', label: 'Countries' },
  { number: '24/7', label: 'Support' }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Educational Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Educational psychology expert with 15 years of experience in dyslexia research.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI Development',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'AI specialist focused on creating adaptive learning algorithms.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Learning Experience Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in creating engaging and accessible educational content.'
  },
  {
    name: 'David Park',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Leading research initiatives in learning technologies and methodologies.'
  }
];

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600">
              At LexeraLife, we are dedicated to transforming the lives of individuals with dyslexia through innovative technology and personalized learning solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to providing the highest quality educational support'
              },
              {
                icon: Users,
                title: 'Inclusivity',
                description: 'Creating accessible learning solutions for everyone'
              },
              {
                icon: Globe,
                title: 'Innovation',
                description: 'Continuously evolving our technology and methods'
              },
              {
                icon: Heart,
                title: 'Empathy',
                description: 'Understanding and supporting each learners unique journey'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}