import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const CorporateTraining = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Corporate Training"
                subtitle="Customized learning solutions to drive specific business outcomes."
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Popular Modules"
                features={[
                    { title: 'Communication Skills', description: 'Business writing, presentation, and verbal communication.', icon: 'MessageSquare' },
                    { title: 'Sales Training', description: 'Negotiation, closing techniques, and account management.', icon: 'TrendingUp' },
                    { title: 'Customer Service', description: 'Handling queries, empathy, and conflict resolution.', icon: 'Headphones' },
                    { title: 'Team Building', description: 'Collaboration workshops and bonding activities.', icon: 'Users' }
                ]}
            />

            <CTASection title="Invest in Your People" />
        </div>
    );
};

export default CorporateTraining;
