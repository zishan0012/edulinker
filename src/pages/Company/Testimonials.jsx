import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const Testimonials = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Client Testimonials"
        subtitle="Don't just take our word for it. See what our partners have to say."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-8 lg:px-12 grid md:grid-cols-3 gap-8">
          {[
            { name: 'Global Tech Solutions', text: 'EduLinker helped us scale our engineering team from 10 to 50 in just 3 months. Exceptional service!' },
            { name: 'Innovate Healthcare', text: 'Their payroll compliance services are top-notch. We have zero worries about statutory audits now.' },
            { name: 'Future Retail', text: 'The training programs designed by them significantly improved our sales team performance.' },
            { name: 'EduCorp', text: 'Highly professional and reliable partners. Their campus hiring drives are very well organized.' },
            { name: 'FinServe Bank', text: 'They understand the BFSI sector very well. The candidates they provide are always relevant.' },
            { name: 'Green Autos', text: 'Efficient, transparent, and cost-effective legal staffing solutions.' }
          ].map((client, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                <p className="text-neutral-600 mb-6 leading-relaxed">"{client.text}"</p>
                <div className="font-bold text-slate-900 border-t pt-4 border-neutral-100">{client.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Join Our Happy Clients" />
    </div>
  );
};

export default Testimonials;
