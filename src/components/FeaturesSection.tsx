import React from 'react';
import { Bot, Brain, GamepadIcon, LineChart } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'Get instant support from our intelligent chatbot trained to understand and assist with dyslexia-related challenges.'
  },
  {
    icon: Brain,
    title: 'Dyslexia Screening',
    description: 'Comprehensive assessment tools to identify dyslexia patterns and create personalized learning paths.'
  },
  {
    icon: GamepadIcon,
    title: 'Interactive Learning',
    description: 'Engaging games and activities designed to make learning fun while improving reading and writing skills.'
  }
  
];

export default function FeaturesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Powerful Features for Better Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}