import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations

const CampusLife = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="Vibrant campus life at SouthPark University with students"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
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
            className="w-full h-64  object-cover shadow-md animate__animated animate__fadeInUp animate__delay-3s"
          />
        </div>
      </section>

      {/* Transformative Experiences Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Transformative Experiences
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Engagement */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/bg4.jpg"
                alt="Students participating in clubs at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl text-gray-800 mb-2">Student Engagement</h3>
              <p className="text-gray-600">
                Get involved in over 50 student clubs, organizations, and
                leadership opportunities.
              </p>
            </div>

            {/* Spiritual Growth */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/bg3.jpg"
                alt="Students in a worship service at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl text-gray-800 mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                Participate in regular chapel services, worship events, and
                mission trips designed to deepen your faith.
              </p>
            </div>

            {/* Wellness and Recreation */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/bg5.jpg"
                alt="Students using fitness facilities at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl text-gray-800 mb-2">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Welcome Week</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>

          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Welcome Week is an exciting introduction to your new home. Meet
            fellow students, get acclimated to the campus, and join in fun
            events like:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Move-In Day", image: "/bg4.jpg" },
              { title: "Beach Blast", image: "/bg4.jpg" },
              {
                title: "Trojan Tradition",
                image: "/bg4.jpg",
              },
              { title: "West Fest", image: "/bg4.jpg" },
              {
                title: "Outdoor Movie Night",
                image: "/bg4.jpg",
              },
              {
                title: "Campus Tours",
                image: "/bg4.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative border-b-6 border-white h-48 overflow-hidden shadow-md animate__animated animate__fadeInUp animate__delay-2s"
              >
                <LazyLoadImage
                  src={event.image}
                  alt={event.title}
                  effect="opacity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Year Experience Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-white">First Year Experience</h1>
            <hr className="w-24 bg-emerald-600 text-white mt-4 mb-8" />
          </div>
          <p className="text-white text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Our First Year Experience (FYE) program is designed to ensure you
            feel seen and supported from day one. Through Alpha Groups, new
            students are paired with upperclassman mentors, fostering new
            friendships and connections.
          </p>
          <LazyLoadImage
            src="/bg3.jpg"
            alt="Modern residence halls at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover  transform hover:scale-110 transition duration-500 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Campus Housing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600"> Campus Housing</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            South Park University offers modern, comfortable on-campus housing
            options designed to promote community and academic success. Nearly
            75% of our undergraduate students live on campus in a variety of
            residence halls and apartment-style suites.
          </p>
          <div className="relative">
            <LazyLoadImage
              src="/bg3.jpg"
              alt="Modern residence halls at SouthPark University"
              effect="opacity"
              className="w-full h-64 object-cover  transform hover:scale-110 transition duration-500 shadow-md animate__animated animate__fadeInUp animate__delay-2s"
            />
            {/* <div className="absolute w-12 h-12 bg-emerald-600 top-8 left-105 shadow-md "></div> */}
          </div>
        </div>
      </section>

      {/* Dining Services Section */}

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Dining Services</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>

          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Enjoy a variety of dining options at our on-campus eateries,
            including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Commons Café", image: "/bg4.jpg" },
              { title: "Chick-fil-A", image: "/bg4.jpg" },
              {
                title: "Starbucks",
                image: "/bg4.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative h-48 overflow-hidden shadow-md animate__animated animate__fadeInUp animate__delay-2s"
              >
                <LazyLoadImage
                  src={event.image}
                  alt={event.title}
                  effect="opacity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Life Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Spiritual Life</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chapel Services */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/bg5.jpg"
                alt="Students in chapel services at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl  text-gray-800 mb-2">Chapel Services</h3>
            </div>

            {/* Student-Led Worship */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/bg5.jpg"
                alt="Students leading worship at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl  text-gray-800 mb-2">
                Student-Led Worship
              </h3>
            </div>

            {/* Mission Trips */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/bg5.jpg"
                alt="Students on mission trips from SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover transform hover:scale-110 duration-300 rounded-lg mb-4"
              />
              <h3 className="text-xl  text-gray-800 mb-2">Mission Trips</h3>
            </div>
          </div>
          <p className="text-gray-600 mt-8 animate__animated animate__fadeInUp animate__delay-3s">
            At South Park University, we integrate faith into every aspect of
            student life. With a strong Christian faculty and staff, we offer a
            variety of programs to nurture your spiritual growth.
          </p>
        </div>
      </section>

      {/* Campus Safety Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-white">Campus Safety</h1>
            <hr className="w-24 bg-emerald-600 text-white mt-4 mb-8" />
          </div>
          <p className="text-white text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Our Campus Safety team is committed to providing a secure
            environment for all students, faculty, and staff. From emergency
            response to general safety practices, we prioritize your well-being.
          </p>
          <LazyLoadImage
            src="/bg4.jpg"
            alt="Campus safety team at SouthPark University"
            effect="opacity"
            className="w-full h-64 border-b-6 border-white object-cover shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Recreation & Fitness Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Recreation & Fitness</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* State-of-the-Art Fitness Center */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp">
              <LazyLoadImage
                src="/bg5.jpg"
                alt="State-of-the-art fitness center at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                State-of-the-Art Fitness Center
              </h3>
            </div>

            {/* Intramural Sports */}
            <div className="bg-white p-6 flex flex-col  shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s">
              <LazyLoadImage
                src="/bg4.jpg"
                alt="Students playing intramural sports at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                Intramural Sports
              </h3>
            </div>

            {/* Outdoor Pool */}
            <div className="bg-white p-6 flex flex-col shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s">
              <LazyLoadImage
                src="/bg3.jpg"
                alt="Outdoor pool at SouthPark University"
                effect="opacity"
                className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 duration-300"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Student Activities</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>

          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            South Park University offers a wide range of campus events and
            festivals designed to bring the community together, such as:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fall Fest", image: "/bg4.jpg" },
              { title: "Andie Craft Fair", image: "/bg4.jpg" },
              {
                title: "SP's Got Talent",
                image: "/bg4.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative border-b-8 border-white h-48 overflow-hidden shadow-md animate__animated animate__fadeInUp animate__delay-2s"
              >
                <LazyLoadImage
                  src={event.image}
                  alt={event.title}
                  effect="opacity"
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0  bg-gradient-to-b from-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity and Inclusion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Diversity and Inclusion
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            We believe that every individual is created in God's image. Our
            Office of Diversity and Inclusion ensures that all students feel
            valued and respected as they engage with our diverse campus
            community.
          </p>
          <LazyLoadImage
            src="/bg3.jpg"
            alt="Diverse students at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>

      {/* Thrive Wellness Center Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">
              Thrive Wellness Center
            </h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <p className="text-gray-600 text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Access both health and counseling services at our Thrive Wellness
            Center, providing students with the support they need for overall
            well-being.
          </p>
          <LazyLoadImage
            src="/bg3.jpg"
            alt="Thrive Wellness Center at SouthPark University"
            effect="opacity"
            className="w-full h-64 object-cover shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          />
        </div>
      </section>
    </main>
  );
};

export default CampusLife;
