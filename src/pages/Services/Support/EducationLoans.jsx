import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const EducationLoans = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Education Loans"
                subtitle="Financial support to ensure your education never stops."
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Funding Solutions"
                features={[
                    { title: 'Loan Comparison', description: 'Find the best interest rates from top banks.', icon: 'Calculator' },
                    { title: 'Documentation Link', description: 'Direct assistance with collateral and paper-work.', icon: 'Link' },
                    { title: 'Fast Disbursement', description: 'Ensuring funds are available before your semester starts.', icon: 'Clock' },
                    { title: 'Repayment Counseling', description: 'Planning your post-study financial commitments.', icon: 'Calendar' }
                ]}
            />

            <CTASection title="Apply for Education Loans with Ease" />
        </div>
    );
};

export default EducationLoans;
