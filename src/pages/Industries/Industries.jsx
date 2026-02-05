import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Industries = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Industries We Serve"
        subtitle="Specialized workforce solutions for a diverse range of sectors."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Sector Expertise"
        subtitle="Our domain specialists understand the unique challenges of your industry."
        features={[
          { title: 'BFSI', description: 'Banking, Financial Services, and Insurance.', icon: 'Landmark' },
          { title: 'IT & Software', description: 'Product companies, Service firms, and Startups.', icon: 'Monitor' },
          { title: 'Healthcare', description: 'Hospitals, Clinics, Pharma, and Life Sciences.', icon: 'Heart' },
          { title: 'Manufacturing', description: 'Automotive, Heavy Engineering, and Electronics.', icon: 'Settings' },
          { title: 'Retail & E-commerce', description: 'Supply chain, warehousing, and storefronts.', icon: 'ShoppingBag' },
          { title: 'Education', description: 'Schools, Colleges, and EdTech companies.', icon: 'Book' }
        ]}
      />

      <CTASection title="Find Solutions for Your Industry" actionText="Contact Us" />
    </div>
  );
};

export default Industries;
