import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* Other routes */}
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);
export default App;
