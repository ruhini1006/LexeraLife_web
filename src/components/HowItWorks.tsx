import React from 'react';
import { ClipboardCheck, UserCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Take the Assessment',
    description: 'Complete our comprehensive dyslexia screening test to identify your specific needs.'
  },
  {
    icon: UserCircle,
    title: 'Get Personalized Plan',
    description: 'Receive a customized learning plan based on your assessment results.'
  },
  {
    icon: Rocket,
    title: 'Start Learning',
    description: 'Begin your journey with interactive exercises and AI-powered support.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How LexeraLife Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-indigo-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}