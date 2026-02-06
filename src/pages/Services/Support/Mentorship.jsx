import React from 'react';
import HeroSection from '../../../components/PageSections/HeroSection';
import FeatureGrid from '../../../components/PageSections/FeatureGrid';
import CTASection from '../../../components/PageSections/CTASection';

const Mentorship = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Mentorship"
                subtitle="Learn from the best to become the best version of yourself."
                image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Empowering Students"
                features={[
                    { title: 'One-on-One Mentoring', description: 'Direct access to industry professionals and scholars.', icon: 'UserCheck' },
                    { title: 'Subject Matter Experts', description: 'Deep dive into complex topics with specialists.', icon: 'HardHat' },
                    { title: 'Soft Skills Coaching', description: 'Enhancing communication, team-work, and grit.', icon: 'Heart' },
                    { title: 'Networking Opportunities', description: 'Connect with a global community of learners.', icon: 'Globe' }
                ]}
            />

            <CTASection title="Find Your Mentor Today" />
        </div>
    );
};

export default Mentorship;
