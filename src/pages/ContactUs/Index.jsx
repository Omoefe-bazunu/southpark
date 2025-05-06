import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "animate.css"; // For animations
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import SubscribeNewsletter from "../../components/home/SubscribeNewsLetter";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const dataToSubmit = {
        ...formData,
        timestamp: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "contact"), dataToSubmit);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-emerald-600 mb-4">Success!</h2>
          <p className="text-gray-600">
            Your message has been submitted successfully. We'll get back to you
            soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        {/* Hero Section with Image and Breadcrumb */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <LazyLoadImage
            src="/bg5.jpg"
            alt="SouthPark University campus contact section"
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
            <span className="text-emerald-400">Contact Us</span>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-emerald-600 text-center mb-8 animate__animated animate__fadeIn">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center text-lg mb-12 animate__animated animate__fadeIn animate__delay-1s">
              Have questions or need assistance? Fill out the form below, and
              we’ll get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 shadow-md animate__animated animate__fadeInUp">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                    placeholder="Subject"
                    aria-label="Subject"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                    rows="5"
                    placeholder="Your Message"
                    aria-label="Your Message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white py-3 px-8 text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Submit Contact Form"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* WhatsApp Chat Option */}
            <div className="mt-8 text-center animate__animated animate__fadeInUp animate__delay-1s">
              <p className="text-gray-600 text-lg mb-4">
                Prefer to chat? Reach us on WhatsApp!
              </p>
              <a
                href="https://wa.me/1234567890?text=Hello%20SouthPark%20University,%20I%20have%20a%20question!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition duration-300 shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Chat with SouthPark University on WhatsApp"
              >
                <FaWhatsapp className="mr-2" size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SubscribeNewsletter />
    </div>
  );
};

export default ContactUs;
