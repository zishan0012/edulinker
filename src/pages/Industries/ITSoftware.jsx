import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';

const ITSoftware = () => {
  return (
    <div className="main-content">
      <HeroSection
        title="Information Technology"
        subtitle="Fueling digital transformation with world-class tech talent."
        image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80"
      />

      <FeatureGrid
        title="Focus Areas"
        columns={3}
        features={[
          { title: 'Software Engineering', description: 'Java, Python, .NET, Node.js', icon: 'Code' },
          { title: 'Cloud & Infrastructure', description: 'AWS, Azure, Google Cloud, DevOps', icon: 'Cloud' },
          { title: 'Data & Analytics', description: 'Big Data, AI/ML, Data Engineering', icon: 'Database' },
          { title: 'ERP Solutions', description: 'SAP, Oracle, Microsoft Dynamics', icon: 'Server' },
          { title: 'Semiconductors', description: 'VLSI, Embedded Systems design', icon: 'Cpu' },
          { title: 'Digital Design', description: 'UI/UX Designers, Graphic Artists', icon: 'PenTool' }
        ]}
      />

      <CTASection title="Hire Top Tech Talent" />
    </div>
  );
};

export default ITSoftware;
