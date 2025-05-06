import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaCaretDown,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isPageDropdownOpen) setIsPageDropdownOpen(false);
  };

  const togglePageDropdown = () => {
    setIsPageDropdownOpen(!isPageDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full pb-2 pt-2 lg:pt-0 bg-white shadow-md z-50 border-b-6 border-emerald-700 transition-all duration-300">
      <div>
        <div
          className={`hidden lg:flex justify-center mb-2 items-center py-2 border-b border-gray-200 transition-all duration-300 ${
            isTopBarVisible
              ? "opacity-100 max-h-12"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex items-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-emerald-600" />
              <span>+1-800-555-1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-emerald-600" />
              <span>info@southparkuniversity.edu</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pl-6 pr-6 sm:pl-12 sm:pr-12">
          <div className="text-2xl flex flex-grow items-center gap-4 md:text-3xl text-emerald-900 my-2">
            <Link to="/" aria-label="SouthPark University Home">
              <img
                src="/SouthparkLogo.png"
                alt="SouthPark Logo"
                width={80}
                height={80}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="leading-7 font-semibold text-3xl">
              South Park University
            </p>
          </div>

          <div className="hidden md:flex items-center py-4 uppercase justify-center w-full text-emerald-900 font-semibold">
            <nav className="flex items-center relative">
              <Link
                to="/"
                className={`${isActive("/") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                aria-label="Home Page"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${isActive("/about") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                aria-label="About Page"
              >
                About
              </Link>
              <Link
                to="/academics"
                className={`${isActive("/academics") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                aria-label="Academics Page"
              >
                Academics
              </Link>
              <Link
                to="/admissions"
                className={`${isActive("/admissions") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                aria-label="Admissions Page"
              >
                Admissions
              </Link>
              <Link
                to="/alumni"
                className={`${isActive("/alumni") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                aria-label="Alumni Page"
              >
                Alumni
              </Link>
              {user ? (
                <Link
                  to="/dashboard"
                  className={`${isActive("/dashboard") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200 flex items-center`}
                  aria-label="Dashboard"
                >
                  <FaUser className="mr-2" /> Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className={`${isActive("/login") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200`}
                  aria-label="Login Page"
                >
                  LOGIN
                </Link>
              )}
              <div className="relative">
                <button
                  onClick={togglePageDropdown}
                  className={`${isActive("/financial-aid") || isActive("/giving") || isActive("/scholarship") || isActive("/faqs") || isActive("/campus") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200 flex items-center`}
                  aria-label="Page Dropdown"
                  aria-expanded={isPageDropdownOpen}
                  aria-controls="page-dropdown"
                >
                  Page <FaCaretDown className="ml-1" />
                </button>
                {isPageDropdownOpen && (
                  <div
                    id="page-dropdown"
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-emerald-700 shadow-lg z-10"
                  >
                    <Link
                      to="/aid"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/aid") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="Financial Aid Page"
                    >
                      Financial Aid
                    </Link>
                    <Link
                      to="/give"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/give") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="Giving Page"
                    >
                      Giving
                    </Link>
                    <Link
                      to="/scholarship"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/scholarship") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="Scholarship Page"
                    >
                      Scholarship
                    </Link>
                    <Link
                      to="/faqs"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/faqs") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="FAQs Page"
                    >
                      FAQs
                    </Link>
                    <Link
                      to="/campus"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/campus") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="Campus Life Page"
                    >
                      Campus Life
                    </Link>
                    <Link
                      to="/athletics"
                      onClick={togglePageDropdown}
                      className={`block py-2 px-4 text-gray-700 hover:bg-emerald-100 ${isActive("/athletics") ? "text-emerald-700 font-semibold" : ""}`}
                      aria-label="Athletics Page"
                    >
                      Athletics
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className={`${isActive("/contact") ? "text-emerald-700" : ""} hover:text-white hover:bg-emerald-700 py-4 px-4 transition duration-200 hover:border-r-4 hover:border-emerald-500`}
                aria-label="Contact Page"
              >
                Contact
              </Link>
              <Link
                to="/stageOne"
                className={`${isActive("/stageOne") ? "text-white bg-emerald-900" : ""} hover:bg-emerald-900 bg-emerald-700 transition duration-200 py-4 mr-4 text-white px-8`}
                aria-label="Apply Page"
              >
                Apply
              </Link>
            </nav>
          </div>

          <div className="md:hidden flex items-center mr-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none mx-auto cursor-pointer mb-2 p-2"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-emerald-800 to-emerald-950 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center p-4 border-b border-emerald-700">
            <div className="flex justify-between items-center w-full">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                aria-label="SouthPark University Home"
                className="flex gap-4 items-center"
              >
                <img
                  src="/SouthparkLogowbt.png"
                  alt="SouthPark Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <h2 className="text-white text-xl leading-5">
                  SouthPark <br />
                  University
                </h2>
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-emerald-300 self-end cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 p-2"
                aria-label="Close Menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
          </div>

          <nav className="flex flex-col items-center space-y-4 py-6 uppercase">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="Home Page"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/about")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="About Page"
            >
              About
            </Link>
            <Link
              to="/academics"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/academics")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="Academics Page"
            >
              Academics
            </Link>

            <div className="relative w-full">
              <button
                onClick={togglePageDropdown}
                className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                  isActive("/aid") ||
                  isActive("/give") ||
                  isActive("/scholarship") ||
                  isActive("/faqs") ||
                  isActive("/athletics") ||
                  isActive("/campus")
                    ? "text-emerald-300 bg-emerald-700/30"
                    : "hover:text-emerald-300 hover:bg-emerald-700/20"
                } flex items-center justify-center`}
                aria-label="Page Dropdown"
                aria-expanded={isPageDropdownOpen}
                aria-controls="mobile-page-dropdown"
              >
                Page <FaCaretDown className="ml-1" />
              </button>
              {isPageDropdownOpen && (
                <div
                  id="mobile-page-dropdown"
                  className="absolute top-full left-0 w-full bg-emerald-900 mt-1 rounded-b"
                >
                  <Link
                    to="/aid"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/aid") ? "font-semibold" : ""}`}
                    aria-label="Financial Aid Page"
                  >
                    Financial Aid
                  </Link>
                  <Link
                    to="/give"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/give") ? "font-semibold" : ""}`}
                    aria-label="Giving Page"
                  >
                    Giving
                  </Link>
                  <Link
                    to="/scholarship"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/scholarship") ? "font-semibold" : ""}`}
                    aria-label="Scholarship Page"
                  >
                    Scholarship
                  </Link>
                  <Link
                    to="/faqs"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/faqs") ? "font-semibold" : ""}`}
                    aria-label="FAQs Page"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/campus"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/campus") ? "font-semibold" : ""}`}
                    aria-label="Campus Life Page"
                  >
                    Campus Life
                  </Link>
                  <Link
                    to="/athletics"
                    onClick={() => {
                      togglePageDropdown();
                      toggleMobileMenu();
                    }}
                    className={`block py-3 px-4 text-white hover:bg-emerald-800 ${isActive("/athletics") ? "font-semibold" : ""}`}
                    aria-label="Athletics Page"
                  >
                    Athletics
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/admissions"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/admissions")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="Admissions Page"
            >
              Admissions
            </Link>
            <Link
              to="/alumni"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/alumni")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="Alumni Page"
            >
              Alumni
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                onClick={toggleMobileMenu}
                className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                  isActive("/dashboard")
                    ? "text-emerald-300 bg-emerald-700/30"
                    : "hover:text-emerald-300 hover:bg-emerald-700/20"
                } flex items-center justify-center`}
                aria-label="Dashboard"
              >
                <FaUser className="mr-2" /> Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                  isActive("/login")
                    ? "text-emerald-300 bg-emerald-700/30"
                    : "hover:text-emerald-300 hover:bg-emerald-700/20"
                }`}
                aria-label="Login Page"
              >
                LOGIN
              </Link>
            )}
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/contact")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20"
              }`}
              aria-label="Contact Page"
            >
              Contact
            </Link>
            <Link
              to="/stageOne"
              onClick={toggleMobileMenu}
              className={`w-full text-center py-3 text-white text-lg border-b border-emerald-700 transition duration-300 ${
                isActive("/stageOne")
                  ? "text-emerald-300 bg-emerald-700/30"
                  : "hover:text-emerald-300 hover:bg-emerald-700/20 bg-emerald-600 text-white"
              }`}
              aria-label="Apply Page"
            >
              Apply
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
