import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const NonITHiring = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Non-IT Hiring Solutions"
        subtitle="Supporting traditional industries with modernized recruitment practices."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Sectors"
        features={[
          { title: 'Engineering & Mfg', description: 'Core engineering and plant roles.', icon: 'Tool' },
          { title: 'Telecommunications', description: 'Field engineers, support staff.', icon: 'Wifi' },
          { title: 'Pharma & Biotech', description: 'R&D, lab technicians, medical reps.', icon: 'Activity' },
          { title: 'FMCG & FMCD', description: 'Sales, distribution, logistics.', icon: 'ShoppingCart' }
        ]}
      />

      <CTASection title="Hire Skilled Professionals" />
    </div>
  );
};

export default NonITHiring;
