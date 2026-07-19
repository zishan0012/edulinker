import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Loading Component
const Loading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-brand-50">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent"></div>
  </div>
);

// Pages
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Categories = lazy(() => import('./pages/Categories'));
const Teachers = lazy(() => import('./pages/Teachers'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const StudentDashboard = lazy(() => import('./pages/Dashboard/StudentDashboard'));
const AdminDashboard = lazy(() => import('./pages/Dashboard/AdminDashboard'));
const Profile = lazy(() => import('./pages/Dashboard/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes (mocked for now) */}
                <Route path="/dashboard/student" element={<StudentDashboard />} />
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="/profile" element={<Profile />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
