import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const PayrollManagement = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Payroll Management"
                subtitle="Outsource your entire payroll function to experts and focus on your core business."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Key Features"
                features={[
                    { title: 'Tax Calculation', description: 'Accurate TDS deduction and tax planning support for employees.', icon: 'Calculator' },
                    { title: 'Reimbursement Mgmt', description: 'Processing of claims, bills, and flexible benefit plans.', icon: 'FileText' },
                    { title: 'Full & Final Settlement', description: 'Smooth exit management and settlement processing.', icon: 'UserMinus' },
                    { title: 'Reports & Analytics', description: 'Customized MIS reports for finance and HR teams.', icon: 'PieChart' }
                ]}
            />

            <CTASection title="Error-Free Payroll Guaranteed" />
        </div>
    );
};

export default PayrollManagement;
