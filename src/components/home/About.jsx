import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-5xl text-emerald-600">About Us</h1>
          <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl text-gray-800">
              Fueling Minds. Igniting Purpose at South Park University
            </h2>
            <p className="text-gray-600 text-lg">
              Located in Anderson, South Carolina, SouthPark University is a
              leading Christian institution offering full scholarships to
              empower students. With over 50 degree programs across
              undergraduate, graduate, and doctoral levels, we blend academic
              excellence, faith-driven values, and innovation to prepare
              students for impactful lives. Our four pillars—Academic Strength,
              Faith-Driven Mission, Community Hospitality, and Purposeful
              Living—define our commitment to transforming lives through
              education.
            </p>
            <Link
              to="/about"
              className="inline-block bg-emerald-600 text-white py-3 px-6 font-semibold text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform bg-gradient-to-r from-emerald-600 to-emerald-500"
              aria-label="Discover the full story of SouthPark University"
            >
              Read More
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <LazyLoadImage
              src="/featrdabt.jpg"
              alt="SouthPark University students in a classroom setting"
              effect="opacity"
              className="w-full h-96 object-cover shadow-lg border-b-6 border-emerald-600"
              wrapperClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-emerald-600 opacity-10 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
