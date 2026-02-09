import React from 'react';
import {
  MessageSquare,
  Bell,
  UserCheck,
  Zap,
  Layers,
  BarChart,
  CheckCircle2,
  Smartphone,
  Mail,
  Users,
  Clock
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AISMS = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="AI Smart Messaging System"
        subtitle="Smarter Communication. Stronger Learning Engagement."
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s AI Smart Messaging System (AI SMS) is built to transform how educators, trainers, and institutes communicate with learners. It automates, personalizes, and optimizes educational communication across the entire learning lifecycle — from enrollment to course completion.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <p className="text-brand-600 font-bold text-lg">Designed for modern digital education, AI SMS ensures the right message reaches the right learner at the right time, without manual effort.</p>
              </div>
            </div>
          </Reveal>

          {/* What is AI SMS */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-600/10 transform rotate-3 rounded-[2rem]"></div>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                    alt="AI SMS Communication"
                    className="relative rounded-[2rem] shadow-xl w-full"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">What is AI SMS for Education?</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  AI SMS is an intelligent communication layer embedded within Edu-Linker’s teaching ecosystem. It uses learner behavior, course progress, and engagement patterns to send context-aware, automated messages that improve participation, retention, and outcomes.
                </p>
                <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <Zap className="text-brand-500 shrink-0" size={24} />
                  <p className="text-sm font-medium text-slate-700">This system reduces communication gaps while creating a consistent, professional learning experience across web and mobile platforms.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Key Capabilities */}
          <div className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Key Capabilities</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Automated Student Notifications', desc: 'Course launches, class reminders, test schedules, result alerts, payment confirmations — all handled automatically.', icon: <Bell className="text-brand-600" /> },
                { title: 'Behavior-Based Messaging', desc: 'AI identifies inactive learners, drop-off points, and engagement gaps, triggering smart nudges to re-engage students.', icon: <UserCheck className="text-brand-600" /> },
                { title: 'Personalized Learning Communication', desc: 'Messages adapt based on learner progress, interests, and performance — making communication relevant, not generic.', icon: <MessageSquare className="text-brand-600" /> },
                { title: 'Multi-Channel Reach', desc: 'Deliver messages through SMS, in-app notifications, email, and platform alerts — ensuring maximum visibility.', icon: <Smartphone className="text-brand-600" /> },
                { title: 'Batch & Broadcast Messaging', desc: 'Announce updates, new courses, offers, or institutional notices to thousands of learners instantly.', icon: <Mail className="text-brand-600" /> },
                { title: 'Real-Time Delivery & Tracking', desc: 'Monitor delivery status, engagement rates, and response effectiveness from a single dashboard.', icon: <BarChart className="text-brand-600" /> }
              ].map((cap, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full group">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans">{cap.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Why AI SMS Matters */}
          <section className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10">
              <Reveal>
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Why AI SMS Matters for Educators</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                  {[
                    'Saves time by eliminating repetitive manual communication',
                    'Improves learner engagement and attendance',
                    'Increases course completion and test participation rates',
                    'Strengthens educator-learner relationships',
                    'Creates a professional, scalable communication system',
                    'Supports data-driven decision making for institutes'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 size={18} className="text-brand-400" />
                      </div>
                      <p className="font-medium text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Built for Ecosystem */}
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-16 bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Built for the Edu-Linker Ecosystem</h2>
                <p className="text-lg text-neutral-600 mb-8">AI SMS seamlessly integrates with Edu-Linker’s:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Online Courses', 'Live Classes', 'Mock Tests & Quizzes', 'Branded Websites', 'iOS & Android Teaching Apps'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-neutral-100 shadow-sm">
                      <Layers size={18} className="text-brand-500" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-bold text-brand-600 italic">No additional setup. No technical complexity. Just intelligent communication that works out of the box.</p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">The Edu-Linker Advantage</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    Educators shouldn’t worry about follow-ups, reminders, or engagement gaps. With AI SMS, communication becomes automatic, intelligent, and impact-driven, allowing educators to focus on what matters most — teaching and growth.
                  </p>
                  <div className="flex items-center gap-2 text-brand-600 font-bold">
                    <Clock size={20} />
                    <span>Focus on Teaching, Not Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Communicate Smarter with AI SMS" />
    </div>
  );
};

export default AISMS;
