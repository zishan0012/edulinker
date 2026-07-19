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
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              {user ? (
                <>
                  <Link to="/dashboard/student" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
                    <User className="w-5 h-5" /> Dashboard
                  </Link>
                  <button onClick={logout} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium transition-colors">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    Log in
                  </Link>
                  <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-colors">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-2 px-3">
            {user ? (
              <>
                <Link
                  to="/dashboard/student"
                  className="w-full text-center px-4 py-2 text-slate-600 font-medium hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="w-full text-center bg-red-50 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-100"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2 text-slate-600 font-medium hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
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
