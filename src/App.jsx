import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

// Company
import Process from './pages/Company/Process';
import Testimonials from './pages/Company/Testimonials';
import Awards from './pages/Company/Awards';
import PrivacyPolicy from './pages/Company/PrivacyPolicy';
import TermsConditions from './pages/Company/TermsConditions';
import Careers from './pages/Company/Careers';
import LifeAtEdulinker from './pages/Company/LifeAtEdulinker';
import EmployeeSpeak from './pages/Company/EmployeeSpeak';
import Partners from './pages/Company/Partners';

// Services
import Services from './pages/Services/Services';
import Recruitment from './pages/Services/Recruitment';
import Payroll from './pages/Services/Payroll';
import Training from './pages/Services/Training';
import Consulting from './pages/Services/Consulting';
import Compliance from './pages/Services/Compliance';
import ContractStaffing from './pages/Services/ContractStaffing';

// Solutions
import Solutions from './pages/Solutions/Solutions';
import EnterpriseHiring from './pages/Solutions/EnterpriseHiring';
import StartupHiring from './pages/Solutions/StartupHiring';
import FastClosure from './pages/Solutions/FastClosure';
import ITHiring from './pages/Solutions/ITHiring';
import NonITHiring from './pages/Solutions/NonITHiring';
import ComplianceHR from './pages/Solutions/ComplianceHR';
import HRTransformation from './pages/Solutions/HRTransformation';
import WorkforcePlanning from './pages/Solutions/WorkforcePlanning';
import TalentManagement from './pages/Solutions/TalentManagement';

// Industries
import Industries from './pages/Industries/Industries';
import BFSI from './pages/Industries/BFSI';
import ITSoftware from './pages/Industries/ITSoftware';
import Healthcare from './pages/Industries/Healthcare';
import Education from './pages/Industries/Education';
import Manufacturing from './pages/Industries/Manufacturing';
import Retail from './pages/Industries/Retail';

// Products
import Products from './pages/Products/Products';
import RecruitmentPlatform from './pages/Products/RecruitmentPlatform';
import PayrollSoftware from './pages/Products/PayrollSoftware';
import HRMS from './pages/Products/HRMS';
import Attendance from './pages/Products/Attendance';
import LMS from './pages/Products/LMS';
import CourseManagement from './pages/Products/CourseManagement';
import Assessment from './pages/Products/Assessment';
import Certification from './pages/Products/Certification';

// Work
import Portfolio from './pages/Work/Portfolio';
import CaseStudies from './pages/Work/CaseStudies';
import SuccessStories from './pages/Work/SuccessStories';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />

            {/* Company */}
            <Route path="/process" element={<Process />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/life-at-edulinker" element={<LifeAtEdulinker />} />
            <Route path="/employee-speak" element={<EmployeeSpeak />} />
            <Route path="/partners" element={<Partners />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/recruitment" element={<Recruitment />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/compliance" element={<Compliance />} />
            <Route path="/services/contract-staffing" element={<ContractStaffing />} />

            {/* Solutions */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/enterprise-hiring" element={<EnterpriseHiring />} />
            <Route path="/solutions/startup-hiring" element={<StartupHiring />} />
            <Route path="/solutions/fast-closure" element={<FastClosure />} />
            <Route path="/solutions/it-hiring" element={<ITHiring />} />
            <Route path="/solutions/non-it-hiring" element={<NonITHiring />} />
            <Route path="/solutions/compliance-hr" element={<ComplianceHR />} />
            <Route path="/solutions/hr-transformation" element={<HRTransformation />} />
            <Route path="/solutions/workforce-planning" element={<WorkforcePlanning />} />
            <Route path="/solutions/talent-management" element={<TalentManagement />} />

            {/* Industries */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/bfsi" element={<BFSI />} />
            <Route path="/industries/it-software" element={<ITSoftware />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/retail" element={<Retail />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/recruitment-platform" element={<RecruitmentPlatform />} />
            <Route path="/products/payroll-software" element={<PayrollSoftware />} />
            <Route path="/products/hrms" element={<HRMS />} />
            <Route path="/products/attendance" element={<Attendance />} />
            <Route path="/products/lms" element={<LMS />} />
            <Route path="/products/course-management" element={<CourseManagement />} />
            <Route path="/products/assessment" element={<Assessment />} />
            <Route path="/products/certification" element={<Certification />} />

            {/* Work */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/success-stories" element={<SuccessStories />} />

          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
