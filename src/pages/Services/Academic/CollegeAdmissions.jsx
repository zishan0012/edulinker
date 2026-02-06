import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const CollegeAdmissions = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="College Admissions"
                subtitle="Navigating the path to top universities and colleges worldwide."
                image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="University Placement"
                features={[
                    { title: 'College Selection', description: 'Shortlisting colleges based on majors and rankings.', icon: 'School' },
                    { title: 'Application Strategy', description: 'Optimizing your application for maximum impact.', icon: 'Zap' },
                    { title: 'Scholarship Search', description: 'Finding financial aid and merit-based grants.', icon: 'CreditCard' },
                    { title: 'Acceptance Support', description: 'Helping you choose between multiple offers.', icon: 'CheckCircle' }
                ]}
            />

            <CTASection title="Apply to Your Dream College with Confidence" />
        </div>
    );
};

export default CollegeAdmissions;
