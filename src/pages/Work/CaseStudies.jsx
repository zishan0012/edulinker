import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const CaseStudies = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Case Studies"
        subtitle="Real-world problems solved with innovative strategies and technology."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-8 lg:px-12 space-y-16">
          {[
            { title: 'Scaling a Unicorn', client: 'FinTech Startup', challenge: 'Hiring 500+ engineers in 6 months.', solution: 'Deployed a dedicated RPO team with AI sourcing tools.', result: '100% roles filled with 40% cost saving.' },
            { title: 'Digital Transformation', client: 'Manufacturing Giant', challenge: 'Legacy HR systems causing data silos.', solution: 'Implemented cloud-based HRMS with SAP integration.', result: 'Real-time analytics and 90% paperless ops.' },
            { title: 'Campus Hiring Drive', client: 'IT Services Major', challenge: 'Screening 10,000+ graduates across India.', solution: 'Conducted AI-proctored online assessments.', result: 'Shortlisted top 5% candidates in 3 days.' }
          ].map((study, i) => (
            <Reveal key={i}>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100 grid md:grid-cols-3 gap-8 hover:shadow-xl transition-shadow">
                <div className="col-span-1 border-r border-neutral-100 pr-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-brand-600 font-medium mb-4">{study.client}</p>
                  <button className="text-sm font-bold underline decoration-2 decoration-brand-500 underline-offset-4 hover:text-brand-600">Read Full Story</button>
                </div>
                <div className="col-span-2 space-y-4">
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide mb-1">Challenge</h4>
                    <p className="text-neutral-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide mb-1">Solution</h4>
                    <p className="text-neutral-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-600 text-sm uppercase tracking-wide mb-1">Result</h4>
                    <p className="text-slate-900 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="See More Success Stories" />
    </div>
  );
};

export default CaseStudies;
