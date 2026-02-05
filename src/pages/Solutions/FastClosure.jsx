import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const FastClosure = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Fast Closure Model"
        subtitle="Accelerated hiring for urgent and critical business positions."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Speed & Precision"
        features={[
          { title: '24h Resume Submission', description: 'First batch of qualified resumes within 24 hours.', icon: 'Clock' },
          { title: 'Pre-Vetted Talent', description: 'Candidates from our "Available Immediately" pool.', icon: 'CheckCircle' },
          { title: 'Parallel Processing', description: 'Multiple recruiters working simultaneously on your role.', icon: 'Layers' },
          { title: 'Priority Support', description: 'Your mandate becomes our top organizational priority.', icon: 'Star' }
        ]}
      />

      <CTASection title="Close Roles in Record Time" actionText="Start Express Hiring" />
    </div>
  );
};

export default FastClosure;
