import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const WhyChoooseUs = () => {
  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div>
          <h1 className="text-5xl text-emerald-600">Why Choose South Park?</h1>
          <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
        </div>
        <div className="flex">
          <div className="max-w-5xl">
            <p className="text-gray-600 text-lg">
              South Park University is a hub of innovation, where students and
              faculty collaborate on groundbreaking research and technology.
              With over 80 top-ranked programs, we empower tomorrow’s
              change-makers to build a better future through purpose-driven
              discovery.
            </p>
          </div>
        </div>
        {/* Image Grid with Scale Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
          <div className="overflow-hidden shadow-md">
            <LazyLoadImage
              src="/wcu2.png"
              alt="SouthPark University students collaborating on innovative research"
              effect="opacity"
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              wrapperClassName="w-full h-full"
            />
          </div>
          <div className="overflow-hidden shadow-md">
            <LazyLoadImage
              src="/wcu1.png"
              alt="SouthPark University faculty and students working with advanced technology"
              effect="opacity"
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              wrapperClassName="w-full h-full"
            />
          </div>
          <div className="overflow-hidden shadow-md">
            <LazyLoadImage
              src="/wcu3.jpg"
              alt="SouthPark University students engaged in purpose-driven discovery"
              effect="opacity"
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              wrapperClassName="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoooseUs;
