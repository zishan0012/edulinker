import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const PayrollSoftware = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Payroll Software"
        subtitle="Automated payroll calculation ensuring 100% accuracy and compliance."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Why Automate Payroll?"
        features={[
          { title: 'One-Click Process', description: 'Run payroll for thousands of employees in minutes.', icon: 'Zap' },
          { title: 'Tax Compliant', description: 'Auto-updated statutory tax slabs and rules.', icon: 'ShieldCheck' },
          { title: 'Direct Deposit', description: 'Integrated with major banks for seamless salary transfer.', icon: 'CreditCard' },
          { title: 'Employee Portal', description: 'Self-service access for tax declarations and slips.', icon: 'Smartphone' }
        ]}
      />

      <CTASection title="Zero Error Payroll" />
    </div>
  );
};

export default PayrollSoftware;
