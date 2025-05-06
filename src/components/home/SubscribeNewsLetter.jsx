import { useState } from "react";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log("Subscribed with email:", email);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <section
      className="py-12 bg-emerald-600 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/impactbg.jpg')` }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white mb-8">
          Stay updated with the latest news, scholarship opportunities, and
          events at SouthPark University.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-64 p-3 border border-white focus:outline-none text-white"
            aria-label="Email address for newsletter subscription"
            required
          />
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-emerald-700 text-white py-3 px-6 font-semibold hover:bg-emerald-700 transition duration-300 shadow-md hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
