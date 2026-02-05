import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const BFSI = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Banking, Financial Services & Insurance"
        subtitle="High-integrity workforce solutions for the financial sector."
        image="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Roles We Close"
        features={[
          { title: 'Investment Bankers', description: 'Experts in M&A, equity research, and portfolio management.', icon: 'Briefcase' },
          { title: 'Risk Analysts', description: 'Professionals skilled in credit & market risk assessment.', icon: 'TrendingDown' },
          { title: 'Sales Officers', description: 'Field sales for CASA, loans, and insurance products.', icon: 'Users' },
          { title: 'Tech in Finance', description: 'Fintech developers, blockchain experts, cybersecurity.', icon: 'Code' }
        ]}
      />

      <CTASection title="Secure Talent for Finance" />
    </div>
  );
};

export default BFSI;
