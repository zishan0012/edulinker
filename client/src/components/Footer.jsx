import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl text-white tracking-tight">Edulinker</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering learners worldwide with accessible, high-quality education. Join our community and accelerate your career today.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">All Courses</Link></li>
              <li><Link to="/teachers" className="hover:text-blue-400 transition-colors">Our Teachers</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Latest Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Top Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Business & Finance</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">New Chandigarh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">+91-9142915494</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">zishan9142@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Edulinker. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="#" className="text-slate-500 hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
