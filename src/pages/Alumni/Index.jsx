import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaGlobe,
  FaStar,
  FaCalendarAlt,
  FaNetworkWired,
  FaPlane,
  FaDonate,
  FaHandsHelping,
  FaUserEdit,
  FaEnvelope,
} from "react-icons/fa";

const Alumni = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
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
          <span className="text-emerald-400">Alumni</span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Alumni</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-10" />
          </div>
          <p className="text-gray-600 text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            As an alum, you are an integral part of our community. Our alumni
            network is dedicated to supporting you throughout your personal and
            professional journey, fostering meaningful connections, and ensuring
            that South Park University remains a place of lifelong growth and
            success.
          </p>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            South Park University offers a range of programs and services
            designed to keep you engaged and connected with your alma mater.
            Whether you’re looking to further your education, advance in your
            career, or give back to the university, there are plenty of
            opportunities to stay involved.
          </p>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4">
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University alumni reconnecting at an event"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s"
            />
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University alumni reconnecting at an event"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s"
            />
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University alumni reconnecting at an event"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s"
            />
          </div>
        </div>
      </section>

      {/* Alumni Services & Engagement Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-white">
              Alumni Services & Engagement
            </h1>
            <hr className="w-24 bg-emerald-600 text-white mt-4 mb-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Career Services */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn">
              <div className="flex items-center space-x-4 mb-4">
                <FaBriefcase className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Career Services</h3>
              </div>
              <p className="text-gray-600">
                Lifelong support with job-search assistance, resume reviews, and
                exclusive networking events.
              </p>
            </div>

            {/* Continuing Education */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn animate__delay-1s">
              <div className="flex items-center space-x-4 mb-4">
                <FaGraduationCap className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Continuing Education</h3>
              </div>
              <p className="text-gray-600">
                Opportunities for alumni to continue their education through
                courses, workshops, and certifications.
              </p>
            </div>

            {/* Mentorship Program */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn animate__delay-2s">
              <div className="flex items-center space-x-4 mb-4">
                <FaUsers className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Mentorship Program</h3>
              </div>
              <p className="text-gray-600">
                Mentor current students and share your expertise to guide their
                academic and professional paths.
              </p>
            </div>

            {/* Alumni Chapters */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn">
              <div className="flex items-center space-x-4 mb-4">
                <FaGlobe className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Alumni Chapters</h3>
              </div>
              <p className="text-gray-600">
                Join regional chapters to network, attend events, and build
                connections in your area.
              </p>
            </div>

            {/* Notable Alumni */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn animate__delay-1s">
              <div className="flex items-center space-x-4 mb-4">
                <FaStar className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Notable Alumni</h3>
              </div>
              <p className="text-gray-600">
                Discover the stories of graduates making a significant impact in
                their fields worldwide.
              </p>
            </div>

            {/* Alumni Events */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn animate__delay-2s">
              <div className="flex items-center space-x-4 mb-4">
                <FaCalendarAlt className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Alumni Events</h3>
              </div>
              <p className="text-gray-600">
                Attend reunions, networking events, and exclusive gatherings to
                reconnect and celebrate.
              </p>
            </div>

            {/* Networking Opportunities */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn">
              <div className="flex items-center space-x-4 mb-4">
                <FaNetworkWired className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Networking Opportunities</h3>
              </div>
              <p className="text-gray-600">
                Connect with fellow graduates through events, online platforms,
                and alumni directories.
              </p>
            </div>

            {/* Travel and Tours */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate__animated animate__zoomIn animate__delay-1s">
              <div className="flex items-center space-x-4 mb-4">
                <FaPlane className="text-emerald-600 text-3xl" />
                <h3 className="text-xl ">Travel and Tours</h3>
              </div>
              <p className="text-gray-600">
                Explore travel opportunities designed specifically for South
                Park University alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Give Back & Stay Updated Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Give Back & Stay Updated
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Give Back */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl  text-gray-800 mb-4 animate__animated animate__fadeInUp">
                Support the Next Generation
              </h3>
              <ul className="space-y-4 animate__animated animate__fadeInUp animate__delay-1s">
                <li className="flex items-center space-x-4">
                  <FaDonate className="text-emerald-600 text-2xl" />
                  <div>
                    <span className="text-gray-600 font-semibold">
                      Make a Donation:
                    </span>
                    <p className="text-gray-600">
                      Contribute to our alumni fund to support scholarships,
                      student initiatives, and more.
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <FaHandsHelping className="text-emerald-600 text-2xl" />
                  <div>
                    <span className="text-gray-600 font-semibold">
                      Volunteer:
                    </span>
                    <p className="text-gray-600">
                      Offer your time and expertise to help South Park
                      University grow.
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <FaUserEdit className="text-emerald-600 text-2xl" />
                  <div>
                    <span className="text-gray-600 font-semibold">
                      Refer a Student:
                    </span>
                    <p className="text-gray-600">
                      Help shape the future by referring prospective students.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stay Updated */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-gray-800 mb-4 animate__animated animate__fadeInUp">
                Stay Informed
              </h3>
              <ul className="space-y-4 animate__animated animate__fadeInUp animate__delay-1s">
                <li className="flex items-center space-x-4">
                  <FaUserEdit className="text-emerald-600 text-2xl" />
                  <div>
                    <Link
                      to="/update-info"
                      className="text-emerald-600 hover:underline"
                      aria-label="Update your alumni information"
                    >
                      Update Your Information Here
                    </Link>
                    <p className="text-gray-600">
                      Keep your contact details current to receive news and
                      event invitations.
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <FaEnvelope className="text-emerald-600 text-2xl" />
                  <div>
                    <Link
                      to="/subscribe-newsletter"
                      className="text-emerald-600 hover:underline"
                      aria-label="Subscribe to the alumni newsletter"
                    >
                      Subscribe to the Alumni Newsletter
                    </Link>
                    <p className="text-gray-600">
                      Get updates on university happenings, alumni achievements,
                      and events.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <LazyLoadImage
              src="/bg5.jpg"
              alt="SouthPark University alumni giving back to the community"
              effect="opacity"
              className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-2s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent rounded-lg"></div>
          </div>
          <p className="text-gray-600 text-lg mt-8 animate__animated animate__fadeInUp animate__delay-3s">
            Thank you for continuing to be a part of South Park University’s
            legacy. We’re proud of all that you’ve accomplished and excited for
            what lies ahead. Together, we continue to build a strong,
            supportive, and successful community.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Alumni;
