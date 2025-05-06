import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Index";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/AboutUs/Index";
import ContactUs from "./pages/ContactUs/Index";
import CampusLife from "./pages/CampusLife/Index";
import Athletics from "./pages/Athletic/Index";
import Alumni from "./pages/Alumni/Index";
import Academics from "./pages/Academics/Index";
import Admissions from "./pages/Admission/Index";
import GiveToSouthPark from "./pages/Give/Index";
import FinancialAidOffice from "./pages/FinancialAid/Index";
import FullRideScholarship from "./pages/Scholarship/Scholarship";
import FAQ from "./pages/FAQs";
import Stage1Application from "./pages/StageOne/Index";
import Stage2Application from "./pages/StageTwo/Index";
import Dashboard from "./pages/Dashboard/Index";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/campus" element={<CampusLife />} />
        <Route path="/athletics" element={<Athletics />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/give" element={<GiveToSouthPark />} />
        <Route path="/aid" element={<FinancialAidOffice />} />
        <Route path="/scholarship" element={<FullRideScholarship />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/stageOne" element={<Stage1Application />} />
        <Route path="/stageTwo" element={<Stage2Application />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
    <Footer />
    <ToastContainer position="top-center" autoClose={3000} />
  </Router>
);

export default App;
