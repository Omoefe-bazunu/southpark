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
  FaHistory,
  FaStethoscope,
} from "react-icons/fa";
import phdData from "../../data/PhDCourses.json";

const PhDPrograms = () => {
  const [openFaculties, setOpenFaculties] = useState({});
  const [openPrograms, setOpenPrograms] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Log the imported data for debugging
    console.log("Imported phdData:", phdData);
    if (!phdData || !phdData.Faculties || !Array.isArray(phdData.Faculties)) {
      setError("Invalid or missing Faculties data in JSON file.");
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
    "Faculty of Agriculture & Natural Resources": (
      <FaGlobe className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Architecture & Design": (
      <FaWrench className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Classical Studies": (
      <FaHistory className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Business & Social Sciences": (
      <FaBriefcase className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Education": (
      <FaChalkboardTeacher className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Technology & Engineering": (
      <FaLaptopCode className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Veterinary Medicine": (
      <FaPaw className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Arts & Humanities": (
      <FaPalette className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Hospitality & Culinary Arts": (
      <FaUtensils className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Fashion & Beauty": (
      <FaPaintBrush className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Law & Legal Studies": (
      <FaGavel className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Medicine & Allied Health": (
      <FaHeartbeat className="text-emerald-600 text-2xl" />
    ),
    "Faculty of Sciences": <FaBook className="text-emerald-600 text-2xl" />,
    "Faculty of Nursing & Public Health": (
      <FaStethoscope className="text-emerald-600 text-2xl" />
    ),
  };

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded-lg">
        <p>Error: {error}</p>
        <p>Please check the PhD_Programs_Merged.json file in src/data/.</p>
      </div>
    );
  }

  if (!phdData.Faculties || phdData.Faculties.length === 0) {
    return (
      <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
        <p>No PhD programs found. Please verify the JSON data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {phdData.Faculties.map((division, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaculty(division.Faculty)}
            className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-t-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-between"
            aria-expanded={openFaculties[division.Faculty] || false}
            aria-controls={`faculty-${index}-content`}
          >
            <div className="flex items-center space-x-4">
              {facultyIcons[division.Faculty] || (
                <FaBook className="text-emerald-600 text-2xl" />
              )}
              <span>{division.Faculty || "Unnamed Faculty"}</span>
            </div>
            <span>{openFaculties[division.Faculty] ? "−" : "+"}</span>
          </button>
          <div
            id={`faculty-${index}-content`}
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              openFaculties[division.Faculty] ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white text-gray-800">
              {!division.Programs || division.Programs.length === 0 ? (
                <p className="text-gray-600">
                  No programs available for this faculty.
                </p>
              ) : (
                <ul className="space-y-2">
                  {division.Programs.map((program, programIndex) => (
                    <li key={programIndex}>
                      <button
                        onClick={() =>
                          toggleProgram(division.Faculty, program.Program)
                        }
                        className="w-full text-left text-gray-800 hover:text-emerald-600 flex items-center justify-between"
                        aria-expanded={
                          openPrograms[
                            `${division.Faculty}-${program.Program}`
                          ] || false
                        }
                        aria-controls={`program-${index}-${programIndex}-content`}
                      >
                        <span>{program.Program || "Unnamed Program"}</span>
                        <span>
                          {openPrograms[
                            `${division.Faculty}-${program.Program}`
                          ]
                            ? "−"
                            : "+"}
                        </span>
                      </button>
                      <div
                        id={`program-${index}-${programIndex}-content`}
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out pl-6 mt-2 ${
                          openPrograms[`${division.Faculty}-${program.Program}`]
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

export default PhDPrograms;
