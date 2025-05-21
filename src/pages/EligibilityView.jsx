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
  FaSearch,
} from "react-icons/fa";
import { toast } from "react-toastify";

const EligibilityViewer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const [emailSearch, setEmailSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const eligibilityCollection = collection(db, "eligibility");
        const eligibilitySnapshot = await getDocs(eligibilityCollection);
        const usersList = eligibilitySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          submittedAt: doc.data().submittedAt
            ? new Date(doc.data().submittedAt).toISOString()
            : "N/A",
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

  const handleRemoveFromView = (idToRemove) => {
    if (
      window.confirm(
        "Remove this application from view? It will remain in the database."
      )
    ) {
      setUsers((prev) =>
        prev.filter((applicant) => applicant.id !== idToRemove)
      );
      toast.success("Application removed from view.");
    }
  };

  const filterUsers = () => {
    return users.filter((user) => {
      // Date filter
      let dateMatch = true;
      if (dateFilter.startDate || dateFilter.endDate) {
        if (user.submittedAt === "N/A") return false;
        const itemDate = new Date(user.submittedAt);
        const start = dateFilter.startDate
          ? new Date(dateFilter.startDate)
          : null;
        const end = dateFilter.endDate ? new Date(dateFilter.endDate) : null;
        dateMatch =
          (!start || itemDate >= start) &&
          (!end || itemDate <= new Date(end.setHours(23, 59, 59, 999)));
      }

      // Email search
      const emailMatch = user.email
        ? user.email.toLowerCase().includes(emailSearch.toLowerCase())
        : false;

      return dateMatch && (!emailSearch || emailMatch);
    });
  };

  const filteredUsers = filterUsers();

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
          <span className="text-emerald-400">Eligibility Applicants</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-8 flex items-center">
          <FaUser className="mr-2 text-3xl" />
          Eligibility Applications ({filteredUsers.length})
        </h1>
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={dateFilter.startDate}
              onChange={(e) =>
                setDateFilter((prev) => ({
                  ...prev,
                  startDate: e.target.value,
                }))
              }
              className="p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={dateFilter.endDate}
              onChange={(e) =>
                setDateFilter((prev) => ({
                  ...prev,
                  endDate: e.target.value,
                }))
              }
              className="p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search by Email
            </label>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={emailSearch}
                onChange={(e) => setEmailSearch(e.target.value)}
                placeholder="Search by email..."
                className="w-full p-2 pl-10 border rounded focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
        {filteredUsers.length === 0 ? (
          <p className="text-gray-600 text-lg">No applications found.</p>
        ) : (
          filteredUsers.map((user) => (
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
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaUser className="mr-2" /> Personal Information
                    </h2>
                    <p>
                      <strong>Name:</strong> {user.fullName || "N/A"}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email || "N/A"}
                    </p>
                    <p>
                      <strong>Phone:</strong> {user.phone || "N/A"}
                    </p>
                    <p>
                      <strong>Nationality:</strong> {user.nationality || "N/A"}
                    </p>
                    <p>
                      <strong>Current Location:</strong>{" "}
                      {user.currentLocation || "N/A"}
                    </p>
                    <p>
                      <strong>Date of Birth:</strong>{" "}
                      {user.dateOfBirth || "N/A"}
                    </p>
                    <p>
                      <strong>Gender:</strong> {user.gender || "N/A"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaGraduationCap className="mr-2" /> Academic Background
                    </h2>
                    <p>
                      <strong>Education Level:</strong>{" "}
                      {user.educationLevel || "N/A"}
                    </p>
                    <p>
                      <strong>Institution:</strong> {user.institution || "N/A"}
                    </p>
                    <p>
                      <strong>Graduation Year:</strong>{" "}
                      {user.graduationYear || "N/A"}
                    </p>
                    <p>
                      <strong>GPA:</strong> {user.gpa || "N/A"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaBook className="mr-2" /> Course & Intake
                    </h2>
                    <p>
                      <strong>Program:</strong> {user.program || "N/A"}
                    </p>
                    <p>
                      <strong>Intake Session:</strong>{" "}
                      {user.intakeSession || "N/A"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaLanguage className="mr-2" /> English Proficiency
                    </h2>
                    <p>
                      <strong>Studied in English:</strong>{" "}
                      {user.studiedInEnglish || "N/A"}
                    </p>
                    {user.studiedInEnglish === "Yes" && (
                      <p>
                        <strong>Years Studied:</strong>{" "}
                        {user.yearsStudiedEnglish || "N/A"}
                      </p>
                    )}
                    <p>
                      <strong>Fluent in English:</strong>{" "}
                      {user.fluentEnglish || "N/A"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaHeart className="mr-2" /> Motivation & Intent
                    </h2>
                    <p>
                      <strong>Motivation:</strong> {user.motivation || "N/A"}
                    </p>
                    <p>
                      <strong>Impact:</strong> {user.impact || "N/A"}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaMoneyBillWave className="mr-2" /> Financial Snapshot
                    </h2>
                    <p>
                      <strong>Employed:</strong> {user.employed || "N/A"}
                    </p>
                    <p>
                      <strong>Income Range:</strong> {user.incomeRange || "N/A"}
                    </p>
                    <p>
                      <strong>Dependents:</strong> {user.dependents || "N/A"}
                    </p>
                    <p>
                      <strong>Sponsor Support:</strong>{" "}
                      {user.sponsorSupport || "N/A"}
                    </p>
                  </div>

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

                  <div className="mb-6">
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
                      {user.submittedAt !== "N/A"
                        ? new Date(user.submittedAt).toLocaleString()
                        : "N/A"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemoveFromView(user.id)}
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm"
                  >
                    Remove from View
                  </button>
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
