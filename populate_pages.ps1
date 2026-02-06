$solutions = @("AIEduApps", "AIEduWeb", "AILMS", "AISMS", "SaaS_SMS", "SchoolsERP", "TeacherSolutions", "AcademySolutions", "AIChatbotSolutions", "TestingSoftware")
$services = @("AIAppDev", "WebDev", "CustomLMSDev", "SaaSPlatformDev", "AIChatbotDev", "AIAutomation", "DigitalMarketing", "DesignServices")
$products = @("MainSMS", "AdmissionCRM", "FeeAccounting", "AttendanceSystem", "ExamResult", "ParentApp", "MainLMS", "CourseMS", "LiveClass", "RecordedCourse", "AssignmentSystem", "LearningAnalytics", "CourseSelling", "SubscriptionLearning", "CoachingApp", "InstitutionApp", "InstitutionPortal", "SaaSPlatform", "AIEdApps", "AIChatbotProduct")
$platforms = @("LearningApp_Byjus", "ExamPlatform_Unacademy", "TeacherApp", "OnlineAcademy")
$company = @("About", "VisionMission", "TechAI", "Careers")
$legal = @("PrivacyPolicy", "TermsOfService", "RefundPolicy")

function Get-DisplayName($name) {
    switch ($name) {
        "AIEduApps" { return "AI Education Apps" }
        "AIEduWeb" { return "AI Web Solutions" }
        "AILMS" { return "AI LMS Platform" }
        "AISMS" { return "AI SMS Platform" }
        "SaaS_SMS" { return "SaaS School Management" }
        "SchoolsERP" { return "Schools ERP Solution" }
        "TeacherSolutions" { return "Teacher & Educator Solutions" }
        "AcademySolutions" { return "Academy & Coaching Solutions" }
        "AIChatbotSolutions" { return "AI Chatbot Solutions" }
        "TestingSoftware" { return "Test & Assessment Software" }
        "AIAppDev" { return "AI App Development" }
        "WebDev" { return "Web Development" }
        "CustomLMSDev" { return "Custom LMS/SMS Development" }
        "SaaSPlatformDev" { return "SaaS Platform Development" }
        "AIChatbotDev" { return "AI Chatbot Development" }
        "AIAutomation" { return "AI & Automation Services" }
        "DigitalMarketing" { return "Digital Marketing Services" }
        "DesignServices" { return "UI/UX Design Services" }
        "MainSMS" { return "Main School Management System" }
        "AdmissionCRM" { return "Admission CRM" }
        "FeeAccounting" { return "Fee & Accounting System" }
        "AttendanceSystem" { return "Attendance Tracking System" }
        "ExamResult" { return "Exam & Result Management" }
        "ParentApp" { return "Parent-Teacher App" }
        "MainLMS" { return "Main Learning Management System" }
        "CourseMS" { return "Course Management System" }
        "LiveClass" { return "Live Class Platform" }
        "RecordedCourse" { return "Recorded Course Module" }
        "AssignmentSystem" { return "Assignment & Testing System" }
        "LearningAnalytics" { return "Learning Analytics Dashboard" }
        "CourseSelling" { return "Course Selling Platform" }
        "SubscriptionLearning" { return "Subscription Learning App" }
        "CoachingApp" { return "Coaching & Institute App" }
        "InstitutionApp" { return "Institutional Platform" }
        "InstitutionPortal" { return "Institution Management Portal" }
        "SaaSPlatform" { return "SaaS Platform Builder" }
        "AIEdApps" { return "AI Powered Educational Apps" }
        "AIChatbotProduct" { return "AI Educational Chatbot" }
        "LearningApp_Byjus" { return "K-12 Learning App" }
        "ExamPlatform_Unacademy" { return "Competitive Exam Platform" }
        "TeacherApp" { return "Professional Teacher App" }
        "OnlineAcademy" { return "Ready-to-Launch Online Academy" }
        "VisionMission" { return "Vision & Mission" }
        "TechAI" { return "Technology & AI Innovation" }
        "PrivacyPolicy" { return "Privacy Policy" }
        "TermsOfService" { return "Terms of Service" }
        "RefundPolicy" { return "Refund & Cancellation Policy" }
        default { return $name -replace '([a-z])([A-Z])', '$1 $2' }
    }
}

