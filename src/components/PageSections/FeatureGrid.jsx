import React from 'react';
import Reveal from '../Reveal';
import * as LucideIcons from 'lucide-react';

const FeatureGrid = ({ title, subtitle, features, columns = 3 }) => {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-8 lg:px-12">
                {(title || subtitle) && (
                    <Reveal className="text-center mb-16 max-w-3xl mx-auto">
                        {title && <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>}
                        {subtitle && <p className="text-neutral-600">{subtitle}</p>}
                    </Reveal>
                )}

                <div className={`grid ${gridCols[columns]} gap-8`}>
                    {features.map((feature, index) => {
                        const IconComponent = LucideIcons[feature.icon] || LucideIcons.CheckCircle;

                        return (
                            <Reveal key={index} delay={index * 0.1}>
                                <div className="group p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-500 hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
