import React from 'react';
import { Bot, Brain, GamepadIcon, FileText } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'Our intelligent chatbot, Lexera, provides real-time assistance to dyslexic users, offering personalized learning support and guidance to help with reading, writing, and comprehension.',
  },
  {
    icon: Brain,
    title: 'Dyslexia Recognition Test',
    description: 'Take the dyslexia recognition test to assess your reading challenges. The test helps identify dyslexic patterns and provides insights for personalized learning recommendations.',
  },
  {
    icon: GamepadIcon,
    title: 'Interactive Learning Tools',
    description: 'Engage in fun, interactive games and activities that are designed to enhance reading and writing skills, making learning enjoyable and effective for dyslexic individuals.',
  },
  {
    icon: FileText,
    title: 'Customizable Text Features',
    description: 'Personalize your learning experience with customizable text settings, including adjustable fonts, colors, and background settings, to reduce visual stress and improve focus.',
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
