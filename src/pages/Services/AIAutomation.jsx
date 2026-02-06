import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import Reveal from '../../components/Reveal';

const AIAutomation = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="AI & Automation Services" 
        subtitle="Professional AI-driven development and strategic services for EdTech."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Service Overview</h2>
              <p className="text-lg text-neutral-600">We provide end-to-end expertise in AI & Automation Services, specifically tailored for the education sector. Our teams combine domain knowledge with AI innovation to deliver world-class EdTech platforms.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <Reveal animation="fade-right">
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-sans">AI Capabilities</h3>
                <ul className="space-y-4 font-sans">
                  {['Intelligent Automation', 'Natural Language Processing', 'Predictive Modeling', 'Computer Vision for Proctoring'].map((cap, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-600">
                      <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="p-8 bg-brand-600 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6 font-sans">Why Choose Our Service?</h3>
                <p className="opacity-90 leading-relaxed mb-6">Our deep specialization in EdTech allows us to anticipate institutional needs and technical challenges before they arise, ensuring a faster time-to-market and superior user engagement.</p>
                <div className="text-3xl font-bold">100% EdTech Focused</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Our Process Flow</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Discovery', desc: 'Understanding your unique institutional goals.' },
                { title: 'Architecture', desc: 'Designing AI-integrated scalable systems.' },
                { title: 'Development', desc: 'Agile execution using the latest SaaS stack.' },
                { title: 'Deployment', desc: 'Global rollout with enterprise security.' }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
                  <h4 className="font-bold text-slate-900 mb-2 font-sans">{step.title}</h4>
                  <p className="text-sm text-neutral-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Scale Your EdTech Vision" />
    </div>
  );
};

export default AIAutomation;
