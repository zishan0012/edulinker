import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-neutral-600">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
                <div className="container mx-auto px-8 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                                One Stop Digital <br />
                                <span className="text-[#D35400]">Education Solution</span> <br />
                                for Institutes & Students
                            </h1>
                            <h2 className="text-xl text-neutral-500 font-medium max-w-2xl mx-auto lg:mx-0">
                                Best Cloud-based Education Technology Software & Solutions
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Streamline operations, enhance learning experiences, and boost institutional efficiency with our comprehensive management software.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-[#D35400] text-white font-bold rounded shadow-lg hover:bg-[#A04000] transition-all">
                                    Book a Demo
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-white text-slate-800 font-bold border-2 border-slate-200 rounded hover:border-[#D35400] hover:text-[#D35400] transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                                alt="Education Management"
                                className="w-full h-auto relative z-10"
                            />
                            {/* Decorative Orange Blob matching MocDoc */}
                            <svg className="absolute -bottom-20 -right-20 w-[150%] h-[150%] -z-10 text-[#D35400] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.8C90.8,-34.5,96.9,-20,95.8,-5.8C94.7,8.4,86.4,22.3,77.4,35.1C68.4,47.9,58.7,59.6,46.9,67.7C35.1,75.8,21.2,80.3,7,78.2C-7.2,76.1,-21.7,67.3,-35.3,58.9C-48.9,50.5,-61.6,42.5,-70.6,31.4C-79.6,20.3,-84.9,6.1,-82.9,-7.1C-80.9,-20.3,-71.6,-32.5,-61.2,-42.6C-50.8,-52.7,-39.3,-60.7,-27.1,-69.6C-14.9,-78.5,-2,-88.3,11.2,-89.1C24.4,-89.9,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                            <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid (MocDoc "Clinic/Hospital/Lab/Pharmacy" equivalent) */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-black mb-4">Comprehensive Education Suite</h2>
                        <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: School (MocDoc Clinic - Orange) */}
                        <div className="group p-6 rounded-2xl bg-[#FDF2E9] border-2 border-[#D35400] hover:shadow-xl transition-all relative overflow-hidden text-center">
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-[#D35400] rounded-full flex items-center justify-center text-3xl mb-4 text-[#D35400] relative z-10">
                                🏫
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                School Management
                            </h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Complete solution for schools including admission, attendance, timetable, and parent communication.
                            </p>
                        </div>

                        {/* Card 2: College (MocDoc Hospital - Blue) */}
                        <div className="group p-6 rounded-2xl bg-[#D6EAF8] border-2 border-[#2980B9] hover:shadow-xl transition-all relative overflow-hidden text-center">
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-[#2980B9] rounded-full flex items-center justify-center text-3xl mb-4 text-[#2980B9] relative z-10">
                                🎓
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                College ERP
                            </h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Advanced ERP for higher education with course management, grading, and alumni networks.
                            </p>
                        </div>

                        {/* Card 3: Coaching (MocDoc Lab - Purple) */}
                        <div className="group p-6 rounded-2xl bg-[#F4ECF7] border-2 border-[#8E44AD] hover:shadow-xl transition-all relative overflow-hidden text-center">
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-[#8E44AD] rounded-full flex items-center justify-center text-3xl mb-4 text-[#8E44AD] relative z-10">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Coaching Centers
                            </h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Specialized tools for coaching institutes to track student progress and manage batches effectively.
                            </p>
                        </div>

                        {/* Card 4: eLearning (MocDoc Pharmacy - Green) */}
                        <div className="group p-6 rounded-2xl bg-[#EAFAF1] border-2 border-[#27AE60] hover:shadow-xl transition-all relative overflow-hidden text-center">
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-[#27AE60] rounded-full flex items-center justify-center text-3xl mb-4 text-[#27AE60] relative z-10">
                                💻
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                eLearning Platform
                            </h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Robust LMS for online courses, live classes, quizzes, and digital content delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Feature Sections (Alternating) */}
            <section className="py-32 bg-neutral-50">
                <div className="container mx-auto px-8 lg:px-12">
                    {/* Feature 1 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl font-bold text-black mb-4">Is Outdated Technology Slowing You Down?</h3>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                Upgrade to EduLinker, the cloud-based, fully integrated, secure, and reliable education management suite. Simplify and optimize your institutional operations today.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Enhance Accessibility with Mobile Apps',
                                    'Streamline Admission Processes Online',
                                    'Automate Fee Collection and Reminders',
                                    'Real-time Communication with Parents'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm">✓</div>
                                        <span className="text-neutral-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                                alt="Feature 1"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                                alt="Feature 2"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-black mb-4">Elevate Student Experience</h3>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                Create an engaging learning environment with our student-centric tools. From digital classrooms to instant feedback.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Interactive Online Classes',
                                    'Instant Doubt Resolution Forums',
                                    'Personalized Performance Analytics',
                                    'Digital Library and Resources'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm">✓</div>
                                        <span className="text-neutral-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-black mb-4">What Our Partners Say</h2>
                        <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Sarah Johnson",
                                role: "Principal, St. Mary's School",
                                text: "EduLinker has revolutionized how we manage our school. The admission process is now 100% paperless and parents love the transparency."
                            },
                            {
                                name: "Prof. Alan Smith",
                                role: "Dean, City Engineering College",
                                text: "The ERP modules are comprehensive and easy to use. Our faculty efficiency has improved by 40% since implementation."
                            },
                            {
                                name: "Rajesh Kumar",
                                role: "Director, Ace Academy",
                                text: "Best decision for our coaching center. The student analytics help us focus on weak areas and improve results drastically."
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 relative">
                                <div className="text-4xl text-brand-200 absolute top-4 left-4 font-serif">"</div>
                                <p className="text-neutral-600 mb-6 relative z-10 italic">
                                    {t.text}
                                </p>
                                <div>
                                    <div className="font-bold text-black">{t.name}</div>
                                    <div className="text-xs text-brand-600 uppercase font-bold tracking-wider">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA (MocDoc Style) */}
            <section className="py-32 bg-black text-white">
                <div className="container mx-auto px-8 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Fuel your growth using EduLinker</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
                        Compliant with international education standards, providing robust data security, limitless scalability and guaranteed 99.99% uptime.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="px-10 py-4 bg-brand-500 text-white font-bold rounded-lg shadow-lg hover:bg-brand-600 transition-all">
                            Partner With Us
                        </Link>
                        <button className="px-10 py-4 bg-transparent border border-neutral-600 text-white font-bold rounded-lg hover:bg-neutral-800 transition-all">
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
