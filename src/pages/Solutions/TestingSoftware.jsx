import React from 'react';
import {
  CheckSquare,
  Clock,
  BarChart,
  Database,
  ShieldAlert,
  TrendingUp,
  Monitor,
  Smartphone,
  CheckCircle2,
  FileText
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const TestingSoftware = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Test & Assessments"
        subtitle="Smart Evaluation Solutions for Modern Education"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s Test & Assessments solution empowers educators, trainers, and institutes to design, deliver, and manage digital evaluations seamlessly—across web and mobile platforms—under their own branded learning ecosystem.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <p className="text-brand-600 font-bold text-lg">From daily practice tests to full-scale mock exams, Edu-Linker helps you assess learning outcomes accurately, securely, and at scale.</p>
              </div>
            </div>
          </Reveal>

          {/* Redefining Measurement */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-600/10 rounded-[3rem] transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&w=800&q=80"
                    alt="Online Assessment"
                    className="relative rounded-[3rem] shadow-xl w-full"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Redefining How Learning Is Measured</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Traditional assessments are time-consuming, rigid, and difficult to scale. Edu-Linker transforms evaluation into a flexible, data-driven learning experience that supports continuous improvement—for both educators and learners.
                </p>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <p className="text-slate-700 font-medium">Our platform is built to match the real classroom and coaching workflows, without requiring technical expertise or complex setup.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Capabilities */}
          <div className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Our Test & Assessment Capabilities</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Online Tests & Mock Exams', desc: 'Create structured tests with multiple formats including MCQs, descriptive questions, timed exams, and practice tests.', icon: <CheckSquare className="text-white" /> },
                { title: 'Quiz-Based Learning', desc: 'Engage learners with interactive quizzes that reinforce concepts, boost retention, and make learning measurable in real time.', icon: <Clock className="text-white" /> },
                { title: 'Automated Evaluation & Results', desc: 'Instant result generation, smart scoring, and performance insights reduce manual effort while maintaining assessment accuracy.', icon: <BarChart className="text-white" /> },
                { title: 'Question Bank Management', desc: 'Build, organize, and reuse question banks by topic, difficulty level, or course—making assessment creation faster.', icon: <Database className="text-white" /> },
                { title: 'Secure Exam Environment', desc: 'Maintain exam integrity with controlled access, time limits, and learner authentication—ensuring fair and reliable assessments.', icon: <ShieldAlert className="text-white" /> },
                { title: 'Performance Analytics', desc: 'Track learner progress, identify knowledge gaps, and improve teaching strategies through detailed reports and analytics.', icon: <TrendingUp className="text-white" /> }
              ].map((cap, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full group">
                    <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans">{cap.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Designed for... & How It Works */}
          <div className="grid lg:grid-cols-5 gap-12 mb-24">
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <div className="bg-slate-900 text-white p-10 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold mb-6 text-white">Designed for Every Learning Model</h3>
                  <p className="text-neutral-400 mb-8">Edu-Linker’s assessment solution adapts to multiple education formats:</p>
                  <ul className="space-y-4">
                    {['Independent Educators', 'Coaching Institutes', 'Schools & Colleges', 'EdTech Brands', 'Skill Development Programs'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-brand-400" />
                        <span className="font-medium text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <div className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { step: 'Create', desc: 'Design tests, quizzes, and mock exams using an intuitive interface' },
                      { step: 'Publish', desc: 'Deliver assessments through your branded website and mobile apps' },
                      { step: 'Evaluate', desc: 'Automate scoring and track learner performance instantly' },
                      { step: 'Improve', desc: 'Use insights to enhance learning outcomes and course quality' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-brand-50 rounded-bl-full -mr-8 -mt-8"></div>
                        <h4 className="text-xl font-bold text-brand-600 mb-3">{item.step}</h4>
                        <p className="text-neutral-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Why Edu-Linker & Closing */}
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 font-sans">Why Edu-Linker for Test & Assessments?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['Education-focused platform', 'Fully branded web & mobile delivery', 'Minimal setup, maximum control', 'Scalable for institutes', 'Integrated with courses'].map((reason, i) => (
                  <span key={i} className="px-5 py-3 bg-white rounded-full text-brand-700 font-bold border border-brand-100 shadow-sm">{reason}</span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-3xl p-12">
                <h2 className="text-3xl font-bold mb-4">Build Smarter Assessments. Deliver Better Outcomes.</h2>
                <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">Edu-Linker enables you to measure learning with confidence, scale evaluations effortlessly, and create a complete digital education ecosystem—all from one platform.</p>
                <div className="inline-block bg-white text-brand-700 px-8 py-3 rounded-full font-bold shadow-lg text-black">Start creating smarter tests today</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Upgrade Your Assessment System" />
    </div>
  );
};

export default TestingSoftware;
