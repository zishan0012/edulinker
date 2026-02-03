import React from 'react';

export const NAVIGATION = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    {
        label: 'About Us',
        path: '/about',
        children: [
            { label: 'Vision & Mission', path: '/about#vision' },
            { label: 'Founder\'s Message', path: '/about#founder' },
            { label: 'Our Approach', path: '/about#approach' },
            { label: 'Pan-India Presence', path: '/about#presence' }
        ]
    },
    {
        label: 'Recruitment',
        path: '/services/recruitment',
        children: [
            { label: 'IT Recruitment', path: '/services/recruitment#it' },
            { label: 'Non-IT Recruitment', path: '/services/recruitment#non-it' },
            { label: 'Bulk Hiring', path: '/services/recruitment#bulk' },
            { label: 'Executive Search', path: '/services/recruitment#executive' }
        ]
    },
    // {
    //     label: 'Payroll & HR',
    //     path: '/services/payroll',
    //     children: [
    //         { label: 'Third-Party Payroll', path: '/services/payroll#3p' },
    //         { label: 'Compliance', path: '/services/payroll#compliance' },
    //         { label: 'HR Audit', path: '/services/payroll#audit' }
    //     ]
    // },
    {
        label: 'Partners',
        path: '/partners',
        children: [
            { label: 'Partner Ecosystem', path: '/partners#ecosystem' },
            { label: 'IPP Model', path: '/partners#ipp' },
            { label: 'BPP Model', path: '/partners#bpp' },
            { label: 'Become a Partner', path: '/partners#join' }
        ]
    },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
];

export const FOOTER_LINKS = {
    company: ['About CLink HR', 'Services', 'Industries', 'How It Works', 'Careers'],
    solutions: ['Recruitment Services', 'Payroll Services', 'Compliance Support', 'HR Advisory'],
    partners: ['Partner Program', 'IPP Model', 'BPP Model', 'Partner Onboarding'],
    resources: ['Blog', 'FAQs – Clients', 'FAQs – Partners'],
    legal: ['Privacy Policy', 'Terms & Conditions', 'Refund & Cancellation']
};
