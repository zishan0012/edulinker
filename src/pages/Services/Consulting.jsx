import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const Consulting = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="HR Consulting"
        subtitle="Strategic advice to transform your human resources from a support function to a business driver."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Consulting Areas"
        features={[
          { title: 'Organizational Design', description: 'Structuring your teams for maximum efficiency and agility.', icon: 'Layout' },
          { title: 'Performance Management', description: 'Designing appraisal systems that motivate and reward.', icon: 'TrendingUp' },
          { title: 'Compensation & Benefits', description: 'Benchmarking salaries to attract and retain top talent.', icon: 'DollarSign' },
          { title: 'HR Technology', description: 'Selecting and implementing the right HRMS for your needs.', icon: 'Monitor' }
        ]}
      />

      <ProcessFlow
        title="Our Approach"
        steps={[
          { title: 'Discovery', description: 'Understanding your business goals and current HR challenges.' },
          { title: 'Analysis', description: 'Deep dive into data and processes to identify root causes.' },
          { title: 'Solution Design', description: 'Developing tailored strategies and roadmap.' },
          { title: 'Implementation', description: 'Assisting in execution and change management.' }
        ]}
      />

      <CTASection title="Transform Your HR Strategy" actionText="Talk to a Consultant" />
    </div>
  );
};

export default Consulting;
