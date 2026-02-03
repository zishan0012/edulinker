import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="main-content">
            {/* Hero */}
            <section className="relative bg-white pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 pattern-circuit opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Get Support</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8 italic">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Have questions about our curriculum or admission process? Our academic advisors are here to help you start your learning journey.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="absolute inset-0 pattern-cubes opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {[
                                { icon: <Mail size={24} />, title: 'Email Enquiries', detail1: 'admissions@edulinker.com', detail2: 'support@edulinker.com', color: 'bg-brand-50 text-brand-500' },
                                { icon: <Phone size={24} />, title: 'Call Center', detail1: '+1 (234) 567-890', detail2: 'Mon - Fri, 9am - 6pm', color: 'bg-brand-50 text-brand-500' },
                                { icon: <MapPin size={24} />, title: 'Campus Address', detail1: '456 Learning Blvd, Suite 100', detail2: 'Silicon Valley, CA 94025', color: 'bg-brand-50 text-brand-500' }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-8 bg-white flex items-start gap-5 border-l-4 border-transparent hover:border-brand-500 transition-all group">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-base font-bold text-slate-900">{item.detail1}</p>
                                        <p className="text-sm text-slate-500">{item.detail2}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-8 bg-brand-500 rounded-2xl text-white shadow-xl shadow-brand-500/20">
                                <Clock className="mb-4 opacity-50" size={32} />
                                <h4 className="text-lg font-bold mb-2">Office Hours</h4>
                                <p className="text-brand-100 text-sm opacity-80 leading-relaxed">
                                    Our team is available for virtual consultations and on-campus tours during standard business hours.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 glass-card bg-white p-10 md:p-16">
                            <div className="mb-10 flex items-center gap-4">
                                <div className="w-12 h-px bg-brand-500"></div>
                                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Send a Message</h3>
                            </div>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold placeholder:font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold placeholder:font-medium"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Interest Area</label>
                                    <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold appearance-none">
                                        <option>Web Development</option>
                                        <option>Data Science</option>
                                        <option>UI/UX Design</option>
                                        <option>General Enquiry</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message</label>
                                    <textarea
                                        rows="6"
                                        placeholder="Tell us about your goals..."
                                        className="w-full px-6 py-6 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold placeholder:font-medium resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                                        Send Enquiry <Send size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map or Locations Placeholder */}
            <section className="py-24 bg-white border-t border-slate-50 text-center">
                <h2 className="text-slate-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Direct Virtual Support Available Globally</h2>
                <div className="flex flex-wrap justify-center gap-12 opacity-50">
                    {['London', 'New York', 'Singapore', 'Mumbai', 'Sydney'].map(city => (
                        <span key={city} className="text-2xl font-black text-slate-900 tracking-tighter italic">{city}</span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;
