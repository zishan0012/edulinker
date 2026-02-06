import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import Reveal from '../../components/Reveal';
import { Cpu, Server, ShieldCheck, Database, Layers, Code, Zap, Globe, Cloud } from 'lucide-react';

const TechAI = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Technology & AI"
        subtitle="Exploring the neural core and enterprise-grade architecture that powers the Edulinkers ecosystem."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      />

      {/* AI Stack Section */}
      <section className="py-24 bg-white relative font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-black text-slate-900 mb-6 italic">The <span className="text-brand-600">Neural</span> Engine</h2>
              <p className="text-xl text-neutral-600">Our AI stack isn't just a layer; it's the core of everything we build. We utilize a hybrid approach combining proprietary LLMs with specialized machine learning models.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, title: 'Proprietary LLMs', desc: 'Custom-trained models for educational context and institutional safety.' },
              { icon: <Layers />, title: 'Predictive ML', desc: 'Forecasting student performance and dropout risks with 98% accuracy.' },
              { icon: <Database />, title: 'Vector DBs', desc: 'High-speed retrieval for personalized content recommendations.' },
              { icon: <Zap />, title: 'Real-time NLP', desc: 'Instant multilingual support and automated grading assistance.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Architecture */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative font-sans">
        <div className="absolute inset-0 bg-brand-500/5 opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal animation="fade-right">
              <div className="space-y-8">
                <h2 className="text-4xl font-black italic leading-tight">Elite <span className="text-brand-400">Architecture</span></h2>
                <p className="text-xl text-slate-400 leading-relaxed font-sans">
                  Our SaaS infrastructure is built for massive scale. Using a multi-tenant, cloud-native approach, we ensure that every institution gets a dedicated, high-performance experience.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Multi-Tenant Isolation', desc: 'Individual data sandboxing for absolute institutional privacy.' },
                    { title: 'Auto-Scaling Clusters', desc: 'Handling traffic spikes from 1K to 1M+ concurrent users effortlessly.' },
                    { title: 'Global Edge Delivery', desc: 'Sub-100ms latency anywhere in the world via global CDNs.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="mt-1 text-brand-400"><Code size={20} /></div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                        <p className="text-xs text-slate-500 italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-600 rounded-[3rem] blur-[80px] opacity-20"></div>
                <div className="relative bg-slate-800 p-8 rounded-[3rem] border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <Server className="text-brand-400 mx-auto mb-4" />
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Node Cluster</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <Database className="text-brand-400 mx-auto mb-4" />
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Data Vault</div>
                    </div>
                    <div className="col-span-2 p-6 rounded-2xl bg-brand-600 text-center">
                      <Cloud className="text-white mx-auto mb-2" />
                      <div className="font-bold">Edge-Cloud Native</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Security & Cloud */}
      <section className="py-24 bg-white font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="bg-brand-50 p-12 lg:p-20 rounded-[4rem] border border-brand-100 flex flex-col lg:flex-row items-center gap-16 shadow-inner">
              <div className="lg:w-1/2 space-y-8">
                <div className="w-20 h-20 rounded-[2rem] bg-brand-600 flex items-center justify-center text-white shadow-xl shadow-brand-500/20">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 italic leading-tight">Uncompromising <span className="text-brand-600">Security</span></h2>
                <p className="text-lg text-neutral-600 font-sans leading-relaxed italic">
                  Data is the most valuable asset an institution possesses. We protect it with enterprise-grade encryption and strictly follow ISO 27001 and GDPR standards.
                </p>
                <ul className="grid grid-cols-2 gap-6">
                  {['AES-256 Encryption', 'SOC2 Compliant', 'Zero Trust Access', 'Audit Logging'].map((sec, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                      {sec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80"
                  alt="Data Security"
                  className="rounded-[3rem] shadow-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Request Tech Deep-Dive" subtitle="Speak with our architects about our security and integration protocols." />
    </div>
  );
};

export default TechAI;
