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
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
    facebook: "",
    twitter: "",
    instagram: "",
    portfolio: "",
    consentFalseInfo: false,
    consentNameImage: false,
    consentCompetitive: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fullName, setFullName] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { replace: true });
    } else if (user) {
      // Fetch fullName from eligibility collection
      const fetchFullName = async () => {
        try {
          const eligibilityRef = doc(db, "eligibility", user.uid);
          const eligibilityDoc = await getDoc(eligibilityRef);
          if (eligibilityDoc.exists()) {
            setFullName(eligibilityDoc.data().fullName || "Applicant");
          } else {
            setFullName("Applicant");
          }
        } catch (error) {
          console.error("Error fetching fullName:", error);
          setFullName("Applicant");
        }
      };
      fetchFullName();
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

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        reject(new Error("File size exceeds 5MB limit"));
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Additional validation for images
        if (file.type.startsWith("image/")) {
          const img = new Image();
          img.onload = () => {
            resolve(reader.result);
          };
          img.onerror = () => {
            reject(new Error("Invalid image file"));
          };
          img.src = reader.result;
        } else {
          resolve(reader.result);
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validate required files
      if (!formData.passportPhoto || !formData.academicTranscripts) {
        throw new Error("Required documents are missing");
      }

      // Prepare file data with metadata
      const prepareFileData = async (file, fieldName) => {
        if (!file) return null;
        return {
          base64: await convertToBase64(file),
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
        };
      };

      const dataToSubmit = {
        ...formData,
        userId: user?.uid,
        timestamp: new Date().toISOString(),
        passportPhoto: await prepareFileData(
          formData.passportPhoto,
          "passportPhoto"
        ),
        academicTranscripts: await prepareFileData(
          formData.academicTranscripts,
          "academicTranscripts"
        ),
        supportingDocs: await prepareFileData(
          formData.supportingDocs,
          "supportingDocs"
        ),
        englishScore: await prepareFileData(
          formData.englishScore,
          "englishScore"
        ),
        englishInstructionProof: await prepareFileData(
          formData.englishInstructionProof,
          "englishInstructionProof"
        ),
        employmentProof: await prepareFileData(
          formData.employmentProof,
          "employmentProof"
        ),
        sponsorPayslip: await prepareFileData(
          formData.sponsorPayslip,
          "sponsorPayslip"
        ),
        recommendationLetter: await prepareFileData(
          formData.recommendationLetter,
          "recommendationLetter"
        ),
        submittedAt: new Date().toISOString(),
      };

      // Write to Firestore applicants collection
      await addDoc(collection(db, "applicants"), dataToSubmit);

      // Send confirmation email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_STAGE2_TEMPLATE_ID,
        {
          name: fullName || "Applicant",
          email: user.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setSuccess(true);
      toast.success("Application submitted and confirmation email sent!");
      setTimeout(() => navigate("/dashboard", { replace: true }), 1000);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(
        error.message || "Failed to submit application. Please try again."
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
    return null; // Redirect will handle navigation
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-emerald-50">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-emerald-700 mb-4">Success!</h2>
          <p className="text-gray-600">
            Your application has been submitted successfully. A confirmation
            email has been sent to {user.email}.
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
            Stage 2 Application - Submit Documents & Pay Verification Fee
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Complete your application by providing the required documents and
            paying the document verification fee of $100.
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
                    <span className="text-sm text-gray-500 block">
                      (JPEG/PNG, max 5MB)
                    </span>
                  </label>
                  <input
                    type="file"
                    id="passportPhoto"
                    name="passportPhoto"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                    aria-label="Upload Passport-Style Photo"
                    accept="image/jpeg,image/png"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Social & Digital Proof */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaLink className="mr-2" /> Online Presence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="linkedin" className="block text-gray-700">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
                <div>
                  <label htmlFor="facebook" className="block text-gray-700">
                    Facebook Profile
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://facebook.com/your-profile"
                  />
                </div>
                <div>
                  <label htmlFor="twitter" className="block text-gray-700">
                    Twitter Profile
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://twitter.com/your-handle"
                  />
                </div>
                <div>
                  <label htmlFor="instagram" className="block text-gray-700">
                    Instagram Profile
                  </label>
                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://instagram.com/your-handle"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="portfolio" className="block text-gray-700">
                    Portfolio or Personal Website
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaFileUpload className="mr-2" /> Upload Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="academicTranscripts"
                    className="block text-gray-700"
                  >
                    Upload Academic Transcripts *
                    <span className="text-sm text-gray-500 block">
                      (PDF, max 5MB)
                    </span>
                  </label>
                  <input
                    type="file"
                    id="academicTranscripts"
                    name="academicTranscripts"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Academic Transcripts"
                    accept="application/pdf"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="supportingDocs"
                    className="block text-gray-700"
                  >
                    Upload Supporting Documents
                    <span className="text-sm text-gray-500 block">
                      (PDF/JPEG/PNG, max 5MB each)
                    </span>
                  </label>
                  <input
                    type="file"
                    id="supportingDocs"
                    name="supportingDocs"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Upload Supporting Documents"
                    accept="application/pdf,image/jpeg,image/png"
                  />
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="border-t border-emerald-600 pt-4 mb-6 animate__animated animate__slideInLeft">
              <h2 className="text-xl sm:text-2xl text-emerald-700 mb-4 flex items-center">
                <FaCheckSquare className="mr-2" /> Consent
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="consentFalseInfo"
                      checked={formData.consentFalseInfo}
                      onChange={handleChange}
                      className="form-checkbox text-emerald-500"
                      required
                    />
                    <span className="text-gray-700">
                      I agree that the information provided is accurate. *
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="consentNameImage"
                      checked={formData.consentNameImage}
                      onChange={handleChange}
                      className="form-checkbox text-emerald-500"
                      required
                    />
                    <span className="text-gray-700">
                      I agree to allow use of my name and image in promotional
                      materials. *
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="consentCompetitive"
                      checked={formData.consentCompetitive}
                      onChange={handleChange}
                      className="form-checkbox text-emerald-500"
                      required
                    />
                    <span className="text-gray-700">
                      I acknowledge that this scholarship is competitive. *
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 text-white rounded-lg text-xl font-semibold disabled:opacity-50"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Stage2Application;
