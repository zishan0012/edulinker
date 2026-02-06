import React from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart3,
    Cpu,
    ShieldCheck,
    Zap,
    Users,
    Layout,
    BookOpen,
    School,
    Trophy,
    ArrowRight,
    Database,
    Globe
} from 'lucide-react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTASection from '../components/PageSections/CTASection';

const Home = () => {
    return (
        <div className="main-content pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-left">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-bold mb-6">
                                    <Cpu size={16} />
                                    <span>Where education meets smart technology</span>
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] mb-6">
                                    Turn Your Knowledge <br />Into a <span className="text-brand-600">Powerful Digital Learning Brand</span>
                                </h1>
                                <p className="text-xl text-neutral-600 mb-10 max-w-2xl">
                                    Create. Teach. Sell. <br />
                                    Powered by your brand, supported by Edu-Linker.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary" size="lg">
                                        Book a Free Demo
                                    </Button>
                                    {/* <Button variant="outline" size="lg">
                                        Explore Solutions
                                    </Button> */}
                                </div>
                            </Reveal>
                        </div>

                        <div className="flex-1 w-full max-w-[600px]">
                            <Reveal delay={0.2} animation="fade-right">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
                                        <img
                                            src="https://i.pinimg.com/1200x/f9/a9/49/f9a949bce549ea7d77eca36b861487b8.jpg"
                                            alt="EduLinkers Dashboard Mockup"
                                            className="w-full h-auto"
                                        />
                                        {/* <div className="absolute inset-0 bg-neutral-900/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <Button variant="primary" size="sm">Preview App</Button>
                                        </div> */}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Overview - 4 Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Products</h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto">Explore our powerful AI-driven products designed for modern education management.</p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'LMS',
                                desc: 'Smart learning management system for schools and academies.',
                                icon: <BookOpen className="text-brand-600" />,
                                path: '/products/lms'
                            },
                            {
                                title: 'SMS',
                                desc: 'Comprehensive school management software with AI features.',
                                icon: <School className="text-brand-600" />,
                                path: '/products/school-ms'
                            },
                            {
                                title: 'AI Apps',
                                desc: 'Customized mobile and web apps for parent-teacher engagement.',
                                icon: <Cpu className="text-brand-600" />,
                                path: '/solutions/ai-apps'
                            },
                            {
                                title: 'SaaS Platforms',
                                desc: 'White-labeled SaaS platforms for institutional scale.',
                                icon: <Layout className="text-brand-600" />,
                                path: '/products/saas-platform'
                            }
                        ].map((product, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <Link to={product.path} className="group flex flex-col p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-brand-500 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                                    <p className="text-neutral-500 text-sm mb-6">{product.desc}</p>
                                    <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold text-sm">
                                        Learn More <ArrowRight size={14} />
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions by User - 5 Cards */}
            <section className="py-24 bg-neutral-50">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Solutions for Everyone</h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto">Tailored AI solutions for every stakeholder in the educational ecosystem.</p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: 'Schools', icon: <School size={24} />, path: '/solutions/erp' },
                            { title: 'Teachers', icon: <Users size={24} />, path: '/solutions/teachers' },
                            { title: 'Academies', icon: <Trophy size={24} />, path: '/solutions/academies' },
                            { title: 'Institutions', icon: <Database size={24} />, path: '/solutions/erp' },
                            { title: 'Online Learning', icon: <Globe size={24} />, path: '/products/lms' }
                        ].map((sol, i) => (
                            <Reveal key={i} delay={i * 0.1} animation="fade-up">
                                <Link to={sol.path} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-lg transition-all text-center">
                                    <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                                        {sol.icon}
                                    </div>
                                    <span className="font-bold text-slate-900">{sol.title}</span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why EduLinkers - 4 Icon Blocks */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <Reveal>
                                <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                    Why Leading Institutions <br />
                                    Choose <span className="text-brand-600">EduLinkers</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: 'AI Powered',
                                            desc: 'Intelligent automation for grading, scheduling, and analytics.',
                                            icon: <Cpu size={24} className="text-brand-600" />
                                        },
                                        {
                                            title: 'SaaS Based',
                                            desc: 'Cloud-native infrastructure with zero maintenance overhead.',
                                            icon: <Globe size={24} className="text-brand-600" />
                                        },
                                        {
                                            title: 'Secure',
                                            desc: 'Enterprise-grade encryption and data privacy compliance.',
                                            icon: <ShieldCheck size={24} className="text-brand-600" />
                                        },
                                        {
                                            title: 'Scalable',
                                            desc: 'Build once, scale to millions of users seamlessly.',
                                            icon: <Zap size={24} className="text-brand-600" />
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <Reveal animation="fade-left">
                                <div className="bg-brand-600 rounded-[2rem] p-12 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>

                                    <div className="relative space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                <BarChart3 size={24} />
                                            </div>
                                            <div>
                                                <div className="text-sm opacity-80 font-medium">Global Impact</div>
                                                <div className="text-2xl font-bold">500+ Institutions</div>
                                            </div>
                                        </div>
                                        <div className="text-2xl font-medium leading-relaxed italic">
                                            "EduLinkers has completely transformed our administrative processes. The AI-driven insights are a game changer."
                                        </div>
                                        <div className="flex items-center gap-4 border-t border-white/20 pt-8">
                                            <div className="w-12 h-12 rounded-full bg-white/30"></div>
                                            <div>
                                                <div className="font-bold">Director of Education</div>
                                                <div className="text-sm opacity-70">Leading Global School Chain</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Platforms */}
            <section className="py-24 bg-neutral-900 text-white">
                <div className="container mx-auto px-8 lg:px-12 text-center">
                    <Reveal>
                        <h2 className="text-4xl  text-white font-bold mb-16">Explore Our Featured Platforms</h2>
                        <div className="flex flex-wrap justify-center gap-12 mb-16 -mt-8">
                            {[
                                { label: 'Learning Platform', path: '/products/lms' },
                                { label: 'Test Platform', path: '/solutions/testing' },
                                { label: 'School ERP', path: '/solutions/erp' }
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-16 border-t border-white/10">
                            <p className="text-neutral-500 mb-8 uppercase tracking-widest text-sm font-bold">Trusted by Industry Leaders</p>
                            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
                                {/* Mock logos */}
                                <div className="text-2xl font-bold italic tracking-tighter">TECHLEARN</div>
                                <div className="text-2xl font-bold italic tracking-tighter">FUTUREACADEMY</div>
                                <div className="text-2xl font-bold italic tracking-tighter">EDUCORE</div>
                                <div className="text-2xl font-bold italic tracking-tighter">SMARTCAMPUS</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CTASection
                title="Ready to Build Your AI Education Platform?"
                subtitle="Join hundreds of institutions using Edulinkers to scale their digital learning experience."
            />
        </div>
    );
};

export default Home;
