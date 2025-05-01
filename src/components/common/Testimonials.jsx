// import { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation buttons

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Jane Doe",
//       region: "Lagos, Nigeria",
//       status: "Undergraduate Student",
//       quote:
//         "SouthPark’s full scholarship transformed my life, giving me the opportunity to pursue my dreams in Engineering with world-class mentors.",
//       image: "/me.jpeg",
//     },
//     {
//       name: "Michael Chen",
//       region: "Shanghai, China",
//       status: "Master’s Student",
//       quote:
//         "The supportive community and rigorous academics at SouthPark prepared me to lead in my field. I’m proud to be part of this global family.",
//       image: "/me.jpeg",
//     },
//     {
//       name: "Aisha Patel",
//       region: "Mumbai, India",
//       status: "Certification Program",
//       quote:
//         "SouthPark’s certification program helped me enhance my career in Cybersecurity. The resources and faculty support were exceptional.",
//       image: "/me.jpeg",
//     },
//     {
//       name: "Carlos Rivera",
//       region: "São Paulo, Brazil",
//       status: "Undergraduate Student",
//       quote:
//         "SouthPark gave me the tools to succeed in Computer Science while fostering a sense of community that made me feel at home.",
//       image: "/me.jpeg",
//     },
//     {
//       name: "Fatima Al-Sayed",
//       region: "Cairo, Egypt",
//       status: "Master’s Student",
//       quote:
//         "The scholarship I received allowed me to focus on my studies in Public Health, making a real difference in my community.",
//       image: "/me.jpeg",
//     },
//     {
//       name: "Liam O’Connor",
//       region: "Dublin, Ireland",
//       status: "Certification Program",
//       quote:
//         "SouthPark’s flexible certification program fit perfectly into my schedule, helping me upskill in Data Analytics with ease.",
//       image: "/me.jpeg",
//     },
//   ];

//   // State for the starting index of the visible testimonials
//   const [startIndex, setStartIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState("next"); // Track direction for animation

//   // Determine how many testimonials to show based on screen size
//   const [testimonialsPerPage, setTestimonialsPerPage] = useState(
//     window.innerWidth < 768 ? 1 : 3
//   );

//   // Update testimonialsPerPage on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setTestimonialsPerPage(window.innerWidth < 768 ? 1 : 3);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial check

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-play effect: Slide testimonials every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [startIndex]);

//   // Handle Next button click
//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setDirection("next");
//     setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   // Handle Previous button click
//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setDirection("prev");
//     setStartIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   // Reset transition state after animation completes
//   const handleTransitionEnd = () => {
//     setIsTransitioning(false);
//   };

//   // Calculate the testimonials to display based on the startIndex
//   const displayedTestimonials = [];
//   for (let i = 0; i < testimonialsPerPage; i++) {
//     const index = (startIndex + i) % testimonials.length;
//     displayedTestimonials.push(testimonials[index]);
//   }

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12">
//           What Our Students Say
//         </h2>
//         <div className="relative overflow-hidden">
//           <div
//             className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out ${
//               isTransitioning
//                 ? direction === "next"
//                   ? "-translate-x-full"
//                   : "translate-x-full"
//                 : "translate-x-0"
//             }`}
//             onTransitionEnd={handleTransitionEnd}
//           >
//             {displayedTestimonials.map((testimonial, index) => (
//               <div
//                 key={`${testimonial.name}-${index}`}
//                 className={`bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-emerald-50 transition duration-300 p-6 flex flex-col items-center text-center ${
//                   isTransitioning
//                     ? direction === "next"
//                       ? "animate-slide-in-right"
//                       : "animate-slide-out-left"
//                     : ""
//                 }`}
//               >
//                 <div className="relative mb-4">
//                   <LazyLoadImage
//                     src={testimonial.image}
//                     alt={`Portrait of ${testimonial.name}, a ${testimonial.status} from ${testimonial.region}`}
//                     effect="opacity"
//                     className="w-24 h-24 rounded-full object-cover border-2 border-emerald-600"
//                     wrapperClassName="w-24 h-24"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {testimonial.region}
//                 </p>
//                 <p className="text-sm text-emerald-600 font-medium mt-1">
//                   {testimonial.status}
//                 </p>
//                 <p className="text-gray-600 mt-4 italic">
//                   “{testimonial.quote}”
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Navigation Buttons */}
//         <div className="flex justify-center mt-8 space-x-4">
//           <button
//             onClick={handlePrev}
//             className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             aria-label="Previous testimonial"
//           >
//             <FaChevronLeft size={20} />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             aria-label="Next testimonial"
//           >
//             <FaChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Custom CSS for Animations */}
//       <style>
//         {`
//           @keyframes slide-in-right {
//             from {
//               transform: translateX(100%);
//               opacity: 0;
//             }
//             to {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }

//           @keyframes slide-out-left {
//             from {
//               transform: translateX(0);
//               opacity: 1;
//             }
//             to {
//               transform: translateX(-100%);
//               opacity: 0;
//             }
//           }

//           .animate-slide-in-right {
//             animation: slide-in-right 0.5s ease-in-out forwards;
//           }

//           .animate-slide-out-left {
//             animation: slide-out-left 0.5s ease-in-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Testimonials;

import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      region: "Lagos, Nigeria",
      status: "Undergraduate Student",
      quote:
        "SouthPark’s full scholarship transformed my life, giving me the opportunity to pursue my dreams in Engineering with world-class mentors.",
      image: "/me.jpeg",
    },
    {
      name: "Michael Chen",
      region: "Shanghai, China",
      status: "Master’s Student",
      quote:
        "The supportive community and rigorous academics at SouthPark prepared me to lead in my field. I’m proud to be part of this global family.",
      image: "/me.jpeg",
    },
    {
      name: "Aisha Patel",
      region: "Mumbai, India",
      status: "Certification Program",
      quote:
        "SouthPark’s certification program helped me enhance my career in Cybersecurity. The resources and faculty support were exceptional.",
      image: "/me.jpeg",
    },
    {
      name: "Carlos Rivera",
      region: "São Paulo, Brazil",
      status: "Undergraduate Student",
      quote:
        "SouthPark gave me the tools to succeed in Computer Science while fostering a sense of community that made me feel at home.",
      image: "/me.jpeg",
    },
    {
      name: "Fatima Al-Sayed",
      region: "Cairo, Egypt",
      status: "Master’s Student",
      quote:
        "The scholarship I received allowed me to focus on my studies in Public Health, making a real difference in my community.",
      image: "/me.jpeg",
    },
    {
      name: "Liam O’Connor",
      region: "Dublin, Ireland",
      status: "Certification Program",
      quote:
        "SouthPark’s flexible certification program fit perfectly into my schedule, helping me upskill in Data Analytics with ease.",
      image: "/me.jpeg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );
  const sliderRef = useRef();
  const [transitioning, setTransitioning] = useState(false);

  // Responsive layout
  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // After animation
  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      const index = (startIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <h1 className="text-5xl text-emerald-600">What Our Students Say</h1>
          <hr className="w-24 bg-emerald-600 text-emerald-600 mt-4 mb-8" />
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex transition-transform duration-700 ease-in-out ${
              transitioning ? "translate-x-[-100%]" : "translate-x-0"
            }`}
            style={{ width: `${testimonialsPerPage * 100}%` }}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 px-6 py-8 text-center">
                  <div className="">
                    <LazyLoadImage
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                      effect="opacity"
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-emerald-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.region}</p>
                  <p className="text-sm text-emerald-600 font-medium">
                    {testimonial.status}
                  </p>
                  <p className="text-gray-600 mt-4 italic">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
