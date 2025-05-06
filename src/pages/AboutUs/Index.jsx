import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import { FaBook, FaCross, FaUsers, FaLightbulb } from "react-icons/fa"; // Icons for pillars

import { useState } from "react";

const AboutUs = () => {
  const [openSections, setOpenSections] = useState({
    intro1: false,
    intro2: false,
    intro3: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        {/* Hero Section with Image and Breadcrumb */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <LazyLoadImage
            src="/bg3.jpg"
            alt="SouthPark University campus with students and faculty"
            effect="opacity"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
            wrapperClassName="w-full h-full"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black/70"></div>
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
            <span className="text-emerald-400">About Us</span>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl text-emerald-600 mb-8 text-center animate__animated animate__fadeInDown">
              Fueling Minds. Igniting Purpose.
            </h1>
            <div className="space-y-12">
              {/* Paragraph 1 */}
              <div className="flex flex-col md:flex-row items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0 md:mr-6 ">
                  <img
                    src="/bg5.jpg"
                    alt="Welcome to South Park University"
                    className="w-44 h-44 object-cover rounded-full border-4 border-emerald-600 "
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl text-emerald-600 mb-2">
                    Welcome to South Park
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    Welcome to South Park University—where knowledge meets
                    calling and learning transforms lives.
                  </p>
                  <button
                    onClick={() => toggleSection("intro1")}
                    className="inline-block bg-emerald-600 text-white py-2 px-4 text-sm md:text-base rounded hover:bg-emerald-700 transition duration-300"
                    aria-expanded={openSections.intro1}
                    aria-controls="intro1-content"
                  >
                    Read More
                  </button>
                  <div
                    id="intro1-content"
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openSections.intro1 ? "max-h-[1000px]" : "max-h-0"
                    } mt-2`}
                  >
                    <p className="text-gray-600 text-base md:text-lg mt-2">
                      Nestled in the energetic city of Anderson, in the heart of
                      the rapidly developing Upstate South Carolina region,
                      South Park University is a vibrant Christian institution
                      committed to shaping minds and hearts. With undergraduate,
                      graduate, and doctoral programs offered on campus, online,
                      and at our Greenville extension, students have flexible
                      access to over 50 degree programs, 29 areas of
                      concentration, 48 minors, 18 advanced degrees, and 8
                      certification tracks designed to prepare them for today’s
                      evolving world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraph 2 */}
              <div className="flex flex-col md:flex-row items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <img
                    src="/bg4.jpg"
                    alt="Growth and recognition"
                    className="w-44 h-44 object-cover rounded-full border-4 border-emerald-600"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl text-emerald-600 mb-2">
                    Growth and Recognition
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    South Park University is one of the fastest-rising private
                    universities, gaining national recognition for excellence
                    and innovation.
                  </p>
                  <button
                    onClick={() => toggleSection("intro2")}
                    className="inline-block bg-emerald-600 text-white py-2 px-4 text-sm md:text-base rounded hover:bg-emerald-700 transition duration-300"
                    aria-expanded={openSections.intro2}
                    aria-controls="intro2-content"
                  >
                    Read More
                  </button>
                  <div
                    id="intro2-content"
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openSections.intro2 ? "max-h-[1000px]" : "max-h-0"
                    } mt-2`}
                  >
                    <p className="text-gray-600 text-base md:text-lg mt-2">
                      As one of the fastest-rising private universities in the
                      nation, South Park University continues to grow not just
                      in numbers, but in impact. National recognition for
                      academic excellence, innovation, and student satisfaction
                      has established South Park as a leading destination for
                      transformative education in the South. Year after year,
                      respected publications highlight our commitment to value,
                      excellence, and student engagement—proof that what we do
                      is making a lasting difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraph 3 */}
              <div className="flex flex-col md:flex-row items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <img
                    src="/bg3.jpg"
                    alt="Mission and values"
                    className="w-44 h-44 object-cover rounded-full border-4 border-emerald-600"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl text-emerald-600 mb-2">
                    Mission and Values
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    South Park stands out for its commitment to liberal arts,
                    fostering critical thinking and ethical grounding.
                  </p>
                  <button
                    onClick={() => toggleSection("intro3")}
                    className="inline-block bg-emerald-600 text-white py-2 px-4 text-sm md:text-base rounded hover:bg-emerald-700 transition duration-300"
                    aria-expanded={openSections.intro3}
                    aria-controls="intro3-content"
                  >
                    Read More
                  </button>
                  <div
                    id="intro3-content"
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openSections.intro3 ? "max-h-[1000px]" : "max-h-0"
                    } mt-2`}
                  >
                    <p className="text-gray-600 text-base md:text-lg mt-2">
                      What sets South Park apart isn’t just what we teach—it’s
                      how and why we teach. At our core is an unwavering
                      commitment to the liberal arts, designed to cultivate both
                      deep expertise and broad understanding. We equip our
                      students with the critical thinking, ethical grounding,
                      and intellectual agility to thrive not just in their
                      careers, but in life. Whether leading in business, serving
                      in ministry, or innovating in science and technology, our
                      graduates leave prepared to influence every sphere they
                      touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-white text-center mb-8 animate__animated animate__fadeIn">
              Our Pillars of Identity
            </h2>
            <p className="text-white text-center text-lg mb-12 animate__animated animate__fadeIn animate__delay-1s">
              South Park University stands on four pillars that define our
              culture and our calling:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pillar 1: Academic Strength */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp">
                <FaBook
                  className="text-5xl text-emerald-600 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-800 mb-3">
                  Academic Strength
                </h3>
                <p className="text-gray-600">
                  We deliver rigorous, relevant education that empowers students
                  to lead and excel in their fields.
                </p>
              </div>

              {/* Pillar 2: Faith-Driven Mission */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                <FaCross
                  className="text-5xl text-emerald-600 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-800 mb-3">
                  Faith-Driven Mission
                </h3>
                <p className="text-gray-600">
                  Every program, every classroom, and every experience is rooted
                  in the truth and grace of Jesus Christ.
                </p>
              </div>

              {/* Pillar 3: Community Hospitality */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                <FaUsers
                  className="text-5xl text-emerald-600 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-800 mb-3">
                  Community Hospitality
                </h3>
                <p className="text-gray-600">
                  We cultivate a campus atmosphere where every student feels
                  seen, valued, and supported.
                </p>
              </div>

              {/* Pillar 4: Purposeful Living */}
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 animate__animated animate__fadeInUp animate__delay-3s">
                <FaLightbulb
                  className="text-5xl text-emerald-600 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-800 mb-3">
                  Purposeful Living
                </h3>
                <p className="text-gray-600">
                  Beyond degrees, we guide students to discover and pursue their
                  God-given purpose in every area of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section
          className="py-16 bg-emerald-600 text-white bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url('/bg3.jpg')` }}
        >
          <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black/70"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeIn">
              From our modest beginnings to becoming South Carolina’s largest
              and most dynamic private university, South Park University has
              remained devoted to one vision: to inspire lives, transform
              communities, and glorify God through education.
            </p>
            <h2 className="text-3xl md:text-4xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
              This is more than a university. It’s a launching pad for impact,
              purpose, and legacy.
            </h2>
            <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
              Your journey begins here.
            </p>
            <Link
              to="/stageOne"
              className="inline-block bg-white text-emerald-600 py-3 px-8 text-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:scale-105 transform animate__animated animate__fadeInUp animate__delay-3s"
              aria-label="Apply to SouthPark University"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
