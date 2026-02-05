import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const Recruitment = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Recruitment Services"
        subtitle="Connecting you with top-tier talent to drive your business forward."
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Why Choose EduLinker Recruitment?"
        features={[
          {
            title: 'Extensive Database',
            description: 'Access to a vast pool of pre-screened and qualified candidates across industries.',
            icon: 'Database'
          },
          {
            title: 'Quick Turnaround',
            description: 'Efficient processes to close your open positions faster without compromising quality.',
            icon: 'Clock'
          },
          {
            title: 'Expert Recruiters',
            description: 'Dedicated domain specialists who understand your specific technical and cultural needs.',
            icon: 'UserCheck'
          },
          {
            title: 'Customized Hiring',
            description: 'Tailored recruitment strategies for startups, SMEs, and large enterprises.',
            icon: 'Settings'
          }
        ]}
      />

      <ProcessFlow
        title="Our Recruitment Process"
        steps={[
          { title: 'Requirement Analysis', description: 'We understand your job description, culture, and specific needs.' },
          { title: 'Sourcing & Screening', description: 'Our team identifies and interviews potential candidates.' },
          { title: 'Interview Coordination', description: 'We schedule and manage interviews with shortlisted candidates.' },
          { title: 'Onboarding Support', description: 'Assistance with negotiation and smooth onboarding of the new hire.' }
        ]}
      />

      <CTASection
        title="Start Hiring Today"
        text="Tell us your requirements and let us find your next star employee."
        actionText="Post a Job"
      />
    </div>
  );
};

export default Recruitment;
