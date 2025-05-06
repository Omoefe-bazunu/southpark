import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    } else if (user) {
      setUserData({
        name: user.name,
        email: user.email,
        profilePic: user.photoURL || "/default-profile-pic.jpeg", // Fallback to a default image
        eligibilityStatus: user.eligibility ? "Eligible" : "Not Eligible",
        approvedStatus: user.approved ? "Approved" : "Not Approved",
        applicationStatus: user.eligibility
          ? "Stage 1 Complete"
          : "Stage 1 Pending",
        incompleteStage: user.eligibility ? "Stage 2" : null,
      });
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleResumeApplication = () => {
    navigate("/stage2application");
  };

  if (loading || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-700">
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
          <span className="text-emerald-400">Dashboard</span>
        </div>
      </section>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-emerald-800 text-white flex flex-col items-center px-2 flex-shrink-0 py-8">
          <div className="flex items-center flex-col mb-8">
            {/* <img
              src={userData.profilePic}
              alt={`Profile picture of ${userData.name}`}
              className="w-16 h-16 rounded-full border-2 border-emerald-400 mr-4"
            /> */}
            <div className=" text-center">
              <h2 className="text-xl font-semibold">{userData.name}</h2>
              <p className="text-sm">{userData.email}</p>
            </div>
          </div>
          <nav className="space-y-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-300"
              aria-label="Log out"
            >
              <FaSignOutAlt />
              <span>Log Out</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-6 animate__animated animate__fadeInUp">
              Applicant Dashboard
            </h1>

            {/* Basic Info */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                <FaUserCircle className="mr-2" /> Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>Name:</strong> {userData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Application Status */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
                <FaFileAlt className="mr-2" /> Application Status
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  {user.eligibility ? (
                    <FaCheckCircle className="text-emerald-600 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-600 mr-2" />
                  )}
                  <p>
                    <strong>Eligibility Status:</strong>{" "}
                    {userData.eligibilityStatus}
                  </p>
                </div>
                <div className="flex items-center">
                  {user.approved ? (
                    <FaCheckCircle className="text-emerald-600 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-600 mr-2" />
                  )}
                  <p>
                    <strong>Approval Status:</strong> {userData.approvedStatus}
                  </p>
                </div>
                <div className="flex items-center">
                  {user.eligibility ? (
                    <FaCheckCircle className="text-emerald-600 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-600 mr-2" />
                  )}
                  <p>
                    <strong>Application Progress:</strong>{" "}
                    {userData.applicationStatus}
                  </p>
                </div>
                {user.eligibility && userData.incompleteStage && (
                  <div className="flex items-center">
                    <FaTimesCircle className="text-red-600 mr-2" />
                    <p>
                      <strong>Incomplete:</strong> {userData.incompleteStage} -
                      Application Pending
                    </p>
                  </div>
                )}
                {user.eligibility && userData.incompleteStage && (
                  <button
                    onClick={handleResumeApplication}
                    className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-300"
                    aria-label="Resume Stage 2 Application"
                  >
                    Resume {userData.incompleteStage} Application
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
