import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              {" "}
              <img
                src="/SouthparkLogowbt.png"
                alt="SouthPark Logo"
                width={60}
                height={60}
              />
              <h3 className="text-2xl ">South Park University</h3>
            </div>

            <p className="text-gray-400">
              Transforming lives through education with full scholarships and
              academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-emerald-600 transition duration-300"
                  aria-label="Home Page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-emerald-600 transition duration-300"
                  aria-label="About Page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-400 hover:text-emerald-600 transition duration-300"
                  aria-label="Programs Page"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/stageOne"
                  className="text-gray-400 hover:text-emerald-600 transition duration-300"
                  aria-label="Apply Page"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-emerald-600 transition duration-300"
                  aria-label="Contact Page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@southparkuni.com</li>
              <li>Phone: +1 (660) 235-0276</li>
              <li>Address: 140 Stoneridge Drive, Columbia, SC, 29210, USA</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=61576010662644"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-600 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/southparkuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-600 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2025 SouthPark University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
