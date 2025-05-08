import { FaBook, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";

const FinancialAidOffice = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <section className="min-h-screen bg-gray-100 pt-16">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/aid.jpeg"
          alt="SouthPark University alumni at a networking event"
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
          <span className="text-emerald-400">Financial Aid</span>
        </div>
      </section>

      {/* Main Content */}
      <div className=" mx-auto w-full h-full py-12 sm:py-16 bg-white">
        <div className="">
          {/* Commitment Section */}
          <div className="flex flex-col mb-10 w-full md:flex-row bg-white px-6 sm:px-12 py-8 overflow-hidden animate__animated animate__slideInLeft">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/academ4.jpeg"
                alt="Students receiving support"
                className="w-full h-48 object-cover border-b-6 border-emerald-600"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                At South Park University, we are committed to making higher
                education accessible and affordable for all students. Our
                Financial Aid Office is here to guide you through every step of
                the process.
              </p>
              {isExpanded && (
                <div className="text-gray-600 border-t border-emerald-600 pt-4 text-base sm:text-lg mb-4 transition-max-height duration-500 ease-in-out">
                  <p>
                    South Park University is proud to be recognized as a top
                    institution for student engagement, with a reputation for
                    providing a vibrant, supportive academic environment. Many
                    of our students receive financial aid, and we are honored to
                    be recognized as one of the best value schools in the
                    region. Our focus is not just on rankings, but on ensuring
                    that each student has the resources and support necessary to
                    thrive academically and financially.
                  </p>
                </div>
              )}
              <button
                onClick={toggleContent}
                className="inline-block bg-emerald-600 text-white py-2 px-4 text-sm md:text-base hover:bg-emerald-700 transition duration-300"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Financial Aid Overview */}
          <div className="bg-emerald-50 px-6 sm:px-12 py-8  rounded-lg shadow-lg animate__animated animate__slideInRight">
            <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mb-4 flex items-center">
              <FaGraduationCap className="mr-2" />
              Financial Aid Overview
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Financial aid is essential to helping students fund their
              education. It can come in various forms, including scholarships,
              grants, and loans. At South Park University, we collaborate with
              various sources to provide you with a variety of financial
              assistance options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <FaMoneyBillWave className="text-emerald-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Scholarships
                </h3>
                <p className="text-gray-600 text-sm">
                  Funds that do not need to be repaid, awarded based on merit.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <FaMoneyBillWave className="text-emerald-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">Grants</h3>
                <p className="text-gray-600 text-sm">
                  Aid that does not need to be repaid, based on financial need.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <FaMoneyBillWave className="text-emerald-600 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">Loans</h3>
                <p className="text-gray-600 text-sm">
                  Borrowed funds repaid with interest after graduation.
                </p>
              </div>
            </div>
          </div>

          {/* Key Financial Aid Terms */}
          <div className="flex flex-col md:flex-row  bg-white px-6 sm:px-12 py-8 mb-6 overflow-hidden animate__animated animate__slideInLeft">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/aid.jpeg"
                alt="Financial planning guide"
                className="w-full h-48 object-cover border-b-6 border-emerald-600"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <div className="text-2xl sm:text-3xl flex flex-col items-center lg:flex-row gap-4 justify-start font-semibold text-emerald-600 mb-4">
                <div>
                  <FaBook className="mr-2 " />
                </div>
                <h2>Key Financial Aid Terms</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Financial aid at South Park University includes different types
                of support to help you fund your degree. Here are the main types
                you will encounter during your financial planning journey:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Scholarships:</strong> Awarded based on merit or
                  achievement, these funds do not need to be repaid.
                </li>
                <li>
                  <strong>Loans:</strong> Borrowed funds that need to be repaid
                  after graduation.
                </li>
                <li>
                  <strong>Grants:</strong> Funds awarded based on financial need
                  that do not require repayment.
                </li>
              </ul>
              <p className="text-gray-600 text-base sm:text-lg mt-6">
                To learn more about each of these options, please view our{" "}
                <a
                  href="/financial-planning-guide"
                  className="text-emerald-600 hover:underline"
                >
                  Financial Planning Guide
                </a>{" "}
                online for detailed explanations and helpful resources.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate__animated animate__fadeInUp">
            <a
              href="/financial-guide"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-6 text-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-lg animate__animated animate__pulse animate__delay-1s"
              aria-label="View SouthPark University Financial Planning Guide"
            >
              <FaBook className="text-xl" />
              <span>View Financial Planning Guide</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAidOffice;
