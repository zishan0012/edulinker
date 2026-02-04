import React from 'react';

export const NAVIGATION = [
    {
        label: 'Company',
        megaMenu: true,
        columns: [
            {
                title: 'About Us',
                items: [
                    { label: 'Company Overview', path: '/about' },
                    { label: 'Vision & Mission', path: '/about#vision' },
                    { label: 'Founder\'s Message', path: '/about#founder' },
                    { label: 'Our Approach', path: '/about#approach' },
                    { label: 'Pan-India Presence', path: '/about#presence' }
                ]
            },
            {
                title: 'Approach & Recognition',
                items: [
                    { label: 'Our Process', path: '/process' },
                    { label: 'Testimonials', path: '/testimonials' },
                    { label: 'Awards', path: '/awards' },
                    { label: 'Privacy Policy', path: '/privacy-policy' },
                    { label: 'Terms & Conditions', path: '/terms-conditions' }
                ]
            },
            {
                title: 'Join Us',
                items: [
                    { label: 'Careers', path: '/careers' },
                    { label: 'Life at EduLinker', path: '/life-at-edulinker' },
                    { label: 'Employee Speak', path: '/employee-speak' },
                    { label: 'Become Our BPP', path: '/partners#bpp' },
                    { label: 'Become Our IPP', path: '/partners#ipp' }
                ]
            },
            {
                title: 'EduLinker Brands',
                items: [
                    { label: 'EduLinker', path: '/' },
                    { label: 'CLink HR Services', path: 'http://clinkservices.in/', external: true }
                ]
            }
        ]
    },
    {
        label: 'Services',
        megaMenu: true,
        columns: [
            {
                title: 'Our Services',
                items: [
                    { label: 'All Services', path: '/services' },
                    { label: 'Recruitment Services', path: '/services/recruitment' },
                    { label: 'Payroll Services', path: '/services/payroll' },
                    { label: 'Training & Development', path: '/services/training' },
                    { label: 'HR Consulting', path: '/services/consulting' },
                    { label: 'Compliance Support', path: '/services/compliance' }
                ]
            },
            {
                title: 'Recruitment Solutions',
                items: [
                    { label: 'IT Recruitment', path: '/services/recruitment#it' },
                    { label: 'Non-IT Recruitment', path: '/services/recruitment#non-it' },
                    { label: 'Bulk Hiring', path: '/services/recruitment#bulk' },
                    { label: 'Executive Search', path: '/services/recruitment#executive' },
                    { label: 'Contract Staffing', path: '/services/contract-staffing' }
                ]
            },
            {
                title: 'HR & Payroll',
                items: [
                    { label: 'Payroll Management', path: '/services/payroll#management' },
                    { label: 'Third-Party Payroll', path: '/services/payroll#3p' },
                    { label: 'Compliance Management', path: '/services/payroll#compliance' },
                    { label: 'HR Audit', path: '/services/payroll#audit' }
                ]
            },
            {
                title: 'Training & Development',
                items: [
                    { label: 'Corporate Training', path: '/services/training#corporate' },
                    { label: 'Skill Development', path: '/services/training#skill' },
                    { label: 'Leadership Programs', path: '/services/training#leadership' },
                    { label: 'Technical Training', path: '/services/training#technical' }
                ]
            }
        ]
    },
    {
        label: 'Solutions',
        megaMenu: true,
        columns: [
            {
                title: 'Hiring Solutions',
                items: [
                    { label: 'All Solutions', path: '/solutions' },
                    { label: 'Enterprise Hiring', path: '/solutions/enterprise-hiring' },
                    { label: 'Startup Hiring', path: '/solutions/startup-hiring' },
                    { label: 'Fast Closure Model', path: '/solutions/fast-closure' },
                    { label: 'IT Hiring Solutions', path: '/solutions/it-hiring' },
                    { label: 'Non-IT Hiring', path: '/solutions/non-it-hiring' }
                ]
            },
            {
                title: 'Business Solutions',
                items: [
                    { label: 'Compliance-Ready HR', path: '/solutions/compliance-hr' },
                    { label: 'HR Transformation', path: '/solutions/hr-transformation' },
                    { label: 'Workforce Planning', path: '/solutions/workforce-planning' },
                    { label: 'Talent Management', path: '/solutions/talent-management' }
                ]
            },
            {
                title: 'Industry Solutions',
                items: [
                    { label: 'BFSI', path: '/industries/bfsi' },
                    { label: 'IT & Software', path: '/industries/it-software' },
                    { label: 'Healthcare', path: '/industries/healthcare' },
                    { label: 'Education', path: '/industries/education' },
                    { label: 'Manufacturing', path: '/industries/manufacturing' }
                ]
            }
        ]
    },
    {
        label: 'Products',
        megaMenu: true,
        columns: [
            {
                title: 'HR Tech Products',
                items: [
                    { label: 'All Products', path: '/products' },
                    { label: 'Recruitment Platform', path: '/products/recruitment-platform' },
                    { label: 'Payroll Software', path: '/products/payroll-software' },
                    { label: 'HRMS Solution', path: '/products/hrms' },
                    { label: 'Attendance System', path: '/products/attendance' }
                ]
            },
            {
                title: 'Learning Platform',
                items: [
                    { label: 'LMS Platform', path: '/products/lms' },
                    { label: 'Course Management', path: '/products/course-management' },
                    { label: 'Assessment Tools', path: '/products/assessment' },
                    { label: 'Certification System', path: '/products/certification' }
                ]
            }
        ]
    },
    {
        label: 'Work',
        megaMenu: true,
        columns: [
            {
                title: 'Our Work',
                items: [
                    { label: 'Portfolio', path: '/portfolio' },
                    { label: 'Case Studies', path: '/case-studies' },
                    { label: 'Success Stories', path: '/success-stories' },
                    { label: 'Client Testimonials', path: '/testimonials' }
                ]
            },
            {
                title: 'Industries Served',
                items: [
                    { label: 'All Industries', path: '/industries' },
                    { label: 'BFSI', path: '/industries/bfsi' },
                    { label: 'IT & Software', path: '/industries/it-software' },
                    { label: 'Healthcare', path: '/industries/healthcare' },
                    { label: 'Retail & E-commerce', path: '/industries/retail' }
                ]
            }
        ]
    },
    { label: 'Courses', path: '/courses' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
];

export const FOOTER_LINKS = {
    company: [
        { label: 'About EduLinker', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Industries', path: '/industries' },
        { label: 'How It Works', path: '/process' },
        { label: 'Careers', path: '/careers' }
    ],
    solutions: [ // Note: Kept key as 'solutions' but displaying as 'Resources' in Footer component based on previous turn
        { label: 'Recruitment Services', path: '/services/recruitment' },
        { label: 'Payroll Services', path: '/services/payroll' },
        { label: 'Compliance Support', path: '/services/compliance' },
        { label: 'HR Advisory', path: '/services/consulting' }
    ],
    partners: [
        { label: 'Partner Program', path: '/partners' },
        { label: 'IPP Model', path: '/partners#ipp' },
        { label: 'BPP Model', path: '/partners#bpp' },
        { label: 'Partner Onboarding', path: '/partners' }
    ],
    resources: [
        { label: 'Blog', path: '/blog' },
        { label: 'FAQs – Clients', path: '/contact' },
        { label: 'FAQs – Partners', path: '/contact' }
    ],
    legal: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms-conditions' },
        { label: 'Refund & Cancellation', path: '/refund-policy' }
    ]
};