function Populate-Page($path, $name, $templateType) {
    $displayName = Get-DisplayName $name
    $content = ""
    
    if ($templateType -eq "Solution") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="Empowering education through advanced AI-driven solutions."
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem Statement</h2>
              <p className="text-lg text-neutral-600">Modern educational institutions face increasing complexity in managing data, engagement, and scalability. Traditional systems are often siloed and lack the intelligence needed for personalized learning at scale.</p>
            </div>
            
            <div className="bg-brand-50 p-8 md:p-12 rounded-3xl border border-brand-100 mb-24">
              <h3 className="text-2xl font-bold text-brand-600 mb-4">Our AI-Based Solution</h3>
              <p className="text-slate-900 font-medium leading-relaxed">By leveraging machine learning and predictive analytics, $displayName automates routine tasks, provides deep insights into student performance, and creates a seamless experience for administrators and educators alike.</p>
            </div>
          </Reveal>

          <FeatureGrid 
            title="Key Features"
            subtitle="Everything you need to transform your operations with AI."
            features={[
              { title: 'Automated Workflows', description: 'Streamline administrative tasks with intelligent triggers.', icon: 'Zap' },
              { title: 'Predictive Analytics', description: 'Forecast student outcomes and resource needs early.', icon: 'BarChart' },
              { title: 'Personalized Insights', description: 'Tailored recommendations for every user in the system.', icon: 'Target' },
              { title: 'Secure Data Cloud', description: 'Enterprise-grade security for institutional data.', icon: 'Shield' },
              { title: 'Seamless Integration', description: 'Connect with your existing tools via robust APIs.', icon: 'Link' },
              { title: 'Scalable Architecture', description: 'Grows with your institution, from 100 to 1M+ users.', icon: 'Globe' }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: '01', title: 'Data Integration', desc: 'Seamlessly connect your student and institutional data.' },
                { step: '02', title: 'AI Processing', desc: 'Our engine analyzes patterns and optimizes workflows.' },
                { step: '03', title: 'Smart Insights', desc: 'Receive actionable intelligence and automate responses.' }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-brand-100 absolute top-4 right-8">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Transform Your Institution Today" />
    </div>
  );
};

export default $name;
"@
    }
    elseif ($templateType -eq "Service") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="Professional AI-driven development and strategic services for EdTech."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Overview</h2>
              <p className="text-lg text-neutral-600">We provide end-to-end expertise in $displayName, specifically tailored for the education sector. Our teams combine domain knowledge with AI innovation to deliver world-class EdTech platforms.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <Reveal animation="fade-right">
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">AI Capabilities</h3>
                <ul className="space-y-4">
                  {['Intelligent Automation', 'Natural Language Processing', 'Predictive Modeling', 'Computer Vision for Proctoring'].map((cap, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-600">
                      <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={0.2}>
              <div className="p-8 bg-brand-600 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Service?</h3>
                <p className="opacity-90 leading-relaxed mb-6">Our deep specialization in EdTech allows us to anticipate institutional needs and technical challenges before they arise, ensuring a faster time-to-market and superior user engagement.</p>
                <div className="text-3xl font-bold">100% EdTech Focused</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Process Flow</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Discovery', desc: 'Understanding your unique institutional goals.' },
                { title: 'Architecture', desc: 'Designing AI-integrated scalable systems.' },
                { title: 'Development', desc: 'Agile execution using the latest SaaS stack.' },
                { title: 'Deployment', desc: 'Global rollout with enterprise security.' }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-neutral-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Scale Your EdTech Vision" />
    </div>
  );
};

export default $name;
"@
    }
    elseif ($templateType -eq "Product") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="The enterprise-grade product for modern educational ecosystems."
        image="https://images.unsplash.com/photo-1551288049-bbbda5402bd7?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Summary</h2>
                <p className="text-lg text-neutral-600 mb-8">$displayName is a cornerstone of our SaaS suite, providing institutions with the tools needed to manage operations efficiently while leveraging AI for superior educational outcomes.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-center uppercase tracking-widest text-xs font-bold text-neutral-500">AI-Ready</div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-center uppercase tracking-widest text-xs font-bold text-neutral-500">SaaS-Native</div>
                </div>
              </div>
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Dashboard Preview" className="w-full h-auto" />
              </div>
            </div>
          </Reveal>

          <FeatureGrid 
            title="Core Modules"
            subtitle="A comprehensive suite of tools built into one product."
            features={[
              { title: 'User Management', description: 'Complete control over students, teachers, and admins.', icon: 'Users' },
              { title: 'Smart Scheduling', description: 'AI-optimized timetables and resource allocation.', icon: 'Clock' },
              { title: 'Financial Module', description: 'Automated fee collection and financial reporting.', icon: 'CreditCard' },
              { title: 'Academic Engine', description: 'Manage exams, results, and curriculum with ease.', icon: 'Award' },
              { title: 'AI Insights', description: 'Real-time dashboard for institutional performance.', icon: 'TrendingUp' },
              { title: 'Cloud Control', description: 'Secure access from any device, anywhere in the world.', icon: 'Cloud' }
            ]}
          />
        </div>
      </section>

      <CTASection title="Get a Demo of $displayName" />
    </div>
  );
};

