import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const Payroll = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Payroll Services"
        subtitle="Accurate, timely, and compliant payroll processing for businesses of all sizes."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Comprehensive Payroll Solutions"
        features={[
          { title: 'Payroll Processing', description: 'End-to-end processing from attendance validation to bank transfer files.', icon: 'DollarSign' },
          { title: 'Statutory Compliance', description: 'PF, ESIC, PT, LWF, and TDS management to keep you 100% compliant.', icon: 'ShieldCheck' },
          { title: 'Employee Self Service', description: 'Portal for employees to view payslips, tax sheets, and leave balances.', icon: 'Smartphone' },
          { title: 'Query Management', description: 'Dedicated helpdesk to resolve employee payroll queries promptly.', icon: 'HelpCircle' }
        ]}
      />

      <ProcessFlow
        title="Monthly Payroll Cycle"
        steps={[
          { title: 'Data Input', description: 'Collection of attendance, leaves, and variable pay data.' },
          { title: 'Processing & Validation', description: 'Calculation of gross, net, and deductions with multi-level checks.' },
          { title: 'Approval', description: 'Client review and approval of the final payroll register.' },
          { title: 'Disbursement & Reports', description: 'Salary payout and generation of statutory reports.' }
        ]}
      />

      <CTASection title="Simplify Your Payroll Today" actionText="Request a Quote" />
    </div>
  );
};

export default Payroll;
