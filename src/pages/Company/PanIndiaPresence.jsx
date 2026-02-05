import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const PanIndiaPresence = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Pan-India Presence"
                subtitle="Serving clients across the length and breadth of the nation with local expertise."
                image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Our Reach"
                columns={3}
                features={[
                    { title: 'North Zone', description: 'Delhi NCR, Chandigarh, Jaipur, Lucknow.', icon: 'MapPin' },
                    { title: 'West Zone', description: 'Mumbai, Pune, Ahmedabad, Indore.', icon: 'MapPin' },
                    { title: 'South Zone', description: 'Bangalore, Chennai, Hyderabad, Kochi.', icon: 'MapPin' },
                    { title: 'East Zone', description: 'Kolkata, Bhubaneswar, Patna, Guwahati.', icon: 'MapPin' },
                    { title: 'Central Support', description: 'Centralized command center ensuring standard delivery.', icon: 'Headphones' },
                    { title: 'Remote Capabilities', description: 'Serving tier-2 and tier-3 cities virtually.', icon: 'Wifi' }
                ]}
            />

            <CTASection title="We Are Where You Are" text="Connect with our nearest regional office." />
        </div>
    );
};

export default PanIndiaPresence;
