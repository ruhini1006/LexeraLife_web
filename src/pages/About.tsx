import React from 'react';

const team = [
  {
    name: 'Madusha Nuwan',
    role: 'Team Leader',
    image: '../../assests/team/madusha.jpg',  // Replace with your image path
    bio: 'Educational psychology expert with 15 years of experience in dyslexia research.'
  },
  {
    name: 'Uthpala',
    role: 'Head of AI Development',
    image: '../../assests/team/madusha.jpg',  // Replace with your image path
    bio: 'AI specialist focused on creating adaptive learning algorithms.'
  },
  {
    name: 'Teeshan',
    role: 'Learning Experience Designer',
    image: '../../assests/team/teeshan.jpg',  // Replace with your image path
    bio: 'Expert in creating engaging and accessible educational content.'
  },
  {
    name: 'Ruhini',
    role: 'Research Director',
    image: '../../assests/team/madusha.jpg',  // Replace with your image path
    bio: 'Leading research initiatives in learning technologies and methodologies.'
  },
  {
    name: 'Kithmini',
    role: 'Research Director',
    image: '../../assests/team/madusha.jpg',  // Replace with your image path
    bio: 'Specializing in educational technologies and their application in dyslexia research.'
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
              About LexeraLife
            </h1>
            <p className="text-xl text-gray-600">
              LexeraLife is an innovative platform designed to provide personalized support to individuals with dyslexia. Our goal is to help individuals overcome learning challenges by leveraging cutting-edge technology and educational expertise.
            </p>
            <p className="text-lg text-gray-500 mt-4">
              We are passionate about making dyslexia support more accessible, effective, and engaging.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <p className="text-xl text-gray-600 text-center">
            At LexeraLife, our mission is to empower individuals with dyslexia by providing personalized learning solutions that cater to their unique needs. We aim to transform the educational experience through AI-driven tools and research-backed strategies.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
