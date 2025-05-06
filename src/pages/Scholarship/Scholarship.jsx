import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaGraduationCap,
  FaGlobe,
  FaCheckCircle,
  FaPlane,
  FaCross,
  FaExclamationTriangle,
  FaBook,
} from "react-icons/fa";

const FullRideScholarship = () => {
  const [openSections, setOpenSections] = useState({
    scholarshipCovers: false,
    visaSupport: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="min-h-screen bg-white pt-16">
      {/* Hero Section with Background Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="SouthPark University athletes competing on the field"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Scholarship</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto  pt-16 sm:pt-20">
        <div className="space-y-16">
          {/* Introduction Section */}

          <div className="bg-white px-6 sm:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="text-emerald-600">
                  <div className="text-3xl sm:text-4xl md:text-5xl animate__animated animate__fadeInDown flex items-center">
                    <FaGraduationCap className="mr-3 text-5xl" />
                    <p className="border-l-2 ml-4 border-emerald-600 pl-4">
                      Full-Ride International Scholarship
                    </p>
                  </div>
                  <p className="text-xl sm:text-2xl italic mt-3 animate__animated animate__fadeInUp">
                    Study Abroad for Free – No Exams. No Fees. No Barriers.
                  </p>
                </div>
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mt-4">
                  At SOUTH PARK UNIVERSITY, we believe every brilliant mind
                  deserves a chance—regardless of nationality, background, or
                  financial status. That’s why we’re offering one of the most
                  generous and accessible full-ride scholarships available
                  anywhere in the world.
                </p>
              </div>
              <div className="md:w-1/2 flex w-full">
                <img
                  src="/bg4.jpg"
                  alt="Students celebrating scholarship"
                  className="w-full h-64 sm:h-80 object-cover rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Open to All Students Section */}
          <div className="flex flex-col md:flex-row items-center bg-emerald-600 p-8 sm:p-12 animate__animated animate__slideInRight">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/bg3.jpg"
                alt="Global students"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-3xl sm:text-4xl text-white mb-4 flex items-center">
                <FaGlobe className=" text-3xl " />
                <p className="border-l-2 ml-4 border-white pl-4">
                  Open to All Students, Everywhere
                </p>
              </div>
              <p className="text-white text-lg sm:text-xl leading-relaxed">
                Whether you're pursuing an Undergraduate, Master’s, or PhD
                degree, this scholarship welcomes students of all nationalities,
                educational statuses, and walks of life. SOUTH PARK UNIVERSITY
                opens its doors with a commitment to fairness and opportunity.
              </p>
            </div>
          </div>

          {/* What This Scholarship Covers Section */}
          <div className="bg-white px-8 sm:px-12 py-2 animate__animated animate__slideInLeft">
            <div className="text-3xl sm:text-4xl text-emerald-700 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-3xl" />
              <p className="border-l-2 ml-4 border-emerald-600 pl-4">
                What This Scholarship Covers
              </p>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl mb-4 leading-relaxed">
              This full-ride scholarship eliminates financial barriers, letting
              you focus on your studies.
            </p>
            <button
              onClick={() => toggleSection("scholarshipCovers")}
              className="inline-block bg-emerald-600 text-white py-2 px-6 text-base rounded hover:bg-emerald-700 transition duration-300 mb-4 animate__animated animate__pulse"
              aria-expanded={openSections.scholarshipCovers}
              aria-controls="scholarship-covers-content"
            >
              {openSections.scholarshipCovers ? "Read Less" : "Read More"}
            </button>
            <div
              id="scholarship-covers-content"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSections.scholarshipCovers ? "max-h-[1200px]" : "max-h-0"
              }`}
            >
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">100% Full Tuition</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    Free On-Campus Accommodation
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    Textbooks & Learning Materials
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    Monthly Living Stipend
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    Full Visa Processing Support & Travel Expenses Covered
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    No English Tests or Standardized Exams Required (No TOEFL,
                    IELTS, GMAT, or GRE)
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                  <span className="font-medium text-lg">
                    No Application Fee – Completely Free to Apply
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visa Guidance & Travel Support Section */}
          <div className="flex flex-col md:flex-row items-center bg-emerald-100 p-6 sm:p-8 rounded-lg animate__animated animate__slideInRight">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/bg3.jpg"
                alt="Visa support"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-3xl sm:text-4xl text-emerald-700 mb-4 flex items-center">
                <FaPlane className="mr-2 text-3xl" />

                <p className="border-l-2 ml-4 border-emerald-600 pl-4">
                  Visa Guidance & Travel Support
                </p>
              </div>
              <p className="text-gray-700 text-lg sm:text-xl mb-4 leading-relaxed">
                Once awarded, SOUTH PARK UNIVERSITY handles your travel
                arrangements seamlessly.
              </p>
              <button
                onClick={() => toggleSection("visaSupport")}
                className="inline-block bg-emerald-600 text-white py-2 px-6 text-base rounded hover:bg-emerald-700 transition duration-300 mb-4 animate__animated animate__pulse"
                aria-expanded={openSections.visaSupport}
                aria-controls="visa-support-content"
              >
                {openSections.visaSupport ? "Read Less" : "Read More"}
              </button>
              <div
                id="visa-support-content"
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSections.visaSupport ? "max-h-[1200px]" : "max-h-0"
                }`}
              >
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                    <span className="font-medium text-lg">
                      Personalized visa guidance to navigate the process with
                      ease
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                    <span className="font-medium text-lg">
                      Full coverage of visa fees and travel costs for safe
                      arrival
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mr-3 text-xl" />
                    <span className="font-medium text-lg">
                      Dedicated support officers for documents, appointments,
                      and planning
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg sm:text-xl mt-4 leading-relaxed">
                  We ensure your focus stays on learning—leaving the logistics
                  to us.
                </p>
              </div>
            </div>
          </div>

          {/* Faith-Based Section */}
          <div className="bg-white px-8 sm:px-12 py-2 animate__animated animate__slideInLeft">
            <div className="text-3xl sm:text-4xl  text-emerald-700 mb-4 flex items-center">
              <FaCross className="mr-2 text-3xl" />

              <p className="border-l-2 ml-4 border-emerald-600 pl-4">
                Faith-Based, But Open to All
              </p>
            </div>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              SOUTH PARK UNIVERSITY is a proud faith-based Christian institution
              rooted in compassion, integrity, and academic excellence. Yet,
              there’s no religious requirement to apply—selection is based
              purely on merit and potential, free from discrimination.
            </p>
          </div>

          {/* Apply Now Section */}
          <div className="text-center bg-emerald-600 p-8 sm:p-10 animate__animated animate__fadeInUp">
            <h2 className="text-3xl sm:text-4xl text-white mb-4 flex items-center justify-center">
              <FaExclamationTriangle className="mr-2 text-3xl" />
              Limited Slots Available – Apply Now!
            </h2>
            <p className="text-white text-lg sm:text-xl mb-4 leading-relaxed">
              Thousands will apply, but only a select few will secure a
              full-ride scholarship this cycle. Act fast!
            </p>
            <p className="text-white text-lg sm:text-xl mb-4 flex items-center justify-center">
              <FaCheckCircle className="mr-2 text-white text-xl" />
              No exams. No fees. No limits—just opportunity.
            </p>
            <p className="text-white text-lg sm:text-xl mb-6 flex items-center justify-center">
              <FaCheckCircle className="mr-2 text-white text-xl" />
              One application could transform your future.
            </p>
            <a
              href="/stageOne"
              className="inline-flex items-center space-x-3 bg-emerald-700 text-white py-4 px-8 text-lg hover:bg-emerald-800 transition duration-300 shadow-md animate__animated animate__pulse animate__delay-1s"
              aria-label="Apply for SOUTH PARK UNIVERSITY Full-Ride International Scholarship"
            >
              <span>
                <strong>Apply Now </strong>– It’s 100% Free
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullRideScholarship;
