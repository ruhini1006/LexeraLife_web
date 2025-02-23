import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "LexeraLife has transformed my child's learning experience. The personalized approach and interactive tools have made a real difference.",
    author: "Sarah M.",
    role: "Parent"
  },
  {
    quote: "As an educator, I've seen remarkable progress in students using LexeraLife. The AI-powered support is truly revolutionary.",
    author: "Dr. James Wilson",
    role: "Educational Psychologist"
  },
  {
    quote: "The screening tools and personalized learning paths have helped me understand and overcome my challenges with dyslexia.",
    author: "Michael R.",
    role: "Student"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <Quote className="w-8 h-8 text-indigo-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}