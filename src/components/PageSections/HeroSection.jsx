import React from 'react';
import Reveal from '../Reveal';

const HeroSection = ({ title, subtitle, image, align = 'center' }) => {
    return (
        <section className={`relative pt-40 pb-20 overflow-hidden ${image ? 'bg-black' : 'bg-gradient-to-br from-neutral-50 to-white'}`}>
            {image && (
                <>
                    <div className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
                </>
            )}

            <div className="container mx-auto px-8 lg:px-12 relative z-10">
                <Reveal>
                    <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${image ? 'text-white' : 'text-slate-900'}`}>
                            {title}
                        </h1>
                        <p className={`text-xl leading-relaxed ${image ? 'text-neutral-200' : 'text-neutral-600'}`}>
                            {subtitle}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default HeroSection;
