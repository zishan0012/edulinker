import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const BulkHiring = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Bulk Hiring Solutions"
                subtitle="High-volume recruitment strategies to scale your workforce rapidly and efficiently."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Benefits of Our Bulk Hiring"
                features={[
                    { title: 'Cost Effective', description: 'Economies of scale reduce your cost-per-hire significantly.', icon: 'DollarSign' },
                    { title: 'Time Saving', description: 'Dedicated teams working in parallel to close hundreds of positions.', icon: 'Zap' },
                    { title: 'Consistent Quality', description: 'Standardized assessment processes ensuring quality at scale.', icon: 'CheckCircle' }
                ]}
            />

            <ProcessFlow
                title="Mass Recruitment Workflow"
                steps={[
                    { title: 'Planning', description: 'Defining quotas, timelines, and sourcing channels.' },
                    { title: 'Drive Management', description: 'Organizing walk-ins, campus drives, or virtual job fairs.' },
                    { title: 'Mass Assessment', description: 'Using aptitude tests and group discussions for filtering.' },
                    { title: 'Volume Onboarding', description: 'Streamlined documentation and induction for large batches.' }
                ]}
            />

            <CTASection title="Need to Hire in Hundreds?" actionText="Plan a Drive" />
        </div>
    );
};

export default BulkHiring;
