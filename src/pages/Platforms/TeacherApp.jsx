import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const TeacherApp = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="Professional Teacher App" 
        subtitle="Build and launch your own white-labeled education platform in days."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Your Own Platform, Powered by Edulinkers</h2>
              <p className="text-lg text-neutral-600">Professional Teacher App is a ready-to-deploy platform solution that combines student engagement, teacher administration, and a robust AI engine into a single, scalable brandable package.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              {[
                { title: 'Student Experience', desc: 'Intuitive app and web interfaces for seamless learning.' },
                { title: 'Teacher Control', desc: 'Powerful tools for content delivery and student management.' },
                { title: 'Admin Oversight', desc: 'Full institutional control and real-time business analytics.' }
              ].map((exp, i) => (
                <div key={i} className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50">
                  <h4 className="font-bold text-slate-900 mb-4 font-sans">{exp.title}</h4>
                  <p className="text-sm text-neutral-500">{exp.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <FeatureGrid 
            title="Engine Features"
            subtitle="What makes Professional Teacher App the benchmark for EdTech platforms."
            features={[
              { title: 'AI Personalization', description: 'Adaptive learning paths for every student.', icon: 'Cpu' },
              { title: 'Live Streaming', description: 'Built-in support for low-latency live classes.', icon: 'Video' },
              { title: 'Monetization Tools', description: 'Comprehensive billing and subscription management.', icon: 'DollarSign' },
              { title: 'Mobile First', description: 'Fully native experience on iOS and Android.', icon: 'Smartphone' },
              { title: 'Multi-Tenant', description: 'Manage multiple branches or sub-institutions.', icon: 'Layers' },
              { title: 'AI Assessment', description: 'Automated proctoring and grading capabilities.', icon: 'CheckSquare' }
            ]}
          />
        </div>
      </section>

      <CTASection title="Launch Your Professional Teacher App Now" />
    </div>
  );
};

export default TeacherApp;
