import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ContractStaffing = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Contract Staffing"
        subtitle="Flexible workforce solutions for short-term projects and seasonal demands."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Why Contract Staffing?"
        features={[
          { title: 'Flexibility', description: 'Scale your team up or down based on project needs.', icon: 'RefreshCw' },
          { title: 'Reduced Liability', description: 'We handle payroll, benefits, and statutory compliance.', icon: 'Shield' },
          { title: 'Immediate Availability', description: 'Access to a pool of candidates ready to join immediately.', icon: 'Clock' },
          { title: 'Try & Buy', description: 'Evaluate performance on contract before offering permanent roles.', icon: 'UserPlus' }
        ]}
      />

      <CTASection title="Need Temporary Staff?" actionText="Get Staffing" />
    </div>
  );
};

export default ContractStaffing;
