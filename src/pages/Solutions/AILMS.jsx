import React from 'react';
import {
  BookOpen,
  Users,
  BarChart3,
  Monitor,
  Layout,
  FileText,
  MessageCircle,
  CreditCard,
  Zap,
  Video,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AILMS = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="AI LMS FOR EDU-LINKER"
        subtitle="Empowering Educators With Intelligent, Scalable, and Branded E-Learning Solutions"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                At Edu-Linker, we believe every educator deserves a powerful platform to teach, earn, and scale — without tech limitations. Our AI-Driven Learning Management System (LMS) comes packed with intelligent tools and features that simplify online teaching, boost learner engagement, and grow your education business.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100">
                <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">OUR AI LMS — TRANSFORMING DIGITAL EDUCATION</span>
                <p className="text-slate-900 font-bold text-xl mt-2">Edu-Linker’s AI LMS is a complete ecosystem designed for:</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {['Independent Teachers', 'Professional Trainers', 'Coaching Institutes', 'EdTech Entrepreneurs'].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-700 shadow-sm border border-brand-100">{item}</span>
                  ))}
                </div>
                <p className="mt-6 text-neutral-500 text-sm max-w-2xl mx-auto">From course creation to monetization, live sessions to automated student insights — everything is built for educators to operate with maximum efficiency and impact.</p>
              </div>
            </div>
          </Reveal>

          {/* What Makes Our AI LMS Unique */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-sans">What Makes Our AI LMS Unique?</h2>
              <p className="max-w-2xl mx-auto text-neutral-500">Our LMS is not just another course platform — it’s a smart assistant for educators.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: 'AI Course Builder', desc: 'Generate structured lessons, lesson outlines, and adaptive content suggestions in seconds.', icon: <Sparkles className="text-brand-600" /> },
              { title: 'Smart Analytics & Insights', desc: 'Track learner progress, engagement metrics, and performance trends using AI-powered dashboards.', icon: <BarChart3 className="text-brand-600" /> },
              { title: 'Auto-Generated Assessments', desc: 'Create quizzes, mock tests, and activity prompts automatically.', icon: <FileText className="text-brand-600" /> },
              { title: 'Personalized Learning Paths', desc: 'Tailor course flow based on individual learner behavior and performance.', icon: <Zap className="text-brand-600" /> },
              { title: 'Cross-Platform Delivery', desc: 'Publish courses to Web, iOS & Android under your own brand.', icon: <Monitor className="text-brand-600" /> },
              { title: 'Automated Student Insights', desc: 'Everything is built for educators to operate with maximum efficiency and impact.', icon: <Users className="text-brand-600" /> }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Core Solutions */}
          <section className="py-20 border-t border-neutral-100">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-16 text-center font-sans">CORE SOLUTIONS FOR EDUCATORS</h2>
            </Reveal>

            <div className="space-y-24">
              {[
                { title: '1. Branded Online Course Platform', desc: 'Launch a fully customized course website that represents your educational identity — no coding required.', features: ['Own domain & logo integration', 'SEO-friendly course pages', 'Responsive design for web and mobile'], icon: <Layout className="text-brand-600" /> },
                { title: '2. Live Class & Webinar Portal', desc: 'Host engaging live teaching sessions with built-in tools for interaction.', features: ['Real-time chat, polls & attendance tracking', 'Record & repurpose class sessions', 'Breakout rooms for group discussions'], icon: <Video className="text-brand-600" /> },
                { title: '3. Course Library & Content Management', desc: 'Organize your lessons with simple drag-and-drop tools.', features: ['Video, PDF, Slide, and gallery support', 'AI-assisted content structuring', 'Previews and drip content delivery'], icon: <BookOpen className="text-brand-600" /> },
                { title: '4. Smart Assessment Center', desc: 'Create and deliver tests with automated scoring and feedback.', features: ['AI-generated quizzes and mock tests', 'Custom scoring patterns', 'Timed exams and question banks'], icon: <FileText className="text-brand-600" /> },
                { title: '5. Learner Engagement & Community', desc: 'Turn passive learners into active participants.', features: ['In-platform messaging', 'Gamification badges & leaderboards', 'Discussion forums for peer learning'], icon: <MessageCircle className="text-brand-600" /> },
                { title: '6. Secure Payments & Monetization', desc: 'Unlock new revenue streams through seamless monetization.', features: ['Course selling with secure payment gateways', 'Subscription plans & bundles', 'Affiliate & referral tracking'], icon: <CreditCard className="text-brand-600" /> }
              ].map((item, i) => (
                <Reveal key={i}>
                  <div className={`flex flex-col md:flex-row gap-10 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-neutral-600 text-lg mb-6 leading-relaxed">{item.desc}</p>
                      <ul className="space-y-3">
                        {item.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-neutral-700 font-medium">
                            <CheckCircle2 size={18} className="text-brand-500" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 w-full bg-neutral-100 rounded-3xl h-64 md:h-72 flex items-center justify-center p-8 border border-neutral-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                          {item.icon}
                        </div>
                        <span className="text-neutral-400 font-medium">Visual representation of {item.title}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Features Table */}
          <section className="py-20 mt-12 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">FEATURES YOU’LL LOVE</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { cat: 'Creation & Design', feat: 'AI Course Builder, Templates, Media Library' },
                  { cat: 'Teaching Tools', feat: 'Live Classes, Recordings, Interactive Widgets' },
                  { cat: 'Assessment', feat: 'AI-generated quizzes, Test analytics' },
                  { cat: 'Monetization', feat: 'Secure payments, Subscription & Bundles' },
                  { cat: 'Analytics', feat: 'AI Learner Insights, Progress Tracking' },
                  { cat: 'Community', feat: 'Discussion forums, Messaging & Notifications' }
                ].map((row, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="text-brand-400 font-bold mb-2 uppercase text-xs tracking-wider">{row.cat}</h4>
                    <p className="font-medium text-lg">{row.feat}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Edu-Linker Section */}
          <section className="py-24 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">WHY EDU-LINKER AI LMS?</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12">
                Edu-Linker’s AI LMS isn’t just a system — it’s a strategic learning growth partner that helps you:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Save time with automation', 'Deliver personalized learning experiences', 'Earn more from your content', 'Expand reach through mobile and web access'].map((benefit, i) => (
                  <div key={i} className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                    <CheckCircle2 className="text-brand-600 w-8 h-8 mx-auto mb-4" />
                    <p className="font-bold text-slate-800">{benefit}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-neutral-500 font-medium italic">And you can do all this without any tech expertise.</p>
            </Reveal>
          </section>

          {/* Final Impact Section */}
          <Reveal>
            <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">TURN YOUR KNOWLEDGE INTO IMPACT</h2>
              <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">Edu-Linker’s AI LMS isn’t just software — it’s the future of online education. <br /> <span className="font-bold text-white block mt-4">Build. Teach. Sell. Grow. — All under your own brand.</span></p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="GET STARTED IN MINUTES"
        subtitle="Edu-Linker’s AI LMS helps you launch your own branded educational platform instantly — no coding, no developers, no complexity."
      />
    </div>
  );
};

export default AILMS;
