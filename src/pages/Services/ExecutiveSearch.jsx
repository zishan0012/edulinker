import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ExecutiveSearch = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Executive Search"
                subtitle="Leadership hiring for C-level executives, Directors, and VPs."
                image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Our Search Methodology"
                columns={2}
                features={[
                    { title: 'Confidentiality', description: 'Discreet search processes to protect your strategic intent.', icon: 'Lock' },
                    { title: 'Market Intelligence', description: 'Deep insights into leadership trends and compensation benchmarking.', icon: 'BarChart' },
                    { title: 'Global Network', description: 'Access to elite leadership talent across geographies.', icon: 'Globe' },
                    { title: 'Rigorous Assessment', description: 'Evaluating leadership style, vision alignment, and track record.', icon: 'Award' }
                ]}
            />

            <CTASection title="Find Your Next Leader" text="Connect with our principal consultants for a confidential discussion." />
        </div>
    );
};

export default ExecutiveSearch;
