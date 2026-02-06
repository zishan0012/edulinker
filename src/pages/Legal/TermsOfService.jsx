import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import Reveal from '../../components/Reveal';

const TermsOfService = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="Terms of Service" 
        subtitle="Transparency and security at the heart of our partnership."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 max-w-4xl">
          <Reveal>
            <div className="prose prose-slate lg:prose-lg mx-auto">
              <p className="text-neutral-600 mb-8 text-sm italic">Last Updated: October 2023</p>
              <h3 className="text-slate-900 font-bold text-xl mb-4 font-sans">1. Introduction</h3>
              <p className="text-neutral-600 mb-8">Welcome to Edulinkers. Your privacy and trust are paramount to us. This Terms of Service document outlines our standards and policies regarding our AI-driven SaaS platform.</p>
              
              <h3 className="text-slate-900 font-bold text-xl mb-4 font-sans">2. Data Privacy & AI</h3>
              <p className="text-neutral-600 mb-8">We utilize enterprise-grade encryption and strictly follow data protection regulations. AI models are trained on anonymized data to ensure absolute user anonymity while providing personalized learning insights.</p>
              
              <h3 className="text-slate-900 font-bold text-xl mb-4 font-sans">3. Institutional Responsibility</h3>
              <p className="text-neutral-600 mb-8">Institutions using our SaaS platforms are responsible for the data uploaded, and we provide robust administrative tools to manage access control and retention policies.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
