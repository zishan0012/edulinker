import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const Portfolio = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Our Portfolio"
        subtitle="A showcase of our best work across industries and technologies."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'EdTech SuperApp', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' },
            { title: 'FinTech Dashboard', category: 'Web Application', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
            { title: 'Healthcare Portal', category: 'Enterprise Platform', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
            { title: 'E-commerce Store', category: 'Website', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80' },
            { title: 'Logistics Tracker', category: 'IoT Solution', image: 'https://images.unsplash.com/photo-1566576912906-253c723f0d2c?auto=format&fit=crop&w=600&q=80' },
            { title: 'HRMS SaaS', category: 'Product Design', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80' }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-brand-400 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Let's Build Something Amazing" />
    </div>
  );
};

export default Portfolio;
