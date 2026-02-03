import React from 'react';
import { Award, Users, Globe, CheckCircle2, Target, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="main-content">
            {/* Hero */}
            <section className="relative bg-white pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 pattern-circuit opacity-[0.03]"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/30 -skew-x-12 translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Identity</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8 italic">
                        Empowering Minds <span className="gradient-text">Globally</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        We are on a mission to democratize education by connecting professional experts with ambitious learners around the world through an industrial-grade digital ecosystem.
                    </p>
                </div>
            </section>

            {/* Stats with Medikryoss Pattern */}
            <section className="bg-slate-900 py-16 relative">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { val: '50k+', label: 'Graduated Students' },
                        { val: '200+', label: 'Industry Experts' },
                        { val: '100+', label: 'Global Partners' },
                        { val: '98%', l: 'Success Rate' }
                    ].map((stat, i) => (
                        <div key={i} className="group">
                            <div className="text-4xl font-bold text-white mb-2 underline decoration-brand-500 decoration-4 underline-offset-8 group-hover:scale-110 transition-transform">
                                {stat.val || '98%'}
                            </div>
                            <div className="text-[10px] text-brand-500 font-bold uppercase tracking-widest">
                                {stat.label || 'Success Rate'}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-50 rounded-2xl rotate-2"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                            alt="Our Mission"
                            className="relative rounded-2xl shadow-xl w-full aspect-video object-cover"
                        />
                        <div className="absolute -bottom-8 -left-8 glass-card p-6 bg-white rounded-xl shadow-2xl">
                            <Zap className="text-brand-500 mb-2" size={32} />
                            <div className="text-xl font-bold text-slate-900 leading-tight">Fast-Track <br />Your Career</div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px]">What We Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 italic leading-tight">
                                Our Journey Towards <span className="gradient-text">Excellence</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Founded with the vision of bridging the skill gap, EduLinker has evolved into a comprehensive digital learning destination. We focus on outcome-based education that prepares you for real-world challenges.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Expert-Led Content',
                                'Flexible Learning',
                                'Peer Support',
                                'Global Certification'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:border-brand-500 transition-all">
                                    <CheckCircle2 className="text-brand-500 shrink-0" size={20} />
                                    <span className="font-bold text-slate-700 text-sm italic">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values with industrial cards */}
            <section className="py-24 bg-slate-50 relative">
                <div className="absolute inset-0 pattern-cubes opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px]">Our Foundation</span>
                        <h2 className="text-4xl font-bold text-slate-900 italic">Values That Drive <span className="gradient-text">Success</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation', desc: 'Constantly evolving our pedagogy to match industry 4.0 standards.' },
                            { title: 'Integrity', desc: 'Transparent learning processes and verified outcomes for every student.' },
                            { title: 'Inclusivity', desc: 'Making quality education accessible to everyone, everywhere.' }
                        ].map((value, i) => (
                            <div key={i} className="glass-card p-10 bg-white border-l-4 border-transparent hover:border-brand-500 transition-all group">
                                <Target className="text-brand-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{value.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
