import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Stage1Application = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: user?.email || "",
    phone: "",
    nationality: "",
    currentLocation: "",
    dateOfBirth: "",
    gender: "",
    educationLevel: "",
    institution: "",
    graduationYear: "",
    gpa: "",
    program: "",
    intakeSession: "",
    studiedInEnglish: "",
    yearsStudiedEnglish: "",
    fluentEnglish: "",
    motivation: "",
    impact: "",
    employed: "",
    incomeRange: "",
    dependents: "",
    sponsorSupport: "",
    confirmAccuracy: false,
    agreeVerificationFee: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const incomeRanges = [
    "$0 - $500",
    "$501 - $1,000",
    "$1,001 - $2,000",
    "$2,001 - $5,000",
    "$5,001+",
  ];

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { replace: true });
    } else if (user) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [authLoading, user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Write to Firestore eligibility/{uid}
      const dataToSubmit = {
        ...formData,
        email: user.email,
        userId: user.uid,
        eligibility: false,
        approved: false,
        timestamp: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
      };
      const eligibilityRef = doc(db, "eligibility", user.uid);
      await setDoc(eligibilityRef, dataToSubmit);

      // Send confirmation email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setSuccess(true);
      toast.success("Application submitted and confirmation email sent!");
      setTimeout(() => navigate("/dashboard", { replace: true }), 1000);
    } catch (error) {
      console.error("Error submitting application:", error.message);
      toast.error(
        "Failed to submit application or send email. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-emerald-50">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-emerald-700 mb-4">Success!</h2>
          <p className="text-gray-600">
            Your eligibility application has been submitted successfully. A
            confirmation email has been sent to {formData.email}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-700 py-12 sm:py-16">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="SouthPark University athletes competing on the field"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/dashboard"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Stage1Application</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow-lg rounded-lg px-6 sm:px-8 py-12 animate__animated animate__fadeInUp">
          <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-6 flex items-center">
            <FaGraduationCap className="mr-2 text-3xl" />
            Stage 1 Application - Show Your Interest
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Provide your details to check eligibility for the South Park
            University Full-Ride Scholarship.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaUser className="mr-2" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                    aria-required="true"
                    aria-label="Email Address"
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone Number (with country code) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-gray-700">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Nationality"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentLocation"
                    className="block text-gray-700"
                  >
                    Current Location (City & Country) *
                  </label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Current Location"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-gray-700">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Date of Birth"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-700">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Gender"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Academic Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="educationLevel"
                    className="block text-gray-700"
                  >
                    Highest Level of Education Completed *
                  </label>
                  <select
                    id="educationLevel"
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Highest Level of Education Completed"
                    required
                  >
                    <option value="">Select Level</option>
                    <option value="High School">High School</option>
                    <option value="Associate">Associate Degree</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="institution" className="block text-gray-700">
                    Name of Institution *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Name of Institution"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="graduationYear"
                    className="block text-gray-700"
                  >
                    Graduation Year *
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Graduation Year"
                    min="1900"
                    max="2025"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gpa" className="block text-gray-700">
                    Final GPA or Grade (specify scale) *
                  </label>
                  <input
                    type="text"
                    id="gpa"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Final GPA or Grade"
                    placeholder="e.g., 3.7/4.0"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Course & Intake */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaBook className="mr-2" /> Course & Intake
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="program" className="block text-gray-700">
                    Which program are you applying for? *
                  </label>
                  <input
                    type="text"
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Program Applied For"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="intakeSession"
                    className="block text-gray-700"
                  >
                    Preferred Intake Session *
                  </label>
                  <select
                    id="intakeSession"
                    name="intakeSession"
                    value={formData.intakeSession}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Preferred Intake Session"
                    required
                  >
                    <option value="">Select Intake</option>
                    <option value="Fall 2025">Fall 2025</option>
                    <option value="Spring 2026">Spring 2026</option>
                    <option value="Summer 2026">Summer 2026</option>
                  </select>
                </div>
              </div>
            </div>

            {/* English Proficiency */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaLanguage className="mr-2" /> English Proficiency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="studiedInEnglish"
                    className="block text-gray-700"
                  >
                    Have you studied in English before? *
                  </label>
                  <select
                    id="studiedInEnglish"
                    name="studiedInEnglish"
                    value={formData.studiedInEnglish}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Studied in English"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {formData.studiedInEnglish === "Yes" && (
                  <div>
                    <label
                      htmlFor="yearsStudiedEnglish"
                      className="block text-gray-700"
                    >
                      How many years? *
                    </label>
                    <input
                      type="number"
                      id="yearsStudiedEnglish"
                      name="yearsStudiedEnglish"
                      value={formData.yearsStudiedEnglish}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      aria-required="true"
                      aria-label="Years Studied in English"
                      min="1"
                      required
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="fluentEnglish"
                    className="block text-gray-700"
                  >
                    Do you speak and write English fluently? *
                  </label>
                  <select
                    id="fluentEnglish"
                    name="fluentEnglish"
                    value={formData.fluentEnglish}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Fluent in English"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Motivation & Intent */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaHeart className="mr-2" /> Motivation & Intent
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="motivation" className="block text-gray-700">
                    Why do you want to study at South Park University? (50–150
                    words) *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Motivation Statement"
                    placeholder="Enter your motivation (50-150 words)..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="impact" className="block text-gray-700">
                    How will this scholarship impact your future? (50–150 words)
                    *
                  </label>
                  <textarea
                    id="impact"
                    name="impact"
                    value={formData.impact}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Impact Statement"
                    placeholder="Enter how this scholarship will impact your future (50-150 words)..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Basic Financial Snapshot */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaMoneyBillWave className="mr-2" /> Basic Financial Snapshot
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="employed" className="block text-gray-700">
                    Are you currently employed? *
                  </label>
                  <select
                    id="employed"
                    name="employed"
                    value={formData.employed}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Employment Status"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="incomeRange" className="block text-gray-700">
                    Estimated Monthly Family Income (select range) *
                  </label>
                  <select
                    id="incomeRange"
                    name="incomeRange"
                    value={formData.incomeRange}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Income Range"
                    required
                  >
                    <option value="">Select Range</option>
                    {incomeRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="dependents" className="block text-gray-700">
                    Number of Household Dependents (including you) *
                  </label>
                  <input
                    type="number"
                    id="dependents"
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Number of Dependents"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsorSupport"
                    className="block text-gray-700"
                  >
                    Do you have existing support from any sponsor or
                    organization? *
                  </label>
                  <select
                    id="sponsorSupport"
                    name="sponsorSupport"
                    value={formData.sponsorSupport}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Sponsor Support"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Declaration */}
            <div className="mb-6 animate__animated animate__slideInLeft border-t border-emerald-600 pt-4">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaCheckSquare className="mr-2" /> Declaration
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="confirmAccuracy"
                    name="confirmAccuracy"
                    checked={formData.confirmAccuracy}
                    onChange={handleChange}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Confirm Accuracy"
                    required
                  />
                  <label htmlFor="confirmAccuracy" className="text-gray-700">
                    I confirm that the information provided is accurate. *
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeVerificationFee"
                    name="agreeVerificationFee"
                    checked={formData.agreeVerificationFee}
                    onChange={handleChange}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Agree to Verification Fee"
                    required
                  />
                  <label
                    htmlFor="agreeVerificationFee"
                    className="text-gray-700"
                  >
                    I agree to pay a document verification fee if offered a
                    scholarship. *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition duration-300"
                aria-label="Submit Application"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Stage1Application;
