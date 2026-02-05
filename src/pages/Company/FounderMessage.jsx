import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const FounderMessage = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Founder's Message"
                subtitle="A note from the desk of our visionary leader."
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                            alt="Founder"
                            className="rounded-xl shadow-2xl w-full"
                        />
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Building the Future of Work</h2>
                        <div className="space-y-6 text-neutral-600 leading-relaxed">
                            <p>
                                "When we started EduLinker, the goal was simple: to make education and employment more accessible, transparent, and efficient. We saw a disconnect between what the industry needed and what the talent pool offered."
                            </p>
                            <p>
                                "Today, I am proud to say that we have bridged that gap for thousands of professionals and hundreds of organizations. But this is just the beginning. With AI and automation reshaping the workforce, our mission to upskill and connect people is more relevant than ever."
                            </p>
                            <div className="pt-4">
                                <h4 className="font-bold text-slate-900 text-lg">Dr. John Doe</h4>
                                <p className="text-brand-600">Founder & CEO</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CTASection title="Be Part of Our Story" />
        </div>
    );
};

export default FounderMessage;
