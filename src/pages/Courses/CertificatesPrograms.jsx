import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaGlobe,
  FaPalette,
  FaLaptopCode,
  FaBriefcase,
  FaChalkboardTeacher,
  FaHeartbeat,
  FaWrench,
  FaGavel,
  FaUtensils,
  FaPaintBrush,
  FaPaw,
} from "react-icons/fa";
import certificatesData from "../../data/ProfessionalCert.json";

const CertificatesPrograms = () => {
  const [openFaculties, setOpenFaculties] = useState({});
  const [openPrograms, setOpenPrograms] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Log the imported data for debugging
    console.log("Imported certificatesData:", certificatesData);
    if (
      !certificatesData ||
      !certificatesData["Professional Certificates & Diplomas"] ||
      typeof certificatesData["Professional Certificates & Diplomas"] !==
        "object"
    ) {
      setError("Invalid or missing data in JSON file.");
    }
  }, []);

  const toggleFaculty = (faculty) => {
    setOpenFaculties((prev) => ({
      ...prev,
      [faculty]: !prev[faculty],
    }));
  };

  const toggleProgram = (faculty, program) => {
    setOpenPrograms((prev) => ({
      ...prev,
      [`${faculty}-${program}`]: !prev[`${faculty}-${program}`],
    }));
  };

  const facultyIcons = {
    "Information Technology": (
      <FaLaptopCode className="text-emerald-600 text-2xl" />
    ),
    "Business & Management": (
      <FaBriefcase className="text-emerald-600 text-2xl" />
    ),
    "Education & Social Work": (
      <FaChalkboardTeacher className="text-emerald-600 text-2xl" />
    ),
    "Health & Sciences": <FaHeartbeat className="text-emerald-600 text-2xl" />,
    "Arts & Communication": <FaPalette className="text-emerald-600 text-2xl" />,
    "Law & Legal Studies": <FaGavel className="text-emerald-600 text-2xl" />,
    "Architecture & Design": <FaWrench className="text-emerald-600 text-2xl" />,
    "Agriculture & Natural Resources": (
      <FaGlobe className="text-emerald-600 text-2xl" />
    ),
    "Hospitality & Culinary Arts": (
      <FaUtensils className="text-emerald-600 text-2xl" />
    ),
    "Fashion & Beauty": <FaPaintBrush className="text-emerald-600 text-2xl" />,
    "Veterinary Medicine": <FaPaw className="text-emerald-600 text-2xl" />,
  };

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded-lg">
        <p>Error: {error}</p>
        <p>
          Please check the Certificates_Programs_Merged.json file in src/data/.
        </p>
      </div>
    );
  }

  const faculties = certificatesData["Professional Certificates & Diplomas"];
  if (!faculties || Object.keys(faculties).length === 0) {
    return (
      <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
        <p>No certificate programs found. Please verify the JSON data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Object.keys(faculties).map((faculty, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaculty(faculty)}
            className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-t-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-between"
            aria-expanded={openFaculties[faculty] || false}
            aria-controls={`faculty-${index}-content`}
          >
            <div className="flex items-center space-x-4">
              {facultyIcons[faculty] || (
                <FaBook className="text-emerald-600 text-2xl" />
              )}
              <span>{faculty || "Unnamed Faculty"}</span>
            </div>
            <span>{openFaculties[faculty] ? "−" : "+"}</span>
          </button>
          <div
            id={`faculty-${index}-content`}
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              openFaculties[faculty] ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white text-gray-800">
              {!faculties[faculty] || faculties[faculty].length === 0 ? (
                <p className="text-gray-600">
                  No programs available for this faculty.
                </p>
              ) : (
                <ul className="space-y-2">
                  {faculties[faculty].map((program, programIndex) => (
                    <li key={programIndex}>
                      <button
                        onClick={() => toggleProgram(faculty, program.Program)}
                        className="w-full text-left text-gray-800 hover:text-emerald-600 flex items-center justify-between"
                        aria-expanded={
                          openPrograms[`${faculty}-${program.Program}`] || false
                        }
                        aria-controls={`program-${index}-${programIndex}-content`}
                      >
                        <span>{program.Program || "Unnamed Program"}</span>
                        <span>
                          {openPrograms[`${faculty}-${program.Program}`]
                            ? "−"
                            : "+"}
                        </span>
                      </button>
                      <div
                        id={`program-${index}-${programIndex}-content`}
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out pl-6 mt-2 ${
                          openPrograms[`${faculty}-${program.Program}`]
                            ? "max-h-[1000px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="p-4 bg-gray-100 rounded-lg">
                          <h4 className="text-lg font-semibold text-gray-700">
                            Overview
                          </h4>
                          <p className="text-gray-600">
                            {program.Overview || "No overview available."}
                          </p>
                          <h4 className="text-lg font-semibold text-gray-700 mt-4">
                            Key Learning Outcomes
                          </h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {program.KeyLearningOutcomes &&
                            Array.isArray(program.KeyLearningOutcomes) ? (
                              program.KeyLearningOutcomes.map(
                                (outcome, idx) => <li key={idx}>{outcome}</li>
                              )
                            ) : (
                              <li>No learning outcomes available.</li>
                            )}
                          </ul>
                          <h4 className="text-lg font-semibold text-gray-700 mt-4">
                            Career Prospects
                          </h4>
                          <p className="text-gray-600">
                            {program.CareerProspects ||
                              "No career prospects available."}
                          </p>
                          <h4 className="text-lg font-semibold text-gray-700 mt-4">
                            Unique Features
                          </h4>
                          <p className="text-gray-600">
                            {program.UniqueFeatures ||
                              "No unique features available."}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesPrograms;
