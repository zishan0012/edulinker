import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Tag, FileText, MessageSquare, BarChart2, Plus, Trash2, Edit, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  const stats = [
    { label: 'Total Users', value: '15,280', change: '+12%', icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Total Courses', value: '124', change: '+5', icon: BookOpen, color: 'bg-cyan-50 text-cyan-600' },
    { label: 'Revenue (MRR)', value: '$28.4K', change: '+18%', icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Contact Messages', value: '42', change: '+8 new', icon: MessageSquare, color: 'bg-amber-50 text-amber-600' },
  ];

  const courses = [
    { id: 1, title: 'Complete Full-Stack Web Development Bootcamp', category: 'Web Development', instructor: 'Sarah Jenkins', students: 1240, status: 'Published' },
    { id: 2, title: 'Machine Learning A-Z: Hands-On Python', category: 'Data Science', instructor: 'Dr. Alan Smith', students: 3100, status: 'Published' },
    { id: 3, title: 'UI/UX Design Masterclass', category: 'Design', instructor: 'Jessica Wong', students: 850, status: 'Draft' },
    { id: 4, title: 'Advanced React and Next.js', category: 'Web Development', instructor: 'Mike Johnson', students: 2100, status: 'Published' },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', joined: 'Jul 14, 2026' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'student', joined: 'Jul 12, 2026' },
    { id: 3, name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'teacher', joined: 'Jun 3, 2026' },
    { id: 4, name: 'Ali Hassan', email: 'ali@example.com', role: 'student', joined: 'Jul 17, 2026' },
  ];

  const messages = [
    { id: 1, name: 'Ravi Sharma', email: 'ravi@example.com', subject: 'Course refund request', date: 'Jul 18, 2026', read: false },
    { id: 2, name: 'Lucy Green', email: 'lucy@example.com', subject: 'Certificate not received', date: 'Jul 17, 2026', read: false },
    { id: 3, name: 'Arjun Kapoor', email: 'arjun@example.com', subject: 'Partnership proposal', date: 'Jul 15, 2026', read: true },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.color}`}><Icon className="w-5 h-5" /></div>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Recent Courses */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-800 text-lg">Recent Courses</h3>
                <button onClick={() => setActiveTab('courses')} className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {courses.slice(0, 3).map(course => (
                  <div key={course.id} className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                    <div className="min-w-0">
                      <p className="font-medium text-slate-800 truncate">{course.title}</p>
                      <p className="text-sm text-slate-500">{course.instructor} · {course.students} students</p>
                    </div>
                    <span className={`shrink-0 ml-4 text-xs font-semibold px-3 py-1 rounded-full ${course.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {course.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 text-lg">Manage Courses</h3>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
                <Plus className="w-4 h-4" /> Add Course
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {courses.map(course => (
                <div key={course.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 hover:bg-slate-50 transition-colors gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 truncate">{course.title}</p>
                    <p className="text-sm text-slate-500">{course.category} · {course.instructor} · {course.students} students</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {course.status}
                    </span>
                    <button className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 text-lg">Manage Users</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {users.map(user => (
                <div key={user.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 hover:bg-slate-50 transition-colors gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{user.name}</p>
                      <p className="text-sm text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-13">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${user.role === 'teacher' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                      {user.role}
                    </span>
                    <span className="text-sm text-slate-400">{user.joined}</span>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 text-lg">Contact Messages</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex items-start justify-between p-5 hover:bg-slate-50 transition-colors gap-3 ${!msg.read ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex items-start gap-3">
                    {!msg.read && <span className="mt-2 shrink-0 w-2 h-2 bg-blue-500 rounded-full" />}
                    {msg.read && <span className="mt-2 shrink-0 w-2 h-2 rounded-full" />}
                    <div>
                      <p className={`font-semibold ${!msg.read ? 'text-slate-900' : 'text-slate-600'}`}>{msg.subject}</p>
                      <p className="text-sm text-slate-500">From: {msg.name} ({msg.email})</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0">{msg.date}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage your platform, courses, users, and content.</p>
        </div>

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

export default AdminDashboard;
