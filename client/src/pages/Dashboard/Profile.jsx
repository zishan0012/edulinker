import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, BookOpen, Award, Camera, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner on a mission to become a full-stack developer. Currently enrolled in web development and data science courses.',
    location: 'New York, USA',
    website: 'https://johndoe.dev',
  });

  const enrolledCount = 3;
  const completedCount = 1;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8"
        >
          {/* Banner */}
          <div className="h-36 bg-gradient-to-r from-blue-600 to-cyan-500" />

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-14 mb-6">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center text-blue-600 text-4xl font-bold">
                  JD
                </div>
                <button className="absolute bottom-1 right-1 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors shadow">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl font-bold text-slate-900">{profile.name}</h1>
                <p className="text-slate-500">{profile.email}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="shrink-0 flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                <User className="w-4 h-4" /> {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-blue-50 text-blue-700 px-4 py-2.5 rounded-xl flex items-center gap-2 font-medium text-sm">
                <BookOpen className="w-4 h-4" /> {enrolledCount} Courses Enrolled
              </div>
              <div className="bg-emerald-50 text-emerald-700 px-4 py-2.5 rounded-xl flex items-center gap-2 font-medium text-sm">
                <Award className="w-4 h-4" /> {completedCount} Certificate Earned
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">{profile.bio}</p>
          </div>
        </motion.div>

        {/* Edit or Info Section */}
        <motion.div
          key={isEditing ? 'edit' : 'view'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8"
        >
          {isEditing ? (
            <>
              <h2 className="text-lg font-bold text-slate-800 mb-6">Edit Your Information</h2>
              <form
                onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}
                className="space-y-6 max-w-xl"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    value={profile.email}
                    type="email"
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Leave blank to keep current"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors">
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold text-slate-800 mb-6">Profile Details</h2>
              <div className="space-y-5 max-w-xl">
                {[
                  { icon: User, label: 'Name', value: profile.name },
                  { icon: Mail, label: 'Email', value: profile.email },
                  { icon: Lock, label: 'Password', value: '••••••••' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-50">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="font-medium text-slate-800">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/dashboard/student"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  ← Back to Dashboard
                </Link>
              </div>
            </>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default Profile;
