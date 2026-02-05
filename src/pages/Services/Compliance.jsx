import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Compliance = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Regulatory Compliance"
        subtitle="Navigating the complex landscape of Indian labor laws so you don't have to."
        image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Our Compliance Services"
        features={[
          { title: 'Establishment Compliance', description: 'Shops & Establishment Act, Factory Act registrations.', icon: 'Building' },
          { title: 'Payroll Compliance', description: 'PF, ESIC, PT, TDS management.', icon: 'FileText' },
          { title: 'Labor Law Advisory', description: 'Expert legal opinion on complex labor issues.', icon: 'UserCheck' },
          { title: 'Audit Support', description: 'Handling inspections from government authorities.', icon: 'Shield' }
        ]}
      />

      <CTASection title="Minimize Legal Risks" actionText="Consult an Expert" />
    </div>
  );
};

export default Compliance;
