import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main-content">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-white">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 pattern-circuit opacity-[0.03]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/30 -skew-x-12 translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest animate-fade-in">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                Trusted Education Partner
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] font-display">
                                Master Your <span className="gradient-text italic">Expertise</span><br />
                                with EduLinker
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                                Unlock professional growth with our industry-leading courses and certification programs. Designed for the modern workforce.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Link to="/courses" className="btn-primary px-10 py-4">
                                    Explore Programs
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all">
                                    Our Story
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900">500+</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Courses</span>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900">10k+</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Students</span>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900">99%</span>
                                    <span className="text-[10px] uppercase font-bold tracking-tighter">Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-12 lg:mt-0">
                            <div className="absolute -inset-4 bg-brand-500/10 rounded-[3rem] blur-3xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 group hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Learning"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900">Accredited</div>
                                            <div className="text-[10px] text-slate-500">ISO Certified 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Grid with Medikryoss Indicators */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pattern-cubes opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Our Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display">Specialized Learning <span className="gradient-text">Paths</span></h2>
                        </div>
                        <Link to="/courses" className="text-brand-600 font-bold flex items-center gap-2 group">
                            Explore All <span className="w-8 h-px bg-brand-500 group-hover:w-12 transition-all"></span>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Full Stack Development', desc: 'Master modern web technologies from frontend to backend.', icon: '💻' },
                            { title: 'Data Analytics', desc: 'Transform raw data into meaningful business insights.', icon: '📊' },
                            { title: 'UI/UX Masterclass', desc: 'Design intuitive and beautiful user experiences.', icon: '🎨' },
                            { title: 'Cloud Engineering', desc: 'Scale applications with AWS and Google Cloud.', icon: '☁️' },
                            { title: 'Digital Strategy', desc: 'Drive growth with data-backed marketing.', icon: '📈' },
                            { title: 'Cyber Security', desc: 'Protect systems and data from modern threats.', icon: '🛡️' }
                        ].map((service, i) => (
                            <div key={i} className="group glass-card p-10 flex flex-col items-start bg-white hover:border-brand-500 border-l-4 border-transparent transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-3xl mb-8 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                                <div className="mt-8 pt-6 border-t border-slate-100 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold text-brand-500 uppercase flex items-center gap-2">
                                        Learn More <span className="text-lg">→</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Row */}
            <section className="bg-slate-900 py-12 relative">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { n: '15+', l: 'Years Experience' },
                        { n: '200+', l: 'Active Batches' },
                        { n: '98%', l: 'Placement Rate' },
                        { n: '1k+', l: 'Success Stories' }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">{item.n}</div>
                            <div className="text-[10px] text-brand-500 font-bold uppercase tracking-widest">{item.l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About / Message Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-100 rounded-[2rem] -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1544717297-fa154daaf544?auto=format&fit=crop&w=800&q=80"
                                className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
                                alt="Leadership"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-brand-500 p-8 rounded-2xl text-white shadow-xl">
                                <div className="text-4xl font-bold mb-1">10+</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest leading-none">Global Awards</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px]">Leader's Vision</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight italic font-display">Empowering the Next <span className="gradient-text text-brand-600">Generation</span> of Digital Leaders</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-brand-500 pl-6 py-2">
                                "Our commitment is to provide a learning environment that doesn't just teach technology, but fosters the mindset required to lead in the digital age."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-slate-100 border-4 border-slate-50 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-tr from-brand-500 to-brand-600"></div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-slate-900 uppercase">James Anderson</div>
                                    <div className="text-xs text-brand-500 font-bold uppercase tracking-widest">Director of Academics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight italic font-display"> <span className="gradient-text">Ready to Begin Your Journey?</span></h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of successful professionals who have transformed their careers through our certified programs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
                            Enroll Now
                        </Link>
                        <Link to="/courses" className="px-12 py-5 rounded-lg border border-white/20 hover:bg-white/10 transition-all text-lg font-bold">
                            View Curriculum
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
