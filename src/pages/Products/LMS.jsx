import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const LMS = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Learning Management System"
        subtitle="A unified platform to deliver, track, and manage education and training."
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="LMS Capabilities"
        features={[
          { title: 'Interactive Content', description: 'Support for video, audio, SCORM, and PDF formats.', icon: 'Video' },
          { title: 'Live Classes', description: 'Integrated Zoom/Teams support for virtual classrooms.', icon: 'Wifi' },
          { title: 'Gamification', description: 'Badges, points, and leaderboards to engage learners.', icon: 'Award' },
          { title: 'Analytics', description: 'Deep insights into learner progress and engagement.', icon: 'BarChart' }
        ]}
      />

      <CTASection title="Empower Your Learners" actionText="Demo LMS" />
    </div>
  );
};

export default LMS;
