import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/AboutUs/Index";
import ContactUs from "./pages/ContactUs/Index";
import CampusLife from "./pages/CampusLife/Index";

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/campus" element={<CampusLife />} />
        {/* Other routes */}
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);
export default App;
