import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const Retail = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Retail & E-commerce"
        subtitle="Staffing for the dynamic world of consumer goods and online commerce."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Retail Profiles"
        features={[
          { title: 'Store Operations', description: 'Store managers, visual merchandisers.', icon: 'ShoppingBag' },
          { title: 'Sales Associates', description: 'Customer-facing sales staff.', icon: 'Smile' },
          { title: 'E-commerce', description: 'Catalog managers, digital marketing execs.', icon: 'Globe' },
          { title: 'Logistics', description: 'Delivery partners, fleet managers.', icon: 'Truck' }
        ]}
      />

      <CTASection title="Enhance Customer Experience" />
    </div>
  );
};

export default Retail;
