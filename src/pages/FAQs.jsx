import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa"; // Icons for expand/collapse
import "animate.css"; // For animations

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const FAQ = () => {
  // State to track which FAQ item is expanded
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the scholarship real?",
      answer:
        "Yes, South Park University is offering full ride scholarships to eligible international students.",
    },
    {
      question: "What’s covered in the scholarship?",
      answer:
        "100% tuition fee for your selected course. Some programs may also include accommodation or stipends (subject to availability).",
    },
    {
      question: "Do I need to write IELTS, TOEFL, GRE, or GMAT?",
      answer: "No. These are not required for this scholarship.",
    },
    {
      question: "Is the application free?",
      answer: "Yes, applying and checking your eligibility is completely free.",
    },
    {
      question: "Is there any cost involved at all?",
      answer:
        "Only if you are found eligible, there’s a one-time $100 documentation processing fee. This covers verification, formal admission prep, and admin costs.",
    },
    {
      question: "Who can apply?",
      answer:
        "Anyone with a completed high school diploma or higher qualification from any country.",
    },
    {
      question: "How do I apply?",
      answer:
        "Just fill out our short application form, and we’ll take it from there!",
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16">
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
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">FAQs</span>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl  text-emerald-600 text-center mb-12 animate__animated animate__fadeIn">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200  bg-white shadow-md"
              >
                {/* Question (Clickable to toggle answer) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-expanded={expanded === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg  text-gray-800">{faq.question}</h3>
                  <span className="text-emerald-600">
                    {expanded === index ? (
                      <FaMinus size={20} />
                    ) : (
                      <FaPlus size={20} />
                    )}
                  </span>
                </button>

                {/* Answer (Collapsible) */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === index
                      ? "max-h-96 opacity-100 animate__animated animate__fadeIn"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              to="/stageOne"
              className="inline-block bg-emerald-600 text-white py-3 px-8  font-semibold text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform animate__animated animate__fadeInUp"
              aria-label="Apply for a scholarship at SouthPark University"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
