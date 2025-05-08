import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaMoneyBillWave,
  FaCalculator,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const FinancialPlanningGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Image and Title */}
        <div className="text-center mb-10">
          <LazyLoadImage
            src="https://via.placeholder.com/600x200?text=South+Park+University+Campus"
            alt="South Park University Campus"
            effect="opacity"
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
          />
          <h1 className="text-4xl  text-emerald-700 flex items-center justify-center gap-2">
            South Park University Financial Planning Guide for Prospective
            Students
          </h1>
          <p className="mt-2 text-gray-600">
            Invest in your future with confidence at South Park University.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700">
            At South Park University, we understand that investing in your
            education is one of the most important financial decisions you will
            make. That’s why we offer a range of financial support options to
            help make your academic journey affordable and accessible.
          </p>
          <p className="mt-2 text-gray-700">
            Whether you're planning to pursue an undergraduate, master’s, PhD,
            MBA, or professional certificate, this guide will walk you through
            your funding options and help you prepare financially for your time
            at SPU.
          </p>
        </div>

        {/* Step 1: Explore Your Financial Aid Options */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2
            className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("step1")}
          >
            <FaMoneyBillWave />
            Step 1: Explore Your Financial Aid Options (click here)
          </h2>
          {expandedSection === "step1" && (
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800">
                  1. Full Ride Scholarships
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>
                    <strong>Eligibility:</strong> Open to all students
                    regardless of nationality, race, or religion.
                  </li>
                  <li>
                    <strong>Coverage:</strong> Tuition, accommodation, travel
                    costs, and visa guidance.
                  </li>
                  <li>
                    <strong>No exams required:</strong> No IELTS, TOEFL, GRE, or
                    GMAT.
                  </li>
                  <li>
                    <strong>Application Fee:</strong> Free.
                  </li>
                  <li>
                    <strong>Important:</strong> Slots are limited – apply early.
                  </li>
                </ul>
                <p className="mt-2 text-gray-600">
                  <strong>Contact:</strong>{" "}
                  <a
                    href="mailto:scholarships@southparkuni.com"
                    className="text-emerald-600 hover:underline"
                  >
                    scholarships@southparkuni.com
                  </a>
                </p>
                <p className="mt-1 text-gray-600">
                  <strong>More Info:</strong>{" "}
                  <a
                    href="https://www.southparkuni.com/aid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    https://www.southparkuni.com/aid
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">2. Grants</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>
                    Awarded based on financial need, merit, or special
                    eligibility (e.g. community service, minority groups, or
                    unique talents).
                  </li>
                  <li>Typically do not require repayment.</li>
                  <li>Can be combined with other forms of aid.</li>
                  <li>Check individual program requirements and deadlines.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">
                  3. Student Loans
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>
                    For students who need additional support beyond scholarships
                    and grants.
                  </li>
                  <li>Offered at low-interest rates through our partners.</li>
                  <li>Flexible repayment options available.</li>
                  <li>
                    Note: A 12-month moratorium is available before repayment
                    begins.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Estimate Your Costs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2
            className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("step2")}
          >
            <FaCalculator />
            Step 2: Estimate Your Costs (click here)
          </h2>
          {expandedSection === "step2" && (
            <div className="mt-4">
              <p className="text-gray-600">
                Use this outline to estimate your annual educational expenses
                (amounts are approximate and may vary):
              </p>
              <table className="min-w-full mt-4 bg-gray-50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="py-2 px-4 text-left">Item</th>
                    <th className="py-2 px-4 text-left">
                      Estimated Cost (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">Tuition (per year)</td>
                    <td className="py-2 px-4">$5,000 – $10,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Housing & Meals</td>
                    <td className="py-2 px-4">$3,000 – $6,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Books & Supplies</td>
                    <td className="py-2 px-4">$500 – $1,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Health Insurance & Misc.</td>
                    <td className="py-2 px-4">$1,000 – $2,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Travel & Visa Support</td>
                    <td className="py-2 px-4">Covered by Scholarship*</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">
                      Total Estimated Cost
                    </td>
                    <td className="py-2 px-4 font-medium">Up to $19,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm text-gray-600 italic">
                *For full-ride scholarship recipients, tuition, travel, and visa
                support are completely covered.
              </p>
            </div>
          )}
        </div>

        {/* Step 3: Create a Personal Financial Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2
            className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 cursor-pointer"
            onClick={() => toggleSection("step3")}
          >
            <FaCalculator /> Step 3: Create a Personal Financial Plan (click
            here)
          </h2>
          {expandedSection === "step3" && (
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Assess Your Current Financial Situation:</strong> Know
                how much you or your family can contribute.
              </li>
              <li>
                <strong>Apply for Scholarships Early:</strong> Maximize your
                chances by applying ahead of deadlines.
              </li>
              <li>
                <strong>Plan for Emergencies:</strong> Save a small fund for
                unplanned expenses.
              </li>
              <li>
                <strong>Track Spending:</strong> Use budgeting apps to monitor
                your monthly expenses.
              </li>
            </ul>
          )}
        </div>

        {/* Final Tips */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2">
            <FaCheckCircle /> Final Tips
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
            <li>
              Apply for financial aid immediately after your application to SPU.
            </li>
            <li>Attend a virtual info session to get personalized guidance.</li>
            <li>
              Reach out to the Financial Aid Office for help with forms or
              documents.
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-50 rounded-lg shadow-lg p-6 text-center hidden">
          <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
            <FaEnvelope /> 📧 Contact Financial Aid:{" "}
            <a
              href="mailto:scholarships@southparkuni.com"
              className="text-emerald-600 hover:underline"
            >
              scholarships@southparkuni.com
            </a>
          </p>
          <p className="mt-2 text-lg text-gray-700 flex items-center justify-center gap-2">
            <FaGlobe /> 🌐 Learn More:{" "}
            <a
              href="https://www.southparkuni.com/aid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              https://www.southparkuni.com/aid
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanningGuide;
