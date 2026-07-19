import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block mb-8">
            <span className="text-[160px] md:text-[220px] font-extrabold text-slate-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <SearchX className="w-24 h-24 text-blue-600 opacity-80" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Oops! Page not found.
          </h1>
          <p className="text-slate-500 text-lg max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-blue-500/20"
            >
              <Home className="w-5 h-5" /> Back to Home
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-bold px-8 py-3.5 rounded-full transition-colors hover:shadow-md"
            >
              Browse Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
