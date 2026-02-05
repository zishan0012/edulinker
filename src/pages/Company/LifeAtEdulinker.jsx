import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const LifeAtEdulinker = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Life at EduLinker"
        subtitle="More than just a workplace. It's a community of passionate innovators."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal className="grid md:grid-cols-3 gap-8 mb-16">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Office Life 1" className="rounded-xl shadow-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Office Life 2" className="rounded-xl shadow-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Office Life 3" className="rounded-xl shadow-lg h-64 w-full object-cover" />
          </Reveal>

          <FeatureGrid
            title="Our Culture"
            features={[
              { title: 'Collaboration', description: 'We believe in the power of working together.', icon: 'Users' },
              { title: 'Fun Fridays', description: 'Weekly team bonding and fun activities.', icon: 'Smile' },
              { title: 'Continuous Learning', description: 'Sponsorship for courses and certifications.', icon: 'BookOpen' },
              { title: 'Diversity', description: 'Celebrating our differences and unique perspectives.', icon: 'Heart' }
            ]}
          />
        </div>
      </section>

      <CTASection title="Come Join the Fun" actionText="View Openings" actionLink="/careers" />
    </div>
  );
};

export default LifeAtEdulinker;
