import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';

const ChevronDown = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 flex items-center h-24 ${scrolled ? 'bg-white shadow-lg border-b border-neutral-200' : 'bg-white/95 backdrop-blur-md border-b border-neutral-100'
            }`}>
            <div className="container mx-auto px-8 lg:px-12 w-full flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-2 transition-transform duration-200 hover:-tranneutral-y-0.5">
                    <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform duration-200 group-hover:scale-110 font-display">E</div>
                    <span className="text-2xl font-bold tracking-tight text-neutral-800 font-display">Edu<span className="text-brand-500">Linker</span></span>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {NAVIGATION.map((item) => (
                        <div key={item.label} className="relative group h-20 flex items-center">
                            {item.children ? (
                                <>
                                    <button className={`text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-brand-500 hover:bg-brand-50/50 ${item.children.some(child => location.pathname === child.path) ? 'nav-active' : 'text-neutral-600'
                                        }`}>
                                        {item.label}
                                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute top-[calc(100%-12px)] left-0 w-64 bg-white rounded-xl shadow-2xl border border-neutral-100 opacity-0 invisible tranneutral-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:tranneutral-y-0 z-50 overflow-hidden">
                                        <div className="py-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    to={child.path}
                                                    className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all border-l-4 ${location.pathname === child.path
                                                        ? 'bg-brand-50/50 text-brand-500 border-brand-500'
                                                        : 'text-neutral-600 border-transparent hover:text-brand-500 hover:bg-brand-50/50 hover:border-brand-500'
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-brand-500 hover:bg-brand-50/50 ${location.pathname === item.path ? 'nav-active' : 'text-neutral-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center">
                    <Link to="/contact" className="btn-primary">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-600 hover:text-brand-500 transition-colors">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[900] transition-all duration-300 transform ${isOpen ? 'tranneutral-x-0' : 'tranneutral-x-full'}`}>
                <div className="p-4 space-y-2 overflow-y-auto h-full">
                    {NAVIGATION.map((item) => (
                        <div key={item.label}>
                            {item.children ? (
                                <div className="space-y-1">
                                    <div className="px-4 py-2 text-sm font-bold text-neutral-400 uppercase tracking-wider">{item.label}</div>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            to={child.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${location.pathname === child.path ? 'bg-brand-50 text-brand-500' : 'text-neutral-700 hover:bg-brand-50 hover:text-brand-500'
                                                }`}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${location.pathname === item.path ? 'bg-brand-50 text-brand-500' : 'text-neutral-700 hover:bg-brand-50 hover:text-brand-500'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 px-4 pb-20">
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full shadow-brand-500/20">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
