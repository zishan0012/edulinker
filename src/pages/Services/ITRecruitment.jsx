import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import ProcessFlow from '../../components/PageSections/ProcessFlow';
import CTASection from '../../components/PageSections/CTASection';

const ITRecruitment = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="IT Recruitment"
                subtitle="Specialized hiring for the technology sector. Developers, Engineers, Architects, and more."
                image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Tech Skills We Cover"
                features={[
                    { title: 'Software Development', description: 'Full Stack, Frontend, Backend, Mobile (iOS/Android).', icon: 'Code' },
                    { title: 'Cloud & DevOps', description: 'AWS, Azure, Docker, Kubernetes experts.', icon: 'Cloud' },
                    { title: 'Data Science', description: 'AI/ML Engineers, Data Analysts, Big Data Specialists.', icon: 'Database' },
                    { title: 'Cybersecurity', description: 'Network Security, Ethical Hackers, Security Analysts.', icon: 'Lock' },
                    { title: 'Product Management', description: 'Product Managers, Owners, and Scrum Masters.', icon: 'Briefcase' },
                    { title: 'QA & Testing', description: 'Automation and Manual Testers.', icon: 'CheckSquare' }
                ]}
            />

            <ProcessFlow
                title="Tech Hiring Workflow"
                steps={[
                    { title: 'Skill Mapping', description: 'Defining the precise tech stack and experience levels.' },
                    { title: 'Technical Screening', description: 'Initial coding tests and technical rounds by experts.' },
                    { title: 'Cultural Fit', description: 'Ensuring alignment with your team dynamics.' },
                    { title: 'Final Selection', description: 'Presenting the top technical talent for your final review.' }
                ]}
            />

            <CTASection text="Scale your tech team with the best engineering talent." />
        </div>
    );
};

export default ITRecruitment;
