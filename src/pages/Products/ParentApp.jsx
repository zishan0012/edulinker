import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const ParentApp = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="Parent-Teacher App" 
        subtitle="The enterprise-grade product for modern educational ecosystems."
        image="https://images.unsplash.com/photo-1551288049-bbbda5402bd7?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Product Summary</h2>
                <p className="text-lg text-neutral-600 mb-8">Parent-Teacher App is a cornerstone of our SaaS suite, providing institutions with the tools needed to manage operations efficiently while leveraging AI for superior educational outcomes.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-center uppercase tracking-widest text-xs font-bold text-neutral-500">AI-Ready</div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-center uppercase tracking-widest text-xs font-bold text-neutral-500">SaaS-Native</div>
                </div>
              </div>
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Dashboard Preview" className="w-full h-auto" />
              </div>
            </div>
          </Reveal>

          <FeatureGrid 
            title="Core Modules"
            subtitle="A comprehensive suite of tools built into one product."
            features={[
              { title: 'User Management', description: 'Complete control over students, teachers, and admins.', icon: 'Users' },
              { title: 'Smart Scheduling', description: 'AI-optimized timetables and resource allocation.', icon: 'Clock' },
              { title: 'Financial Module', description: 'Automated fee collection and financial reporting.', icon: 'CreditCard' },
              { title: 'Academic Engine', description: 'Manage exams, results, and curriculum with ease.', icon: 'Award' },
              { title: 'AI Insights', description: 'Real-time dashboard for institutional performance.', icon: 'TrendingUp' },
              { title: 'Cloud Control', description: 'Secure access from any device, anywhere in the world.', icon: 'Cloud' }
            ]}
          />
        </div>
      </section>

      <CTASection title="Get a Demo of Parent-Teacher App" />
    </div>
  );
};

export default ParentApp;
