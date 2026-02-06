import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AIChatbotSolutions = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="AI Chatbot Solutions" 
        subtitle="Empowering education through advanced AI-driven solutions."
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">The Problem Statement</h2>
              <p className="text-lg text-neutral-600">Modern educational institutions face increasing complexity in managing data, engagement, and scalability. Traditional systems are often siloed and lack the intelligence needed for personalized learning at scale.</p>
            </div>
            
            <div className="bg-brand-50 p-8 md:p-12 rounded-3xl border border-brand-100 mb-24">
              <h3 className="text-2xl font-bold text-brand-600 mb-4 font-sans">Our AI-Based Solution</h3>
              <p className="text-slate-900 font-medium leading-relaxed">By leveraging machine learning and predictive analytics, AI Chatbot Solutions automates routine tasks, provides deep insights into student performance, and creates a seamless experience for administrators and educators alike.</p>
            </div>
          </Reveal>

          <FeatureGrid 
            title="Key Features"
            subtitle="Everything you need to transform your operations with AI."
            features={[
              { title: 'Automated Workflows', description: 'Streamline administrative tasks with intelligent triggers.', icon: 'Zap' },
              { title: 'Predictive Analytics', description: 'Forecast student outcomes and resource needs early.', icon: 'BarChart' },
              { title: 'Personalized Insights', description: 'Tailored recommendations for every user in the system.', icon: 'Target' },
              { title: 'Secure Data Cloud', description: 'Enterprise-grade security for institutional data.', icon: 'Shield' },
              { title: 'Seamless Integration', description: 'Connect with your existing tools via robust APIs.', icon: 'Link' },
              { title: 'Scalable Architecture', description: 'Grows with your institution, from 100 to 1M+ users.', icon: 'Globe' }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: '01', title: 'Data Integration', desc: 'Seamlessly connect your student and institutional data.' },
                { step: '02', title: 'AI Processing', desc: 'Our engine analyzes patterns and optimizes workflows.' },
                { step: '03', title: 'Smart Insights', desc: 'Receive actionable intelligence and automate responses.' }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-brand-100 absolute top-4 right-8">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 font-sans">{item.title}</h4>
                  <p className="text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Transform Your Institution Today" />
    </div>
  );
};

export default AIChatbotSolutions;
