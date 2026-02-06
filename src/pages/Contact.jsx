import React, { useState } from 'react';
import HeroSection from '../components/PageSections/HeroSection';
import Reveal from '../components/Reveal';
import CTASection from '../components/PageSections/CTASection';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institution: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! Our AI EdTech consultants will reach out to you shortly.');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="main-content">
            <HeroSection
                title="Connect with Our Experts"
                subtitle="Ready to revolutionize your institution with AI intelligence? Get in touch for a bespoke consultation."
                image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80"
            />

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 skew-x-12 translate-x-1/2 -z-10"></div>

                <div className="container mx-auto px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Info Column */}
                        <Reveal>
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6 italic">Global <span className="text-brand-600">Headquarters</span></h2>
                                    <p className="text-lg text-neutral-600 mb-8 max-w-md">Our global presence ensures your institution receives round-the-clock support and local expertise wherever you are.</p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Corporate Office</h4>
                                                <p className="text-neutral-500 text-sm">Tech Hub Plaza, Sector 62, Noida, NCR, India</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                                                <p className="text-neutral-500 text-sm">consult@edulinkers.com</p>
                                                <p className="text-neutral-500 text-sm">support@edulinkers.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Direct Line</h4>
                                                <p className="text-neutral-500 text-sm">+91 (120) 456-7890</p>
                                                <p className="text-neutral-500 text-sm">+91 (120) 456-7891</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-slate-900 text-white relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Globe size={120} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Clock className="text-brand-400" size={20} />
                                        Consultation Hours
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">Our AI implementation specialists are available for discovery calls during the following hours:</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Mon - Fri</span>
                                            <span className="text-brand-400 font-bold">10:00 AM - 07:00 PM IST</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Sat</span>
                                            <span className="text-brand-400 font-bold">11:00 AM - 03:00 PM IST</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Form Column */}
                        <Reveal delay={0.2}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Schedule a <span className="text-brand-600 underline underline-offset-8 decoration-2 decoration-brand-200">Discovery Call</span></h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                                                placeholder="john@institution.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Institution / Company Name</label>
                                        <input
                                            type="text"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none"
                                            placeholder="Stanford University / Global Academy"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Topic of Interest</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none appearance-none"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="SaaS Platform">SaaS Platform Implementation</option>
                                            <option value="AI Integration">Custom AI Integration</option>
                                            <option value="Product Demo">Product Demo Request</option>
                                            <option value="Partnership">Partnership Inquiry</option>
                                            <option value="Other">Other Query</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Your Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:border-brand-500 focus:bg-white transition-all outline-none resize-none"
                                            placeholder="Tell us about your institutional requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-200"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <CTASection title="Prefer to Chat?" subtitle="Message us directly on our institutional partner channel for instant support." />
        </div>
    );
};

export default Contact;
