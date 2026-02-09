import React from 'react';
import {
  Bot,
  MessageSquare,
  Zap,
  Clock,
  Navigation,
  Users,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  HelpCircle
} from 'lucide-react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const AIChatbotSolutions = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="AI Chatbots for Smart Learning Ecosystems"
        subtitle="Transform the Way Learners Interact, Ask, and Learn"
        image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Edu-Linker’s AI Chatbot Solution is designed to support educators, trainers, and institutes by creating intelligent learning assistants that guide learners in real time. These chatbots act as 24/7 academic support systems, helping students navigate courses, resolve doubts, access resources, and stay engaged—without increasing faculty workload.
              </p>
            </div>
          </Reveal>

          {/* Why Matters */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-600/10 rounded-[3rem] transform -rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80"
                    alt="AI Chatbot Interaction"
                    className="relative rounded-[3rem] shadow-xl w-full"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Why AI Chatbots Matter in Modern Education</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Today’s learners expect instant answers, guided learning, and personalized support. Our AI-powered chatbots bridge the gap between educators and learners by providing continuous assistance, ensuring no question goes unanswered and no learner feels disconnected.
                </p>
                <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                  <p className="text-brand-700 font-bold text-lg">Edu-Linker’s AI Chatbots are not just automated responders—they are education-aware digital mentors.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* How It Works */}
          <section className="mb-24">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">How Edu-Linker AI Chatbots Work</h2>
                <p className="max-w-2xl mx-auto text-neutral-500 mb-12">Our AI Chatbots are seamlessly integrated into your branded website and mobile learning apps (Web, Android & iOS).</p>
                <div className="grid md:grid-cols-4 gap-6">
                  {['Understand learner queries', 'Provide accurate academic guidance', 'Assist with platform navigation', 'Support enrollment & progress'].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                        {i + 1}
                      </div>
                      <p className="font-bold text-slate-800 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-12 text-neutral-500 italic">All this happens within your existing Edu-Linker learning ecosystem, without technical complexity.</p>
              </div>
            </Reveal>
          </section>

          {/* Key Capabilities */}
          <section className="mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-sans">Key Capabilities</h2>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { title: 'Intelligent Student Assistance', desc: 'Provide instant responses to learner questions related to: Courses & curriculum, Mock tests, Live class schedules, Certificates.', icon: <HelpCircle className="text-white" /> },
                { title: 'Personalized Learning Guidance', desc: 'AI chatbots adapt responses based on: Learner behavior, Course enrollment, Academic progress. Helping learners stay focused and motivated.', icon: <Users className="text-white" /> },
                { title: '24/7 Academic Support', desc: 'Ensure uninterrupted learner engagement—day or night—without adding manual support teams.', icon: <Clock className="text-white" /> },
                { title: 'Seamless Platform Navigation', desc: 'Guide users smoothly through: Course discovery, Enrollment, Test attempts, Class access. Reducing confusion and drop-offs.', icon: <Navigation className="text-white" /> },
                { title: 'Educator & Institute Efficiency', desc: 'Automate repetitive academic queries so educators can focus on teaching, mentoring, and content creation.', icon: <Zap className="text-white" /> }
              ].map((cap, i) => (
                <Reveal key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                  <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full group">
                    <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans">{cap.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Built for Educators & Use Cases */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <Reveal>
              <div className="bg-slate-900 text-white p-12 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-white">Built for Educators, Not Technologists</h3>
                <p className="text-neutral-400 mb-8">We understand that educators face time and technical limitations. That’s why Edu-Linker AI Chatbots are:</p>
                <ul className="space-y-4 mb-8">
                  {['Easy to deploy', 'Simple to manage', 'No technical training required'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-400" />
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-200 font-medium italic">You stay focused on education—we handle the intelligence behind the scenes.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-neutral-50 p-12 rounded-[2.5rem] border border-neutral-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Use Cases Across Education</h3>
                <ul className="space-y-4">
                  {[
                    'Independent Teachers offering online courses',
                    'Coaching Institutes running mock tests & live classes',
                    'Training organizations managing large learner bases',
                    'EdTech brands scaling learner engagement'
                  ].map((item, i) => (
                    <li key={i} className="bg-white p-4 rounded-xl shadow-sm font-medium text-slate-700 border border-neutral-100">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-center font-bold text-brand-600 text-lg">One solution. Multiple education models.</p>
              </div>
            </Reveal>
          </div>

          {/* Secure & Scalable */}
          <section className="mb-24 text-center">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-sans">Secure, Scalable & Future-Ready</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {['Secure learner interactions', 'Scalable for thousands of users', 'Continuously improving'].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-neutral-100">
                      <ShieldCheck size={32} className="text-brand-500" />
                      <span className="font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Empower Learning with Intelligent Conversations</h3>
                  <p className="text-xl text-neutral-600 mb-6">Turn learner questions into meaningful learning moments. With Edu-Linker AI Chatbots, education becomes interactive, responsive, and learner-centric.</p>
                  <p className="text-2xl font-black text-brand-600">Build smarter learning experiences—without complexity.</p>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </section>

      <CTASection title="Get Your AI Teaching Assistant" />
    </div>
  );
};

export default AIChatbotSolutions;
