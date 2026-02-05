import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Certification = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Certification System"
        subtitle="Issue verifiable digital credentials and certificates."
        image="https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Credential Features"
        features={[
          { title: 'Digital Badges', description: 'Shareable achievement badges for social media.', icon: 'Award' },
          { title: 'Blockchain Secure', description: 'Tamper-proof verifiable certificates.', icon: 'Link' },
          { title: 'Custom Templates', description: 'Design certificates with your brand identity.', icon: 'Image' },
          { title: 'Bulk Issuance', description: 'Generate thousands of certificates in one go.', icon: 'Printer' }
        ]}
      />

      <CTASection title="Validate Achievements" />
    </div>
  );
};

export default Certification;
