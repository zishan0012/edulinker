import React from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Users, Award, PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Active Students', value: '15K+', icon: Users },
    { label: 'Total Courses', value: '120+', icon: BookOpen },
    { label: 'Expert Instructors', value: '50+', icon: Award },
    { label: 'Video Lessons', value: '2K+', icon: PlayCircle },
  ];

  const categories = [
    { name: 'Web Development', count: '45 Courses', icon: '💻' },
    { name: 'Data Science', count: '32 Courses', icon: '📊' },
    { name: 'Digital Marketing', count: '28 Courses', icon: '📈' },
    { name: 'UI/UX Design', count: '15 Courses', icon: '🎨' },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Full-Stack Web Development Bootcamp',
      category: 'Web Development',
      instructor: 'Sarah Jenkins',
      rating: 4.8,
      students: 1240,
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: 'Machine Learning A-Z: Hands-On Python',
      category: 'Data Science',
      instructor: 'Dr. Alan Smith',
      rating: 4.9,
      students: 3100,
      price: '$94.99',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass: From Beginner to Pro',
      category: 'UI/UX Design',
      instructor: 'Jessica Wong',
      rating: 4.7,
      students: 850,
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                Unlock Your Potential with <span className="text-blue-600">Edulinker</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Join our global community of learners and advance your career with expert-led courses in technology, design, and business.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative max-w-2xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0"
            >
              <div className="relative flex items-center w-full h-12 sm:h-14 rounded-full bg-white shadow-lg shadow-blue-900/5 focus-within:shadow-blue-900/10 focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden transition-all">
                <div className="grid place-items-center h-full w-10 sm:w-14 text-slate-400 shrink-0">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <input
                  className="peer h-full w-full outline-none text-slate-700 pr-2 bg-transparent text-sm sm:text-base"
                  type="text"
                  id="search"
                  placeholder="What do you want to learn today?" 
                />
                <button className="h-9 sm:h-10 px-4 sm:px-6 mr-1.5 sm:mr-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-full transition-colors shrink-0">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2 p-2"
              >
                <div className="p-2.5 sm:p-3 bg-blue-50 rounded-2xl text-blue-600 mb-1 sm:mb-2">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">Featured Courses</h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl">Discover our most popular courses and start learning today.</p>
            </div>
            <Link to="/courses" className="flex items-center text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors">
              Explore All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-sm text-slate-500">
                    <span className="flex items-center"><Users className="w-4 h-4 mr-1"/> {course.students}</span>
                    <span className="flex items-center text-amber-500 font-medium">★ {course.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">By {course.instructor}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xl font-bold text-slate-900">{course.price}</span>
                    <Link to={`/courses/${course.id}`} className="text-blue-600 font-medium hover:text-blue-700">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Categories</h2>
            <p className="text-slate-600">Find the perfect course in your area of interest.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Join thousands of students and get access to high-quality courses taught by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                Get Started for Free
              </Link>
              <Link to="/courses" className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors border border-blue-500">
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
