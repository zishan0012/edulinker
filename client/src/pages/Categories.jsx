import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, Laptop, BarChart2, Palette, Brain, LineChart, Shield, Database, Briefcase, Camera, Music, BookOpen 
} from 'lucide-react';

const Categories = () => {
  const categoriesList = [
    { name: 'Web Development', icon: Code, count: '45 Courses', desc: 'HTML, CSS, JS, React, Node.js, and modern frameworks.', color: 'text-blue-600 bg-blue-50' },
    { name: 'Data Science', icon: Database, count: '32 Courses', desc: 'Python, R, Machine Learning, Deep Learning, and SQL.', color: 'text-cyan-600 bg-cyan-50' },
    { name: 'UI/UX Design', icon: Palette, count: '15 Courses', desc: 'Figma, Adobe XD, User Research, Wireframing, and Prototyping.', color: 'text-purple-600 bg-purple-50' },
    { name: 'Digital Marketing', icon: BarChart2, count: '28 Courses', desc: 'SEO, SEM, Social Media Marketing, Email campaigns, and Copywriting.', color: 'text-amber-600 bg-amber-50' },
    { name: 'Artificial Intelligence', icon: Brain, count: '20 Courses', desc: 'Neural Networks, NLP, Computer Vision, and Generative AI.', color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Cybersecurity', icon: Shield, count: '12 Courses', desc: 'Network Security, Ethical Hacking, Cryptography, and InfoSec.', color: 'text-rose-600 bg-rose-50' },
    { name: 'Business Analytics', icon: LineChart, count: '18 Courses', desc: 'Power BI, Tableau, Excel, Financial modeling, and operations.', color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Entrepreneurship', icon: Briefcase, count: '22 Courses', desc: 'Startup scaling, business plan, pitching, leadership, and finance.', color: 'text-teal-600 bg-teal-50' },
    { name: 'Photography', icon: Camera, count: '10 Courses', desc: 'Lighting, DSLR mastery, photo editing, and composition techniques.', color: 'text-pink-600 bg-pink-50' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Browse by Categories</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find the right field of study for you. Explore our diverse catalog of skill-focused learning paths.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoriesList.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl ${category.color} transition-colors group-hover:scale-105 duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm font-medium text-slate-500">{category.count}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {category.desc}
                </p>
                <Link 
                  to={`/courses?category=${category.name}`} 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:underline"
                >
                  Explore Category <BookOpen className="ml-1.5 h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
