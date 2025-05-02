import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations

const CampusLife = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/assets/images/campus-life-hero.jpg"
          alt="Vibrant campus life at SouthPark University with students"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-4 px-4 lg:px-12 left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Campus Life</span>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Our Programs</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            College is a time of transformation. At South Park University, we
            believe that a great education goes beyond classrooms and textbooks.
            It's a journey of personal growth, leadership development, and
            faith. Our campus is more than just a place to learn; it’s a vibrant
            community that shapes your academic and spiritual journey.
          </p>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            Every aspect of your experience—from residence halls and dining
            options to campus worship services and extracurricular
            activities—serves as an extension of your education. Here, you will
            grow, build lasting relationships, and deepen your faith. Whether
            you're engaging in campus events, worship, or participating in
            student clubs, you’ll find opportunities to develop your gifts and
            talents.
          </p>
          <LazyLoadImage
            src="/bg4.jpg"
            alt="Students engaging in campus activities at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* Transformative Experiences Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 animate__animated animate__fadeIn">
            Transformative Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Engagement */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/assets/images/student-engagement.jpg"
                alt="Students participating in clubs at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Student Engagement
              </h3>
              <p className="text-gray-600">
                Get involved in over 50 student clubs, organizations, and
                leadership opportunities.
              </p>
            </div>

            {/* Spiritual Growth */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/assets/images/spiritual-growth.jpg"
                alt="Students in a worship service at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Spiritual Growth
              </h3>
              <p className="text-gray-600">
                Participate in regular chapel services, worship events, and
                mission trips designed to deepen your faith.
              </p>
            </div>

            {/* Wellness and Recreation */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/assets/images/wellness-recreation.jpg"
                alt="Students using fitness facilities at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Wellness and Recreation
              </h3>
              <p className="text-gray-600">
                Take advantage of our fitness facilities, outdoor recreation
                programs, and wellness center to maintain a healthy balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Week Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Welcome Week
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Welcome Week is an exciting introduction to your new home. Meet
            fellow students, get acclimated to the campus, and join in fun
            events like:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            <li>Move-In Day</li>
            <li>Beach Blast</li>
            <li>Trojan Tradition</li>
            <li>West Fest</li>
            <li>Outdoor Movie Night</li>
          </ul>
          <LazyLoadImage
            src="/assets/images/welcome-week.jpg"
            alt="Students enjoying Welcome Week events at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* First Year Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            First Year Experience
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Our First Year Experience (FYE) program is designed to ensure you
            feel seen and supported from day one. Through Alpha Groups, new
            students are paired with upperclassman mentors, fostering new
            friendships and connections.
          </p>
          <LazyLoadImage
            src="/assets/images/first-year-experience.jpg"
            alt="New students with mentors at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Campus Housing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Campus Housing
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            South Park University offers modern, comfortable on-campus housing
            options designed to promote community and academic success. Nearly
            75% of our undergraduate students live on campus in a variety of
            residence halls and apartment-style suites.
          </p>
          <LazyLoadImage
            src="/assets/images/campus-housing.jpg"
            alt="Modern residence halls at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Dining Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Dining Services
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Enjoy a variety of dining options at our on-campus eateries,
            including:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            <li>The Commons Café</li>
            <li>Chick-fil-A</li>
            <li>Starbucks</li>
          </ul>
          <LazyLoadImage
            src="/assets/images/dining-services.jpg"
            alt="Students dining at SouthPark University eateries"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* Spiritual Life Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 animate__animated animate__fadeIn">
            Spiritual Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chapel Services */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/assets/images/chapel-services.jpg"
                alt="Students in chapel services at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Chapel Services
              </h3>
            </div>

            {/* Student-Led Worship */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/assets/images/student-worship.jpg"
                alt="Students leading worship at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Student-Led Worship
              </h3>
            </div>

            {/* Mission Trips */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/assets/images/mission-trips.jpg"
                alt="Students on mission trips from SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mission Trips
              </h3>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-8 animate__animated animate__fadeInUp animate__delay-3s">
            At South Park University, we integrate faith into every aspect of
            student life. With a strong Christian faculty and staff, we offer a
            variety of programs to nurture your spiritual growth.
          </p>
        </div>
      </section>

      {/* Campus Safety Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Campus Safety
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Our Campus Safety team is committed to providing a secure
            environment for all students, faculty, and staff. From emergency
            response to general safety practices, we prioritize your well-being.
          </p>
          <LazyLoadImage
            src="/assets/images/campus-safety.jpg"
            alt="Campus safety team at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Recreation & Fitness Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 animate__animated animate__fadeIn">
            Recreation & Fitness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* State-of-the-Art Fitness Center */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/assets/images/fitness-center.jpg"
                alt="State-of-the-art fitness center at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                State-of-the-Art Fitness Center
              </h3>
            </div>

            {/* Intramural Sports */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/assets/images/intramural-sports.jpg"
                alt="Students playing intramural sports at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Intramural Sports
              </h3>
            </div>

            {/* Outdoor Pool */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/assets/images/outdoor-pool.jpg"
                alt="Outdoor pool at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Outdoor Pool
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Student Activities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Student Activities
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            South Park University offers a wide range of campus events and
            festivals designed to bring the community together, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
            <li>Fall Fest</li>
            <li>Andie Craft Fair</li>
            <li>SP’s Got Talent</li>
          </ul>
          <LazyLoadImage
            src="/assets/images/student-activities.jpg"
            alt="Students at campus festivals at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* Diversity and Inclusion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Diversity and Inclusion
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            We believe that every individual is created in God's image. Our
            Office of Diversity and Inclusion ensures that all students feel
            valued and respected as they engage with our diverse campus
            community.
          </p>
          <LazyLoadImage
            src="/assets/images/diversity-inclusion.jpg"
            alt="Diverse students at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Thrive Wellness Center Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
            Thrive Wellness Center
          </h2>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Access both health and counseling services at our Thrive Wellness
            Center, providing students with the support they need for overall
            well-being.
          </p>
          <LazyLoadImage
            src="/assets/images/thrive-wellness.jpg"
            alt="Thrive Wellness Center at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>
    </main>
  );
};

export default CampusLife;
