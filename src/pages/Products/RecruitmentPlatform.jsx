import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const RecruitmentPlatform = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Smart Recruitment Platform"
        subtitle="An intelligent Applicant Tracking System (ATS) to streamline your hiring."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Key Features"
        features={[
          { title: 'Resume Parsing', description: 'AI-driven parsing to extract candidate data automatically.', icon: 'FileText' },
          { title: 'Pipeline Management', description: 'Drag-and-drop kanban board for candidate status.', icon: 'Layout' },
          { title: 'Interview Scheduling', description: 'Automated calendar integration for interviews.', icon: 'Calendar' },
          { title: 'Collaborative Hiring', description: 'Team feedback and rating system.', icon: 'MessageSquare' }
        ]}
      />

      <CTASection title="Hire Smarter, Faster" actionText="Get Free Trial" />
    </div>
  );
};

export default RecruitmentPlatform;
