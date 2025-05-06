import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations (install via: npm install animate.css)
import Features from "./Features";

const Hero = () => {
  // State for the slideshow (current image index)
  const [currentImage, setCurrentImage] = useState(0);

  // Array of banner images with alt text for accessibility
  const bannerImages = [
    {
      src: "/bg3.jpg",
      alt: "SouthPark University students celebrating scholarship awards",
    },
    {
      src: "/bg4.jpg",
      alt: "A diverse group of students studying together on campus",
    },
    {
      src: "/bg5.jpg",
      alt: "SouthPark University campus with modern facilities",
    },
  ];

  // Effect for fading slideshow (changes image every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [bannerImages.length]);

  return (
    <div className="min-h-screen bg-gray-50 pt-25">
      {/* Hero Section with Fading Slideshow */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Slideshow Images with Parallax Effect */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="opacity"
              className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
              wrapperClassName="w-full h-full"
              aria-hidden={currentImage !== index} // Accessibility: hide inactive images
            />
          </div>
        ))}

        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col justify-center items-center text-center px-4">
          {/* Headline with Animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl px-8  text-white mb-4 drop-shadow-lg animate__animated animate__fadeInDown">
            Advance your Studies with a Full Ride
            <span className="text-yellow-200"> Scholarship</span>
          </h1>

          {/* Tagline with Animation */}
          <p className="text-md md:text-lg lg:text-xl text-gray-200 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Transforming Lives Through Education at SouthPark
          </p>

          {/* Buttons with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <Link
              to="/stageOne"
              className="bg-emerald-600 lg:w-36 text-white py-3 px-8 hover:bg-emerald-800 text-lg transition duration-300 shadow-lg hover:scale-105 transform "
              aria-label="Apply for a scholarship at SouthPark University"
            >
              Apply
            </Link>
            <Link
              to="/academics"
              className="border-2 border-white text-white py-3 px-8 text-lg hover:bg-emerald-600 hover:text-white hover:border-0 transition duration-300 shadow-lg hover:scale-105 transform"
              aria-label="Find your program at SouthPark University"
            >
              Find Your Program
            </Link>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImage === index
                  ? "bg-emerald-600"
                  : "bg-white bg-opacity-50"
              } transition duration-300`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      {/* Features Section */}
      <Features />
    </div>
  );
};

export default Hero;
