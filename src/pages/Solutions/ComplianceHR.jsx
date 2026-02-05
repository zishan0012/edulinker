import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ComplianceHR = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Compliance-Ready HR"
        subtitle="Align your HR practices with legal requirements to avoid penalties and legal hurdles."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Compliance Areas"
        features={[
          { title: 'POSH Compliance', description: 'Internal committee formation and awareness training.', icon: 'Shield' },
          { title: 'Diversity Compliance', description: 'Adhering to equal opportunity employment laws.', icon: 'Users' },
          { title: 'Data Privacy', description: 'Ensuring employee data is handled as per GDP/DPDP acts.', icon: 'Lock' },
          { title: 'Audit Readiness', description: 'Maintaining records to be inspection-ready at all times.', icon: 'FileText' }
        ]}
      />

      <CTASection title="Secure Your Business" actionText="Get Compliant" />
    </div>
  );
};

export default ComplianceHR;
