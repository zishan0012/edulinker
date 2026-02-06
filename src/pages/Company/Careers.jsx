import React, { useState } from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';
import { Send, Users, Zap, Globe, Coffee, Heart, Briefcase, ChevronRight } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    resume: '',
    portfolio: ''
  });

  const roles = [
    {
      category: 'AI & Machine Learning', items: [
        { title: 'Senior AI Research Engineer', type: 'Full-time', location: 'Remote / NCR' },
        { title: 'NLP Specialist (Educational Core)', type: 'Full-time', location: 'Remote' }
      ]
    },
    {
      category: 'Engineering & Product', items: [
        { title: 'Full Stack SaaS Developer', type: 'Full-time', location: 'NCR / Bangalore' },
        { title: 'Lead Product Designer (EdTech)', type: 'Full-time', location: 'Remote' }
      ]
    },
    {
      category: 'Business & Growth', items: [
        { title: 'Institutional Account Executive', type: 'Full-time', location: 'Regional' },
        { title: 'SaaS Implementation Success Manager', type: 'Full-time', location: 'Remote' }
      ]
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for applying to Edulinkers! Our talent team will review your profile shortly.');
  };

  return (
    <div className="main-content">
      <HeroSection
        title="Careers at Edulinkers"
        subtitle="Join the team architecting the future of global education through collective intelligence."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Culture & Values */}
      <section className="py-24 bg-white relative font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-black text-slate-900 mb-6 italic">Our <span className="text-brand-600">Culture</span></h2>
              <p className="text-xl text-neutral-600">We aren't just a tech company; we are an mission-driven team dedicated to democraticizing education. Innovation, empathy, and speed are the pillars of our workspace.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Heart className="text-rose-500" />, title: 'Mission-First', desc: 'Every line of code you write directly impacts the lives of millions of students.' },
              { icon: <Zap className="text-amber-500" />, title: 'Radical Ownership', desc: 'We trust our team to take the lead on critical projects from day one.' },
              { icon: <Coffee className="text-emerald-500" />, title: 'Deep Work Philosophy', desc: 'Minimal meetings, high focus, and respect for creative flow.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-3xl bg-neutral-50 flex items-center justify-center mx-auto shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-neutral-500 leading-relaxed text-sm px-4">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100 font-sans">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center italic">Open <span className="text-brand-600">Opportunities</span></h2>
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-12">
            {roles.map((cat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 ml-4 mb-4">{cat.category}</h3>
                  <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 overflow-hidden">
                    {cat.items.map((job, jIdx) => (
                      <div key={jIdx} className={`p-8 flex items-center justify-between hover:bg-brand-50 transition-all cursor-pointer group ${jIdx !== cat.items.length - 1 ? 'border-b border-neutral-50' : ''}`}>
                        <div>
                          <h4 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors uppercase tracking-tight">{job.title}</h4>
                          <div className="flex gap-4 mt-2">
                            <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
                              <Briefcase size={14} /> {job.type}
                            </span>
                            <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
                              <Globe size={14} /> {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-white font-sans overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal animation="fade-right" className="lg:w-1/2">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-tight italic">Can't Find Your <span className="text-brand-600 underline underline-offset-8">Perfect</span> Role?</h2>
                <p className="text-lg text-neutral-600 leading-relaxed font-sans">
                  We are always looking for exceptional talent in AI research, EdTech engineering, and institutional growth. Drop your resume here and let's start a conversation.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white relative group overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Users size={120} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-sans italic">
                    Join our Talent Pool
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Even if no roles match your profile today, our talent team monitors this pool daily for future high-impact opportunities.</p>
                  <div className="text-brand-400 font-bold text-sm">#FutureAtEdulinkers</div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="fade-left" delay={0.2} className="lg:w-1/2">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-neutral-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                        placeholder="Alex Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                        placeholder="alex@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Department</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none appearance-none"
                    >
                      <option value="">Select a department</option>
                      <option value="AI Research">AI Research</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Sales">Institutional Sales</option>
                      <option value="General">General Application</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Resume Link (PDF/LinkedIn)</label>
                    <input
                      type="text"
                      name="resume"
                      required
                      value={formData.resume}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                      placeholder="https://linkedin.com/in/alexsmith"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-200"
                  >
                    <Send size={20} />
                    Submit Application
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Still Curious?" subtitle="Follow our AI research blog to see what we're building today for tomorrow." />
    </div>
  );
};

export default Careers;
