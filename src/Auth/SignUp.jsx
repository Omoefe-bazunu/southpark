import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Check password strength in real-time
    if (name === "password") {
      setPasswordStrength({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    return Object.values(requirements).every(Boolean);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    // Input validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("Please enter both first and last name");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!formData.password) {
      setError("Please enter a password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError("Password does not meet requirements");
      return;
    }

    setIsSubmitting(true);
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const success = await signup(formData.email, formData.password, fullName);

      if (success) {
        toast.success("Account created! Please check your email to verify.");
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.error(err);
      let errorMessage = err.message || "An error occurred during sign-up.";

      if (err.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Password does not meet requirements.";
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
            Create Your Account
          </h1>
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                placeholder="john.doe@southparkuni.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-emerald-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium">Password Requirements:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li
                    className={
                      passwordStrength.length
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }
                  >
                    At least 8 characters
                  </li>
                  <li
                    className={
                      passwordStrength.uppercase
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }
                  >
                    At least one uppercase letter
                  </li>
                  <li
                    className={
                      passwordStrength.lowercase
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }
                  >
                    At least one lowercase letter
                  </li>
                  <li
                    className={
                      passwordStrength.number
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }
                  >
                    At least one number
                  </li>
                  <li
                    className={
                      passwordStrength.specialChar
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }
                  >
                    At least one special character
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-emerald-600"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-300 disabled:opacity-50 font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            <div className="text-center text-gray-700 pt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-600 hover:underline font-medium"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-emerald-700 mb-4">
            Account Information
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h3 className="font-medium text-emerald-800">
                Why create an account?
              </h3>
              <p className="text-gray-700 mt-1">
                Access university resources, register for courses, and connect
                with faculty.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800">Password Tips</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-1 space-y-1">
                <li>Use a unique password for your university account</li>
                <li>Consider using a passphrase instead of a password</li>
                <li>Never share your password with anyone</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800">Security Notice</h3>
              <p className="text-gray-700 mt-1">
                South Park University will never ask for your password via email
                or phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
