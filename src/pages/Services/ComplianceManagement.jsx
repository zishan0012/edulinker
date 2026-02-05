import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ComplianceManagement = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Compliance Management"
                subtitle="360-degree statutory compliance services to mitigate legal risks."
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Statutory Coverages"
                columns={4}
                features={[
                    { title: 'Provident Fund (PF)', description: 'Registration, returns, and transfer assistance.', icon: 'FileText' },
                    { title: 'ESIC', description: 'Employee State Insurance compliance and benefits mgmt.', icon: 'Heart' },
                    { title: 'Professional Tax', description: 'State-wise PT registration and filings.', icon: 'MapPin' },
                    { title: 'Labor Welfare Fund', description: 'LWF compliance across applicable states.', icon: 'Users' },
                    { title: 'Bonus Act', description: 'Calculations and surplus allocation as per law.', icon: 'Gift' },
                    { title: 'Gratuity', description: 'Actuarial valuation and fund management support.', icon: 'Award' },
                    { title: 'Minimum Wages', description: 'Ensuring adherence to state-prescribed minimum wages.', icon: 'DollarSign' },
                    { title: 'Contract Labor Act', description: 'CLRA licenses and returns.', icon: 'Briefcase' }
                ]}
            />

            <CTASection title="Stay 100% Compliant" />
        </div>
    );
};

export default ComplianceManagement;
