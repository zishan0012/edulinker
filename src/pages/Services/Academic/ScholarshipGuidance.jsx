import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const ScholarshipGuidance = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Scholarship Guidance"
                subtitle="Making quality education accessible through financial aid."
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Funding Your Dreams"
                features={[
                    { title: 'Scholarship Database', description: 'Access to thousands of global scholarship options.', icon: 'Database' },
                    { title: 'Grant Writing', description: 'Help in writing persuasive scholarship essays.', icon: 'Edit3' },
                    { title: 'Merit-Based Aid', description: 'Identifying aid for high-achieving students.', icon: 'Award' },
                    { title: 'Financial Planning', description: 'Budgeting for your entire education course.', icon: 'PieChart' }
                ]}
            />

            <CTASection title="Discover Scholarship Opportunities Today" />
        </div>
    );
};

export default ScholarshipGuidance;