export default $name;
"@
    }
    elseif ($templateType -eq "Platform") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import FeatureGrid from '../../components/PageSections/FeatureGrid';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="Build and launch your own white-labeled education platform in days."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Own Platform, Powered by Edulinkers</h2>
              <p className="text-lg text-neutral-600">$displayName is a ready-to-deploy platform solution that combines student engagement, teacher administration, and a robust AI engine into a single, scalable brandable package.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              {[
                { title: 'Student Experience', desc: 'Intuitive app and web interfaces for seamless learning.' },
                { title: 'Teacher Control', desc: 'Powerful tools for content delivery and student management.' },
                { title: 'Admin Oversight', desc: 'Full institutional control and real-time business analytics.' }
              ].map((exp, i) => (
                <div key={i} className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50">
                  <h4 className="font-bold text-slate-900 mb-4">{exp.title}</h4>
                  <p className="text-sm text-neutral-500">{exp.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <FeatureGrid 
            title="Engine Features"
            subtitle="What makes $displayName the benchmark for EdTech platforms."
            features={[
              { title: 'AI Personalization', description: 'Adaptive learning paths for every student.', icon: 'Cpu' },
              { title: 'Live Streaming', description: 'Built-in support for low-latency live classes.', icon: 'Video' },
              { title: 'Monetization Tools', description: 'Comprehensive billing and subscription management.', icon: 'DollarSign' },
              { title: 'Mobile First', description: 'Fully native experience on iOS and Android.', icon: 'Smartphone' },
              { title: 'Multi-Tenant', description: 'Manage multiple branches or sub-institutions.', icon: 'Layers' },
              { title: 'AI Assessment', description: 'Automated proctoring and grading capabilities.', icon: 'CheckSquare' }
            ]}
          />
        </div>
      </section>

      <CTASection title="Launch Your $displayName Now" />
    </div>
  );
};

export default $name;
"@
    }
    elseif ($templateType -eq "Company") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import CTASection from '../../components/PageSections/CTASection';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="Behind the technology powering the future of global education."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Story & Philosophy</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-12">At Edulinkers, we believe that education is the foundation of progress. By integrating cutting-edge AI with reliable SaaS architecture, we empower institutions to focus on what matters most: teaching and learning.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Founded', val: '2020' },
                  { label: 'Team Size', val: '150+' },
                  { label: 'Users', val: '1M+' },
                  { label: 'Countries', val: '15+' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-neutral-50 rounded-2xl">
                    <div className="text-2xl font-black text-brand-600">{stat.val}</div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Join Our Mission" />
    </div>
  );
};

export default $name;
"@
    }
    elseif ($templateType -eq "Legal") {
        $content = @"
import React from 'react';
import HeroSection from '../../components/PageSections/HeroSection';
import Reveal from '../../components/Reveal';

const $name = () => {
  return (
    <div className="main-content">
      <HeroSection 
        title="$displayName" 
        subtitle="Transparency and security at the heart of our partnership."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 max-w-4xl">
          <Reveal>
            <div className="prose prose-slate lg:prose-lg mx-auto">
              <p className="text-neutral-600 mb-8 text-sm italic">Last Updated: October 2023</p>
              <h3 className="text-slate-900 font-bold text-xl mb-4">1. Introduction</h3>
              <p className="text-neutral-600 mb-8">Welcome to Edulinkers. Your privacy and trust are paramount to us. This $displayName document outlines our standards and policies regarding our AI-driven SaaS platform.</p>
              
              <h3 className="text-slate-900 font-bold text-xl mb-4">2. Data Privacy & AI</h3>
              <p className="text-neutral-600 mb-8">We utilize enterprise-grade encryption and strictly follow data protection regulations. AI models are trained on anonymized data to ensure absolute user anonymity while providing personalized learning insights.</p>
              
              <h3 className="text-slate-900 font-bold text-xl mb-4">3. Institutional Responsibility</h3>
              <p className="text-neutral-600 mb-8">Institutions using our SaaS platforms are responsible for the data uploaded, and we provide robust administrative tools to manage access control and retention policies.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default $name;
"@
    }
    
    Set-Content -Path $path -Value $content -Encoding utf8
    Write-Host "Populated $path"
}

# Populate categories
foreach ($n in $solutions) { Populate-Page "src\pages\Solutions\$n.jsx" $n "Solution" }
foreach ($n in $services) { Populate-Page "src\pages\Services\$n.jsx" $n "Service" }
foreach ($n in $products) { Populate-Page "src\pages\Products\$n.jsx" $n "Product" }
foreach ($n in $platforms) { Populate-Page "src\pages\Platforms\$n.jsx" $n "Platform" }
foreach ($n in $company) { Populate-Page "src\pages\Company\$n.jsx" $n "Company" }
foreach ($n in $legal) { Populate-Page "src\pages\Legal\$n.jsx" $n "Legal" }

Write-Host "All pages re-populated successfully with fixed titles and reduced font sizes."
