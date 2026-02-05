import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const VisionMission = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Vision & Mission"
                subtitle="Guiding principles that drive every decision we make."
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Our Core Purpose"
                columns={2}
                features={[
                    { title: 'Our Vision', description: 'To be the world’s most trusted platform for career development and workforce solutions.', icon: 'Eye' },
                    { title: 'Our Mission', description: 'Standardizing outcome-based education and bridging the gap between talent and opportunity.', icon: 'Target' }
                ]}
            />

            <FeatureGrid
                title="Our Values"
                features={[
                    { title: 'Integrity', description: 'Doing the right thing, even when no one is watching.', icon: 'Shield' },
                    { title: 'Innovation', description: 'Constantly challenging the status quo.', icon: 'Zap' },
                    { title: 'Empathy', description: 'Understanding the human side of business.', icon: 'Heart' },
                    { title: 'Excellence', description: 'Striving for perfection in every delivery.', icon: 'Star' }
                ]}
            />

            <CTASection title="Join Our Journey" />
        </div>
    );
};

export default VisionMission;
