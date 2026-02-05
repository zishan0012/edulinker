import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const BecomeIPP = () => {
    return (
        <div className="main-content">
            <HeroSection
                title="Become Our IPP"
                subtitle="Individual Partnership Program for freelancers and independent recruiters."
                image="https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureGrid
                title="Why Join as IPP?"
                features={[
                    { title: 'Flexibility', description: 'Work from anywhere, anytime. Be your own boss.', icon: 'Sun' },
                    { title: 'Zero Investment', description: 'Start your business with absolutely no capital.', icon: 'Smile' },
                    { title: 'Instant Payouts', description: 'Timely payments upon successful delivery.', icon: 'CheckCircle' },
                    { title: 'Network Access', description: 'Connect with other professionals in the ecosystem.', icon: 'Globe' }
                ]}
            />

            <CTASection title="Start Your Freelance Journey" actionText="Register Now" />
        </div>
    );
};

export default BecomeIPP;
