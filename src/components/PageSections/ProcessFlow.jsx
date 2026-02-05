import React from 'react';
import Reveal from '../Reveal';

const ProcessFlow = ({ title, subtitle, steps }) => {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-8 lg:px-12">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{title || "How It Works"}</h2>
                    {subtitle && <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
                </Reveal>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <div className="bg-white p-6 rounded-xl shadow-lg relative h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-white">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-neutral-600 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
