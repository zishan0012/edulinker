import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';

const RefundPolicy = () => {
    return (
        <div className="main-content">
            <HeroSection title="Refund Policy" subtitle="Transparency in our financial dealings." />
            <div className="container mx-auto px-8 lg:px-12 py-16 text-neutral-600 space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
                <p><strong>1. General Rule</strong><br />Fees once paid for services rendered are generally non-refundable.</p>
                <p><strong>2. Exceptions</strong><br />In case of accidental double payment or service failure attributable to EduLinker, a refund may be initiated upon verification.</p>
                <p><strong>3. Process</strong><br />Refund requests must be mailed to accounts@edulinker.com within 7 days of the transaction.</p>
                <p><strong>4. Timeline</strong><br />Approved refunds will be processed within 10-14 working days to the original payment method.</p>
            </div>
        </div>
    );
};

export default RefundPolicy;
