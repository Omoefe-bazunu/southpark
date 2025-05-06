import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    // Input validation
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await signup(
        formData.email,
        formData.password,
        formData.name
      );
      if (success) {
        toast.success("Account created! Please check your email to verify.");
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.error(err);
      let errorMessage =
        err.message ||
        "An error occurred during sign-up. Please try again later.";

      if (err.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already registered. Please use a different email or login.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      }

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen text-gray-700 bg-gradient-to-b from-gray-100 to-emerald-50 flex flex-col items-center justify-center py-12">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="SouthPark University athletes competing on the field"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
            aria-label="Home Page"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Sign Up</span>
        </div>
      </section>
      <div className="max-w-6xl w-full mt-12 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInUp">
          <h1 className="text-3xl text-emerald-700 mb-6 text-center">
            Sign Up
          </h1>
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-required="true"
                minLength="6"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-300 disabled:opacity-50"
              aria-label="Sign Up"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
            <div className="text-gray-700 w-full flex gap-2 justify-center">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-600 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
