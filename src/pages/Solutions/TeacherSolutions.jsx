import React from 'react';
import {
  BookOpen,
  Video,
  Smartphone,
  Users,
  Layout,
  TrendingUp,
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
  Globe,
  Award
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const TeacherSolutions = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Education & Teacher Solutions"
        subtitle="Build. Teach. Scale. Monetize — All From One Platform."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker is a complete digital education infrastructure designed for teachers, trainers, coaching institutes, and education brands who want to move beyond traditional classrooms and build sustainable online learning businesses. From branded teaching apps to course selling platforms, Edu-Linker empowers educators to deliver, manage, and monetize knowledge across web and mobile — without technical complexity.
              </p>
            </div>
          </Reveal>

          {/* The Challenge */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">The Challenge in Modern Education</h2>
                <p className="text-lg text-neutral-600 mb-6">Educators today face more than just teaching challenges:</p>
                <ul className="space-y-3">
                  {[
                    'Limited reach beyond physical classrooms',
                    'Dependency on third-party marketplaces',
                    'High tech complexity & platform costs',
                    'Low control over branding, data & revenue',
                    'Fragmented tools for courses, tests & live classes'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100">
                  <h3 className="text-xl font-bold text-brand-600 mb-4">Edu-Linker was built to remove these barriers.</h3>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Our Approach */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Our Education-First Approach</h2>
              <h3 className="text-xl text-brand-600 font-bold mb-6">We don’t just provide software. We build education ecosystems.</h3>
              <p className="max-w-3xl mx-auto text-neutral-500 mb-12">Edu-Linker understands the time constraints, technical limitations, and real workflows of educators. That’s why our platform is:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'Minimal learning curve',
                  'Rapid to deploy',
                  'Feature-rich but educator-friendly',
                  'Designed to grow with your teaching business'
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <CheckCircle2 className="text-brand-600 w-8 h-8 mx-auto mb-3" />
                    <p className="font-bold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-neutral-500 font-bold">Set up your own online teaching platform in minutes — not months.</p>
            </div>
          </Reveal>

          {/* What Edu-Linker Delivers */}
          <section className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">What Edu-Linker Delivers</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: '1. Branded Online Teaching Platform', desc: 'Launch your own education brand with a fully customized website and mobile apps. Your logo, colors & identity. Custom domain & institute branding. Independent from marketplaces. Your students learn on your platform, not someone else’s.', icon: <Globe className="text-white" /> },
                { title: '2. Course Creation & Selling', desc: 'Create and sell structured learning programs with ease. Video courses, Recorded & scheduled content, Paid / free / subscription models, Secure content access. Turn your expertise into a scalable revenue stream.', icon: <BookOpen className="text-white" /> },
                { title: '3. Online Tests, Quizzes & Mock Exams', desc: 'Perfect for competitive exams, assessments, and practice modules. MCQs, subjective & timed tests, Auto-evaluation & analytics, Student performance tracking. Ideal for coaching institutes & exam prep educators.', icon: <Award className="text-white" /> },
                { title: '4. Live Classes & Interactive Learning', desc: 'Engage students in real time with seamless live teaching tools. Live classes via web & mobile, Student interaction & attendance, Recorded session access. Scalable for small batches or large audiences.', icon: <Video className="text-white" /> },
                { title: '5. iOS & Android Teaching Apps', desc: 'Deliver learning directly to students’ smartphones. High-performance mobile apps, Push notifications & updates, Anytime, anywhere learning experience, Strong student retention & engagement.', icon: <Smartphone className="text-white" /> },
                { title: '6. Student & Educator Management', desc: 'Manage your entire education operation from a single dashboard. Student enrollment & access control, Course & batch management, Payment & subscription tracking, Reports & analytics.', icon: <Users className="text-white" /> }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full flex flex-col group">
                    <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed flex-grow text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Who Is This For */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <Reveal>
              <div className="bg-slate-900 text-white p-12 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-white">Who Is This Solution For?</h3>
                <p className="text-neutral-400 mb-8">Edu-Linker is built for:</p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Independent Teachers & Subject Experts',
                    'Coaching & Training Institutes',
                    'Exam Preparation Academies',
                    'Professional Trainers & Mentors',
                    'Education Startups & Learning Brands'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-400" />
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-200 font-medium italic">Whether you teach 10 students or 10,000, the platform scales with you.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-brand-50 p-12 rounded-[2.5rem] border border-brand-100 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Edu-Linker?</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Education-Focused by Design', desc: 'Built specifically for educators — not generic platforms repurposed for teaching.' },
                    { title: 'Fast Deployment', desc: 'Launch your complete online teaching system within minutes.' },
                    { title: '80+ Integrated Features', desc: 'No need for multiple tools or plugins.' },
                    { title: 'Low Technical Dependency', desc: 'Minimal training. Maximum control.' },
                    { title: 'Multiple Revenue Models', desc: 'Courses, tests, subscriptions, live classes — all supported.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-neutral-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Working Model */}
          <section className="mb-24 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 font-sans">Our Working Model</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: 'Understand Your Teaching Model', desc: 'We analyze your subject, audience, and goals.' },
                  { title: 'Customize Your Education Platform', desc: 'Branding, features, and structure tailored to you.' },
                  { title: 'Launch & Onboard', desc: 'Quick setup with guided support.' },
                  { title: 'Scale & Optimize', desc: 'Grow students, courses, and revenue seamlessly.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 relative overflow-hidden group hover:border-brand-200 transition-colors">
                    <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl mx-auto mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Transform Teaching */}
          <Reveal>
            <div className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-white">Transform Teaching Into a Digital Asset</h2>
                <p className="text-xl text-neutral-400 mb-8 max-w-3xl mx-auto">Edu-Linker helps educators future-proof their teaching careers by turning knowledge into a structured, scalable, and profitable digital business.</p>
                <div className="flex justify-center gap-8 text-lg font-bold">
                  <span className="text-brand-400">You focus on teaching.</span>
                  <span className="text-white">We handle the technology.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Online Teaching Platform?"
        subtitle="Let Edu-Linker power your education ecosystem."
      />
    </div>
  );
};

export default TeacherSolutions;
