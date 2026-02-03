import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-signature bg-black text-neutral-400 pt-32 pb-16 overflow-hidden relative">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] -tranneutral-y-1/2"></div>

            <div className="container mx-auto px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="group flex flex-col gap-1">
                            <span className="text-3xl font-extrabold tracking-tight text-white leading-none">
                                Edu<span className="text-brand-500">Linker</span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Global Training Solutions</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed text-sm max-w-sm">
                            Advancing careers through specialized industry certifications and expert-led training programs. Your bridge to professional excellence in the digital age.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, label: 'Facebook' },
                                { icon: <Twitter size={18} />, label: 'Twitter' },
                                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                                { icon: <Instagram size={18} />, label: 'Instagram' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all duration-300 group"
                                >
                                    <span className="sr-only">{social.label}</span>
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h3 className="column-title">Company</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link}>
                                    <Link to="#" className="text-sm text-neutral-400 hover:text-brand-500 hover:tranneutral-x-1 transition-all inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="column-title">Resources</h3>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.resources.map((link) => (
                                <li key={link}>
                                    <Link to="#" className="text-sm text-neutral-400 hover:text-brand-500 hover:tranneutral-x-1 transition-all inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="lg:col-span-4 space-y-10">
                        <div>
                            <h3 className="column-title">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <MapPin className="text-brand-500" size={18} />
                                    </div>
                                    <div className="text-sm leading-relaxed text-neutral-400">
                                        456 Learning Blvd, Suite 100<br />
                                        Silicon Valley, CA 94025
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <Phone className="text-brand-500" size={18} />
                                    </div>
                                    <div className="text-sm text-neutral-400 font-bold">+1 (234) 567-890</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <Mail className="text-brand-500" size={18} />
                                    </div>
                                    <div className="text-sm text-neutral-400">admissions@edulinker.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 relative">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Newsletter</h4>
                            <form className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full pl-6 pr-14 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -tranneutral-y-1/2 w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} EduLinker Global. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        {FOOTER_LINKS.legal.map(link => (
                            <Link key={link} to="#" className="text-[11px] font-bold text-neutral-500 hover:text-white transition-colors uppercase tracking-widest">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
