import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const HRMS = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Core HRMS"
        subtitle="The backbone of your employee data and organizational structure."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Modules"
        columns={3}
        features={[
          { title: 'Employee Database', description: 'Centralized repository of employee records.', icon: 'Database' },
          { title: 'Onboarding', description: 'Digital paperless joining process.', icon: 'UserPlus' },
          { title: 'Leave Management', description: 'Customizable leave policies and approval workflows.', icon: 'Calendar' },
          { title: 'Performance', description: 'Goal setting, appraisals, and 360 feedback.', icon: 'TrendingUp' },
          { title: 'Helpdesk', description: 'Internal ticketing system for employee requests.', icon: 'HelpCircle' },
          { title: 'Travel & Expense', description: 'Streamlined reimbursement process.', icon: 'DollarSign' }
        ]}
      />

      <CTASection title="Digitize Your HR" />
    </div>
  );
};

export default HRMS;
