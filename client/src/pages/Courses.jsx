import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing'];

  const courses = [
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
      category: 'Design',
      instructor: 'Jessica Wong',
      rating: 4.7,
      students: 850,
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      title: 'Advanced React and Next.js',
      category: 'Web Development',
      instructor: 'Mike Johnson',
      rating: 4.9,
      students: 2100,
      price: '$69.99',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 5,
      title: 'Digital Marketing Crash Course',
      category: 'Marketing',
      instructor: 'Emma Thompson',
      rating: 4.6,
      students: 1540,
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 6,
      title: 'Python for Data Analysis',
      category: 'Data Science',
      instructor: 'David Chen',
      rating: 4.8,
      students: 2800,
      price: '$84.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllDjroJ3lTxbBZVtVpU_UIyrkX99KKNqrizFE78rsJ1aPBN7vPxWW9ek&s=10',
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Courses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover a wide range of courses taught by industry experts to help you advance your career.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3 text-sm text-slate-500">
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {course.students}</span>
                  <span className="flex items-center text-amber-500 font-medium"><Star className="w-4 h-4 mr-1 fill-current" /> {course.rating}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">By {course.instructor}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xl font-bold text-slate-900">{course.price}</span>
                  <Link to={`/courses/${course.id}`} className="text-blue-600 font-medium hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-slate-700">No courses found matching your criteria.</h3>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
