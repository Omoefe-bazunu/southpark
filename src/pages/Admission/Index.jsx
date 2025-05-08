import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import { useState } from "react";
import {
  FaGraduationCap,
  FaBook,
  FaGlobe,
  FaLaptop,
  FaUserGraduate,
  FaRedo,
  FaPassport,
  FaFlagUsa,
  FaEnvelope,
  FaCalendarAlt,
  FaUserShield,
} from "react-icons/fa"; // Icons for program formats

const Admissions = () => {
  const [openSections, setOpenSections] = useState({
    undergraduate: false,
    graduate: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="pt-16">
        {/* Hero Section with Image and Breadcrumb */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <LazyLoadImage
            src="/academ3.jpeg"
            alt="SouthPark University admissions office with students"
            effect="opacity"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/50 to-black/70"></div>
          <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
            <Link
              to="/"
              className="hover:text-emerald-400 transition duration-300"
              aria-label="Home Page"
            >
              Home
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-emerald-400">Admissions</span>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-5xl text-emerald-600">Start Here.</h1>
              <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
            </div>
            <div className="flex flex-col">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-gold-600 mb-2 rounded-full"></div>
              <p className="text-gray-600  border-emerald-400 text-lg animate__animated animate__fadeInUp animate__delay-1s">
                Ready to begin your educational journey at South Park
                University? Whether you’re a high school graduate, transferring
                from another institution, or returning to finish your degree,
                we’re here to support you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Your Degree. Your Journey Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="absolute inset-0">
            <img
              src="/bg3.jpg"
              alt="SouthPark University students learning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-600 opacity-90"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className=" mb-10">
              <div>
                <h1 className="text-5xl text-white">
                  {" "}
                  Your Degree. Your Journey
                </h1>
                <hr className="w-24 bg-emerald-600 text-white mt-4 mb-8" />
              </div>
            </div>

            {/* Undergraduate Admission */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                <img
                  src="/academics.jpeg"
                  alt="Undergraduate students at SouthPark University"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover border-b-6 border-white"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl  text-white mb-4">
                  Undergraduate Admission
                </h2>
                <p className="text-gray-200 text-base sm:text-lg mb-6">
                  Earn your bachelor’s degree in a way that works for you!
                  Whether you’re graduating from high school soon, transferring
                  from another institution, or seeking to complete your degree,
                  we have the resources and support to help you succeed.
                </p>
                <button
                  onClick={() => toggleSection("undergraduate")}
                  className="inline-block bg-gray-200 text-gray-800 py-2 px-6  hover:bg-gray-300 transition duration-300"
                  aria-expanded={openSections.undergraduate}
                  aria-controls="undergraduate-content"
                >
                  Read More
                </button>
                <div
                  id="undergraduate-content"
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openSections.undergraduate ? "max-h-[1200px]" : "max-h-0"
                  } mt-4`}
                >
                  <div className="p-4 bg-white text-gray-800 space-y-6 ">
                    <h4 className="text-lg font-serif text-gray-800">
                      Admission Options
                    </h4>
                    <p className="text-gray-600">
                      Everyone’s journey is unique. At South Park University, we
                      integrate faith with education, equipping students with
                      skills for success. Our programs combine a liberal arts
                      core with specialized courses.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <FaGraduationCap className="text-emerald-600 text-2xl" />
                        <p>On Campus: Traditional in-person learning.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaLaptop className="text-emerald-600 text-2xl" />
                        <p>Online & Hybrid: Flexible learning formats.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaUserGraduate className="text-emerald-600 text-2xl" />
                        <p>
                          Transfer: Seamless transition from another
                          institution.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaBook className="text-emerald-600 text-2xl" />
                        <p>
                          Dual Enrollment: Earn college credits while in high
                          school.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaRedo className="text-emerald-600 text-2xl" />
                        <p>Readmission: Return to complete your degree.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaPassport className="text-emerald-600 text-2xl" />
                        <p>International: Support for global students.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaFlagUsa className="text-emerald-600 text-2xl" />
                        <p>
                          Veteran: Dedicated resources for military veterans.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Link
                        to="/stageOne"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="Apply for undergraduate programs"
                      >
                        Apply
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="Request more information about undergraduate programs"
                      >
                        Request More Information
                      </Link>
                      <Link
                        to="/academics"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="View current course offerings for undergraduate programs"
                      >
                        Current Course Offerings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Graduate Programs */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                <img
                  src="/p2.jpg"
                  alt="Graduate students at SouthPark University"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover border-b-6 border-white"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl mb-4 text-white">
                  Graduate Programs
                </h2>
                <p className="text-gray-200 text-base sm:text-lg mb-6">
                  Continuing your education journey at South Park University
                  offers the tools and support to advance your career. Whether
                  you’re seeking a master’s degree or returning to academia, our
                  graduate programs foster academic excellence in a
                  Christ-centered environment.
                </p>
                <button
                  onClick={() => toggleSection("graduate")}
                  className="inline-block bg-gray-200 text-gray-800 py-2 px-6  hover:bg-gray-300 transition duration-300"
                  aria-expanded={openSections.graduate}
                  aria-controls="graduate-content"
                >
                  Read More
                </button>
                <div
                  id="graduate-content"
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openSections.graduate ? "max-h-[800px]" : "max-h-0"
                  } mt-4`}
                >
                  <div className="p-4 bg-white text-gray-800 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <FaGraduationCap className="text-emerald-600 text-2xl" />
                        <p>
                          Graduate: Advanced degrees for career advancement.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaPassport className="text-emerald-600 text-2xl" />
                        <p>International: Support for global students.</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaFlagUsa className="text-emerald-600 text-2xl" />
                        <p>
                          Veteran: Dedicated resources for military veterans.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Link
                        to="/stageOne"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="Apply for graduate programs"
                      >
                        Apply
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="Request more information about graduate programs"
                      >
                        Request More Information
                      </Link>
                      <Link
                        to="/academics"
                        className="inline-block bg-emerald-600 text-white py-2 px-6 font-serif hover:bg-emerald-700 transition duration-300 hover:scale-105 transform"
                        aria-label="View current course offerings for graduate programs"
                      >
                        Current Course Offerings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Starting the Application Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div>
              <h1 className="text-5xl text-emerald-600">
                {" "}
                Starting the Application Process
              </h1>
              <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-1s">
              We’re excited that you’re considering South Park University as the
              next step in your academic journey! Getting started is easy, and
              we look forward to being part of the path you will create.
            </p>
            <Link
              to="/stageOne"
              className="inline-block bg-emerald-600 text-white py-4 px-10 text-lg font-serif shadow-xl hover:bg-emerald-700 transition duration-300 hover:scale-105 transform animate__animated animate__pulse animate__delay-2s"
              aria-label="Apply to SouthPark University"
            >
              Apply Now
            </Link>
          </div>
        </section>

        {/* Visit South Park University Section */}
        <section className="pb-8 sm:pb-12 md:pb-16 bg-emerald-600 text-white">
          <div className="relative min-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] w-full mb-10">
            <img
              src="/hero2.jpg"
              alt="SouthPark University campus during a visit event"
              className="w-full h-72 object-cover"
            />
            <div className="w-24 h-24 sm:w-36 p-2 lg:p-4 flex sm:h-36 rounded-full bg-emerald-600 absolute left-1/2 transform -translate-x-1/2 -bottom-12 sm:-bottom-18">
              <div className="h-full w-full bg-white rounded-full bg-cover p-4 lg:p-6 bg-center bg-no-repeat">
                <img
                  src="/uniiconP.png"
                  alt="SouthPark University Structure"
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2">
              Visit Us
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-white mx-auto mb-4 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 animate__animated animate__fadeIn animate__delay-1s">
              Your Journey Begins Here. A visit to South Park University is the
              first step in discovering why so many students call us “home.” We
              offer a variety of visit events to fit your schedule, where you’ll
              receive a warm and welcoming introduction from our Admissions
              Team. Come see for yourself what makes our campus special.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-emerald-600 py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg  shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-105 transform animate__animated animate__pulse animate__delay-2s"
              aria-label="Schedule a visit to SouthPark University"
            >
              Schedule a Visit
            </Link>
          </div>
        </section>

        {/* Alumni Spotlight Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-5xl text-emerald-600">Alumni Spotlight</h1>
              <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
            </div>
            <p className="text-gray-600  text-lg mb-12 animate__animated animate__fadeIn animate__delay-1s">
              Get inspired by the journeys of our graduates. Below are some of
              our alumni who have gone on to make an impact in their fields:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Alumni 1: James Atulongo */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp ">
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="James Atulongo, SouthPark University alumnus"
                  effect="opacity"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif text-gray-800 mb-1">
                  James Atulongo
                </h3>
                <p className="text-gray-600 mb-1">
                  Bachelor of Science in Cybersecurity
                </p>
                <p className="text-gray-500">Class of 2022</p>
              </div>

              {/* Alumni 2: Placeholder */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s ">
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1522075469751-6603ffe7151e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="SouthPark University alumnus"
                  effect="opacity"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif text-gray-800 mb-1">
                  Emily Carter
                </h3>
                <p className="text-gray-600 mb-1">
                  Master of Business Administration
                </p>
                <p className="text-gray-500">Class of 2023</p>
              </div>

              {/* Alumni 3: Placeholder */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s ">
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="SouthPark University alumnus"
                  effect="opacity"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif text-gray-800 mb-1">
                  Sarah Mitchell
                </h3>
                <p className="text-gray-600 mb-1">
                  Bachelor of Arts in Education
                </p>
                <p className="text-gray-500">Class of 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speak with a Counselor Section */}
        <section
          className="py-12 sm:py-16 bg-white bg-cover bg-center bg-no-repeat relative text-center"
          style={{ backgroundImage: `url('/counsel.jpeg')` }}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-50 z-0"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col justify-center items-center mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white">
                Speak with a Counselor
              </h1>
              <div className="w-16 h-1 bg-white mt-4 mx-auto"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
              Have questions about the admissions process? Our team of
              experienced admission counselors is here to help. Reach out to us
              for personalized guidance to ensure your application process goes
              smoothly.
            </p>
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
        </section>
      </main>
    </div>
  );
};

export default Admissions;
