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

const AcademicDivisions = ({ degreeProgram }) => {
  const [openFaculties, setOpenFaculties] = useState({});

  const toggleFaculty = (faculty) => {
    setOpenFaculties((prev) => ({
      ...prev,
      [faculty]: !prev[faculty],
    }));
  };

  // Define the academic divisions and courses based on degree program
  const academicDivisions = {
    undergraduate: [
      {
        faculty: "Faculty of Sciences",
        icon: <FaBook className="text-emerald-600 text-2xl" />,
        courses: [
          "B.Sc. Biology",
          "B.Sc. Chemistry",
          "B.Sc. Physics",
          "B.Sc. Environmental Science",
          "B.Sc. Biotechnology",
          "B.Sc. Microbiology",
          "B.Sc. Agriculture",
          "B.Sc. Geology",
          "B.Sc. Mathematics",
          "B.Sc. Statistics",
          "B.Sc. Food Science & Technology",
          "B.Sc. Marine Science",
          "B.Sc. Biomedical Science",
        ],
      },
      {
        faculty: "Faculty of Arts & Humanities",
        icon: <FaPalette className="text-emerald-600 text-2xl" />,
        courses: [
          "B.A. English Language & Literature",
          "B.A. History",
          "B.A. Philosophy",
          "B.A. Religious Studies",
          "B.A. Creative Writing",
          "B.A. Music",
          "B.A. Fine Arts",
          "B.A. Political Science",
          "B.A. International Relations",
          "B.A. Sociology",
          "B.A. Anthropology",
          "B.A. Communication & Media Studies",
        ],
      },
      {
        faculty: "Faculty of Business & Social Sciences",
        icon: <FaBriefcase className="text-emerald-600 text-2xl" />,
        courses: [
          "B.Sc. Economics",
          "B.Sc. Psychology",
          "B.Sc. Criminology",
          "B.Sc. Public Administration",
          "B.Sc. Human Resource Management",
          "B.Sc. Marketing",
          "B.Sc. Business Administration",
          "B.Sc. Accounting & Finance",
          "B.Sc. Hospitality & Tourism Management",
          "B.Sc. Supply Chain Management",
        ],
      },
      {
        faculty: "Faculty of Information Technology & Engineering",
        icon: <FaLaptopCode className="text-emerald-600 text-2xl" />,
        courses: [
          "B.Sc. Computer Science",
          "B.Sc. Information Technology",
          "B.Sc. Cybersecurity",
          "B.Sc. Software Engineering",
          "B.Sc. Artificial Intelligence",
          "B.Sc. Data Science",
          "B.Sc. Robotics",
          "B.Sc. Electrical & Electronics Engineering",
          "B.Sc. Civil Engineering",
          "B.Sc. Mechanical Engineering",
        ],
      },
      {
        faculty: "Faculty of Law & Legal Studies",
        icon: <FaGavel className="text-emerald-600 text-2xl" />,
        courses: [
          "Bachelor of Laws (LLB)",
          "B.A. Legal Studies",
          "B.A. Criminology & Criminal Justice",
          "B.A. International Law & Diplomacy",
        ],
      },
      {
        faculty: "Faculty of Education",
        icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
        courses: [
          "Bachelor of Education (B.Ed.)",
          "B.A. Early Childhood Education",
          "B.A. Special Education",
          "B.Sc. Educational Technology",
          "B.A. Curriculum & Instruction",
        ],
      },
      {
        faculty: "Faculty of Medicine & Allied Health",
        icon: <FaHeartbeat className="text-emerald-600 text-2xl" />,
        courses: [
          "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
          "B.Sc. Nursing (BSN)",
          "B.Sc. Public Health",
          "B.Sc. Physiotherapy",
          "B.Sc. Medical Laboratory Science",
          "B.Sc. Radiography",
        ],
      },
      {
        faculty: "Faculty of Architecture & Design",
        icon: <FaWrench className="text-emerald-600 text-2xl" />,
        courses: [
          "Bachelor of Architecture (B.Arch)",
          "B.A. Interior Design",
          "B.F.A. Graphic Design",
          "B.A. Industrial Design",
          "B.A. Urban & Regional Planning",
        ],
      },
      {
        faculty: "Faculty of Agriculture & Natural Resources",
        icon: <FaGlobe className="text-emerald-600 text-2xl" />,
        courses: [
          "B.Sc. Agriculture",
          "B.Sc. Agribusiness Management",
          "B.Sc. Forestry & Wildlife Management",
          "B.Sc. Soil Science",
        ],
      },
      {
        faculty: "Faculty of Hospitality & Culinary Arts",
        icon: <FaUtensils className="text-emerald-600 text-2xl" />,
        courses: [
          "B.Sc. Hospitality Management",
          "B.Sc. Culinary Arts",
          "B.Sc. Tourism & Event Management",
          "B.Sc. Hotel & Resort Management",
        ],
      },
      {
        faculty: "Faculty of Fashion & Beauty",
        icon: <FaPaintBrush className="text-emerald-600 text-2xl" />,
        courses: [
          "B.A. Fashion Design",
          "B.Sc. Cosmetology",
          "B.A. Textile & Apparel Management",
        ],
      },
      {
        faculty: "Faculty of Veterinary Medicine",
        icon: <FaPaw className="text-emerald-600 text-2xl" />,
        courses: [
          "Bachelor of Veterinary Science (B.V.Sc)",
          "B.Sc. Animal Health & Production",
        ],
      },
      {
        faculty: "Faculty of Classical Studies",
        icon: <FaHistory className="text-emerald-600 text-2xl" />,
        courses: [
          "B.A. Classical Studies",
          "B.A. Ancient History",
          "B.A. Latin & Greek",
        ],
      },
    ],
    masters: [
      {
        faculty: "Faculty of Sciences",
        icon: <FaBook className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Environmental Science",
          "M.Sc. Applied Mathematics",
          "M.Sc. Biotechnology",
          "M.Sc. Physics",
          "M.Sc. Biochemistry",
          "M.Sc. Public Health",
        ],
      },
      {
        faculty: "Faculty of Arts & Humanities",
        icon: <FaPalette className="text-emerald-600 text-2xl" />,
        courses: [
          "M.A. English Literature",
          "M.A. International Relations",
          "M.A. Philosophy",
          "M.A. Development Studies",
          "M.A. History",
          "M.A. Communication Studies",
        ],
      },
      {
        faculty: "Faculty of Business & Social Sciences",
        icon: <FaBriefcase className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Economics",
          "M.Sc. Psychology",
          "M.Sc. Human Resource Management",
          "M.Sc. Project Management",
          "M.Sc. Finance",
          "M.Sc. Marketing",
          "M.Sc. Political Science",
        ],
      },
      {
        faculty: "Faculty of Technology & Engineering",
        icon: <FaLaptopCode className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Computer Science",
          "M.Sc. Information Systems",
          "M.Sc. Cybersecurity",
          "M.Sc. Artificial Intelligence",
          "M.Sc. Data Analytics",
          "M.Sc. Software Development",
          "M.Sc. Engineering Management",
        ],
      },
      {
        faculty: "Faculty of Law & Legal Studies",
        icon: <FaGavel className="text-emerald-600 text-2xl" />,
        courses: [
          "Master of Laws (LL.M)",
          "M.A. International Law",
          "M.A. Human Rights Law",
          "M.A. Environmental Law",
        ],
      },
      {
        faculty: "Faculty of Education",
        icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
        courses: [
          "Master of Education (M.Ed.)",
          "M.A. Educational Leadership",
          "M.Sc. Curriculum & Instruction",
          "M.A. Special Education",
          "M.Sc. Educational Technology",
        ],
      },
      {
        faculty: "Faculty of Medicine & Allied Health",
        icon: <FaHeartbeat className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Public Health (MPH)",
          "M.Sc. Nursing (MSN)",
          "M.Sc. Clinical Psychology",
          "M.Sc. Physiotherapy",
          "M.Sc. Medical Laboratory Science",
        ],
      },
      {
        faculty: "Faculty of Architecture & Design",
        icon: <FaWrench className="text-emerald-600 text-2xl" />,
        courses: [
          "Master of Architecture (M.Arch)",
          "M.A. Interior Design",
          "M.F.A. Graphic Design",
          "M.Sc. Urban & Regional Planning",
        ],
      },
      {
        faculty: "Faculty of Agriculture & Natural Resources",
        icon: <FaGlobe className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Agronomy",
          "M.Sc. Agricultural Economics",
          "M.Sc. Environmental Management",
          "M.Sc. Soil Science",
        ],
      },
      {
        faculty: "Faculty of Hospitality & Culinary Arts",
        icon: <FaUtensils className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Hospitality Management",
          "M.Sc. Culinary Innovation & Food Science",
          "M.Sc. Tourism & Event Management",
        ],
      },
      {
        faculty: "Faculty of Fashion & Beauty",
        icon: <FaPaintBrush className="text-emerald-600 text-2xl" />,
        courses: [
          "M.A. Fashion Design",
          "M.Sc. Textile & Apparel Management",
          "M.A. Cosmetology & Aesthetics",
        ],
      },
      {
        faculty: "Faculty of Veterinary Medicine",
        icon: <FaPaw className="text-emerald-600 text-2xl" />,
        courses: [
          "Master of Veterinary Science (M.V.Sc)",
          "M.Sc. Animal Health & Production",
        ],
      },
      {
        faculty: "Faculty of Nursing & Public Health",
        icon: <FaStethoscope className="text-emerald-600 text-2xl" />,
        courses: [
          "M.Sc. Nursing (MSN)",
          "Master of Public Health (MPH)",
          "M.Sc. Community Health Nursing",
          "M.Sc. Health Promotion",
        ],
      },
      {
        faculty: "Faculty of Classical Studies",
        icon: <FaHistory className="text-emerald-600 text-2xl" />,
        courses: [
          "M.A. Classical Studies",
          "M.A. Ancient History",
          "M.A. Latin & Greek",
        ],
      },
    ],
    phd: [
      {
        faculty: "Faculty of Sciences",
        icon: <FaBook className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Environmental Science",
          "PhD in Biotechnology",
          "PhD in Mathematics",
          "PhD in Physics",
          "PhD in Chemistry",
        ],
      },
      {
        faculty: "Faculty of Arts & Humanities",
        icon: <FaPalette className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in English Literature",
          "PhD in Philosophy",
          "PhD in History",
        ],
      },
      {
        faculty: "Faculty of Business & Social Sciences",
        icon: <FaBriefcase className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Psychology",
          "PhD in Sociology",
          "PhD in Political Science",
          "PhD in International Relations",
          "PhD in Economics",
        ],
      },
      {
        faculty: "Faculty of Technology & Engineering",
        icon: <FaLaptopCode className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Computer Science",
          "PhD in Data Science",
          "PhD in Engineering",
        ],
      },
      {
        faculty: "Faculty of Law & Legal Studies",
        icon: <FaGavel className="text-emerald-600 text-2xl" />,
        courses: ["PhD in Law", "Doctor of Juridical Science (SJD)"],
      },
      {
        faculty: "Faculty of Education",
        icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Education",
          "Doctor of Education (EdD)",
          "PhD in Curriculum & Instruction",
        ],
      },
      {
        faculty: "Faculty of Medicine & Allied Health",
        icon: <FaHeartbeat className="text-emerald-600 text-2xl" />,
        courses: [
          "Doctor of Medicine (MD)",
          "PhD in Public Health",
          "PhD in Clinical Psychology",
          "PhD in Physiotherapy",
        ],
      },
      {
        faculty: "Faculty of Architecture & Design",
        icon: <FaWrench className="text-emerald-600 text-2xl" />,
        courses: ["PhD in Architecture", "PhD in Urban & Regional Planning"],
      },
      {
        faculty: "Faculty of Agriculture & Natural Resources",
        icon: <FaGlobe className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Agronomy",
          "PhD in Agricultural Economics",
          "PhD in Environmental Science",
        ],
      },
      {
        faculty: "Faculty of Hospitality & Culinary Arts",
        icon: <FaUtensils className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Hospitality Management",
          "PhD in Culinary Arts & Food Science",
        ],
      },
      {
        faculty: "Faculty of Fashion & Beauty",
        icon: <FaPaintBrush className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Fashion & Textile Studies",
          "PhD in Cosmetology & Aesthetic Sciences",
        ],
      },
      {
        faculty: "Faculty of Veterinary Medicine",
        icon: <FaPaw className="text-emerald-600 text-2xl" />,
        courses: [
          "Doctor of Veterinary Medicine (DVM)",
          "PhD in Animal Health & Production",
        ],
      },
      {
        faculty: "Faculty of Nursing & Public Health",
        icon: <FaStethoscope className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Nursing",
          "Doctor of Nursing Practice (DNP)",
          "PhD in Public Health",
        ],
      },
      {
        faculty: "Faculty of Classical Studies",
        icon: <FaHistory className="text-emerald-600 text-2xl" />,
        courses: [
          "PhD in Classical Studies",
          "PhD in Ancient History",
          "PhD in Latin & Greek",
        ],
      },
    ],
    certificates: [
      {
        faculty: "Information Technology",
        icon: <FaLaptopCode className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Data Analytics",
          "Certificate in Web Development",
          "Certificate in Mobile App Development",
          "Certificate in Cybersecurity",
          "Certificate in Cloud Computing",
          "Certificate in UI/UX Design",
          "Certificate in Networking (Cisco, CompTIA)",
        ],
      },
      {
        faculty: "Business & Management",
        icon: <FaBriefcase className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Project Management (PMP)",
          "Certificate in Digital Marketing",
          "Certificate in Business Analytics",
          "Certificate in Accounting (ACCA, CPA)",
          "Certificate in Supply Chain & Logistics",
          "Certificate in Human Resource Management",
        ],
      },
      {
        faculty: "Education & Social Work",
        icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Teaching & Learning",
          "Certificate in Special Needs Education",
          "Certificate in Guidance & Counselling",
          "Certificate in Child Psychology",
        ],
      },
      {
        faculty: "Health & Sciences",
        icon: <FaHeartbeat className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in First Aid & Emergency Care",
          "Certificate in Public Health",
          "Certificate in Health Informatics",
          "Certificate in Medical Laboratory Practices",
        ],
      },
      {
        faculty: "Arts & Communication",
        icon: <FaPalette className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Creative Writing",
          "Certificate in Photography",
          "Certificate in Film Production",
          "Certificate in Public Speaking",
          "Certificate in Social Media Management",
        ],
      },
      {
        faculty: "Law & Legal Studies",
        icon: <FaGavel className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Legal Research & Writing",
          "Certificate in International Human Rights Law",
          "Certificate in Environmental Law",
        ],
      },
      {
        faculty: "Architecture & Design",
        icon: <FaWrench className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Sustainable Architecture",
          "Certificate in Interior Design",
          "Certificate in Urban Planning",
        ],
      },
      {
        faculty: "Agriculture & Natural Resources",
        icon: <FaGlobe className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Organic Farming",
          "Certificate in Agricultural Extension",
          "Certificate in Environmental Impact Assessment",
        ],
      },
      {
        faculty: "Hospitality & Culinary Arts",
        icon: <FaUtensils className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Culinary Arts",
          "Certificate in Hospitality Management",
          "Certificate in Event Planning",
        ],
      },
      {
        faculty: "Fashion & Beauty",
        icon: <FaPaintBrush className="text-emerald-600 text-2xl" />,
        courses: [
          "Certificate in Fashion Design",
          "Certificate in Cosmetology",
          "Certificate in Textile Merchandising",
        ],
      },
      {
        faculty: "Veterinary Medicine",
        icon: <FaPaw className="text-emerald-600 text-2xl" />,
        courses: ["Certificate in Animal Health Care"],
      },
    ],
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

  const divisions = academicDivisions[degreeProgram] || [];

  if (!degreeProgram) {
    return (
      <p className="text-white italic">
        Please select a degree program to view available academic divisions and
        courses.
      </p>
    );
  }

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
