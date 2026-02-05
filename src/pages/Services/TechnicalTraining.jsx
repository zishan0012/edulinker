import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const TechnicalTraining = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Technical Training"
        subtitle="Cutting-edge tech training delivering by industry experts."
        image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Tech Stack"
        columns={3}
        features={[
          { title: 'Full Stack Development', description: 'MERN, MEAN, Java, .NET stacks.', icon: 'Code' },
          { title: 'Data Science & AI', description: 'Python, R, Machine Learning, Deep Learning.', icon: 'Database' },
          { title: 'Cloud Computing', description: 'AWS, Azure, Google Cloud certifications.', icon: 'Cloud' },
          { title: 'Cybersecurity', description: 'Ethical Hacking, Network Security.', icon: 'Lock' },
          { title: 'DevOps', description: 'CI/CD pipeline, Jenkins, Docker, Kubernetes.', icon: 'Settings' },
          { title: 'Blockchain', description: 'Smart contracts, Ethereum, Hyperledger.', icon: 'Link' }
        ]}
      />

      <CTASection title="Stay Ahead of the Curve" />
    </div>
  );
};

export default TechnicalTraining;
