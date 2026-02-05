import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const HRTransformation = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="HR Transformation"
        subtitle="Modernize your human resources function to drive business agility and innovation."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Transformation Drivers"
        features={[
          { title: 'Digital HR', description: 'Moving from paper-based to cloud-based HR systems.', icon: 'Cloud' },
          { title: 'Employee Experience', description: 'Redesigning journeys from onboarding to exit.', icon: 'Smile' },
          { title: 'Agile HR', description: 'Adopting agile methodologies in HR operations.', icon: 'Zap' },
          { title: 'Data-Driven HR', description: 'Using analytics for talent decisions.', icon: 'BarChart' }
        ]}
      />

      <ProcessFlow
        title="Transformation Journey"
        steps={[
          { title: 'Assess', description: 'Evaluate current HR maturity level.' },
          { title: 'Design', description: 'Create future-state operating model.' },
          { title: 'Implement', description: 'Rollout technologies and process changes.' },
          { title: 'Sustain', description: 'Change management and continuous improvement.' }
        ]}
      />

      <CTASection title="Future-Proof Your HR" text="Start your transformation journey today." />
    </div>
  );
};

export default HRTransformation;
