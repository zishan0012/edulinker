import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const SchoolAdmissions = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="School Admissions"
                subtitle="Assisting parents and students in finding the right K-12 environment."
                image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Finding the Right Fit"
                features={[
                    { title: 'Curriculum Guidance', description: 'Choosing between IB, CBSE, ICSE, and IGCSE.', icon: 'Clipboard' },
                    { title: 'Campus Visits', description: 'Coordinating visits to top-tier schools.', icon: 'Eye' },
                    { title: 'Entrance Preparation', description: 'Coaching for school-specific admission tests.', icon: 'Edit' },
                    { title: 'Enrollment Support', description: 'Streamlining documentation and fee procedures.', icon: 'FileText' }
                ]}
            />

            <CTASection title="Secure Your Child's Future with the Right School" />
        </div>
    );
};

export default SchoolAdmissions;
