import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ITHiring = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="IT Hiring Solutions"
        subtitle="End-to-end IT staffing services, from contract to permanent placements."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Tech Domains"
        columns={3}
        features={[
          { title: 'Application Dev', description: 'Web and mobile app developers.', icon: 'Code' },
          { title: 'Infrastructure', description: 'Cloud, Network, and System Admins.', icon: 'Server' },
          { title: 'ERP/CRM', description: 'SAP, Salesforce, Oracle consultants.', icon: 'Database' },
          { title: 'Emerging Tech', description: 'IoT, AI/ML, Blockchain experts.', icon: 'Cpu' },
          { title: 'Project Mgmt', description: 'Technical Project Managers, Scrum Masters.', icon: 'Clipboard' },
          { title: 'Leadership', description: 'CTOs, VP Engineering, Engineering Managers.', icon: 'Award' }
        ]}
      />

      <CTASection title="Your Tech Talent Partner" />
    </div>
  );
};

export default ITHiring;
