import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';

const TermsConditions = () => {
  return (
    <div className="main-content">
      <HeroSection title="Terms & Conditions" subtitle="Please read these terms carefully before using our services." />
      <div className="container mx-auto px-8 lg:px-12 py-16 text-neutral-600 space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
        <p><strong>1. Acceptance of Terms</strong><br />By accessing this website, you agree to be bound by these Terms and Conditions.</p>
        <p><strong>2. Use License</strong><br />Permission is granted to temporarily download one copy of the materials on EduLinker's website for personal, non-commercial viewing only.</p>
        <p><strong>3. Disclaimer</strong><br />The materials on EduLinker's website are provided on an 'as is' basis. EduLinker makes no warranties, expressed or implied.</p>
        <p><strong>4. Limitations</strong><br />In no event shall EduLinker be liable for any damages arising out of the use or inability to use the materials on EduLinker's website.</p>
        <p><strong>5. Governing Law</strong><br />These terms and conditions are governed by and construed in accordance with the laws of India.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
