import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Awards = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Awards & Recognition"
        subtitle="Celebrating our commitment to excellence and innovation in the HR tech space."
        image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Hall of Fame"
        columns={3}
        features={[
          { title: 'Best HR Tech Startup', description: 'Awarded by Tech Circle 2024.', icon: 'Award' },
          { title: 'Excellence in Recruitment', description: 'Recognized by HR Association of India.', icon: 'Star' },
          { title: 'Most Innovative Product', description: 'For our AI-driven Assessment Platform.', icon: 'Zap' },
          { title: 'Customer Choice Award', description: ' voted by 500+ satisfied clients.', icon: 'ThumbsUp' },
          { title: 'Top 10 to Watch', description: 'Featured in Business World Magazine.', icon: 'TrendingUp' },
          { title: 'Sustainability Award', description: 'For our green office initiatives.', icon: 'Leaf' }
        ]}
      />

      <CTASection title="Partner with a Winner" />
    </div>
  );
};

export default Awards;
