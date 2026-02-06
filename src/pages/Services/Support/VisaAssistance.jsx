import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const VisaAssistance = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Visa Assistance"
                subtitle="Expert coaching and documentation support for student visas."
                image="https://images.unsplash.com/photo-1557333330-460b5de7883b?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Our Visa Support"
                features={[
                    { title: 'Interview Preparation', description: 'Mock sessions for high success rates.', icon: 'MessageCircle' },
                    { title: 'Document Checklist', description: 'Ensuring all filings are accurate and timely.', icon: 'ListChecks' },
                    { title: 'Financial Documentation', description: 'Assisting with bank statements and proof of funds.', icon: 'DollarSign' },
                    { title: 'Application Tracking', description: 'Regular updates on your visa status.', icon: 'Activity' }
                ]}
            />

            <CTASection title="Simplify Your Visa Process with EduLinker" />
        </div>
    );
};

export default VisaAssistance;
