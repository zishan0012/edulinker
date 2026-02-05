import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Solutions = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Our Solutions"
        subtitle="Tailored strategies to solve your most complex workforce challenges."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Business-Focused Solutions"
        subtitle="We don't just fill positions; we solve business problems through people."
        features={[
          { title: 'Enterprise Hiring', description: 'Scalable recruitment frameworks for large organizations.', icon: 'Building' },
          { title: 'Startup Hiring', description: 'Agile hiring for high-growth startups and unicorns.', icon: 'Rocket' },
          { title: 'HR Transformation', description: 'Reinventing HR service delivery models for efficiency.', icon: 'Zap' },
          { title: 'Workforce Planning', description: 'Aligning talent usage with business strategy.', icon: 'Map' },
          { title: 'Compliance HR', description: 'Risk-free HR operations ensuring 100% statutory adherence.', icon: 'Shield' }
        ]}
      />

      <CTASection title="Find Your Solution" actionText="Consult With Us" />
    </div>
  );
};

export default Solutions;
