import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const SkillDevelopment = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Skill Development"
                subtitle="Vocational and employability training to bridge the academic-industry gap."
                image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Focus Areas"
                features={[
                    { title: 'Campus to Corporate', description: 'Preparing fresh graduates for professional life.', icon: 'GraduationCap' },
                    { title: 'Vocational Skills', description: 'Practical training for specific trades and industries.', icon: 'Tool' },
                    { title: 'Digital Literacy', description: 'Basic computer and internet usage skills.', icon: 'Monitor' },
                    { title: 'Language Training', description: 'English proficiency and regional language support.', icon: 'Languages' }
                ]}
            />

            <CTASection title="Build a Skilled Future" />
        </div>
    );
};

export default SkillDevelopment;
