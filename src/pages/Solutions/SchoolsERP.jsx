import React from 'react';
import {
  School,
  Users,
  FileSpreadsheet,
  MessageCircle,
  BarChart3,
  Smartphone,
  Monitor,
  CheckCircle2,
  LayoutDashboard,
  GraduationCap,
  CalendarDays,
  ShieldCheck
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const SchoolsERP = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="School ERP"
        subtitle="A Smart Digital Backbone for Modern Schools"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s School ERP is a unified digital education management system designed to simplify, automate, and modernize every academic and administrative operation of a school—on a single, easy-to-use platform.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <p className="text-brand-600 font-bold text-lg">Built by deeply understanding the real challenges schools face daily, our ERP connects administrators, teachers, students, and parents through a seamless digital ecosystem that saves time, improves transparency, and enhances learning outcomes.</p>
              </div>
            </div>
          </Reveal>

          {/* One Platform. Complete Control. */}
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-600/10 rounded-[3rem] transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                    alt="School Management"
                    className="relative rounded-[3rem] shadow-xl w-full"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">One Platform. Complete School Control.</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Managing a school today requires more than spreadsheets and disconnected tools. Edu-Linker’s School ERP brings academics, administration, communication, and analytics together under one intelligent system—accessible anytime through web and mobile apps.
                </p>
                <div className="flex items-center gap-3 p-4 bg-brand-50 rounded-xl border border-brand-100">
                  <LayoutDashboard className="text-brand-600 shrink-0" />
                  <span className="font-medium text-slate-800">From admissions to attendance, exams to fees, and classrooms to communication—everything works in sync.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Designed for Educators */}
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-sans">Designed for Educators, Not IT Teams</h2>
              <p className="max-w-3xl mx-auto text-neutral-600 mb-12">We understand that schools operate with limited technical bandwidth. That’s why Edu-Linker School ERP is:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Quick to deploy', 'Easy to operate', 'Minimal training required', 'Zero technical complexity'].map((item, i) => (
                  <div key={i} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 hover:border-brand-200 transition-colors">
                    <CheckCircle2 className="text-brand-600 w-8 h-8 mx-auto mb-4" />
                    <p className="font-bold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-neutral-500 font-medium italic">Schools can go digital without hiring extra staff or investing in heavy infrastructure.</p>
            </div>
          </Reveal>

          {/* Core Capabilities */}
          <section className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Core Capabilities of Edu-Linker School ERP</h2>
            </Reveal>
            <div className="space-y-16">
              {[
                { title: 'Academic Management', desc: 'Streamline daily academic operations with smart tools that support teachers and students alike.', features: ['Class & section management', 'Timetable scheduling', 'Attendance tracking', 'Homework & assignments', 'Online exams & assessments', 'Report cards & analytics'], icon: <GraduationCap className="text-white" /> },
                { title: 'Student & Parent Engagement', desc: 'Keep parents informed and students engaged through transparent, real-time communication.', features: ['Parent & student mobile apps', 'Circulars, notices & announcements', 'Academic progress updates', 'Attendance reports', 'Two-way communication'], icon: <Users className="text-white" /> },
                { title: 'Administrative Automation', desc: 'Reduce paperwork and manual effort with automated workflows.', features: ['Online admissions & enrollment', 'Fee management & tracking', 'Staff management & payroll', 'Role-based access control', 'Document management'], icon: <FileSpreadsheet className="text-white" /> },
                { title: 'Smart Communication System', desc: 'Build stronger school-community connections.', features: ['Instant notifications & alerts', 'Event updates & reminders', 'Emergency communication', 'Centralized messaging'], icon: <MessageCircle className="text-white" /> },
                { title: 'Data-Driven School Decisions', desc: 'Real-time insights that help school leaders make smarter decisions.', features: ['Academic performance analytics', 'Attendance trends', 'Fee collection reports', 'Teacher productivity insights'], icon: <BarChart3 className="text-white" /> }
              ].map((cap, i) => (
                <Reveal key={i}>
                  <div className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2">
                      <div className="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200 mb-6">
                        {cap.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                      <p className="text-neutral-600 mb-6">{cap.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cap.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/2 w-full">
                      <div className="bg-neutral-100 rounded-3xl h-64 flex items-center justify-center border border-neutral-200">
                        <span className="text-neutral-400 font-medium">Visual for {cap.title}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Web + Mobile & Scalable */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <Reveal>
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Web + Mobile Experience</h3>
                <p className="text-neutral-400 mb-8">Edu-Linker School ERP works seamlessly across:</p>
                <div className="space-y-4">
                  {['Branded School Website', 'Android Apps', 'iOS Apps'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                      {i === 0 ? <Monitor size={20} className="text-brand-400" /> : <Smartphone size={20} className="text-brand-400" />}
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm text-neutral-400">This ensures uninterrupted access for administrators, teachers, students, and parents—anytime, anywhere.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-brand-50 p-10 rounded-[2.5rem] h-full border border-brand-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Scalable for Every Type of School</h3>
                <p className="text-neutral-600 mb-8">Edu-Linker School ERP scales effortlessly with your institution’s growth. Perfect for:</p>
                <div className="grid grid-cols-2 gap-4">
                  {['A primary school', 'A high school', 'A CBSE / ICSE / State Board institution', 'A growing education group'].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center flex flex-col items-center justify-center gap-3">
                      <School className="text-brand-600" size={24} />
                      <span className="text-sm font-bold text-slate-800 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Why Choose & Closing */}
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 font-sans">Why Schools Choose Edu-Linker</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['Education-first design approach', 'Fast implementation', '80+ integrated features', 'Secure & reliable infrastructure', 'Continuous upgrades'].map((reason, i) => (
                  <span key={i} className="px-5 py-3 bg-white rounded-full text-brand-700 font-bold border border-brand-100 shadow-sm">{reason}</span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-3xl p-12">
                <h2 className="text-3xl font-bold mb-4">Transform Your School into a Smart Digital Institution</h2>
                <p className="text-lg text-brand-100">Edu-Linker School ERP is not just a management tool—it’s a foundation for future-ready education.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Digitize Your School Operations Today" />
    </div>
  );
};

export default SchoolsERP;
