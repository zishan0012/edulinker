import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Star, BookOpen, Users } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Sarah Jenkins',
      title: 'Senior Software Engineer',
      expertise: 'Full-Stack Web Development',
      experience: '8 Years Experience',
      rating: 4.9,
      students: 3200,
      courses: 6,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'Sarah is a seasoned full-stack developer with experience at top tech companies. She is passionate about making web development accessible to everyone.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Dr. Alan Smith',
      title: 'Data Scientist & AI Researcher',
      expertise: 'Data Science & Machine Learning',
      experience: '12 Years Experience',
      rating: 4.9,
      students: 5100,
      courses: 9,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Dr. Smith holds a PhD in Computer Science and has published 20+ papers in AI. He simplifies complex machine learning concepts for his students.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Jessica Wong',
      title: 'Lead UX/UI Designer',
      expertise: 'UI/UX Design & Figma',
      experience: '6 Years Experience',
      rating: 4.8,
      students: 2400,
      courses: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      bio: 'Jessica has designed products used by millions at leading design agencies. She brings real-world creative skills into every lesson she teaches.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Mike Johnson',
      title: 'React & Next.js Expert',
      expertise: 'React.js & Modern JavaScript',
      experience: '7 Years Experience',
      rating: 4.9,
      students: 4100,
      courses: 7,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      bio: 'Mike is a frontend architect who has built large-scale React applications. He loves sharing patterns and best practices with the developer community.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Emma Thompson',
      title: 'Digital Marketing Director',
      expertise: 'SEO, SEM & Social Media',
      experience: '10 Years Experience',
      rating: 4.7,
      students: 2800,
      courses: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      bio: 'Emma has run digital campaigns for Fortune 500 brands. She breaks down complex marketing strategies into simple, actionable lessons.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'David Chen',
      title: 'Python & Cloud Engineer',
      expertise: 'Python, AWS & DevOps',
      experience: '9 Years Experience',
      rating: 4.8,
      students: 3700,
      courses: 8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'David is a certified AWS Solutions Architect and Python guru. He guides students from beginner scripting all the way to cloud-native deployments.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Expert Instructors</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn from industry professionals with years of hands-on experience in their field.
            </p>
          </motion.div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              {/* Top: photo + name */}
              <div className="p-6 text-center border-b border-slate-100">
                <div className="relative inline-block mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"
                  />
                  <span className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{teacher.name}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{teacher.title}</p>
                <p className="text-slate-500 text-xs mt-1">{teacher.experience}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-current mr-1" />{teacher.rating}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Rating</p>
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center text-slate-800 font-bold">
                    <Users className="w-4 h-4 mr-1 text-blue-500" />{(teacher.students / 1000).toFixed(1)}K
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Students</p>
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center text-slate-800 font-bold">
                    <BookOpen className="w-4 h-4 mr-1 text-cyan-500" />{teacher.courses}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Courses</p>
                </div>
              </div>

              {/* Bio & Social */}
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{teacher.bio}</p>
                <div className="flex items-center gap-4">
                  <a href={teacher.social.twitter} className="text-slate-400 hover:text-sky-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={teacher.social.linkedin} className="text-slate-400 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={teacher.social.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
