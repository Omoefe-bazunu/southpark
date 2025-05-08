import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
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
  FaChevronDown,
  FaChevronUp,
  FaDownload,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Stage2EligibilityViewer = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        // Fetch applicants from the applicants collection
        const applicantsCollection = collection(db, "applicants");
        const applicantsSnapshot = await getDocs(applicantsCollection);
        const applicantsList = applicantsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Fetch fullName for each applicant from eligibility collection
        const applicantsWithNames = await Promise.all(
          applicantsList.map(async (applicant) => {
            try {
              // Fetch eligibility document by userId (document ID)
              const eligibilityDocRef = doc(
                db,
                "eligibility",
                applicant.userId
              );
              const eligibilityDoc = await getDoc(eligibilityDocRef);
              const fullName = eligibilityDoc.exists()
                ? eligibilityDoc.data().fullName || "Unknown"
                : "Unknown";
              return { ...applicant, fullName };
            } catch (error) {
              console.error(
                `Error fetching fullName for user ${applicant.userId}:`,
                error
              );
              return { ...applicant, fullName: "Unknown" };
            }
          })
        );

        setApplicants(applicantsWithNames);
      } catch (error) {
        console.error("Error fetching applicants data:", error.message);
        toast.error("Failed to fetch applicant data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const toggleExpand = (applicantId) => {
    setExpanded((prev) => ({
      ...prev,
      [applicantId]: !prev[applicantId],
    }));
  };

  const downloadFile = (fileData, defaultFileName) => {
    if (!fileData || !fileData.base64) {
      toast.error("No file available for download.");
      return;
    }

    try {
      const { base64, name, type } = fileData;
      const fileName = name || defaultFileName;

      // Extract the base64 data without the prefix
      const base64WithoutPrefix = base64.split(",")[1];
      const byteCharacters = atob(base64WithoutPrefix);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: type || "application/octet-stream",
      });

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Failed to download file. Please try again.");
    }
  };

  const renderFilePreview = (fileData, defaultName) => {
    if (!fileData || !fileData.base64) return null;

    const { base64, type, name } = fileData;
    const fileName = name || defaultName;

    if (type.startsWith("image/")) {
      return (
        <div className="mt-2">
          <p>
            <strong>Preview:</strong>
          </p>
          <img
            src={base64}
            alt={fileName}
            className="max-w-xs max-h-48 object-contain border rounded-lg mb-2"
          />
          <button
            className="flex items-center text-emerald-600 hover:text-emerald-800"
            onClick={() => downloadFile(fileData, fileName)}
          >
            <FaDownload className="mr-1" /> Download {fileName}
          </button>
        </div>
      );
    } else if (type === "application/pdf") {
      return (
        <div className="mt-2">
          <p>
            <strong>PDF Document:</strong> {fileName}
          </p>
          <button
            className="flex items-center text-emerald-600 hover:text-emerald-800"
            onClick={() => downloadFile(fileData, fileName)}
          >
            <FaDownload className="mr-1" /> Download PDF
          </button>
        </div>
      );
    } else {
      return (
        <div className="mt-2">
          <p>
            <strong>File:</strong> {fileName}
          </p>
          <button
            className="flex items-center text-emerald-600 hover:text-emerald-800"
            onClick={() => downloadFile(fileData, fileName)}
          >
            <FaDownload className="mr-1" /> Download File
          </button>
        </div>
      );
    }
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
          src="/bg3.jpg"
          alt="SouthPark University admin overview"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">
            Documents Verification Applicants
          </span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-8 flex items-center mt-8">
          <FaPassport className="mr-2 text-3xl" />
          Stage 2 Applications
        </h1>
        {applicants.length === 0 ? (
          <p className="text-gray-600 text-lg">No applications found.</p>
        ) : (
          applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300"
                onClick={() => toggleExpand(applicant.id)}
                aria-expanded={expanded[applicant.id]}
                aria-controls={`applicant-details-${applicant.id}`}
              >
                <span className="text-lg font-semibold">
                  Applicant: {applicant.fullName || "Unknown"} (Submitted:{" "}
                  {new Date(applicant.submittedAt).toLocaleDateString()})
                </span>
                {expanded[applicant.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expanded[applicant.id] && (
                <div id={`applicant-details-${applicant.id}`} className="p-6">
                  {/* Applicant Verification */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaPassport className="mr-2" /> Applicant Verification
                    </h2>
                    <p>
                      <strong>Passport Number/National ID:</strong>{" "}
                      {applicant.passportNumber}
                    </p>
                    {applicant.passportPhoto &&
                      renderFilePreview(
                        applicant.passportPhoto,
                        `passport_photo_${applicant.userId}.jpg`
                      )}
                  </div>

                  {/* Social & Digital Proof */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaLink className="mr-2" /> Online Presence
                    </h2>
                    {applicant.linkedin && (
                      <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a
                          href={applicant.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {applicant.linkedin}
                        </a>
                      </p>
                    )}
                    {applicant.facebook && (
                      <p>
                        <strong>Facebook:</strong>{" "}
                        <a
                          href={applicant.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {applicant.facebook}
                        </a>
                      </p>
                    )}
                    {applicant.twitter && (
                      <p>
                        <strong>Twitter:</strong>{" "}
                        <a
                          href={applicant.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {applicant.twitter}
                        </a>
                      </p>
                    )}
                    {applicant.instagram && (
                      <p>
                        <strong>Instagram:</strong>{" "}
                        <a
                          href={applicant.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {applicant.instagram}
                        </a>
                      </p>
                    )}
                    {applicant.portfolio && (
                      <p>
                        <strong>Portfolio:</strong>{" "}
                        <a
                          href={applicant.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          {applicant.portfolio}
                        </a>
                      </p>
                    )}
                  </div>

                  {/* Document Upload */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaFileUpload className="mr-2" /> Uploaded Documents
                    </h2>
                    {applicant.academicTranscripts &&
                      renderFilePreview(
                        applicant.academicTranscripts,
                        `transcripts_${applicant.userId}.pdf`
                      )}
                    {applicant.supportingDocs &&
                      renderFilePreview(
                        applicant.supportingDocs,
                        `supporting_docs_${applicant.userId}.pdf`
                      )}
                    {applicant.englishScore &&
                      renderFilePreview(
                        applicant.englishScore,
                        `english_score_${applicant.userId}.pdf`
                      )}
                    {applicant.englishInstructionProof &&
                      renderFilePreview(
                        applicant.englishInstructionProof,
                        `english_proof_${applicant.userId}.pdf`
                      )}
                    {applicant.employmentProof &&
                      renderFilePreview(
                        applicant.employmentProof,
                        `employment_proof_${applicant.userId}.pdf`
                      )}
                    {applicant.sponsorPayslip &&
                      renderFilePreview(
                        applicant.sponsorPayslip,
                        `sponsor_payslip_${applicant.userId}.pdf`
                      )}
                    {applicant.recommendationLetter &&
                      renderFilePreview(
                        applicant.recommendationLetter,
                        `recommendation_letter_${applicant.userId}.pdf`
                      )}
                  </div>

                  {/* Consent */}
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaCheckSquare className="mr-2" /> Consent
                    </h2>
                    <p>
                      <strong>Accurate Information:</strong>{" "}
                      {applicant.consentFalseInfo ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Use of Name/Image:</strong>{" "}
                      {applicant.consentNameImage ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Competitive Scholarship:</strong>{" "}
                      {applicant.consentCompetitive ? "Yes" : "No"}
                    </p>
                  </div>

                  {/* Submission Details */}
                  <div>
                    <h2 className="text-xl text-emerald-700 mb-2">
                      Submission Details
                    </h2>
                    <p>
                      <strong>Submitted At:</strong>{" "}
                      {new Date(applicant.submittedAt).toLocaleString()}
                    </p>
                    <p>
                      <strong>User ID:</strong> {applicant.userId}
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

export default Stage2EligibilityViewer;
