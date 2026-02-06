import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';
import { Eye, Target, Map, Flag, Compass, Zap, Globe, Cpu, ShieldCheck } from 'lucide-react';

const VisionMission = () => {
  const roadmap = [
    { year: '2024', title: 'AI Core Expansion', desc: 'Deploying proprietary LLMs across all 50 SaaS modules.' },
    { year: '2025', title: 'Global Classroom Initiative', desc: 'Bridging 1M+ rural classrooms with automated AI assistance.' },
    { year: '2026', title: 'Neural Learning Path', desc: 'Implementing individual neural mapping for billion-scale learners.' },
    { year: '2027', title: 'The Universal Knowledge Bridge', desc: 'Full-spectrum cross-language institutional integration.' }
  ];

  return (
    <div className="main-content">
      <HeroSection
        title="Vision & Mission"
        subtitle="Defining the strategic North Star for the future of intelligent education."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Vision & Mission Split */}
      <section className="py-24 bg-white relative overflow-hidden font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision Block */}
            <Reveal animation="fade-right">
              <div className="h-full p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Eye size={120} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                    <Compass className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-black italic">The <span className="text-brand-400">Vision</span></h2>
                  <p className="text-xl text-slate-400 leading-relaxed font-sans">
                    To become the foundational intelligence layer for every educational institution on the planet, creating a world where high-quality, personalized learning is a universal human right, not a privilege.
                  </p>
                  <div className="pt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-400">
                    <div className="h-0.5 w-12 bg-brand-400"></div>
                    Beyond Boundaries
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Mission Block */}
            <Reveal animation="fade-left" delay={0.2}>
              <div className="h-full p-12 rounded-[3.5rem] bg-brand-50 border border-brand-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Target size={120} className="text-brand-600" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand-200">
                    <Flag className="text-brand-600" size={32} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 italic">The <span className="text-brand-600">Mission</span></h2>
                  <p className="text-xl text-neutral-600 leading-relaxed font-sans">
                    Our mission is to empower educators with high-fidelity SaaS platforms and robust AI automation, ensuring they spend less time on administration and more time on high-impact human mentorship.
                  </p>
                  <div className="pt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-neutral-400">
                    <div className="h-0.5 w-12 bg-neutral-300"></div>
                    Execution Focused
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100 font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-sans uppercase tracking-tight">Our Core <span className="text-brand-600">Architectures</span></h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">Foundational principles that drive every line of code we write.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8 font-sans">
            {[
              { icon: <Zap />, title: 'Radical Speed', desc: 'Deploying and iterating at the pace of modern innovation.' },
              { icon: <Globe />, title: 'Total Inclusivity', desc: 'Building systems that work across languages and cultures.' },
              { icon: <Cpu />, title: 'Intelligence First', desc: 'Every product must provide actionable institutional insights.' },
              { icon: <ShieldCheck className="text-brand-600" />, title: 'Absolute Trust', desc: 'Uncompromising security for personal and institutional data.' }
            ].map((val, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all text-brand-600">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 bg-white relative font-sans overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-sans uppercase tracking-tight">Future <span className="text-brand-600">Roadmap</span></h2>
              <p className="text-neutral-500 max-w-2xl mx-auto italic">Defining the next decade of educational transformation.</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-100 -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-16 lg:space-y-0">
              {roadmap.map((item, i) => (
                <Reveal key={i} animation={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i * 0.2}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2 px-12 text-center lg:text-left">
                      <div className="inline-block px-4 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold mb-4">{item.year}</div>
                      <h4 className={`text-2xl font-bold text-slate-900 mb-4 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>{item.title}</h4>
                      <p className={`text-neutral-500 leading-relaxed ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>{item.desc}</p>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full border-4 border-white bg-brand-600 shadow-xl hidden lg:block"></div>
                    <div className="lg:w-1/2"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Be Part of the Future" subtitle="Partner with Edulinkers as we redefine the educational landscape." />
    </div>
  );
};

export default VisionMission;
