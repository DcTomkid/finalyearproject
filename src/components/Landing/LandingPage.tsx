import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { HowItWorksSection } from './HowItWorksSection';
import { FeaturesSection } from './FeaturesSection';
import { AdminSection } from './AdminSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={onGetStarted} />
      <AboutSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AdminSection />
      <ContactSection />
      <Footer />
    </div>
  );
};