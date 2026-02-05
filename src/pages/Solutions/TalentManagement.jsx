import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const TalentManagement = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Talent Management"
        subtitle="Attract, develop, motivate, and retain high-performing employees."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Holistic Talent Cycle"
        features={[
          { title: 'Performance Mgmt', description: 'Continuous feedback and goal alignment.', icon: 'Target' },
          { title: 'L&D', description: 'Personalized learning paths for career growth.', icon: 'BookOpen' },
          { title: 'Rewards & Recognition', description: 'Fair and motivating compensation structures.', icon: 'Gift' },
          { title: 'Engagement', description: 'Surveys and initiatives to potential boost morale.', icon: 'Smile' }
        ]}
      />

      <CTASection title="Unlock Potential" />
    </div>
  );
};

export default TalentManagement;
