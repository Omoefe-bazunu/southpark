import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaUser,
  FaGraduationCap,
  FaBook,
  FaLanguage,
  FaHeart,
  FaMoneyBillWave,
  FaCheckSquare,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { toast } from "react-toastify";

const EligibilityViewer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const eligibilityCollection = collection(db, "eligibility");
        const eligibilitySnapshot = await getDocs(eligibilityCollection);
        const usersList = eligibilitySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching eligibility data:", error.message);
        toast.error("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleExpand = (userId) => {
    setExpanded((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-700 py-12 sm:py-16">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/abt2.jpeg"
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
          <span className="text-emerald-400">Eligibility Applicants</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-8 flex items-center">
          <FaUser className="mr-2 text-3xl" />
          Eligibility Applications
        </h1>
        {users.length === 0 ? (
          <p className="text-gray-600 text-lg">No applications found.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300"
                onClick={() => toggleExpand(user.id)}
                aria-expanded={expanded[user.id]}
                aria-controls={`user-details-${user.id}`}
              >
                <span className="text-lg font-semibold">
                  {user.fullName || "Unnamed Applicant"} ({user.email})
                </span>
                {expanded[user.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expanded[user.id] && (
                <div id={`user-details-${user.id}`} className="p-6">
                  {/* Personal Information */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaUser className="mr-2" /> Personal Information
                    </h2>
                    <p>
                      <strong>Name:</strong> {user.fullName}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {user.phone}
                    </p>
                    <p>
                      <strong>Nationality:</strong> {user.nationality}
                    </p>
                    <p>
                      <strong>Current Location:</strong> {user.currentLocation}
                    </p>
                    <p>
                      <strong>Date of Birth:</strong> {user.dateOfBirth}
                    </p>
                    <p>
                      <strong>Gender:</strong> {user.gender}
                    </p>
                  </div>

                  {/* Academic Background */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaGraduationCap className="mr-2" /> Academic Background
                    </h2>
                    <p>
                      <strong>Education Level:</strong> {user.educationLevel}
                    </p>
                    <p>
                      <strong>Institution:</strong> {user.institution}
                    </p>
                    <p>
                      <strong>Graduation Year:</strong> {user.graduationYear}
                    </p>
                    <p>
                      <strong>GPA:</strong> {user.gpa}
                    </p>
                  </div>

                  {/* Course & Intake */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaBook className="mr-2" /> Course & Intake
                    </h2>
                    <p>
                      <strong>Program:</strong> {user.program}
                    </p>
                    <p>
                      <strong>Intake Session:</strong> {user.intakeSession}
                    </p>
                  </div>

                  {/* English Proficiency */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaLanguage className="mr-2" /> English Proficiency
                    </h2>
                    <p>
                      <strong>Studied in English:</strong>{" "}
                      {user.studiedInEnglish}
                    </p>
                    {user.studiedInEnglish === "Yes" && (
                      <p>
                        <strong>Years Studied:</strong>{" "}
                        {user.yearsStudiedEnglish}
                      </p>
                    )}
                    <p>
                      <strong>Fluent in English:</strong> {user.fluentEnglish}
                    </p>
                  </div>

                  {/* Motivation & Intent */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaHeart className="mr-2" /> Motivation & Intent
                    </h2>
                    <p>
                      <strong>Motivation:</strong> {user.motivation}
                    </p>
                    <p>
                      <strong>Impact:</strong> {user.impact}
                    </p>
                  </div>

                  {/* Basic Financial Snapshot */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaMoneyBillWave className="mr-2" /> Financial Snapshot
                    </h2>
                    <p>
                      <strong>Employed:</strong> {user.employed}
                    </p>
                    <p>
                      <strong>Income Range:</strong> {user.incomeRange}
                    </p>
                    <p>
                      <strong>Dependents:</strong> {user.dependents}
                    </p>
                    <p>
                      <strong>Sponsor Support:</strong> {user.sponsorSupport}
                    </p>
                  </div>

                  {/* Declaration */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaCheckSquare className="mr-2" /> Declaration
                    </h2>
                    <p>
                      <strong>Confirm Accuracy:</strong>{" "}
                      {user.confirmAccuracy ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Agree to Verification Fee:</strong>{" "}
                      {user.agreeVerificationFee ? "Yes" : "No"}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <h2 className="text-xl text-emerald-700 mb-2">Status</h2>
                    <p>
                      <strong>Eligibility:</strong>{" "}
                      {user.eligibility ? "Eligible" : "Not Eligible"}
                    </p>
                    <p>
                      <strong>Approved:</strong>{" "}
                      {user.approved ? "Approved" : "Not Approved"}
                    </p>
                    <p>
                      <strong>Submitted At:</strong>{" "}
                      {new Date(user.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default EligibilityViewer;
