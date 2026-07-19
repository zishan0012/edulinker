import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, CheckCircle2, BookOpen, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { value: '15K+', label: 'Active Learners' },
    { value: '50+', label: 'Expert Instructors' },
    { value: '120+', label: 'Quality Courses' },
    { value: '95%', label: 'Satisfaction Rate' },
  ];

  const values = [
    { icon: BookOpen, title: 'Quality First', desc: 'Every course is carefully crafted and reviewed by industry experts to ensure the highest standards of learning.' },
    { icon: Globe, title: 'Accessible to All', desc: 'We believe education should be available to everyone, regardless of background or location.' },
    { icon: TrendingUp, title: 'Career-Focused', desc: 'Our curriculum is designed to give learners practical, in-demand skills that translate directly to career advancement.' },
    { icon: Users, title: 'Community-Driven', desc: 'Learning is better together. We foster a vibrant community of students and instructors who support each other.' },
  ];

  const team = [
    {
      name: 'Alex Carter',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Priya Nair',
      role: 'Head of Curriculum',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'James Miller',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Student Success',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We are on a mission to<br />
              <span className="text-cyan-300">democratize education</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Edulinker was founded with a simple belief: that anyone, anywhere should have access to world-class education and the opportunity to transform their life through learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Edulinker started in 2022 when two engineers and an educator noticed a gap in affordable, high-quality online learning. Too many platforms were either too expensive, too shallow, or disconnected from what employers actually needed.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                We set out to build something different — a platform where expert practitioners, not just academics, teach real-world skills in a structured, engaging format.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Today, we are proud to serve over 15,000 learners across 60+ countries and continue to grow our library of industry-relevant, project-based courses every month.
              </p>
              <ul className="space-y-3">
                {['Industry-expert instructors only', 'Project-based learning approach', 'Career-aligned curriculum'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" alt="team" className="rounded-2xl object-cover w-full h-48" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" alt="team" className="rounded-2xl object-cover w-full h-32" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" alt="team" className="rounded-2xl object-cover w-full h-32" />
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="team" className="rounded-2xl object-cover w-full h-48" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our core values guide every decision we make — from the courses we build to the communities we grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Team Behind Edulinker</h2>
            <p className="text-slate-600 max-w-xl mx-auto">We are a passionate team of educators, engineers, and designers committed to redefining online learning.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 ring-4 ring-white shadow-md group-hover:ring-blue-200 transition-all"
                />
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join thousands of learners who have transformed their careers with Edulinker.</p>
          <Link to="/register" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors inline-block shadow-lg">
            Sign Up for Free
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
