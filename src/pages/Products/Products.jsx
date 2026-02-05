import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Products = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Our Products"
        subtitle="A complete suite of education and workforce management tools."
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Integrated Ecosystem"
        features={[
          { title: 'HRMS Suite', description: 'Complete Human Resource Management from hire to retire.', icon: 'Users' },
          { title: 'LMS Platform', description: 'Comprehensive Learning Management System for edu-institutes.', icon: 'BookOpen' },
          { title: 'Recruitment Cloud', description: 'Applicant Tracking System (ATS) for smart hiring.', icon: 'Search' },
          { title: 'Assessment Engine', description: 'AI-proctored online examination platform.', icon: 'PenTool' }
        ]}
      />

      <CTASection title="Request a Demo" text="See our products in action." actionText="Book Demo" />
    </div>
  );
};

export default Products;
