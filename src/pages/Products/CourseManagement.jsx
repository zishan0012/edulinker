import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const CourseManagement = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Course Management"
        subtitle="Efficient tools for curriculum planning and academic scheduling."
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Academic Features"
        features={[
          { title: 'Curriculum Builder', description: 'Easy drag-and-drop course structuring.', icon: 'Layout' },
          { title: 'Timetable', description: 'Automated scheduling of classes and resources.', icon: 'Calendar' },
          { title: 'Assignment Grading', description: 'Workflow for submission and evaluation.', icon: 'CheckSquare' },
          { title: 'Resource Library', description: 'Centralized repository for study materials.', icon: 'Book' }
        ]}
      />

      <CTASection title="Streamline Academics" />
    </div>
  );
};

export default CourseManagement;
