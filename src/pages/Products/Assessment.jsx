import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Assessment = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Assessment Platform"
        subtitle="Secure, AI-powered examination system for bias-free evaluation."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Exam Features"
        features={[
          { title: 'AI Proctoring', description: 'Detects suspicious behavior via webcam and mic.', icon: 'Eye' },
          { title: 'Question Bank', description: 'Support for MCQ, coding, and subjective questions.', icon: 'List' },
          { title: 'Instant Result', description: 'Auto-marking for objective tests.', icon: 'Zap' },
          { title: 'Browser Lock', description: 'Prevents cheating by locking the test window.', icon: 'Lock' }
        ]}
      />

      <CTASection title="Conduct Secure Exams" />
    </div>
  );
};

export default Assessment;
