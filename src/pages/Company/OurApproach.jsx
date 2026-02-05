import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const OurApproach = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Our Approach"
                subtitle="How we deliver consistent value through our unique methodology."
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="The EduLinker Way"
                features={[
                    { title: 'Client-Centric', description: 'We start with your problem, not our solution.', icon: 'User' },
                    { title: 'Technology-Driven', description: 'Leveraging AI and data analytics for precision.', icon: 'Cpu' },
                    { title: 'Scalable', description: 'Solutions designed to grow with your business.', icon: 'TrendingUp' },
                    { title: 'Transparent', description: 'Clear communication and honest reporting at every step.', icon: 'MessageSquare' }
                ]}
            />

            <CTASection title="Experience the Difference" />
        </div>
    );
};

export default OurApproach;
