import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Loading Component
const Loading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent"></div>
  </div>
);

// Core Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Company/About'));
const VisionMission = lazy(() => import('./pages/Company/VisionMission'));
const TechAI = lazy(() => import('./pages/Company/TechAI'));
const Careers = lazy(() => import('./pages/Company/Careers'));

// Solutions
const AIEduApps = lazy(() => import('./pages/Solutions/AIEduApps'));
const AIEduWeb = lazy(() => import('./pages/Solutions/AIEduWeb'));
const AILMS = lazy(() => import('./pages/Solutions/AILMS'));
const AISMS = lazy(() => import('./pages/Solutions/AISMS'));
const SaaS_SMS = lazy(() => import('./pages/Solutions/SaaS_SMS'));
const SchoolsERP = lazy(() => import('./pages/Solutions/SchoolsERP'));
const TeacherSolutions = lazy(() => import('./pages/Solutions/TeacherSolutions'));
const AcademySolutions = lazy(() => import('./pages/Solutions/AcademySolutions'));
const AIChatbotSolutions = lazy(() => import('./pages/Solutions/AIChatbotSolutions'));
const TestingSoftware = lazy(() => import('./pages/Solutions/TestingSoftware'));

// Services
const AIAppDev = lazy(() => import('./pages/Services/AIAppDev'));
const WebDev = lazy(() => import('./pages/Services/WebDev'));
const CustomLMSDev = lazy(() => import('./pages/Services/CustomLMSDev'));
const SaaSPlatformDev = lazy(() => import('./pages/Services/SaaSPlatformDev'));
const AIChatbotDev = lazy(() => import('./pages/Services/AIChatbotDev'));
const AIAutomation = lazy(() => import('./pages/Services/AIAutomation'));
const DigitalMarketing = lazy(() => import('./pages/Services/DigitalMarketing'));
const DesignServices = lazy(() => import('./pages/Services/DesignServices'));

// Products - School Management
const MainSMS = lazy(() => import('./pages/Products/MainSMS'));
const AdmissionCRM = lazy(() => import('./pages/Products/AdmissionCRM'));
const FeeAccounting = lazy(() => import('./pages/Products/FeeAccounting'));
const AttendanceSystem = lazy(() => import('./pages/Products/AttendanceSystem'));
const ExamResult = lazy(() => import('./pages/Products/ExamResult'));
const ParentApp = lazy(() => import('./pages/Products/ParentApp'));

// Products - LMS
const MainLMS = lazy(() => import('./pages/Products/MainLMS'));
const CourseMS = lazy(() => import('./pages/Products/CourseMS'));
const LiveClass = lazy(() => import('./pages/Products/LiveClass'));
const RecordedCourse = lazy(() => import('./pages/Products/RecordedCourse'));
const AssignmentSystem = lazy(() => import('./pages/Products/AssignmentSystem'));
const LearningAnalytics = lazy(() => import('./pages/Products/LearningAnalytics'));

// Products - Institutional Platforms
const CourseSelling = lazy(() => import('./pages/Products/CourseSelling'));
const SubscriptionLearning = lazy(() => import('./pages/Products/SubscriptionLearning'));
const CoachingApp = lazy(() => import('./pages/Products/CoachingApp'));
const InstitutionApp = lazy(() => import('./pages/Products/InstitutionApp'));
const InstitutionPortal = lazy(() => import('./pages/Products/InstitutionPortal'));
const SaaSPlatform = lazy(() => import('./pages/Products/SaaSPlatform'));
const AIEdApps = lazy(() => import('./pages/Products/AIEdApps'));
const AIChatbotProduct = lazy(() => import('./pages/Products/AIChatbotProduct'));

// Ready-made Platforms
const LearningApp_Byjus = lazy(() => import('./pages/Platforms/LearningApp_Byjus'));
const ExamPlatform_Unacademy = lazy(() => import('./pages/Platforms/ExamPlatform_Unacademy'));
const TeacherApp = lazy(() => import('./pages/Platforms/TeacherApp'));
const OnlineAcademy = lazy(() => import('./pages/Platforms/OnlineAcademy'));

// System
const Contact = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/Legal/TermsOfService'));
const RefundPolicy = lazy(() => import('./pages/Legal/RefundPolicy'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Core */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/tech-ai" element={<TechAI />} />
              <Route path="/careers" element={<Careers />} />

              {/* Solutions */}
              <Route path="/solutions/ai-apps" element={<AIEduApps />} />
              <Route path="/solutions/ai-web" element={<AIEduWeb />} />
              <Route path="/solutions/ai-lms" element={<AILMS />} />
              <Route path="/solutions/ai-sms" element={<AISMS />} />
              <Route path="/solutions/saas-sms" element={<SaaS_SMS />} />
              <Route path="/solutions/erp" element={<SchoolsERP />} />
              <Route path="/solutions/teachers" element={<TeacherSolutions />} />
              <Route path="/solutions/academies" element={<AcademySolutions />} />
              <Route path="/solutions/chatbots" element={<AIChatbotSolutions />} />
              <Route path="/solutions/testing" element={<TestingSoftware />} />

              {/* Services */}
              <Route path="/services/app-dev" element={<AIAppDev />} />
              <Route path="/services/web-dev" element={<WebDev />} />
              <Route path="/services/lms-sms-dev" element={<CustomLMSDev />} />
              <Route path="/services/saas-dev" element={<SaaSPlatformDev />} />
              <Route path="/services/chatbot-dev" element={<AIChatbotDev />} />
              <Route path="/services/automation" element={<AIAutomation />} />
              <Route path="/services/marketing" element={<DigitalMarketing />} />
              <Route path="/services/design" element={<DesignServices />} />

              {/* Products - SMS */}
              <Route path="/products/school-ms" element={<MainSMS />} />
              <Route path="/products/admission-crm" element={<AdmissionCRM />} />
              <Route path="/products/fee-accounting" element={<FeeAccounting />} />
              <Route path="/products/attendance-system" element={<AttendanceSystem />} />
              <Route path="/products/exam-result" element={<ExamResult />} />
              <Route path="/products/parent-app" element={<ParentApp />} />

              {/* Products - LMS */}
              <Route path="/products/lms" element={<MainLMS />} />
              <Route path="/products/course-ms" element={<CourseMS />} />
              <Route path="/products/live-class" element={<LiveClass />} />
              <Route path="/products/recorded-course" element={<RecordedCourse />} />
              <Route path="/products/assignment-testing" element={<AssignmentSystem />} />
              <Route path="/products/analytics" element={<LearningAnalytics />} />

              {/* Products - Platforms */}
              <Route path="/products/course-selling" element={<CourseSelling />} />
              <Route path="/products/subscription-learning" element={<SubscriptionLearning />} />
              <Route path="/products/coaching-app" element={<CoachingApp />} />
              <Route path="/products/institution-app" element={<InstitutionApp />} />
              <Route path="/products/institution-portal" element={<InstitutionPortal />} />
              <Route path="/products/saas-platform" element={<SaaSPlatform />} />
              <Route path="/products/ai-education-apps" element={<AIEdApps />} />
              <Route path="/products/ai-chatbot-product" element={<AIChatbotProduct />} />

              {/* Ready-made Platforms */}
              <Route path="/platforms/learning-app" element={<LearningApp_Byjus />} />
              <Route path="/platforms/exam-platform" element={<ExamPlatform_Unacademy />} />
              <Route path="/platforms/teacher-app" element={<TeacherApp />} />
              <Route path="/platforms/online-academy" element={<OnlineAcademy />} />

              {/* System */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/refund" element={<RefundPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
