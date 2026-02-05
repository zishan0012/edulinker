import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const EmployeeSpeak = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Employee Speak"
        subtitle="Hear directly from the people who make EduLinker what it is."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 grid md:grid-cols-2 gap-12">
          {[
            { name: 'Alice Williams', role: 'Senior Developer', quote: 'The best place to grow your technical skills. The mentorship here is outstanding.' },
            { name: 'Bob Smith', role: 'Product Manager', quote: 'I love the autonomy and the trust leadership places in us to drive product decisions.' },
            { name: 'Charlie Davis', role: 'HR Specialist', quote: 'A truly inclusive environment where every voice is heard and valued.' },
            { name: 'Diana King', role: 'Marketing Lead', quote: 'Fast-paced, exciting, and rewarding. Every day is a new challenge.' }
          ].map((emp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 relative">
                <div className="text-6xl text-brand-100 absolute top-4 right-4 font-serif">"</div>
                <p className="text-neutral-600 mb-6 italic relative z-10">{emp.quote}</p>
                <div>
                  <div className="font-bold text-slate-900">{emp.name}</div>
                  <div className="text-sm text-brand-600">{emp.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Write Your Story With Us" actionText="Apply Now" actionLink="/careers" />
    </div>
  );
};

export default EmployeeSpeak;
