import { useState } from "react";
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
  FaStethoscope,
  FaHistory,
} from "react-icons/fa";
import UndergraduatePrograms from "./Courses/UndergraduatePrograms";
import MastersPrograms from "./Courses/MastersPrograms";
import PhDPrograms from "./Courses/PhDPrograms";
import CertificatesPrograms from "./Courses/CertificatesPrograms";

const AcademicDivisions = ({ degreeProgram }) => {
  const [openFaculties, setOpenFaculties] = useState({});

  const toggleFaculty = (faculty) => {
    setOpenFaculties((prev) => ({
      ...prev,
      [faculty]: !prev[faculty],
    }));
  };

  const academicDivisions = {
    mba: [
      {
        faculty: "MBA Programs",
        icon: <FaBriefcase className="text-emerald-600 text-2xl" />,
        courses: [
          "General MBA",
          "MBA in Finance",
          "MBA in Marketing",
          "MBA in Entrepreneurship",
          "MBA in Healthcare Management",
          "MBA in Information Technology",
          "MBA in Supply Chain Management",
          "MBA in Human Resource Management",
          "MBA in Innovation & Strategy",
          "MBA in International Business",
          "Executive MBA (EMBA)",
          "Online MBA",
        ],
      },
    ],
  };

  if (!degreeProgram) {
    return (
      <p className="text-white italic">
        Please select a degree program to view available academic divisions and
        courses.
      </p>
    );
  }

  switch (degreeProgram) {
    case "undergraduate":
      return <UndergraduatePrograms />;
    case "masters":
      return <MastersPrograms />;
    case "phd":
      return <PhDPrograms />;
    case "certificates":
      return <CertificatesPrograms />;
  }

  const divisions = academicDivisions[degreeProgram] || [];

  return (
    <div className="space-y-4">
      {divisions.map((division, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaculty(division.faculty)}
            className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-t-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-between"
            aria-expanded={openFaculties[division.faculty] || false}
            aria-controls={`faculty-${index}-content`}
          >
            <div className="flex items-center space-x-4">
              {division.icon}
              <span>{division.faculty}</span>
            </div>
            <span>{openFaculties[division.faculty] ? "−" : "+"}</span>
          </button>
          <div
            id={`faculty-${index}-content`}
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              openFaculties[division.faculty] ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white text-gray-800">
              <ul className="list-disc list-inside space-y-2">
                {division.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicDivisions;
