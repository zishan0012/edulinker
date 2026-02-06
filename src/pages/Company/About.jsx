import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import Reveal from '../../components/Reveal';
import { Target, Cpu, TrendingUp, ShieldCheck, Zap, Globe, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Company Overview"
        subtitle="Behind the technology powering the future of global education through artificial intelligence."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Company Intro */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900 leading-tight font-sans italic">
                  Revolutionizing <span className="text-brand-600 underline underline-offset-8 decoration-brand-100">Learning</span> for the Next Generation.
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed font-sans">
                  Founded with a vision to bridge the gap between human potential and technological advancement, Edulinkers stands at the forefront of the AI EdTech revolution.
                </p>
                <p className="text-lg text-neutral-500 font-sans">
                  We don't just build software; we architect intelligent ecosystems that empower students to learn faster, teachers to educate better, and institutions to scale globally. Our journey started with a simple belief: Intelligence should be accessible to every classroom on earth.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="relative p-2 bg-gradient-to-br from-brand-100 to-indigo-100 rounded-[3rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Our Team"
                  className="rounded-[2.5rem] w-full h-auto shadow-inner"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-brand-50 max-w-[240px]">
                  <div className="text-brand-600 font-black text-4xl mb-1 font-sans">150+</div>
                  <div className="text-neutral-400 text-xs font-bold uppercase tracking-widest font-sans">AI Specialists globally</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-sans uppercase tracking-tight">What We <span className="text-brand-600">Build</span></h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">We engineer a comprehensive suite of AI-native products that cover the entire educational lifecycle.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu />, title: 'Intelligent LMS', desc: 'Predictive learning platforms that adapt to every user unique pace.' },
              { icon: <Globe />, title: 'Global Platforms', desc: 'Scaleable white-label apps for international educational conglomerates.' },
              { icon: <Zap />, title: 'Automation Core', desc: 'AI engines that eliminate 90% of administrative overhead for schools.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 bg-white rounded-3xl shadow-sm border border-neutral-100 hover:shadow-xl hover:border-brand-100 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-8 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 font-sans">{item.title}</h4>
                  <p className="text-neutral-500 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI in Education */}
      <section className="py-24 bg-brand-600 text-white overflow-hidden relative font-sans">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center font-sans">
            <Reveal animation="fade-right">
              <div className="space-y-8">
                <h2 className="text-5xl font-black leading-tight italic">Our <span className="text-brand-100">AI</span> Philosophy</h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  We believe AI should be invisible yet impactful. It shouldn't replace the teacher; it should augment the classroom experience by removing friction and providing real-time intelligence.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
                    <div className="text-brand-100 font-bold mb-2">Neural Learning</div>
                    <p className="text-sm opacity-80 italic">Proprietary algorithms that map student progress across thousands of nodes.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
                    <div className="text-brand-100 font-bold mb-2">Safe Data</div>
                    <p className="text-sm opacity-80 italic">Enterprise security where institutional data stays strictly private.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-brand-500/20 transition-all"></div>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Award className="text-brand-400" />
                    <span className="font-bold">Winner: AI Innovation 2024</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <TrendingUp className="text-brand-400" />
                    <span className="font-bold">+40% Retention Increase</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="text-brand-400" />
                    <span className="font-bold">100% GDPR Compliant</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-24 bg-white font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '1M+', label: 'Active Students', icon: <Users size={20} /> },
              { val: '200+', label: 'Institutional Partners', icon: <Globe size={20} /> },
              { val: '15+', label: 'Countries Served', icon: <Target size={20} /> },
              { val: '24/7', label: 'AI Support Desk', icon: <Rocket size={20} /> }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-3 font-sans">
                  <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">{stat.val}</div>
                  <p className="text-neutral-400 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Partner with Edulinkers" subtitle="Join the hundreds of institutions already scaling with AI intelligence." />
    </div>
  );
};

export default About;
