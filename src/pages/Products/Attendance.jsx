import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Attendance = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Attendance System"
        subtitle="Touchless and geo-fenced attendance tracking for the modern workforce."
        image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Tracking Methods"
        features={[
          { title: 'Biometric Integration', description: 'Compatible with major hardware devices.', icon: 'Fingerprint' },
          { title: 'Mobile App', description: 'Selfie-based attendance with geo-tagging.', icon: 'Smartphone' },
          { title: 'Shift Rostering', description: 'Complex shift planning and rotation management.', icon: 'Clock' },
          { title: 'Overtime Calculation', description: 'Automated OT rules based on swipes.', icon: 'Calculator' }
        ]}
      />

      <CTASection title="Track Time Efficiently" />
    </div>
  );
};

export default Attendance;
