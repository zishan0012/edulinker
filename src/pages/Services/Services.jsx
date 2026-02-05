import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Services = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive HR, Recruitment, and Training solutions tailored to your business needs."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="What We Offer"
        subtitle="End-to-end workforce management solutions."
        features={[
          {
            title: 'Recruitment Services',
            description: 'From executive search to bulk hiring, we find the right talent for your organization.',
            icon: 'Users'
          },
          {
            title: 'Payroll Management',
            description: 'Error-free, compliant, and timely payroll processing services.',
            icon: 'Calculator'
          },
          {
            title: 'Corporate Training',
            description: 'Upskill your workforce with our customized training and development programs.',
            icon: 'BookOpen'
          },
          {
            title: 'HR Consulting',
            description: 'Strategic HR advisory to optimize your people processes and policies.',
            icon: 'Briefcase'
          },
          {
            title: 'Compliance Support',
            description: 'Navigating complex labor laws and regulations to ensure full compliance.',
            icon: 'ShieldCheck'
          },
          {
            title: 'Background Verification',
            description: 'Thorough checks to ensure you hire trustworthy and verified candidates.',
            icon: 'UserCheck'
          }
        ]}
      />

      <CTASection
        title="Need a Custom Solution?"
        text="Contact our experts to discuss your specific requirements."
        actionText="Contact Us"
      />
    </div>
  );
};

export default Services;
