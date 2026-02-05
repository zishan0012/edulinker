import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const Process = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Our Process"
        subtitle="A systematic approach ensuring quality, consistency, and timely delivery."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
      />

      <ProcessFlow
        title="The Delivery Lifecycle"
        steps={[
          { title: 'Consultation', description: 'Deep dive into your requirements and business context.' },
          { title: 'Strategy', description: 'Formulating a tailored plan with clear milestones.' },
          { title: 'Execution', description: 'Deployment of resources and rigorous implementation.' },
          { title: 'Review & Optimize', description: 'Continuous monitoring and feedback integration.' }
        ]}
      />

      <FeatureGrid
        title="Quality Assurance"
        features={[
          { title: 'ISO Certified', description: 'Adhering to global standards of quality management.', icon: 'CheckCircle' },
          { title: 'Agile Methodology', description: 'Flexible and iterative delivery model.', icon: 'RefreshCw' },
          { title: 'Data Security', description: 'Strict protocols to protect your sensitive information.', icon: 'Lock' }
        ]}
      />

      <CTASection title="Experience Excellence" />
    </div>
  );
};

export default Process;
