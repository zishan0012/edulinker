import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const Training = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Training & Development"
        subtitle="Empower your workforce with the skills they need to succeed in a rapidly evolving business landscape."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Our Training Programs"
        features={[
          { title: 'Corporate Training', description: 'Enhance team productivity with customized learning modules.', icon: 'Briefcase' },
          { title: 'Leadership Development', description: 'Groom future leaders with executive coaching and mentorship.', icon: 'Award' },
          { title: 'Technical Skilling', description: 'Keep your tech team updated with the latest tools and frameworks.', icon: 'Code' },
          { title: 'Soft Skills', description: 'Improve communication, teamwork, and emotional intelligence.', icon: 'Smile' }
        ]}
      />

      <ProcessFlow
        title="Training Methodology"
        steps={[
          { title: 'Training Needs Analysis', description: 'Identifying skill gaps and defining learning objectives.' },
          { title: 'Content Design', description: 'Curating custom curriculum and training materials.' },
          { title: 'Delivery', description: 'Interactive workshops, webinars, or self-paced e-learning.' },
          { title: 'Post-Training Assessment', description: 'Measuring impact and ROI of the training program.' }
        ]}
      />

      <CTASection title="Upskill Your Team Today" actionText="Explore Courses" />
    </div>
  );
};

export default Training;
