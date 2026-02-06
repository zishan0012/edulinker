import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const StudentHousing = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Student Housing"
                subtitle="Safe and comfortable accommodation options near your campus."
                image="https://images.unsplash.com/photo-1555854816-802f18809c14?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Living Away from Home"
                features={[
                    { title: 'Hostel Search', description: 'Curated list of hostels and PGs with student reviews.', icon: 'Search' },
                    { title: 'Safety Verification', description: 'Ensuring all listed properties meet our safety standards.', icon: 'ShieldCheck' },
                    { title: 'Roommate Finder', description: 'Connecting you with fellow students for shared living.', icon: 'Users' },
                    { title: 'Inventory Support', description: 'Assisting with leases and move-in checklists.', icon: 'Key' }
                ]}
            />

            <CTASection title="Find Your Second Home Today" />
        </div>
    );
};

export default StudentHousing;
