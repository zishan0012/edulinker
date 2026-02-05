import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Manufacturing = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Manufacturing & Engineering"
        subtitle="Skilled manpower for the production lines of tomorrow."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Industrial Staffing"
        features={[
          { title: 'Plant Operations', description: 'Plant heads, production managers, quality control.', icon: 'Factory' },
          { title: 'R&D Engineering', description: 'Design engineers, R&D specialists.', icon: 'PenTool' },
          { title: 'Skilled Labor', description: 'Technicians, machinists, welders, fitters.', icon: 'Tool' },
          { title: 'Supply Chain', description: 'Procurement, logistics, warehouse management.', icon: 'Truck' }
        ]}
      />

      <CTASection title="Build With Precision" />
    </div>
  );
};

export default Manufacturing;
