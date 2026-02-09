import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ title, text, actionText = "Get Started", actionLink = "/contact" }) => {
    return (
        <section className="py-24 bg-slate-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-8 lg:px-12 relative z-10 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{title || "Ready to Transform Your Business?"}</h2>
                    <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {text || "Join hundreds of institutions and companies that trust EduLinker for their growth."}
                    </p>
                    <Link
                        to={actionLink}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg shadow-lg shadow-brand-900/20 transform hover:-translate-y-1 transition-all"
                    >
                        {actionText}
                        <ArrowRight size={20} />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default CTASection;
