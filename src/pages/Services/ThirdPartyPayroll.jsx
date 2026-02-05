import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ThirdPartyPayroll = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Third-Party Payroll"
                subtitle="Hire employees on our payroll to reduce administrative burden and liability."
                image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Benefits of 3rd Party Payroll"
                features={[
                    { title: 'Headcount Flexibility', description: 'Keep your permanent headcount optimal.', icon: 'Minimize2' },
                    { title: 'Compliance Management', description: 'We handle all statutory liabilities as the legal employer.', icon: 'Shield' },
                    { title: 'Reduced Admin Cost', description: 'Save on HR and admin costs associated with direct employment.', icon: 'TrendingDown' },
                    { title: 'Instant Scalability', description: 'Rapidly deploy staff for projects without long-term commit.', icon: 'Zap' }
                ]}
            />

            <CTASection title="Flexible Staffing Solutions" actionText="Get Started" />
        </div>
    );
};

export default ThirdPartyPayroll;
