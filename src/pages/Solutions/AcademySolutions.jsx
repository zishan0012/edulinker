import React from 'react';
import {
  Building,
  Globe,
  Video,
  Smartphone,
  CreditCard,
  TrendingUp,
  Layout,
  CheckCircle2,
  Monitor,
  BookOpen,
  Award,
  Users
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AcademySolutions = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Academy & Coaching Solutions"
        subtitle="Build, Scale & Monetize Your Digital Learning Ecosystem"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker empowers academies, coaching centers, and training institutes to transform their traditional teaching models into scalable digital learning businesses. From branded websites to Android & iOS apps, Edu-Linker provides a complete online teaching infrastructure—designed exclusively for educators.
              </p>
            </div>
          </Reveal>

          {/* The Challenge We Solve */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">The Challenge We Solve</h2>
                <p className="text-lg text-neutral-600 mb-6">Modern academies face a growing gap between quality education delivery and digital execution.</p>
                <ul className="space-y-3">
                  {['Limited reach beyond physical classrooms', 'Dependency on third-party marketplaces', 'Complex technology and high operational costs', 'Difficulty managing courses at scale'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100">
                  <h3 className="text-xl font-bold text-brand-600 mb-4">Edu-Linker bridges this gap.</h3>
                  <p className="text-slate-800">We offer a ready-to-launch digital education platform—built to simplify, not complicate.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Our Approach */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Our Approach</h2>
              <p className="max-w-2xl mx-auto text-neutral-500 mb-12">We believe academies should focus on teaching, not technology. Edu-Linker follows a plug-and-teach model:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Minimal setup', 'No technical expertise required', 'Fully branded learning experience', 'Multi-device accessibility'].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <CheckCircle2 className="text-brand-600 w-8 h-8 mx-auto mb-3" />
                    <p className="font-bold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* What Edu-Linker Enables */}
          <section className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">What Edu-Linker Enables</h2>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { title: '1. Branded Online Presence', desc: 'Launch your own academy website and mobile apps under your brand identity—logo, colors, domain, and content ownership included.', icon: <Globe className="text-white" /> },
                { title: '2. Course Creation & Management', desc: 'Create and manage: Recorded courses, Structured learning modules, Batch-wise programs, Paid & free content. All from a single educator-friendly dashboard.', icon: <BookOpen className="text-white" /> },
                { title: '3. Online Tests & Mock Exams', desc: 'Conduct: Practice tests, Mock exams, Subject-wise quizzes, and performance analytics. Designed for competitive exams, skill training, and academic assessments.', icon: <Award className="text-white" /> },
                { title: '4. Live Classes & Hybrid Teaching', desc: 'Engage learners through: Live online classes, Scheduled batches, and Recorded session access. Perfect for academies adopting hybrid learning models.', icon: <Video className="text-white" /> },
                { title: '5. Multi-Device Learning Experience', desc: 'Students can learn anytime, anywhere through: Web platforms, Android apps, and iOS apps. Ensuring higher engagement and completion rates.', icon: <Smartphone className="text-white" /> }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                  <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full flex flex-col group">
                    <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Revenue & Growth */}
          <Reveal>
            <div className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden mb-24">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-white">Revenue & Growth Opportunities</h2>
                  <p className="text-neutral-400 mb-8 text-lg">Edu-Linker opens new revenue verticals for academies, all while maintaining complete control over pricing, students, and content.</p>
                  <ul className="space-y-4">
                    {['Course sales', 'Subscription-based learning', 'Test series monetization', 'Paid live batches'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <TrendingUp className="text-brand-400" size={20} />
                        <span className="font-bold text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                    <CreditCard size={32} className="text-brand-400 mx-auto mb-3" />
                    <span className="font-bold">Total Control</span>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                    <TrendingUp size={32} className="text-brand-400 mx-auto mb-3" />
                    <span className="font-bold">Scalable Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Why Choose & Who Is It For */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-sans">Why Academies Choose Edu-Linker</h2>
                <ul className="space-y-4">
                  {['Education-first platform design', 'Quick setup with 80+ integrated features', 'Low training & operational overhead', 'Scalable from single center to multi-branch', 'Secure, reliable, and future-ready'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                      <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-sans">Who Is This Solution For?</h2>
                <div className="flex flex-wrap gap-3">
                  {['Coaching institutes', 'Skill training centers', 'Exam preparation academies', 'Professional training organizations', 'Independent educators scaling into institutes'].map((item, i) => (
                    <span key={i} className="px-5 py-3 bg-white border border-brand-100 text-brand-700 font-bold rounded-full shadow-sm">{item}</span>
                  ))}
                </div>
                <div className="mt-8 bg-brand-50 p-6 rounded-2xl border border-brand-100">
                  <p className="text-lg font-bold text-slate-900 text-center">If education is your core business, Edu-Linker is your digital backbone.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 text-center">
            <Reveal>
              <h2 className="text-4xl font-black text-brand-600 mb-6">Build Your Digital Academy Today</h2>
              <p className="text-xl text-neutral-600 mb-8">Turn your knowledge into a structured, scalable, and profitable digital learning platform.</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-12">Teach smarter. Scale faster. Educate without limits.</h3>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Start Your Digital Academy Journey" />
    </div>
  );
};

export default AcademySolutions;
