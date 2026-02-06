import React from 'react';
import HeroSection from '../components/PageSections/HeroSection';
import Reveal from '../components/Reveal';
import CTASection from '../components/PageSections/CTASection';
import {
    LifeBuoy,
    BookOpen,
    ShieldCheck,
    Zap,
    Settings,
    Users,
    Search,
    ChevronRight,
    PlayCircle
} from 'lucide-react';

const Support = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Support Center"
                subtitle="Expert assistance and resources to ensure your AI EdTech platform runs at peak performance."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
            />

            {/* Search Bar section */}
            <section className="relative -mt-12 mb-20 z-20">
                <div className="container mx-auto px-8 lg:px-24">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 flex items-center border border-neutral-100">
                        <div className="pl-6 pr-4 text-neutral-400">
                            <Search size={24} />
                        </div>
                        <input
                            type="text"
                            className="w-full py-4 bg-transparent outline-none text-slate-900 placeholder:text-neutral-400 font-medium"
                            placeholder="Search for documentation, guides, or troubleshooting tips..."
                        />
                        <button className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all hidden md:block">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className="pb-24 bg-white">
                <div className="container mx-auto px-8 lg:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Support Cards */}
                        {[
                            {
                                icon: BookOpen,
                                title: 'Documentation',
                                desc: 'Complete API references, implementation guides, and SaaS configuration manuals.',
                                link: 'Read Docs'
                            },
                            {
                                icon: PlayCircle,
                                title: 'Video Tutorials',
                                desc: 'Step-by-step walkthroughs for teachers and administrators on platform usage.',
                                link: 'Watch Now'
                            },
                            {
                                icon: Zap,
                                title: 'Quick Start',
                                desc: 'Get your AI modules up and running in under 30 minutes with our rapid setup guide.',
                                link: 'Get Started'
                            },
                            {
                                icon: Settings,
                                title: 'Technical Support',
                                desc: 'Deep-dive troubleshooting for enterprise-level deployments and integrations.',
                                link: 'Open Ticket'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Security & Compliance',
                                desc: 'Information on data privacy, GDPR, and institutional security standards.',
                                link: 'Learn More'
                            },
                            {
                                icon: Users,
                                title: 'Community Forum',
                                desc: 'Connect with other institutional leaders and share AI implementation best practices.',
                                link: 'Join Group'
                            }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                                    <button className="flex items-center gap-2 text-brand-600 font-bold text-sm group/btn">
                                        {item.link}
                                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-20 p-12 rounded-3xl bg-brand-50 border border-brand-100 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 italic">Couldn't find what you're looking for?</h3>
                            <p className="text-neutral-600 max-w-lg">Our dedicated institutional support team is ready to assist you with any custom requirements or urgent technical issues.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-white text-slate-900 border border-neutral-200 rounded-xl font-bold hover:bg-neutral-50 transition-all flex items-center gap-2 shadow-sm">
                                <LifeBuoy size={20} className="text-brand-500" />
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection title="Scale Your Enterprise Effortlessly" />
        </div>
    );
};

export default Support;
