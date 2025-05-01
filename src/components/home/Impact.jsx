import { useState, useEffect, useRef } from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import CountUp from "react-countup"; // For counter animation

const Impact = () => {
  // State and ref for IntersectionObserver in Impact Section
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver to detect when the Impact section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className="py-16 bg-emerald-600 bg-center bg-cover bg-no-repeat"
        ref={sectionRef}
        style={{ backgroundImage: `url('/impactbg.jpg')` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-wgite">Our Impact</h1>
            <hr className="w-24 bg-white text-white mt-4 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Counter 1: Scholarships Awarded */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-700 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <span className="text-4xl md:text-5xl  text-white mb-2">
                {isVisible ? (
                  <CountUp end={5000} duration={2} separator="," suffix="+" />
                ) : (
                  "0+"
                )}
              </span>
              <p className="text-lg text-gray-100">Scholarships Awarded</p>
            </div>

            {/* Counter 2: Graduates */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-700 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <span className="text-4xl md:text-5xl text-white mb-2">
                {isVisible ? (
                  <CountUp end={10000} duration={2} separator="," suffix="+" />
                ) : (
                  "0+"
                )}
              </span>
              <p className="text-lg text-gray-100">Graduates</p>
            </div>

            {/* Counter 3: Countries Represented */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-700 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <span className="text-4xl md:text-5xl text-white mb-2">
                {isVisible ? (
                  <CountUp end={50} duration={2} suffix="+" />
                ) : (
                  "0+"
                )}
              </span>
              <p className="text-lg text-gray-100">Countries Represented</p>
            </div>

            {/* Counter 4: Community Projects */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-700 rounded-lg shadow-lg animate__animated animate__fadeIn">
              <span className="text-4xl md:text-5xl text-white mb-2">
                {isVisible ? (
                  <CountUp end={1000} duration={2} separator="," suffix="+" />
                ) : (
                  "0+"
                )}
              </span>
              <p className="text-lg text-gray-100">Community Projects</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
