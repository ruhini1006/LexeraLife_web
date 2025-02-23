// HeroSection.tsx
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import myBrainLogo from '../../assests/logo.png'; // Your custom logo

export default function HeroSection() {

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8 mt-10">
          <img src={myBrainLogo} alt="Custom Brain Logo" className="w-[200px] h-[200px]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Empowering Every Mind with Tailored Dyslexia Support
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Experience personalized learning through AI-powered tools and comprehensive dyslexia screening. Transform challenges into opportunities with LexeraLife.
        </p>
        <button className="group inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all">
          Get Started Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
