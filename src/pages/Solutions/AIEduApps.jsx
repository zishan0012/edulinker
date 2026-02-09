import React from 'react';
import {
  Target,
  Sparkles,
  BarChart3,
  Zap,
  Bell,
  ShieldCheck,
  CheckCircle2,
  Monitor
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AIEduApps = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="AI-Powered Education Apps"
        subtitle="Smarter Teaching. Personalized Learning. Scalable Growth."
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s AI Education Apps are designed to transform traditional online teaching into a data-driven, personalized, and high-impact learning experience. Built specifically for educators, trainers, and institutes, our AI-enabled apps adapt to learner behavior, automate academic workflows, and enhance teaching effectiveness—without adding technical complexity.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <p className="text-brand-600 font-bold text-xl">We don’t just digitalized education. We intelligently optimize it.</p>
              </div>
            </div>
          </Reveal>

          {/* How AI Enhances */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-sans  tracking-tight">How AI Enhances the Edu-Linker Learning Ecosystem</h2>
              <p className="max-w-3xl mx-auto text-neutral-500 font-medium">Our AI capabilities are seamlessly integrated into branded Web, Android, and iOS education apps, ensuring both educators and learners benefit from smarter systems and better outcomes.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Personalized Learning Paths */}
            <Reveal delay={0.1}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Personalized Learning Paths</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">AI analyzes student performance, learning speed, and engagement patterns to deliver customized learning journeys. Each learner progresses at their own pace, ensuring higher retention and better results.</p>
              </div>
            </Reveal>

            {/* Intelligent Course & Content Recommendations */}
            <Reveal delay={0.2}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Intelligent Course & Content Recommendations</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Based on learner interests, progress, and assessment performance, the platform automatically suggests relevant courses, quizzes, tests, and live classes, increasing engagement and course completion rates.</p>
              </div>
            </Reveal>

            {/* Smart Assessments & Performance Analytics */}
            <Reveal delay={0.3}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Smart Assessments & Performance Analytics</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">AI-driven insights help educators:</p>
                <ul className="space-y-2">
                  {['Identify learning gaps', 'Track individual and batch-level performance', 'Improve course effectiveness using real-time data'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider">All analytics are presented in simple, educator-friendly dashboards.</p>
              </div>
            </Reveal>

            {/* Automated Academic Operations */}
            <Reveal delay={0.4}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Automated Academic Operations</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">Reduce manual effort with AI-assisted automation:</p>
                <ul className="space-y-2">
                  {['Auto-evaluation of tests & quizzes', 'Attendance tracking for live classes', 'Learner progress monitoring', 'Performance reports generation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-bold text-brand-600">Spend less time managing systems—and more time teaching.</p>
              </div>
            </Reveal>

            {/* AI-Enabled Student Engagement */}
            <Reveal delay={0.5}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">AI-Enabled Student Engagement</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">From intelligent notifications to adaptive learning nudges, AI ensures learners stay motivated, informed, and connected throughout their learning journey.</p>
              </div>
            </Reveal>

            {/* Built for Educators, Not Engineers */}
            <Reveal delay={0.6}>
              <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Built for Educators, Not Engineers</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">Edu-Linker’s AI Education Apps are:</p>
                <ul className="space-y-2">
                  {['Easy to use', 'Quick to deploy', 'Minimal training required', 'Fully white-labeled under your brand'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold text-neutral-400">You get advanced AI capabilities without technical overheads.</p>
              </div>
            </Reveal>
          </div>

          {/* One Platform Multiple Experiences */}
          <Reveal>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -mr-64 -mt-64"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-sans leading-tight text-white">One Platform. Multiple Learning Experiences.</h2>
                  <p className="text-neutral-400 mb-10 font-medium text-lg leading-relaxed">With Edu-Linker’s AI-powered ecosystem, you can:</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      'Sell online courses',
                      'Conduct mock tests & quizzes',
                      'Host live classes',
                      'Deliver personalized education'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/[0.08] transition-colors group">
                        <Monitor size={24} className="text-brand-500 transition-transform group-hover:scale-110" />
                        <span className="font-bold text-sm tracking-wide leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-10 text-neutral-300 italic flex items-center gap-2">
                    <span className="w-12 h-px bg-brand-500/50"></span>
                    all from your own branded website and mobile apps
                  </p>
                </div>
                <div className="text-center lg:text-left pt-12 lg:pt-0 lg:border-l border-white/10 lg:pl-16">
                  <h3 className="text-4xl lg:text-5xl font-black text-brand-500 mb-6 leading-[1.1]">The Future of Education is Intelligent</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg mb-8 italic">
                    "AI is no longer optional in digital education—it’s essential. Edu-Linker empowers educators to teach smarter, scale faster, and deliver better learning outcomes using the power of artificial intelligence."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Empower Your Teaching with AI" />
    </div>
  );
};

export default AIEduApps;
