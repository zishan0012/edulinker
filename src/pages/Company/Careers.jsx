import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const Careers = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Careers at EduLinker"
        subtitle="Join a team that is redefining the future of education and employment."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Why Work With Us?"
        features={[
          { title: 'Growth Opportunities', description: 'Fast-track career progression for high performers.', icon: 'TrendingUp' },
          { title: 'Innovative Culture', description: 'Work on cutting-edge tech like AI and Cloud.', icon: 'Zap' },
          { title: 'Work-Life Balance', description: 'Flexible working hours and remote options.', icon: 'Coffee' },
          { title: 'Great Perks', description: 'Competitive salary, health insurance, and stock options.', icon: 'Gift' }
        ]}
      />

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {['Senior Licensed React Developer', 'Business Development Manager', 'Content Strategist', 'HR Automation Specialist'].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left flex justify-between items-center group">
                <span className="font-bold text-slate-800">{job}</span>
                <span className="text-brand-600 font-medium group-hover:translate-x-1 transition-transform">Apply &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Can't find a role?" text="Send us your resume for future opportunities." actionText="Email HR" />
    </div>
  );
};

export default Careers;
