import React from 'react';

export const NAVIGATION = [
    {
        label: 'Solutions',
        megaMenu: true,
        columns: [
            {
                title: 'Core Solutions',
                items: [
                    { label: 'AI Education Apps', path: '/solutions/ai-apps' },
                    { label: 'AI Web Solutions', path: '/solutions/ai-web' },
                    { label: 'AI LMS', path: '/solutions/ai-lms' },
                    { label: 'AI SMS', path: '/solutions/ai-sms' },
                    { label: 'SaaS SMS', path: '/solutions/saas-sms' }
                ]
            },
            {
                title: 'Institutional Solutions',
                items: [
                    { label: 'Schools ERP', path: '/solutions/erp' },
                    { label: 'Educator & Teacher', path: '/solutions/teachers' },
                    { label: 'Academy & Coaching', path: '/solutions/academies' },
                    { label: 'AI Chatbots', path: '/solutions/chatbots' },
                    { label: 'Test & Assessment', path: '/solutions/testing' }
                ]
            }
        ]
    },
    {
        label: 'Services',
        megaMenu: true,
        columns: [
            {
                title: 'AI & Development',
                items: [
                    { label: 'AI App Development', path: '/services/app-dev' },
                    { label: 'Web Development', path: '/services/web-dev' },
                    { label: 'Custom LMS/SMS Dev', path: '/services/lms-sms-dev' },
                    { label: 'SaaS Platform Dev', path: '/services/saas-dev' }
                ]
            },
            {
                title: 'Growth & Design',
                items: [
                    { label: 'AI Chatbot Dev', path: '/services/chatbot-dev' },
                    { label: 'AI Automation', path: '/services/automation' },
                    { label: 'Digital Marketing', path: '/services/marketing' },
                    { label: 'UI/UX Design', path: '/services/design' }
                ]
            }
        ]
    },
    {
        label: 'Products',
        megaMenu: true,
        columns: [
            {
                title: 'School Management',
                items: [
                    { label: 'Main SMS', path: '/products/school-ms' },
                    { label: 'Admission CRM', path: '/products/admission-crm' },
                    { label: 'Fee & Accounting', path: '/products/fee-accounting' },
                    { label: 'Attendance System', path: '/products/attendance-system' },
                    { label: 'Exam & Result', path: '/products/exam-result' },
                    { label: 'Parent-Teacher App', path: '/products/parent-app' }
                ]
            },
            {
                title: 'LMS & Platforms',
                items: [
                    { label: 'Main LMS', path: '/products/lms' },
                    { label: 'Course Management', path: '/products/course-ms' },
                    { label: 'Live Class Platform', path: '/products/live-class' },
                    { label: 'Recorded Course', path: '/products/recorded-course' },
                    { label: 'Assignment System', path: '/products/assignment-testing' },
                    { label: 'Learning Analytics', path: '/products/analytics' }
                ]
            },
            {
                title: 'Institution Apps',
                items: [
                    { label: 'Course Selling', path: '/products/course-selling' },
                    { label: 'Subscription App', path: '/products/subscription-learning' },
                    { label: 'Coaching App', path: '/products/coaching-app' },
                    { label: 'Institution Portal', path: '/products/institution-portal' },
                    { label: 'SaaS Platform', path: '/products/saas-platform' }
                ]
            }
        ]
    },
    {
        label: 'Platforms',
        megaMenu: true,
        columns: [
            {
                title: 'Ready-made Platforms',
                items: [
                    { label: 'Learning App', path: '/platforms/learning-app' },
                    { label: 'Competitive Exam Platform', path: '/platforms/exam-platform' },
                    { label: 'Teacher App', path: '/platforms/teacher-app' },
                    { label: 'Online Academy Platform', path: '/platforms/online-academy' }
                ]
            }
        ]
    },
    {
        label: 'Company',
        megaMenu: true,
        columns: [
            {
                title: 'About Edulinkers',
                items: [
                    { label: 'Company Overview', path: '/about' },
                    { label: 'Vision & Mission', path: '/vision-mission' },
                    { label: 'Technology & AI', path: '/tech-ai' },
                    { label: 'Careers', path: '/careers' }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        megaMenu: true,
        columns: [
            {
                title: 'Contact',
                items: [
                    { label: 'Contact Form', path: '/contact' },
                    { label: 'Book a Demo', path: '/contact' },
                    { label: 'Location & Phone', path: '/contact' }
                ]
            },
            {
                title: 'Support',
                items: [
                    { label: 'Support Options', path: '/support' },
                    { label: 'Help Desk / FAQ', path: '/support' },
                    { label: 'Ticket / WhatsApp', path: '/support' }
                ]
            },
            {
                title: 'Legal & System',
                items: [
                    { label: 'Privacy Policy', path: '/legal/privacy' },
                    { label: 'Terms & Conditions', path: '/legal/terms' },
                    { label: 'Refund Policy', path: '/legal/refund' }
                ]
            }
        ]
    }
];

export const FOOTER_LINKS = {
    company: [
        { label: 'About Us', path: '/about' },
        { label: 'Vision & Mission', path: '/vision-mission' },
        { label: 'Technology & AI', path: '/tech-ai' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact Info', path: '/contact' }
    ],
    products: [
        { label: 'School ERP', path: '/products/school-ms' },
        { label: 'AI LMS', path: '/products/lms' },
        { label: 'Live Classes', path: '/products/live-class' },
        { label: 'Subscription App', path: '/products/subscription-learning' },
        { label: 'Online Academy', path: '/platforms/online-academy' }
    ],
    solutions: [
        { label: 'For Schools', path: '/solutions/erp' },
        { label: 'For Academies', path: '/solutions/academies' },
        { label: 'For Teachers', path: '/solutions/teachers' },
        { label: 'AI Chatbots', path: '/solutions/chatbots' },
        { label: 'Assessment AI', path: '/solutions/testing' }
    ],
    services: [
        { label: 'AI App Dev', path: '/services/app-dev' },
        { label: 'Web Dev', path: '/services/web-dev' },
        { label: 'Custom LMS', path: '/services/lms-sms-dev' },
        { label: 'SaaS Dev', path: '/services/saas-dev' },
        { label: 'Design Services', path: '/services/design' }
    ],
    legal: [
        { label: 'Privacy Policy', path: '/legal/privacy' },
        { label: 'Terms of Service', path: '/legal/terms' },
        { label: 'Refund Policy', path: '/legal/refund' },
        { label: 'Support Center', path: '/support' }
    ]
};
