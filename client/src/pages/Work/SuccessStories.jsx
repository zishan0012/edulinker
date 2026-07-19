import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const SuccessStories = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Success Stories"
        subtitle="Celebrating the milestones of our clients and partners."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Impact Highlights"
        columns={3}
        features={[
          { title: 'Saved 1000+ Hours', description: 'For a logistics client by automating payroll.', icon: 'Clock' },
          { title: 'Zero Compliance Issues', description: 'Maintained 100% clean audit track record.', icon: 'ShieldCheck' },
          { title: '2X Revenue Growth', description: 'For our BPP partners in the first year.', icon: 'TrendingUp' },
          { title: '50k+ Careers', description: 'Students placed in top companies via our drives.', icon: 'Users' },
          { title: 'Best Vendor Award', description: ' received from 3 Fortune 500 clients.', icon: 'Award' },
          { title: 'Global Expansion', description: 'Helped a startup set up teams in 3 countries.', icon: 'Globe' }
        ]}
      />

      <CTASection title="Create Your Success Story" />
    </div>
  );
};

export default SuccessStories;
