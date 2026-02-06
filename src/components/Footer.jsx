import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-slate-300 pt-24 pb-12 border-t border-slate-800 font-sans">
            <div className="container mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

                    {/* [ Company Links ] */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-brand-500 pl-4">Company</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.company?.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* [ Products Links ] */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-brand-500 pl-4">Products</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.products?.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* [ Solutions Links ] */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-brand-500 pl-4">Solutions</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.solutions?.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* [ Services Links ] */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-brand-500 pl-4">Services</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.services?.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* [ Legal Links ] */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-brand-500 pl-4">Legal</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.legal?.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-500 hover:translate-x-1 transition-all flex items-center gap-1 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-1 items-center md:items-start group">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold text-base">E</div>
                            <span className="text-xl font-bold text-white tracking-tight">Edu<span className="text-brand-500">Linker</span></span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} Edulinkers Global. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: <Facebook size={18} />, href: '#' },
                            { icon: <Twitter size={18} />, href: '#' },
                            { icon: <Linkedin size={18} />, href: '#' },
                            { icon: <Instagram size={18} />, href: '#' }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-500 hover:border-brand-500 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
