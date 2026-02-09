import React from 'react';
import {
  Globe,
  Smartphone,
  Layout,
  Video,
  Layers,
  PieChart,
  ShieldCheck,
  Zap,
  CheckCircle2,
  DollarSign,
  Settings
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AIEduWeb = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="AI Web Solutions"
        subtitle="Empowering Educators with Intelligent E-Learning Platforms"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                In today’s digital era, educators, trainers, and institutes need intuitive, feature-rich tools that help them deliver knowledge, engage learners, and monetize expertise — without tech complexity.
              </p>
              <div className="bg-brand-50 p-6 rounded-2xl inline-block border border-brand-100 mb-8">
                <p className="text-brand-600 font-bold text-xl uppercase tracking-wider">Edu-Linker bridges this gap.</p>
              </div>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Our complete suite of online teaching and learning solutions empowers instructors to launch their own branded digital education ecosystem — including websites and mobile apps — with zero hassles and maximum impact.
              </p>
            </div>
          </Reveal>

          {/* Core Pillars */}
          <div className="space-y-24 mb-32">
            {[
              {
                // id: '1',
                title: 'Branded Course Website & Web Portal',
                desc: 'Build your own custom educational website where students can:',
                features: ['Enroll in courses', 'Take live classes', 'Access learning materials', 'Participate in quizzes and assessments', 'Track progress'],
                extra: 'This solution gives educators total control over design, branding, pricing, and delivery, transforming expertise into a sustainable online business.',
                icon: <Globe className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
              },
              {
                // id: '2',
                title: 'iOS & Android Mobile Apps',
                desc: 'Take learning mobile. Edu-Linker provides native Android and iOS applications that mirror your branded website’s power and look.',
                features: ['Easy access on any device', 'Real-time notifications', 'Seamless video playback', 'Smooth course navigation'],
                extra: 'Mobile presence creates a deeper bond with your learners and increases engagement.',
                icon: <Smartphone className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
                reverse: true
              },
              {
                // id: '3',
                title: 'Online Courses & Content Marketplace',
                desc: 'With Edu-Linker, uploading and organizing educational content is effortless. From text lessons to video modules, you can:',
                features: ['Create structured courses', 'Add multimedia and downloadable resources', 'Segment content by topics and difficulty', 'Manage pricing and access control'],
                extra: 'Learners can easily browse, purchase, and begin learning instantly.',
                icon: <Layout className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              },
              {
                // id: '4',
                title: 'Live Classes & Interactive Sessions',
                desc: 'Real-time learning is the backbone of effective education. Our platform enables you to:',
                features: ['Schedule live classes directly with learners', 'Host high-quality video sessions', 'Share screens, slides, whiteboards, and resources', 'Interact via chat and Q&A'],
                extra: 'Drive engagement and real-time learning outcomes like never before.',
                icon: <Video className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
                reverse: true
              },
              {
                // id: '5',
                title: 'Tests, Quizzes & Learner Assessments',
                desc: 'Track progress and reinforce learning with advanced assessment tools. Edu-Linker’s testing suite lets you:',
                features: ['Build multiple choice, descriptive, or timed tests', 'Shuffle questions and assign results', 'Provide instant feedback', 'Analyze performance with dashboards'],
                extra: 'Automate evaluation and help learners master concepts.',
                icon: <Layers className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
              },
              {
                // id: '6',
                title: 'Analytics & Performance Insights',
                desc: 'Understand your learners, improve your content, and make informed decisions. Edu-Linker delivers:',
                features: ['User engagement metrics', 'Course performance stats', 'Revenue dashboards', 'Completion rates and assessment analytics'],
                extra: 'These insights help you scale meaningfully and refine your teaching strategy.',
                icon: <PieChart className="text-brand-600" />,
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                reverse: true
              }
            ].map((pillar, i) => (
              <Reveal key={i} animation={pillar.reverse ? "fade-right" : "fade-left"}>
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${pillar.reverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center shadow-sm">
                        {pillar.icon}
                      </div>
                      <span className="text-6xl font-black text-neutral-100 flex-none">{pillar.id}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 font-sans leading-tight">{pillar.title}</h3>
                    <p className="text-lg text-neutral-600 mb-6 font-medium">{pillar.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {pillar.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-brand-500 shrink-0 mt-1" />
                          <span className="text-neutral-600 font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-neutral-500 italic border-l-4 border-brand-500 pl-4 py-1">{pillar.extra}</p>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/3]">
                      <div className="absolute inset-0 bg-brand-600/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Why Choose Edu-Linker */}
          <Reveal>
            <div className="bg-neutral-50 rounded-[3rem] p-12 lg:p-20 border border-neutral-100 mb-24 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[100px] -mr-32 -mb-32"></div>
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-slate-900 mb-4 font-sans tracking-tight">Why Choose Edu-Linker?</h2>
                  <p className="text-xl text-brand-600 font-bold uppercase tracking-widest">Next-Gen Education, Zero Complexity</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: '100% Branded Experience', desc: 'Your platform reflects your identity — not our logo or platform branding.', icon: <ShieldCheck className="text-brand-600" /> },
                    { title: 'Multiple Revenue Streams', desc: 'Sell courses, subscriptions, live sessions, tests, and certifications — all from one place.', icon: <DollarSign className="text-brand-600" /> },
                    { title: '80+ Powerful Features', desc: 'From payments to push notifications, analytics to live sessions — everything you need.', icon: <Zap className="text-brand-600" /> },
                    { title: 'Zero Complexity', desc: 'We know educators want to focus on teaching — not technology. Simple to set up and manage.', icon: <Settings className="text-brand-600" /> }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full border border-neutral-100 group">
                      <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Transform Your Teaching Business — Fast"
        subtitle="✔ Affordable ✔ Fast to launch ✔ Simple to use ✔ Professional in delivery"
      />
    </div>
  );
};

export default AIEduWeb;
