import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import { FaBandAid, FaDumbbell, FaAppleAlt } from "react-icons/fa";

const Athletics = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="SouthPark University athletes competing on the field"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-4 px-4 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Athletics</span>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Our athletics program</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            At South Park University, we believe in fostering excellence both on
            and off the field. Our athletics program is an integral part of the
            student experience, promoting physical fitness, leadership,
            teamwork, and community spirit. With a focus on sportsmanship,
            academic success, and personal growth, we offer a range of athletic
            programs that challenge and inspire our students.
          </p>
          <LazyLoadImage
            src="/bg4.jpg"
            alt="SouthPark University athletes training together"
            effect="opacity"
            className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Our Teams</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            South Park University offers a variety of sports teams for both men
            and women, providing opportunities for student-athletes to compete
            at the highest levels. Our teams represent the university with
            pride, and our athletes are known for their dedication, discipline,
            and sportsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Men’s Sports */}
            <div className="bg-white flex flex-col p-6 shadow-md animate__animated animate__fadeInUp">
              <h3 className="text-2xl text-emerald-600 mb-4">Men’s Sports</h3>

              <p className="list-disc list-inside text-gray-600 text-lg space-y-2">
                Basketball, Soccer, Track and Field Football, Baseball, Tennis,
                Swimming and Diving
              </p>
              <LazyLoadImage
                src="/bg3.jpg"
                alt="SouthPark University men's sports team in action"
                effect="opacity"
                className="w-full h-48 border-b-6 border-emerald-600 object-cover mx-auto mt-6"
              />
            </div>

            {/* Women’s Sports */}
            <div className="bg-white p-6 flex flex-col shadow-md animate__animated animate__fadeInUp">
              <h3 className="text-2xl text-emerald-600 mb-4">Women’s Sports</h3>

              <p className="list-disc list-inside text-gray-600 text-lg space-y-2">
                Basketball, Soccer, Track and Field Football, Baseball, Tennis,
                Swimming and Diving
              </p>
              <LazyLoadImage
                src="/bg3.jpg"
                alt="SouthPark University men's sports team in action"
                effect="opacity"
                className="w-full h-48 border-b-6 border-emerald-600 object-cover mx-auto mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Academic Success Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Commitment to Success</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            At South Park University, we prioritize academic excellence
            alongside athletic performance. Our student-athletes are supported
            by dedicated academic advisors and resources to help them succeed in
            the classroom while excelling in their respective sports.
          </p>
          <p className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            <strong>GPA Requirements:</strong> 3.0 or higher for continued
            eligibility. <br />
            <strong>Academic Support:</strong> Tutors, study halls, and
            mentorship programs for athletes.
          </p>
          <LazyLoadImage
            src="/bg4.jpg"
            alt="SouthPark University student-athlete studying with a mentor"
            effect="opacity"
            className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* State-of-the-Art Athletic Facilities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-5xl text-emerald-600">Athletic Facilities</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg animate__animated animate__fadeInUp animate__delay-1s">
            South Park University’s athletic facilities provide our
            student-athletes with the resources needed to reach their full
            potential. Our facilities include:
          </p>
          <p className=" text-gray-600 text-lg space-y-2 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            Multi-Purpose Sports Complex - Track and Field Stadium - Indoor and
            Outdoor Courts - Fitness Center - Swimming Pool
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University athletic facilities"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-3s"
            />
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University athletic facilities"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-3s"
            />
            <LazyLoadImage
              src="/bg3.jpg"
              alt="SouthPark University athletic facilities"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-3s"
            />
          </div>
        </div>
      </section>

      {/* Athletic Events and Game Day Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-5xl text-white">Events & Game Day</h1>
            <hr className="w-24 bg-emerald-600 text-white mt-4 mb-8" />
          </div>
          <p className="text-white text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Join us in supporting our student-athletes at home games and
            competitions. Game days at South Park University are filled with
            excitement, pride, and school spirit. Be sure to attend and cheer on
            our teams to victory.
          </p>

          <LazyLoadImage
            src="/bg4.jpg"
            alt="SouthPark University game day with fans cheering"
            effect="opacity"
            className="w-full h-64 object-cover border-b-6 border-white shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* Join Our Teams Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Join Our Team</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Interested in joining South Park University Athletics? Our
            recruitment process is designed to find athletes who not only excel
            in their sport but are also committed to academic and personal
            development. Whether you are a seasoned athlete or new to a sport,
            we invite you to apply.
          </p>

          <LazyLoadImage
            src="/bg4.jpg"
            alt="SouthPark University athlete recruitment event"
            effect="opacity"
            className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
          <Link
            to="/apply-athletics"
            className="block bg-emerald-600 text-white py-3 mt-8 px-8 w-fit font-semibold text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform animate__animated animate__fadeInUp animate__delay-2s"
            aria-label="Apply to join SouthPark University Athletics"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Sports Medicine and Wellness Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Sports Medicine and Wellness
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Our Sports Medicine Team is committed to the well-being of all
            student-athletes. From injury prevention to rehabilitation, we
            ensure that our athletes are in the best shape to compete and
            thrive.
          </p>
          <ul className="list-none space-y-4 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            <li className="flex items-center space-x-4 text-gray-600 text-lg">
              <span className="text-emerald-600">
                <FaBandAid size={24} />
              </span>
              <span>Injury Treatment</span>
            </li>
            <li className="flex items-center space-x-4 text-gray-600 text-lg">
              <span className="text-emerald-600">
                <FaDumbbell size={24} />
              </span>
              <span>Rehabilitation Programs</span>
            </li>
            <li className="flex items-center space-x-4 text-gray-600 text-lg">
              <span className="text-emerald-600">
                <FaAppleAlt size={24} />
              </span>
              <span>Nutritional Guidance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Campus and Community Engagement Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Campus and Community Engagement
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            South Park Athletics plays a central role in the broader university
            community. We encourage students, faculty, staff, and alumni to get
            involved in supporting our teams, attending games, and participating
            in athletic events that bring our campus together.
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            <LazyLoadImage
              src="/bg4.jpg"
              alt="SouthPark University community supporting athletics events"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
            />
            <LazyLoadImage
              src="/bg4.jpg"
              alt="SouthPark University community supporting athletics events"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
            />
            <LazyLoadImage
              src="/bg4.jpg"
              alt="SouthPark University community supporting athletics events"
              effect="opacity"
              className="w-full h-64 object-cover border-b-6 border-emerald-600 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Athletics;
