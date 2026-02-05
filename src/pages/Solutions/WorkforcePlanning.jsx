import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const WorkforcePlanning = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Workforce Planning"
        subtitle="Strategic alignment of your workforce with ensuring you have the right people at the right time."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Planning Strategic Pillars"
        features={[
          { title: 'Supply & Demand', description: 'Forecasting talent gaps and surpluses.', icon: 'Activity' },
          { title: 'Skills Inventory', description: 'Mapping current capabilities against future needs.', icon: 'List' },
          { title: 'Succession Planning', description: 'Identifying and grooming future leaders.', icon: 'UserPlus' },
          { title: 'Cost Optimization', description: 'Rationalizing workforce costs vs productivity.', icon: 'DollarSign' }
        ]}
      />

      <CTASection title="Plan for Growth" />
    </div>
  );
};

export default WorkforcePlanning;
