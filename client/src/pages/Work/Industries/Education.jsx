import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const Education = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Education & EdTech"
        subtitle="Powering the knowledge economy with educators and innovators."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Education Roles"
        features={[
          { title: 'Faculty & Teachers', description: 'K-12, Higher Ed, and Test Prep faculty.', icon: 'BookOpen' },
          { title: 'Academic Counselors', description: 'Student guidance and admissions experts.', icon: 'UserCheck' },
          { title: 'EdTech Developers', description: 'Building LMS and learning apps.', icon: 'Monitor' },
          { title: 'Content Creators', description: 'SMEs for curriculum design and video content.', icon: 'Video' }
        ]}
      />

      <CTASection title="Transform Education" />
    </div>
  );
};

export default Education;
