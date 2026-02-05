import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const LeadershipPrograms = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Leadership Programs"
        subtitle="Cultivating the next generation of visionaries and decision-makers."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Program Highlights"
        columns={2}
        features={[
          { title: 'Strategic Thinking', description: 'Developing a long-term vision and executing it effectively.', icon: 'Target' },
          { title: 'Change Management', description: 'Leading teams through organizational transitions.', icon: 'RefreshCcw' },
          { title: 'Emotional Intelligence', description: 'Understanding and managing self and team emotions.', icon: 'Heart' },
          { title: 'Decision Making', description: 'Data-driven and intuitive decision-making frameworks.', icon: 'CheckCircle' }
        ]}
      />

      <CTASection title="Lead with Confidence" />
    </div>
  );
};

export default LeadershipPrograms;
