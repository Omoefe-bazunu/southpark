import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaDonate,
  FaBuilding,
  FaGift,
} from "react-icons/fa";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaHome,
  FaHandsHelping,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

const GiveToSouthPark = () => {
  const [openSections, setOpenSections] = useState({
    waysToGive: false,
    howYourGiftHelps: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-16">
      {/* Hero Section with Background Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/give1.jpeg"
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
          <span className="text-emerald-400">Giving</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full mx-auto bg-white pt-12 sm:pt-16">
        <div className="">
          {/* Your Generous Support Section */}
          <div className="flex flex-col md:flex-row items-center bg-white px-6 sm:px-12 py-8 shadow-lg overflow-hidden animate__animated animate__slideInLeft">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/give1.jpeg"
                alt="Supporting students"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-2xl sm:text-3xl text-emerald-600 mb-4 flex items-center">
                <FaGift className="mr-2" />
                Your Generous Support
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Your generous support helps us fulfill our mission to provide a
                transformative education to students from all walks of life. As
                we continue to build on our legacy of academic excellence, your
                contribution plays a vital role in shaping the future of South
                Park University.
              </p>
            </div>
          </div>

          {/* Ways to Give Section */}
          <div className="bg-emerald-600 px-6 sm:px-12 py-8 shadow-lg animate__animated animate__slideInRight">
            <h2 className="text-2xl sm:text-3xl  text-white mb-4 flex items-center">
              <FaDonate className="mr-2" />
              Ways to Give
            </h2>
            <p className="text-white text-base sm:text-lg mb-4">
              At South Park University, we provide various giving opportunities
              to support our students, programs, and campus. Every gift,
              regardless of size, makes a lasting impact.
            </p>
            <button
              onClick={() => toggleSection("waysToGive")}
              className="inline-block bg-white text-emerald-600 hover:text-white py-2 px-4 text-sm md:text-base rounded hover:bg-emerald-700 transition duration-300 mb-4"
              aria-expanded={openSections.waysToGive}
              aria-controls="ways-to-give-content"
            >
              {openSections.waysToGive ? "Read Less" : "Read More"}
            </button>
            <div
              id="ways-to-give-content"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSections.waysToGive ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div
                id="ways-to-give-content"
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openSections.waysToGive ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                <ul className="space-y-4 text-white">
                  <li className="flex items-start">
                    <FaMoneyBillWave className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Gifts of Cash:</strong> The simplest way to
                      contribute is through a direct monetary donation. Your
                      gift allows South Park University to support immediate
                      needs such as scholarships, faculty development, and
                      campus facilities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Gifts of Securities:</strong> A gift of stocks or
                      bonds can have tax benefits and may be a smart way to make
                      a meaningful donation while reducing your capital gains
                      tax liability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaHome className="text-white mr-2 text-xl" />
                    <span>
                      <strong>
                        Gifts of Real Estate and Personal Property:
                      </strong>{" "}
                      Consider donating property or personal items that can be
                      sold to fund specific initiatives, programs, or
                      scholarships that reflect your interests or values.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaHandsHelping className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Matching Gifts:</strong> Many employers offer
                      matching gift programs. This means your gift could be
                      doubled or even tripled with the support of your employer.
                      Check with your HR department to find out if they offer
                      this option.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCalendarAlt className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Commitment of Intent to Make a Gift:</strong> If
                      you plan to make a gift in the future but wish to inform
                      the university now, a commitment of intent allows us to
                      plan accordingly. Whether through a will or other estate
                      planning options, your future gift will have a profound
                      impact.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaHeart className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Memorials and Tributes:</strong> Honor a loved one
                      by making a gift in their memory or in celebration of
                      their life. Tribute gifts provide lasting recognition of
                      those who have made a difference in your life.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaGift className="text-white mr-2 text-xl" />
                    <span>
                      <strong>Planned Gifts:</strong> Planned giving allows you
                      to make a significant contribution to South Park
                      University while planning for your future. There are
                      numerous options, including bequests, charitable gift
                      annuities, and retirement plan designations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How Your Gift Helps Section */}
          <div className="bg-emerald-600 px-6 sm:px-12 py-8 border-t-6 border-white animate__animated animate__slideInLeft">
            <h2 className="text-2xl sm:text-3xl text-white mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              How Your Gift Helps
            </h2>
            <p className="text-white text-base sm:text-lg mb-4">
              Your contributions to South Park University support a variety of
              initiatives that benefit our students and campus.
            </p>
            <button
              onClick={() => toggleSection("howYourGiftHelps")}
              className="inline-block bg-white text-emerald-600 hover:text-white py-2 px-4 text-sm md:text-base rounded hover:bg-emerald-700 transition duration-300 mb-4"
              aria-expanded={openSections.howYourGiftHelps}
              aria-controls="how-your-gift-helps-content"
            >
              {openSections.howYourGiftHelps ? "Read Less" : "Read More"}
            </button>
            <div
              id="how-your-gift-helps-content"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSections.howYourGiftHelps ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Scholarships:</strong> Helping deserving students
                    achieve their educational goals.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Student Programs:</strong> Supporting
                    extracurricular activities, academic clubs, and leadership
                    development programs.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Campus Facilities:</strong> Maintaining and
                    upgrading our facilities, ensuring a state-of-the-art
                    learning environment.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Athletics:</strong> Funding equipment, training, and
                    travel for our student-athletes.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Faculty Development:</strong> Supporting
                    professional growth for our faculty members to ensure
                    high-quality education.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaGift className="text-emerald-600 text-3xl mb-2" />
                  <p>
                    <strong>Endowment Fund:</strong> Securing long-term
                    sustainability for the university’s future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Make a Gift Online Section */}
          <div className="flex flex-col md:flex-row items-center bg-white px-6 sm:px-12 py-8 shadow-lg overflow-hidden animate__animated animate__slideInRight">
            <div className="md:w-1/3 mb-6 md:mb-0 flex w-full">
              <img
                src="/aid.jpeg"
                alt="Online donation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-6 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl text-emerald-600 mb-4 flex items-center justify-center md:justify-start">
                <FaDonate className="mr-2" />
                Make a Gift Online
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Your donation can be made easily online via our secure payment
                portal. Every gift, no matter the size, has a direct impact on
                our students and campus.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-6 text-lg hover:bg-emerald-700 transition duration-300 shadow-lg animate__animated animate__pulse animate__delay-1s"
                aria-label="Make a gift to SouthPark University"
              >
                <FaDonate className="text-xl" />
                <span>Make a Gift Now</span>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="bg-emerald-50 hidden px-6 sm:px-12 pt-8 pb-16 animate__animated animate__fadeInUp">
            <h2 className="text-2xl sm:text-3xl text-emerald-600 mb-4 flex items-center">
              <FaEnvelope className="mr-2" />
              Contact Us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              For more information about giving to South Park University or to
              discuss how your donation can best be used, please contact:
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2 text-emerald-600" />
                <span>
                  <strong>John Smith</strong> - Senior Director of University
                  Relations
                </span>
              </p>
              <p className="flex items-center text-gray-700">
                <FaPhone className="mr-2 text-emerald-600" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:jsmith@southpark.edu"
                    className="text-emerald-600 hover:underline"
                  >
                    jsmith@southpark.edu
                  </a>
                </span>
              </p>
              <p className="flex items-center text-gray-700">
                <FaPhone className="mr-2 text-emerald-600" />
                <span>Phone: (123) 456-7890</span>
              </p>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mt-6">
              Thank you for supporting South Park University. Together, we are
              building a brighter future for our students and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveToSouthPark;
