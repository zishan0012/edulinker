import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const NonITRecruitment = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Non-IT Recruitment"
                subtitle="Hiring solutions for manufacturing, retail, healthcare, hospitality, and more."
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Industries We Serve"
                columns={4}
                features={[
                    { title: 'Manufacturing', description: 'Plant managers, supervisors, skilled labor.', icon: 'Factory' },
                    { title: 'BFSI', description: 'Banking staff, financial analysts, insurance agents.', icon: 'Landmark' },
                    { title: 'Retail', description: 'Store managers, sales executives, merchandising.', icon: 'ShoppingBag' },
                    { title: 'Healthcare', description: 'Nurses, administrators, support staff.', icon: 'HeartPulse' },
                    { title: 'Logistics', description: 'Supply chain managers, fleet coordinators.', icon: 'Truck' },
                    { title: 'Hospitality', description: 'Hotel staff, chefs, front desk management.', icon: 'Coffee' },
                    { title: 'Sales & Marketing', description: 'BDEs, marketing managers, digital marketers.', icon: 'TrendingUp' },
                    { title: 'Admin & HR', description: 'HR managers, office administrators.', icon: 'Users' }
                ]}
            />

            <CTASection title="Find Quality Talent Across Sectors" />
        </div>
    );
};

export default NonITRecruitment;
