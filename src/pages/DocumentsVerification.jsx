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
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Stage2EligibilityViewer = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const [emailSearch, setEmailSearch] = useState("");

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const applicantsCollection = collection(db, "applicants");
        const applicantsSnapshot = await getDocs(applicantsCollection);
        const applicantsList = applicantsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          submittedAt: doc.data().submittedAt
            ? new Date(doc.data().submittedAt).toISOString()
            : "N/A",
        }));

        const applicantsWithDetails = await Promise.all(
          applicantsList.map(async (applicant) => {
            try {
              const eligibilityDocRef = doc(
                db,
                "eligibility",
                applicant.userId
              );
              const eligibilityDoc = await getDoc(eligibilityDocRef);
              const fullName = eligibilityDoc.exists()
                ? eligibilityDoc.data().fullName || "Unknown"
                : "Unknown";
              const email = eligibilityDoc.exists()
                ? eligibilityDoc.data().email || "N/A"
                : "N/A";
              return { ...applicant, fullName, email };
            } catch (error) {
              console.error(
                `Error fetching details for user ${applicant.userId}:`,
                error
              );
              return { ...applicant, fullName: "Unknown", email: "N/A" };
            }
          })
        );

        setApplicants(applicantsWithDetails);
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

  const handleDelete = (applicantId, applicantName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${applicantName || "Unknown"} from the view?`
    );
    if (confirmed) {
      setApplicants((prevApplicants) =>
        prevApplicants.filter((applicant) => applicant.id !== applicantId)
      );
      toast.success("Applicant removed from view.");
    }
  };

  const downloadFile = (fileData, defaultFileName) => {
    if (!fileData || !fileData.base64) {
      toast.error("No file available for download.");
      return;
    }

    try {
      const { base64, name, type } = fileData;
      const fileName = name || defaultFileName;
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

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

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

  const filterApplicants = () => {
    return applicants.filter((applicant) => {
      let dateMatch = true;
      if (dateFilter.startDate || dateFilter.endDate) {
        if (applicant.submittedAt === "N/A") return false;
        const itemDate = new Date(applicant.submittedAt);
        const start = dateFilter.startDate
          ? new Date(dateFilter.startDate)
          : null;
        const end = dateFilter.endDate ? new Date(dateFilter.endDate) : null;
        dateMatch =
          (!start || itemDate >= start) &&
          (!end || itemDate <= new Date(end.setHours(23, 59, 59, 999)));
      }

      const emailMatch = applicant.email
        ? applicant.email.toLowerCase().includes(emailSearch.toLowerCase())
        : false;

      return dateMatch && (!emailSearch || emailMatch);
    });
  };

  const filteredApplicants = filterApplicants();

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
          Stage 2 Applications ({filteredApplicants.length})
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
        {filteredApplicants.length === 0 ? (
          <p className="text-gray-600 text-lg">No applications found.</p>
        ) : (
          filteredApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300">
                <button
                  className="flex-1 flex justify-between items-center"
                  onClick={() => toggleExpand(applicant.id)}
                  aria-expanded={expanded[applicant.id]}
                  aria-controls={`applicant-details-${applicant.id}`}
                >
                  <span className="text-lg font-semibold">
                    Applicant: {applicant.fullName || "Unknown"} (Email:{" "}
                    {applicant.email})
                  </span>
                  {expanded[applicant.id] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <button
                  className="ml-4 flex items-center text-white hover:text-red-300"
                  onClick={() => handleDelete(applicant.id, applicant.fullName)}
                  aria-label={`Remove ${applicant.fullName || "Unknown"} from view`}
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
              {expanded[applicant.id] && (
                <div id={`applicant-details-${applicant.id}`} className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaPassport className="mr-2" /> Applicant Verification
                    </h2>
                    <p>
                      <strong>Passport Number/National ID:</strong>{" "}
                      {applicant.passportNumber || "N/A"}
                    </p>
                    {applicant.passportPhoto &&
                      renderFilePreview(
                        applicant.passportPhoto,
                        `passport_photo_${applicant.userId}.jpg`
                      )}
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaLink className="mr-2" /> Online Presence
                    </h2>
                    {applicant.linkedin ? (
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
                    ) : (
                      <p>
                        <strong>LinkedIn:</strong> N/A
                      </p>
                    )}
                    {applicant.facebook ? (
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
                    ) : (
                      <p>
                        <strong>Facebook:</strong> N/A
                      </p>
                    )}
                    {applicant.twitter ? (
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
                    ) : (
                      <p>
                        <strong>Twitter:</strong> N/A
                      </p>
                    )}
                    {applicant.instagram ? (
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
                    ) : (
                      <p>
                        <strong>Instagram:</strong> N/A
                      </p>
                    )}
                    {applicant.portfolio ? (
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
                    ) : (
                      <p>
                        <strong>Portfolio:</strong> N/A
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-emerald-700 mb-2 flex items-center">
                      <FaFileUpload className="mr-2" /> Uploaded Documents
                    </h2>
                    {applicant.academicTranscripts ? (
                      renderFilePreview(
                        applicant.academicTranscripts,
                        `transcripts_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>Academic Transcripts:</strong> N/A
                      </p>
                    )}
                    {applicant.supportingDocs ? (
                      renderFilePreview(
                        applicant.supportingDocs,
                        `supporting_docs_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>Supporting Documents:</strong> N/A
                      </p>
                    )}
                    {applicant.englishScore ? (
                      renderFilePreview(
                        applicant.englishScore,
                        `english_score_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>English Score:</strong> N/A
                      </p>
                    )}
                    {applicant.englishInstructionProof ? (
                      renderFilePreview(
                        applicant.englishInstructionProof,
                        `english_proof_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>English Instruction Proof:</strong> N/A
                      </p>
                    )}
                    {applicant.employmentProof ? (
                      renderFilePreview(
                        applicant.employmentProof,
                        `employment_proof_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>Employment Proof:</strong> N/A
                      </p>
                    )}
                    {applicant.sponsorPayslip ? (
                      renderFilePreview(
                        applicant.sponsorPayslip,
                        `sponsor_payslip_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>Sponsor Payslip:</strong> N/A
                      </p>
                    )}
                    {applicant.recommendationLetter ? (
                      renderFilePreview(
                        applicant.recommendationLetter,
                        `recommendation_letter_${applicant.userId}.pdf`
                      )
                    ) : (
                      <p>
                        <strong>Recommendation Letter:</strong> N/A
                      </p>
                    )}
                  </div>

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

                  <div>
                    <h2 className="text-xl text-emerald-700 mb-2">
                      Submission Details
                    </h2>
                    <p>
                      <strong>Submitted At:</strong>{" "}
                      {applicant.submittedAt !== "N/A"
                        ? new Date(applicant.submittedAt).toLocaleString()
                        : "N/A"}
                    </p>
                    <p>
                      <strong>User ID:</strong> {applicant.userId || "N/A"}
                    </p>
                    <p>
                      <strong>Email:</strong> {applicant.email}
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
