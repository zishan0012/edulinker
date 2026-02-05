import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const EnterpriseHiring = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Enterprise Hiring"
        subtitle="Robust recruitment frameworks for large-scale, multi-location hiring needs."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Enterprise Advantages"
        features={[
          { title: 'Dedicated Delivery Teams', description: 'Exclusive account managers and sourcing teams.', icon: 'Users' },
          { title: 'ATS Integration', description: 'Seamless workflow integration with your HR platforms.', icon: 'Link' },
          { title: 'Diversity & Inclusion', description: 'Strategies to build a diverse and inclusive workforce.', icon: 'Heart' },
          { title: 'Employer Branding', description: 'Enhancing your EV to attract top tier talent.', icon: 'Star' }
        ]}
      />

      <CTASection title="Scale Your Enterprise" />
    </div>
  );
};

export default EnterpriseHiring;
