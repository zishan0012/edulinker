import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-slate-300 pt-20 pb-10 border-t border-slate-800 font-sans">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Section (Col Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="flex flex-col gap-1 group">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
                                <span className="text-2xl font-bold text-white tracking-tight">Edu<span className="text-brand-500">Linker</span></span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-1">Global Training Solutions</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Advancing careers through specialized industry certifications and expert-led training programs. Your bridge to professional excellence in the digital age.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: <Facebook size={18} />, href: '#' },
                                { icon: <Twitter size={18} />, href: '#' },
                                { icon: <Linkedin size={18} />, href: '#' },
                                { icon: <Instagram size={18} />, href: '#' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company (Col Span 2) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.company.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources (Col Span 2) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.resources.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter (Col Span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-slate-400">
                                    <MapPin size={18} className="text-brand-500 shrink-0 mt-0.5" />
                                    <span>456 Learning Blvd, Suite 100<br />Silicon Valley, CA 94025</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <Phone size={18} className="text-brand-500 shrink-0" />
                                    <span className="font-bold">+1 (234) 567-890</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <Mail size={18} className="text-brand-500 shrink-0" />
                                    <span>admissions@edulinker.com</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-2">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Newsletter</h4>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                                />
                                <button className="absolute right-1.5 top-1.5 p-1.5 bg-brand-600 rounded-md text-white hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} EduLinker Global. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {FOOTER_LINKS.legal.map((link, idx) => (
                            <Link key={idx} to={link.path} className="text-[11px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
