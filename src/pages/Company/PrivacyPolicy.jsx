import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';

const PrivacyPolicy = () => {
  return (
    <div className="main-content">
      <HeroSection title="Privacy Policy" subtitle="Last Updated: Feb 2026" />
      <div className="container mx-auto px-8 lg:px-12 py-16 text-neutral-600 space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
        <p><strong>1. Introduction</strong><br />Welcome to EduLinker. We respect your privacy and are committed to protecting your personal data.</p>
        <p><strong>2. Data We Collect</strong><br />We may collect personal identification information (Name, email, phone number, etc.) when you visit our site or fill out a form.</p>
        <p><strong>3. How We Use Your Data</strong><br />We use your data to facilitate our services, process payments, and improve user experience. We do not sell your data to third parties.</p>
        <p><strong>4. Data Security</strong><br />We implement robust security measures to protect your data from unauthorized access.</p>
        <p><strong>5. Cookies</strong><br />Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings.</p>
        <p><strong>6. Contact Us</strong><br />If you have any questions about this Privacy Policy, please contact us at support@edulinker.com.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
