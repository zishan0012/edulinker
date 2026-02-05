import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const BecomeBPP = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Become Our BPP"
                subtitle="Join the Business Partnership Program and grow your consulting business with EduLinker."
                image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Partner Benefits"
                features={[
                    { title: 'High Commissions', description: 'Earn industry-leading commissions on every successful closure.', icon: 'DollarSign' },
                    { title: 'Brand Leverage', description: 'Use the EduLinker brand to win more clients.', icon: 'Shield' },
                    { title: 'Tech Support', description: 'Access our proprietary recruitment platform.', icon: 'Monitor' },
                    { title: 'Training', description: 'Regular workshops to upskill your team.', icon: 'BookOpen' }
                ]}
            />

            <ProcessFlow
                title="Onboarding Process"
                steps={[
                    { title: 'Apply', description: 'Fill the partner application form.' },
                    { title: 'Verify', description: 'Background check and capability assessment.' },
                    { title: 'Agreement', description: 'Signing the partnership MOU.' },
                    { title: 'Launch', description: 'Access to portal and start working.' }
                ]}
            />

            <CTASection title="Become a BPP Today" actionText="Apply Now" />
        </div>
    );
};

export default BecomeBPP;
