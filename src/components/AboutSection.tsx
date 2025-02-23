import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Revolutionizing Dyslexia Support
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              LexeraLife combines cutting-edge AI technology with proven educational methodologies to provide personalized support for individuals with dyslexia. Our platform adapts to each user's unique learning style, making education more accessible and enjoyable.
            </p>
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-900 font-medium">Trusted by educators worldwide</span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students learning together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}