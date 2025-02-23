import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their educational experience with LexeraLife.
        </p>
        <button className="group inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all">
          Get Started Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}