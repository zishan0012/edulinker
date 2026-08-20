import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, User } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">Edulinker</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-600 hover:text-blue-600 font-medium text-sm xl:text-base transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 xl:space-x-4 border-l border-slate-200 pl-4 xl:pl-6">
              {user ? (
                <>
                  <Link to="/dashboard/student" className="text-slate-600 hover:text-blue-600 font-medium text-sm xl:text-base transition-colors flex items-center gap-2">
                    <User className="w-5 h-5" /> Dashboard
                  </Link>
                  <button onClick={logout} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm xl:text-base font-medium transition-colors">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium text-sm xl:text-base transition-colors">
                    Log in
                  </Link>
                  <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm xl:text-base font-medium transition-colors shadow-sm">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl z-50 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-3 px-1">
            {user ? (
              <>
                <Link
                  to="/dashboard/student"
                  className="w-full text-center px-4 py-2.5 text-slate-700 font-semibold hover:text-blue-600 bg-slate-50 rounded-xl"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="w-full text-center bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2.5 text-slate-700 font-semibold hover:text-blue-600 bg-slate-50 rounded-xl transition-colors"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
