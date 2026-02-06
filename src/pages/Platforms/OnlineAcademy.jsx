import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const OnlineAcademy = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Build Your Own Platform"
        subtitle="Launch a fully white-labeled, AI-powered educational academy in days, not months."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-sans italic">Your Academy, Your Brand, <span className="text-brand-600">Our Intelligence</span></h2>
              <p className="text-xl text-neutral-600">Our Ready-to-Launch Online Academy is the ultimate solution for institutions looking for a scalable, secure, and brandable educational ecosystem.</p>
            </div>
          </Reveal>

          {/* Platform Features */}
          <FeatureGrid
            title="Core Platform Features"
            subtitle="The fundamental building blocks of a world-class academy."
            features={[
              { title: 'White-Label Branding', description: 'Your logo, your colors, your domain name.', icon: 'Layout' },
              { title: 'Global Scalability', description: 'Serve millions of students with 99.9% uptime.', icon: 'Globe' },
              { title: 'Multi-Currency Payments', description: 'Accept payments globally with built-in gateways.', icon: 'CreditCard' },
              { title: 'DDoS Protection', description: 'Edge-level security for your institutional data.', icon: 'Shield' },
              { title: 'Integrated Zoom/Meet', description: 'Seamless live class experience via API.', icon: 'Video' },
              { title: 'Custom CRM', description: 'Manage your leads and admissions within the app.', icon: 'Users' }
            ]}
          />
        </div>
      </section>

      {/* Student Experience */}
      <section className="py-24 bg-brand-50/50 overflow-hidden font-sans">
        <div className="container mx-auto px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-right">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest">Experience Layer 01</div>
                <h3 className="text-3xl font-bold text-slate-900">The <span className="text-brand-600">Student</span> Experience</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">Engagement is the key to retention. Our student interface is designed for focus, reducing cognitive load while maximizing learning outcomes.</p>
                <ul className="space-y-4">
                  {['Personalized Dashboard', 'Gamified Progress Tracking', 'Offline Access via Native App', 'Integrated Discussion Forums'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-brand-100 rotate-3 transition-transform hover:rotate-0 duration-500">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Student Interface" className="rounded-xl w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Teacher Experience */}
      <section className="py-24 bg-white font-sans">
        <div className="container mx-auto px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-right" className="lg:order-2">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">Experience Layer 02</div>
                <h3 className="text-3xl font-bold text-slate-900">The <span className="text-indigo-600">Teacher</span> Experience</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">We empower educators with tools that automate the mundane, allowing them to focus on high-impact teaching and mentorship.</p>
                <ul className="space-y-4">
                  {['One-Click Content Publishing', 'AI Grading Assistance', 'Student Engagement Analytics', 'Automated Attendance & Reporting'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2} className="lg:order-1">
              <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl -rotate-3 transition-transform hover:rotate-0 duration-500">
                <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80" alt="Teacher Interface" className="rounded-xl w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Admin Controls */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative font-sans">
        <div className="absolute inset-0 bg-brand-500/5 opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Institutional Admin Controls</h2>
              <p className="text-lg text-slate-400">Total transparency and absolute control over your educational business. Manage multiple branches and thousands of staff from one dashboard.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'User Management', desc: 'Secure staff and student RBAC control.' },
                { title: 'Financial Console', desc: 'Real-time revenue and tax tracking.' },
                { title: 'Compliance Engine', desc: 'Auto-track GDPR and data laws.' },
                { title: 'Inventory Control', desc: 'Digital and physical asset tracking.' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-brand-500 transition-all duration-300">
                  <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-400 group-hover:text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI Engine */}
      <section className="py-24 bg-white font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 rounded-[3rem] bg-gradient-to-br from-brand-600 to-indigo-900 text-white shadow-2xl shadow-brand-200">
              <div className="md:w-1/2 space-y-8">
                <h2 className="text-5xl font-black leading-tight">The <span className="text-brand-300">AI</span> Engine</h2>
                <p className="text-xl opacity-90 leading-relaxed">Our proprietary AI layer works silently in the background, analyzing millions of data points to optimize the educational experience in real-time.</p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-xs uppercase tracking-widest opacity-60">Retention Increase</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-xs uppercase tracking-widest opacity-60">Revenue Growth</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {['Predictive Analytics', 'Automated Grading', 'Neural Search', 'Smart Scheduling'].map((eng, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center font-bold text-sm tracking-wide transition-all hover:bg-white/20">
                    {eng}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Launch Your Global Academy Today" subtitle="Connect with our platform specialists to begin your journey." />
    </div>
  );
};

export default OnlineAcademy;
