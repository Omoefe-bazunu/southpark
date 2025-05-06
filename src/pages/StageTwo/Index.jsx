import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaPassport,
  FaFileUpload,
  FaLanguage,
  FaMoneyBillWave,
  FaBriefcase,
  FaHandsHelping,
  FaLink,
  FaCheckSquare,
} from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../services/firebase.jsx";
import { collection, addDoc } from "firebase/firestore";

const Stage2Application = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    passportNumber: "",
    passportPhoto: null,
    academicTranscripts: null,
    awards: "",
    supportingDocs: null,
    takenEnglishExam: "",
    englishScore: null,
    englishInstructionProof: null,
    employmentProof: null,
    sponsorPayslip: null,
    financialNeed: "",
    postGraduationPlan: "",
    targetCountryIndustry: "",
    fundingPlan: "",
    leadershipRoles: "",
    recommendationLetter: null,
    extracurricular: "",
    linkedin: "",
    portfolio: "",
    consentFalseInfo: false,
    consentNameImage: false,
    consentCompetitive: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { replace: true });
    }
  }, [authLoading, user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const dataToSubmit = {
        ...formData,
        userId: user?.uid,
        timestamp: new Date().toISOString(),
        passportPhoto: await convertToBase64(formData.passportPhoto),
        academicTranscripts: await convertToBase64(
          formData.academicTranscripts
        ),
        supportingDocs: await convertToBase64(formData.supportingDocs),
        englishScore: await convertToBase64(formData.englishScore),
        englishInstructionProof: await convertToBase64(
          formData.englishInstructionProof
        ),
        employmentProof: await convertToBase64(formData.employmentProof),
        sponsorPayslip: await convertToBase64(formData.sponsorPayslip),
        recommendationLetter: await convertToBase64(
          formData.recommendationLetter
        ),
        submittedAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "applicants"), dataToSubmit);
      setSuccess(true);
      setFormData({
        passportNumber: "",
        passportPhoto: null,
        academicTranscripts: null,
        awards: "",
        supportingDocs: null,
        takenEnglishExam: "",
        englishScore: null,
        englishInstructionProof: null,
        employmentProof: null,
        sponsorPayslip: null,
        financialNeed: "",
        postGraduationPlan: "",
        targetCountryIndustry: "",
        fundingPlan: "",
        leadershipRoles: "",
        recommendationLetter: null,
        extracurricular: "",
        linkedin: "",
        portfolio: "",
        consentFalseInfo: false,
        consentNameImage: false,
        consentCompetitive: false,
      });
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Redirect will handle navigation
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-emerald-50">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-emerald-700 mb-4">Success!</h2>
          <p className="text-gray-600">
            Your application has been submitted successfully. You will be
            redirected to the payment page shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-700 placeholder:text-gray-700 py-12 sm:py-16">
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
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Stage2Application</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 animate__animated animate__fadeInUp">
          <img
            src="/bg5.jpg"
            alt="Student submitting documents for Stage 2 application"
            className="w-full h-48 sm:h-64 object-cover rounded-lg border border-gray-200 mb-6"
          />
          <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-6 flex items-center">
            <FaPassport className="mr-2 text-3xl" />
            Stage 2 Application - Submit Documents & Pay Verification Fee
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Complete your application by providing the required documents and
            paying the document verification fee of $10.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Applicant Verification */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaPassport className="mr-2" /> Applicant Verification
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="passportNumber"
                    className="block text-gray-700"
                  >
                    Passport Number or National ID *
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Passport Number or National ID"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="passportPhoto"
                    className="block text-gray-700"
                  >
                    Upload Clear Passport-Style Photo *
                  </label>
                  <input
                    type="file"
                    id="passportPhoto"
                    name="passportPhoto"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Upload Passport-Style Photo"
                    accept="image/*"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Proof */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaFileUpload className="mr-2" /> Academic Proof
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="academicTranscripts"
                    className="block text-gray-700"
                  >
                    Upload Academic Transcripts/Certificates *
                  </label>
                  <input
                    type="file"
                    id="academicTranscripts"
                    name="academicTranscripts"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Upload Academic Transcripts"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="awards" className="block text-gray-700">
                    List Any Awards or Honors
                  </label>
                  <textarea
                    id="awards"
                    name="awards"
                    value={formData.awards}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-label="List Awards or Honors"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="supportingDocs"
                    className="block text-gray-700"
                  >
                    Upload Supporting Documents (Optional)
                  </label>
                  <input
                    type="file"
                    id="supportingDocs"
                    name="supportingDocs"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Supporting Documents"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </div>

            {/* English Language Evidence */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaLanguage className="mr-2" /> English Language Evidence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="takenEnglishExam"
                    className="block text-gray-700"
                  >
                    Have you taken an English exam (e.g., IELTS/TOEFL)? *
                  </label>
                  <select
                    id="takenEnglishExam"
                    name="takenEnglishExam"
                    value={formData.takenEnglishExam}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Taken English Exam"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {formData.takenEnglishExam === "Yes" && (
                  <div>
                    <label
                      htmlFor="englishScore"
                      className="block text-gray-700"
                    >
                      Upload Score/Report *
                    </label>
                    <input
                      type="file"
                      id="englishScore"
                      name="englishScore"
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      aria-required="true"
                      aria-label="Upload English Score"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                )}
                <div className="md:col-span-2">
                  <label
                    htmlFor="englishInstructionProof"
                    className="block text-gray-700"
                  >
                    Upload Proof of English Instruction (Optional)
                  </label>
                  <input
                    type="file"
                    id="englishInstructionProof"
                    name="englishInstructionProof"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Proof of English Instruction"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </div>

            {/* Financial Documentation */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaMoneyBillWave className="mr-2" /> Financial Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="employmentProof"
                    className="block text-gray-700"
                  >
                    Upload Proof of Employment/Income (If Applicable)
                  </label>
                  <input
                    type="file"
                    id="employmentProof"
                    name="employmentProof"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Proof of Employment"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsorPayslip"
                    className="block text-gray-700"
                  >
                    Upload Parent/Sponsor Payslip or Letter *
                  </label>
                  <input
                    type="file"
                    id="sponsorPayslip"
                    name="sponsorPayslip"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Upload Sponsor Payslip"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="financialNeed"
                    className="block text-gray-700"
                  >
                    Brief Statement of Financial Need *
                  </label>
                  <textarea
                    id="financialNeed"
                    name="financialNeed"
                    value={formData.financialNeed}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Financial Need Statement"
                    placeholder="Describe your financial need..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Career & Intent */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> Career & Intent
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="postGraduationPlan"
                    className="block text-gray-700"
                  >
                    What do you plan to do after graduation? *
                  </label>
                  <textarea
                    id="postGraduationPlan"
                    name="postGraduationPlan"
                    value={formData.postGraduationPlan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Post-Graduation Plan"
                    placeholder="Describe your plans..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="targetCountryIndustry"
                    className="block text-gray-700"
                  >
                    Which country or industry do you aim to work in? *
                  </label>
                  <input
                    type="text"
                    id="targetCountryIndustry"
                    name="targetCountryIndustry"
                    value={formData.targetCountryIndustry}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Target Country or Industry"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fundingPlan" className="block text-gray-700">
                    Do you have a sponsor or plan to self-fund living expenses
                    not covered by the scholarship? *
                  </label>
                  <select
                    id="fundingPlan"
                    name="fundingPlan"
                    value={formData.fundingPlan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Funding Plan"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Sponsor">I have a sponsor</option>
                    <option value="Self-Fund">I plan to self-fund</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Leadership & Community Impact */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaHandsHelping className="mr-2" /> Leadership & Community
                Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="leadershipRoles"
                    className="block text-gray-700"
                  >
                    Have you held any leadership roles? Describe. *
                  </label>
                  <textarea
                    id="leadershipRoles"
                    name="leadershipRoles"
                    value={formData.leadershipRoles}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Leadership Roles"
                    placeholder="Describe your leadership roles..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="recommendationLetter"
                    className="block text-gray-700"
                  >
                    Upload Recommendation Letter(s) (Optional)
                  </label>
                  <input
                    type="file"
                    id="recommendationLetter"
                    name="recommendationLetter"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Recommendation Letter"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="extracurricular"
                    className="block text-gray-700"
                  >
                    List Any Extracurricular or Volunteer Work *
                  </label>
                  <textarea
                    id="extracurricular"
                    name="extracurricular"
                    value={formData.extracurricular}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                    aria-required="true"
                    aria-label="Extracurricular or Volunteer Work"
                    placeholder="List your activities..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Social & Digital Proof */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaLink className="mr-2" /> Social & Digital Proof
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="linkedin" className="block text-gray-700">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="LinkedIn Profile"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-gray-700">
                    Personal Portfolio or Blog (Optional)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Personal Portfolio or Blog"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>

            {/* Final Consent & Submission */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaCheckSquare className="mr-2" /> Final Consent & Submission
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consentFalseInfo"
                    name="consentFalseInfo"
                    checked={formData.consentFalseInfo}
                    onChange={handleChange}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Consent to False Information Policy"
                    required
                  />
                  <label htmlFor="consentFalseInfo" className="text-gray-700">
                    I understand that providing false information may disqualify
                    me. *
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consentNameImage"
                    name="consentNameImage"
                    checked={formData.consentNameImage}
                    onChange={handleChange}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Consent to Use Name and Image"
                    required
                  />
                  <label htmlFor="consentNameImage" className="text-gray-700">
                    I consent to my name and image being used on official
                    university documentation. *
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consentCompetitive"
                    name="consentCompetitive"
                    checked={formData.consentCompetitive}
                    onChange={handleChange}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Consent to Competitive Nature of Scholarship"
                    required
                  />
                  <label htmlFor="consentCompetitive" className="text-gray-700">
                    I agree that the scholarship is competitive and subject to
                    final review. *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button & Payment */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition duration-300"
                aria-label="Proceed to Payment"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Proceed to Payment"}
              </button>
              <p className="text-gray-600 text-sm mt-2">
                You will be redirected to pay the document verification fee of{" "}
                <span className="text-emerald-700 font-semibold">$10</span>{" "}
                after submission.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Stage2Application;
