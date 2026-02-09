import React from 'react';
import {
  Globe,
  FileText,
  Users,
  Video,
  CreditCard,
  MessageCircle,
  Monitor,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Building2,
  Cpu
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const SaaS_SMS = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="SaaS SMS System"
        subtitle="A Smart Education Management Solution for the Digital-First Learning Era"
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s SaaS SMS System is a cloud-based education management solution designed to simplify, automate, and scale academic operations for teachers, trainers, coaching institutes, and educational organizations.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <p className="text-brand-600 font-bold text-lg">Built for modern educators, our SMS system connects learning, administration, communication, and monetization into one unified digital ecosystem—accessible anytime, anywhere, across web and mobile apps.</p>
              </div>
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Overview</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Managing an education business today goes far beyond classrooms and content. Educators need systems that support student engagement, academic operations, assessments, payments, and communication—without technical complexity.
                </p>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Edu-Linker’s SaaS SMS System empowers education providers to digitally manage students, courses, tests, live classes, and academic workflows from a single platform—under their own brand.
                </p>
                <div className="flex items-center gap-3 p-4 bg-brand-50 rounded-xl border border-brand-100">
                  <CheckCircle2 className="text-brand-600 shrink-0" />
                  <span className="font-medium text-slate-800">With a ready-to-launch infrastructure, institutes can focus on teaching, growth, and learner outcomes, while Edu-Linker handles the technology backbone.</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-600/10 rounded-[3rem] transform -rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="SaaS SMS Overview"
                    className="relative rounded-[3rem] shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* How It Works */}
          <section className="mb-24">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">How Edu-Linker SaaS SMS Works</h2>
                <p className="max-w-2xl mx-auto text-neutral-500">Our solution follows a simple, educator-friendly workflow:</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Set Up Your Branded Platform', desc: 'Launch your own education portal with branded web, Android, and iOS apps.', icon: <Monitor className="text-white" /> },
                { title: 'Create & Manage Academic Content', desc: 'Add courses, quizzes, mock tests, batches, and live classes with ease.', icon: <FileText className="text-white" /> },
                { title: 'Enroll & Track Learners', desc: 'Manage student registrations, progress, attendance, and performance centrally.', icon: <Users className="text-white" /> },
                { title: 'Engage, Assess & Monetize', desc: 'Conduct live sessions, evaluate learners, collect fees, and grow revenue digitally.', icon: <TrendingUp className="text-white" /> }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full text-center group">
                    <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Key Capabilities */}
          <div className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Key Capabilities</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Centralized Student Management', desc: 'Maintain complete learner profiles, enrollment details, batch allocation, progress tracking, and academic history—all in one place.', icon: <Users className="text-brand-600" /> },
                { title: 'Course & Curriculum Control', desc: 'Design structured courses, upload learning materials, assign assessments, and manage learning journeys with full flexibility.', icon: <FileText className="text-brand-600" /> },
                { title: 'Online Tests & Assessments', desc: 'Create quizzes, mock tests, and exams with automated evaluation, analytics, and performance insights.', icon: <CheckCircle2 className="text-brand-600" /> },
                { title: 'Live Class Management', desc: 'Host interactive live classes with scheduling, notifications, attendance tracking, and recorded sessions.', icon: <Video className="text-brand-600" /> },
                { title: 'Fee & Revenue Management', desc: 'Enable online payments, subscription models, and course purchases to unlock new revenue streams.', icon: <CreditCard className="text-brand-600" /> },
                { title: 'Communication & Engagement', desc: 'Send announcements, reminders, and updates to students through integrated digital communication channels.', icon: <MessageCircle className="text-brand-600" /> }
              ].map((cap, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans">{cap.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Why Edu-Linker SaaS SMS */}
          <section className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden mb-24">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] -ml-48 -mt-48"></div>
            <div className="relative z-10">
              <Reveal>
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Edu-Linker’s SaaS SMS System?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: 'Built for Educators, Not Tech Teams', desc: 'No coding. No complex onboarding. Minimal training required.', icon: <Users className="text-brand-400" /> },
                    { title: 'Scalable by Design', desc: 'Whether you manage 50 students or 50,000 learners, the system grows with your institution.', icon: <TrendingUp className="text-brand-400" /> },
                    { title: 'Fully Cloud-Based', desc: 'Access your education operations securely from anywhere, on any device.', icon: <Cloud className="text-brand-400" /> },
                    { title: 'White-Label & Brand-Ready', desc: 'Operate under your own brand identity—website, apps, and learner interface.', icon: <Globe className="text-brand-400" /> },
                    { title: 'Data-Driven Decision Making', desc: 'Track performance, engagement, and outcomes with actionable insights.', icon: <Cpu className="text-brand-400" /> }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-neutral-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Who Is This Solution For */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 font-sans">Who Is This Solution For?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Independent Teachers & Subject Experts', icon: <Users size={18} /> },
                  { label: 'Coaching & Training Institutes', icon: <Building2 size={18} /> },
                  { label: 'Skill Development Centers', icon: <Briefcase size={18} /> },
                  { label: 'Online Education Entrepreneurs', icon: <Globe size={18} /> },
                  { label: 'Academic & Competitive Exam Platforms', icon: <GraduationCap size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-4 bg-brand-50 text-brand-700 rounded-full font-bold border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xl font-bold text-slate-900">If your goal is to teach, scale, and monetize knowledge digitally, Edu-Linker’s SaaS SMS System is built for you.</p>
            </div>
          </Reveal>

          {/* Closing */}
          <Reveal>
            <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-3xl p-12 text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Transform Education Operations into a Digital Advantage</h2>
              <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
                Education is evolving—and so should the systems that support it. Edu-Linker’s SaaS SMS System enables educators to operate smarter, teach better, and grow faster in today’s digital learning landscape.
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 font-bold tracking-wide">
                One platform. One brand. Unlimited learning possibilities.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Scale Your Education Business Today" />
    </div>
  );
};

export default SaaS_SMS;
