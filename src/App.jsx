import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import Title from './Components/Titlle/Title';
import Choose from './Components/Choose/Choose';
import Perks from './Components/Perks/Perks';
import InfoBlock from './Components/InfoBlock/InfoBlock';
import BlogBlock from './Components/BlogBlock/BlogBlock';
import Footer from './Components/Footer/Footer';
import SectorGrid from './Components/SectorGrid/SectorGrid';

// Pages
// import CandidateGettingStarted from './pages/CandidateGettingStarted';
// import ExploreBySectors from './pages/ExploreBySectors'; // example page
import ITandRelated from './Pages/GridInfo/ITandRelated';
import Health from './Pages/GridInfo/Health';
import Transport from './Pages/GridInfo/Transport';
import ManagementServices from './Pages/GridInfo/ManagementServices';
import EnvironmentalSustainability from './Pages/GridInfo/EnvironmentalSustainability';
import Energy from './Pages/GridInfo/Energy';
import SafetySecurityandRisk from './Pages/GridInfo/SafetySecurityandRisk';
import BuildingandConstruction from './Pages/GridInfo/BuildingandConstruction';
import Materials from './Pages/GridInfo/Materials';
import FoodandAgriculture from './Pages/GridInfo/FoodandAgriculture';
import Engineering from './Pages/GridInfo/Engineering';
import DiversityandInclusion from './Pages/GridInfo/DiversityandInclusion';
import EducationandTraining from './Pages/GridInfo/EducationandTraining';
import FinanceandAccounting from './Pages/GridInfo/FinanceandAccounting';
import MarketingandAdvertising from './Pages/GridInfo/MarketingandAdvertising';
import LegalServices from './Pages/GridInfo/LegalServices';
import Chero from './Pages/DropDown/Candidate/Chero';
import CmpHero from './Pages/DropDown/Company/CmpHero';
import InsHero from './Pages/DropDown/Institute/InsHero';
import RefHero from './Pages/DropDown/Referals/RefHero';
// import WebsiteRegisterForm from './Pages/DropDown/Candidate/WebsiteRegiterForm';
import FAQHome from './Pages/DropDown/FAQ/FAQHome';
import AbtHome from './Pages/DropDown/AboutUs/AbtHome';
import PstHome from './Pages/DropDown/Posts/PstHome';
import OsHome from './Pages/DropDown/OutsourcingService/OsHome';
import RsHome from './Pages/DropDown/RecruitmentServices/RsHome';
import Careers from './Pages/DropDown/Careers/Careers';
import PpHome from './Pages/DropDown/PrivacyPolicy/PpHome';
import TCHome from './Pages/DropDown/T&C/TCHome';
import DpHome from './Pages/DropDown/Data Policy/DpHome';
import DisHome from './Pages/DropDown/Disclaimer/DisHome';
import FdHome from './Pages/DropDown/Feedback/FdHome';
import TsHome from './Pages/DropDown/Training Sites/TsHome';
import HpHome from './Pages/DropDown/Hiring Options/HpHome';
import InternHome from './Pages/DropDown/Internship/InternHome';
import AprenHome from './Pages/DropDown/Apprenticeship/AprenHome';
import UnEmpHome from './Pages/DropDown/Un-Employement/UnEmpHome';
import Trusted from './Components/TrustedBy/Trusted';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import StepOne from './Pages/DropDown/Candidate/websiteregistrationform/StepOne';
import StepTwo from './Pages/DropDown/Candidate/websiteregistrationform/StepTwo';
import StepThree from './Pages/DropDown/Candidate/websiteregistrationform/StepThree';
import StepFour from './Pages/DropDown/Candidate/websiteregistrationform/StepFour';
import StepFive from './Pages/DropDown/Candidate/websiteregistrationform/StepFive';
import StepSix from './Pages/DropDown/Candidate/websiteregistrationform/StepSix';
import StepSeven from './Pages/DropDown/Candidate/websiteregistrationform/StepSeven';
import StepEight from './Pages/DropDown/Candidate/websiteregistrationform/StepEight';
import StepNine from './Pages/DropDown/Candidate/websiteregistrationform/StepNine';




const HomePage = () => {
  return (
    <>
      <Hero />
      <Title />
      <Program />
      <Choose />
      <Trusted />
      <Perks />
      <GetInTouch />
      <InfoBlock />
      <BlogBlock />
      <SectorGrid />
      
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/explore-jobs" element={<ExploreJobs />} /> */}
        <Route path="/itandrelated" element={<ITandRelated />} />
        <Route path="/health" element={<Health />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/managementservices" element={<ManagementServices />} />
        <Route path="/environmentalsustainability" element={<EnvironmentalSustainability />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/safetysecurityandrisk" element={<SafetySecurityandRisk />} />
        <Route path="/buildingandconstruction" element={<BuildingandConstruction />} />
        <Route path="/materials" element={<Materials/>} />
        <Route path="/foodandagriculture" element={<FoodandAgriculture />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/diversityandinclusion" element={<DiversityandInclusion />} />
        <Route path="/educationandtraining" element={<EducationandTraining />} />
        <Route path="/financeandaccounting" element={<FinanceandAccounting />} />
        <Route path="/marketingandadvertising" element={<MarketingandAdvertising />} />
        <Route path="/legalservices" element={<LegalServices />} />
        <Route path="/candidate" element={<Chero />} />
        <Route path="/register" element={<StepOne />} />
        <Route path="/register/step-two" element={<StepTwo />} />
        <Route path="/register/step-three" element={<StepThree />} />
         <Route path="/register/step-four" element={<StepFour />} />
          <Route path="/register/step-five" element={<StepFive />} />
          <Route path="/register/step-six" element={<StepSix />} />
          <Route path="/register/step-seven" element={<StepSeven />} />
          <Route path="/register/step-eight" element={<StepEight />} />
            <Route path="/register/step-nine" element={<StepNine />} />
        <Route path="/company" element={<CmpHero />} />
        <Route path="/institute" element={<InsHero />} />
        <Route path="/referrals" element={<RefHero />} />
        <Route path="/faq" element={<FAQHome />} />
        <Route path="/about us" element={<AbtHome />} />
        <Route path="/posts" element={<PstHome />} />
        <Route path="/outsourcingservices" element={<OsHome />} />
        <Route path="/recruitmentservices" element={<RsHome />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacypolicy" element={<PpHome />} />
        <Route path="/termsandcondition" element={<TCHome />} />
        <Route path="/datapolicy" element={<DpHome />} />
        <Route path="/disclaimer" element={<DisHome />} />
        <Route path="/feedback" element={<FdHome />} />
        <Route path="/trainingsites" element={<TsHome />} />
        <Route path="/hiringoptions" element={<HpHome />} />
        <Route path="/guideforinternship" element={<InternHome/>} />
        <Route path="/guideforApprenticeship" element={<AprenHome />} />
        <Route path="/unemployement" element={<UnEmpHome />} />

        
        
      
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
