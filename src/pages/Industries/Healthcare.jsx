import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Healthcare = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Healthcare & Life Sciences"
        subtitle="Compassionate and skilled professionals for the healthcare industry."
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Healthcare Staffing"
        features={[
          { title: 'Doctors & Specialists', description: 'Consultants, Surgeons, Residents.', icon: 'Activity' },
          { title: 'Nursing Staff', description: 'Certified nurses for critical and general care.', icon: 'Heart' },
          { title: 'Allied Health', description: 'Technicians, physiotherapists, nutritionists.', icon: 'Plus' },
          { title: 'Hospital Admin', description: 'Management staff for hospital operations.', icon: 'Clipboard' }
        ]}
      />

      <CTASection title="Care for Your Patients" />
    </div>
  );
};

export default Healthcare;
