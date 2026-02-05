import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const StartupHiring = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Startup Hiring"
        subtitle="Agile recruitment for high-growth startups. Hire the core team that builds your vision."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Startup-Friendly Models"
        features={[
          { title: 'Equity Hiring', description: 'Finding candidates open to ESOPs and equity compensation.', icon: 'PieChart' },
          { title: 'Culture Fit', description: 'Hiring for the unique hustle and passion of startup life.', icon: 'Zap' },
          { title: 'Rapid Deployment', description: 'Immediate joining candidates to keep momentum going.', icon: 'Clock' },
          { title: 'Cost Effective', description: 'Flexible contracting models to suit burn rates.', icon: 'DollarSign' }
        ]}
      />

      <CTASection title="Build Your Dream Team" actionText="Hire Now" />
    </div>
  );
};

export default StartupHiring;
