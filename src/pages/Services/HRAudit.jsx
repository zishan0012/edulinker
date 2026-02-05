import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const HRAudit = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="HR Audit Services"
                subtitle="Comprehensive evaluation of your HR policies, processes, and compliance status."
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Scope of Audit"
                features={[
                    { title: 'Policy Review', description: 'Checking alignment of HR policies with current laws.', icon: 'BookOpen' },
                    { title: 'Compliance Check', description: 'Verifying statutory registers, returns, and challans.', icon: 'CheckSquare' },
                    { title: 'Process Efficiency', description: 'Identifying bottlenecks in HR workflows.', icon: 'Activity' },
                    { title: 'Data Integrity', description: 'Checking accuracy and security of employee data.', icon: 'Database' }
                ]}
            />

            <ProcessFlow
                title="Audit Methodology"
                steps={[
                    { title: 'Data Collection', description: 'Gathering documents, registers, and policy manuals.' },
                    { title: 'Onsite Verification', description: 'Physical verification of records and notices.' },
                    { title: 'Gap Analysis', description: 'Identifying deviations from statutory requirements.' },
                    { title: 'Reporting', description: 'Detailed report with risk rating and recommendations.' }
                ]}
            />

            <CTASection title="Ensure Your HR Health" actionText="Schedule Audit" />
        </div>
    );
};

export default HRAudit;
