import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Icons for subsections
import AcademicDivisions from "../AcademicDivisions";
import {
  FaGlobe,
  FaSchool,
  FaTrophy,
  FaBriefcase,
  FaBookOpen,
  FaLightbulb,
} from "react-icons/fa";

const Academics = () => {
  const [openSections, setOpenSections] = useState({
    goldCore: false,
    academicResources: false,
  });
  const [selectedDegreeProgram, setSelectedDegreeProgram] = useState("");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleDegreeProgramChange = (e) => {
    setSelectedDegreeProgram(e.target.value);
  };

  return (
    <main className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/aca.jpeg"
          alt="SouthPark University students in a classroom setting"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Academics</span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Academics at South Park
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            At South Park University, we are dedicated to providing you with an
            academically rigorous experience that equips you with the knowledge,
            intellectual skills, and critical thinking necessary for success.
            Our students are driven by innovation, engaged in dynamic learning,
            and passionate about bringing positive change to their communities.
          </p>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            With a diverse range of programs across multiple disciplines, we
            help students discover their calling and prepare them for their
            professional futures. Whether you're looking to pursue a bachelor’s,
            master’s, doctoral degree, or certification program, South Park
            University is committed to helping you grow academically,
            spiritually, and personally.
          </p>
          <div className="relative">
            <LazyLoadImage
              src="/academ.jpeg"
              alt="SouthPark University students collaborating on a project"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Find Your Degree Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl ">Find Your Degree</h1>
            <hr className="w-24 bg-emerald-600  mt-4 mb-8" />
          </div>

          {/* Degree Program Selection Dropdown */}
          <div className="mb-8">
            <label
              htmlFor="degreeProgram"
              className="block text-lg font-semibold mb-2"
            >
              Select a Degree Program
            </label>
            <select
              id="degreeProgram"
              value={selectedDegreeProgram}
              onChange={handleDegreeProgramChange}
              className="w-full md:w-1/2 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
              aria-label="Select a Degree Program to view available courses"
            >
              <option value="">-- Select a Degree Program --</option>
              <option value="undergraduate">Undergraduate Programs</option>
              <option value="masters">Master’s Programs</option>
              <option value="phd">PhD Programs</option>
              <option value="certificates">
                Professional Certificates & Diplomas
              </option>
              <option value="mba">MBA Programs</option>
            </select>
          </div>

          {/* Academic Divisions (Dynamic based on selection) */}
          <AcademicDivisions degreeProgram={selectedDegreeProgram} />

          <div className="relative mt-8">
            <LazyLoadImage
              src="/academics.jpeg"
              alt="SouthPark University students in various academic programs"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Academic Foundations & Resources Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Academic Foundations & Resources
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          {/* Gold Core Curriculum Collapsible */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("goldCore")}
              className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-t-lg shadow-md hover:bg-gray-100 transition duration-300 flex justify-between items-center"
              aria-expanded={openSections.goldCore}
              aria-controls="gold-core-content"
            >
              <span>Gold Core Curriculum</span>
              <span>{openSections.goldCore ? "−" : "+"}</span>
            </button>
            <div
              id="gold-core-content"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openSections.goldCore ? "max-h-[200px]" : "max-h-0"}`}
            >
              <div className="p-4 bg-white text-gray-800">
                <p>
                  A strong foundation integrating Christian values and liberal
                  arts, preparing ethical, productive global citizens.
                </p>
                <Link
                  to="/gold-core"
                  className="text-emerald-600 hover:underline mt-2 hidden"
                  aria-label="Learn more about Gold Core Curriculum"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Academic Resources Collapsible */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("academicResources")}
              className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-t-lg shadow-md hover:bg-gray-100 transition duration-300 flex justify-between items-center"
              aria-expanded={openSections.academicResources}
              aria-controls="academic-resources-content"
            >
              <span>Academic Resources</span>
              <span>{openSections.academicResources ? "−" : "+"}</span>
            </button>
            <div
              id="academic-resources-content"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openSections.academicResources ? "max-h-[600px]" : "max-h-0"}`}
            >
              <div className="p-4 bg-white text-gray-800 space-y-4">
                <div className="flex items-center space-x-4">
                  <FaGlobe className="text-emerald-600 text-2xl" />
                  <p>
                    Center for Global Engagement: Study abroad and international
                    learning opportunities.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaLightbulb className="text-emerald-600 text-2xl" />
                  <p>
                    Innovation and Digital Learning: Fostering innovation and
                    digital literacy.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaSchool className="text-emerald-600 text-2xl" />
                  <p>
                    Dual Enrollment Scholars Program: Earn college credits as a
                    high school student.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaTrophy className="text-emerald-600 text-2xl" />
                  <p>
                    Honors Program: A rigorous experience for outstanding
                    students.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaBriefcase className="text-emerald-600 text-2xl" />
                  <p>
                    Center for Career Development: Personalized career advice
                    and internships.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaBookOpen className="text-emerald-600 text-2xl" />
                  <p>
                    Thrift Library: Comprehensive resources for academic
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Admissions */}
          <div className="text-center mt-12 animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Have Questions?
            </h3>
            <a
              href="mailto:admissions@southparkuni.com?subject=Inquiry%20About%20SouthPark%20University%20Admissions"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-8 fontMuch text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform"
              aria-label="Email the SouthPark University Admissions Team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-xl" />
              <span>Email Admissions Team</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
