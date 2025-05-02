import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Programs = () => {
  return (
    <>
      {/* Our Programs Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl text-emerald-600">Our Programs</h1>
            <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/programs">
              <div className="p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 cursor-pointer">
                <h4 className="text-3xl text-emerald-600">
                  Undergraduate Programs
                </h4>
                <p className="text-gray-600 mt-3 text-lg">
                  Explore a wide range of majors and minors with full
                  scholarship opportunities, tailored to your academic and
                  career goals.
                </p>
                <div className="relative mt-4 overflow-hidden shadow-md">
                  <LazyLoadImage
                    src="bg3.jpg"
                    alt="SouthPark University undergraduate students in a classroom"
                    effect="opacity"
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-emerald-300 opacity-10 hover:opacity-30 transition duration-500"></div>
                </div>
              </div>
            </Link>
            <Link to="/programs">
              <div className="p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 cursor-pointer">
                <h4 className="text-3xl  text-emerald-600">
                  Graduate Programs
                </h4>
                <p className="text-gray-600 mt-3 text-lg">
                  Advance your career with our master’s and doctoral programs,
                  supported by scholarships and designed for leadership.
                </p>
                <div className="relative mt-4 overflow-hidden shadow-md">
                  <LazyLoadImage
                    src="/bg4.jpg"
                    alt="SouthPark University graduate students at a seminar"
                    effect="opacity"
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-emerald-300 opacity-10 hover:opacity-30 transition duration-500"></div>
                </div>
              </div>
            </Link>
            <Link to="/programs">
              <div className="p-6 bg-white shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 cursor-pointer">
                <h4 className="text-3xl text-emerald-600">
                  Certification Programs
                </h4>
                <p className="text-gray-600 mt-3 text-lg">
                  Enhance your credentials with specialized certifications,
                  backed by scholarship support for career growth.
                </p>
                <div className="relative mt-4 overflow-hidden shadow-md">
                  <LazyLoadImage
                    src="/bg5.jpg"
                    alt="SouthPark University students receiving certification"
                    effect="opacity"
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-emerald-300 opacity-10 hover:opacity-30 transition duration-500"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
