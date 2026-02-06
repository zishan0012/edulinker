import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const StudyAbroad = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Study Abroad"
                subtitle="Global education opportunities for a competitive edge."
                image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Global Opportunities"
                features={[
                    { title: 'Country Selection', description: 'Choosing the best destination for your field of study.', icon: 'Globe' },
                    { title: 'Global University Connect', description: 'Direct access to institutional representatives.', icon: 'Link' },
                    { title: 'Visa & Logistics', description: 'Comprehensive support for travel and relocation.', icon: 'Plane' },
                    { title: 'Cross-Cultural Prep', description: 'Orientation for life in a new country.', icon: 'Smile' }
                ]}
            />

            <CTASection title="Expand Your Horizons with Global Education" />
        </div>
    );
};

export default StudyAbroad;
