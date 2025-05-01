import { FaGraduationCap, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* World-Class Scholarship Programs */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md hover:shadow-lg transition duration-300">
          <FaGraduationCap
            className="text-5xl text-emerald-600 mb-4"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            World-Class Scholarship Programs
          </h2>
          <p className="text-gray-600">
            SouthPark University offers fully funded scholarships for
            undergraduate, graduate, and international students, ensuring access
            to top-tier education for all.
          </p>
        </div>

        {/* Expert Mentors for Scholarship Students */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md hover:shadow-lg transition duration-300">
          <FaChalkboardTeacher
            className="text-5xl text-emerald-600 mb-4"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Expert Mentors for Scholarship Students
          </h2>
          <p className="text-gray-600">
            Our dedicated mentors provide personalized guidance to scholarship
            recipients, helping them excel academically and achieve their
            dreams.
          </p>
        </div>

        {/* Flexible Learning Opportunities */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md hover:shadow-lg transition duration-300">
          <FaLaptop
            className="text-5xl text-emerald-600 mb-4"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Flexible Learning Opportunities
          </h2>
          <p className="text-gray-600">
            With a range of programs and scholarship support, SouthPark offers
            flexible learning options for students worldwide, including those
            from Nigeria studying in the US.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
