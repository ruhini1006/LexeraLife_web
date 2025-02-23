import React from 'react';
import HeroSection from '../components/HeroSection.tsx';
import AboutSection from '../components/AboutSection.tsx';
import FeaturesSection from '../components/FeaturesSection.tsx';
import HowItWorks from '../components/HowItWorks.tsx';
import CTASection from '../components/CTASection.tsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
}