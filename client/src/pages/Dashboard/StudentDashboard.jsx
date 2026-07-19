import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, BarChart2, Settings, User, ChevronRight, Clock, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'enrolled', label: 'My Courses', icon: BookOpen },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Full-Stack Web Development Bootcamp',
      instructor: 'Sarah Jenkins',
      progress: 68,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 2,
      title: 'Machine Learning A-Z: Hands-On Python',
      instructor: 'Dr. Alan Smith',
      progress: 35,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 4,
      title: 'Advanced React and Next.js',
      instructor: 'Mike Johnson',
      progress: 92,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300',
    },
  ];

  const wishlistCourses = [
    {
      id: 3,
      title: 'UI/UX Design Masterclass: From Beginner to Pro',
      instructor: 'Jessica Wong',
      price: '$79.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 5,
      title: 'Digital Marketing Crash Course',
      instructor: 'Emma Thompson',
      price: '$49.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=300',
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Courses Enrolled', value: '3', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
                { label: 'Hours Learned', value: '48', icon: Clock, color: 'bg-cyan-50 text-cyan-600' },
                { label: 'Avg. Progress', value: '65%', icon: BarChart2, color: 'bg-purple-50 text-purple-600' },
                { label: 'Certificates', value: '1', icon: Star, color: 'bg-amber-50 text-amber-600' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${stat.color}`}><Icon className="w-5 h-5" /></div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Continue Learning */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Continue Learning</h3>
              <div className="space-y-4">
                {enrolledCourses.slice(0, 2).map(course => (
                  <div key={course.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img src={course.image} alt={course.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div className="flex-grow min-w-0">
                      <h4 className="font-semibold text-slate-900 truncate">{course.title}</h4>
                      <p className="text-sm text-slate-500 mb-3">{course.instructor}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-grow bg-slate-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
                        </div>
                        <span className="text-sm font-medium text-slate-600 shrink-0">{course.progress}%</span>
                      </div>
                    </div>
                    <button className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                      <Play className="w-4 h-4" /> Resume
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'enrolled':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 mb-4">My Enrolled Courses</h3>
            {enrolledCourses.map(course => (
              <div key={course.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src={course.image} alt={course.title} className="w-20 h-16 rounded-xl object-cover shrink-0" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-semibold text-slate-900 truncate">{course.title}</h4>
                  <p className="text-sm text-slate-500 mb-3">By {course.instructor}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-grow bg-slate-100 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-sm font-medium text-blue-600 shrink-0">{course.progress}% complete</span>
                  </div>
                </div>
                <Link to={`/courses/${course.id}`} className="shrink-0 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                  View <ChevronRight className="w-4 h-4 inline" />
                </Link>
              </div>
            ))}
          </div>
        );

      case 'wishlist':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 mb-4">My Wishlist</h3>
            {wishlistCourses.map(course => (
              <div key={course.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src={course.image} alt={course.title} className="w-20 h-16 rounded-xl object-cover shrink-0" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-semibold text-slate-900 truncate">{course.title}</h4>
                  <p className="text-sm text-slate-500 mb-1">By {course.instructor}</p>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <Star className="w-4 h-4 fill-current" /> {course.rating}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-lg font-bold text-slate-900 mb-2">{course.price}</div>
                  <button className="text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Account Settings</h3>
            <form className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input defaultValue="John Doe" className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input defaultValue="john@example.com" type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                <input placeholder="Leave blank to keep current" type="password" className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Save Changes
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Student Dashboard</h1>
            <p className="text-slate-500 mt-1">Welcome back, <span className="text-blue-600 font-semibold">John Doe</span>! Keep learning.</p>
          </div>
          <Link to="/profile" className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors">
            <User className="w-4 h-4" /> View Profile
          </Link>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-sm font-medium transition-colors text-left border-b border-slate-50 last:border-b-0 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" /> {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-grow">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
