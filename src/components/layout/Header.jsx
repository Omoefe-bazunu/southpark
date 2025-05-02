import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSearch } from "react-icons/fa"; // Icons for hamburger menu, contact, and search

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to handle scroll behavior for the top bar
  useEffect(() => {
    const handleScroll = () => {
      // Hide the top bar if the user scrolls down (even a little)
      if (window.scrollY > 0) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="">
        {/* Top Bar with Service Center and Email Center */}
        <div
          className={`hidden lg:flex justify-center items-center py-2 border-b border-gray-200 transition-all duration-300 ${
            isTopBarVisible
              ? "opacity-100 max-h-12"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex items-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-emerald-600" />
              <span>Service Center: +1-800-555-1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-emerald-600" />
              <span>Email: info@southparkuniversity.edu</span>
            </div>
          </div>
        </div>

        {/* University Name and Navigation */}
        <div className="flex flex-col items-center">
          {/* University Name */}
          <div className="text-3xl flex items-center md:text-4xl text-emerald-900 my-2">
            <Link to="/" aria-label="SouthPark University Home">
              <img
                src="/SouthparkLogo.png"
                alt="SouthPark Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center py-4 justify-center w-full bg-gradient-to-b from-emerald-800 to-emerald-950  text-white">
            <nav className="flex space-x-6">
              <Link
                to="/"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Home Page"
              >
                Home
              </Link>
              <Link
                to="/about"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="About Page"
              >
                About
              </Link>
              <Link
                to="/academics"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Academics Page"
              >
                Academics
              </Link>
              <Link
                to="/faculties"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Faculties Page"
              >
                Admissions
              </Link>
              <Link
                to="/research"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Research Page"
              >
                Alumni
              </Link>
              <Link
                to="/events"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Events Page"
              >
                Athletics
              </Link>
              <Link
                to="/campus"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="News Page"
              >
                CampusLife
              </Link>
              <Link
                to="/contact"
                className=" hover:text-emerald-300 transition duration-300"
                aria-label="Contact Page"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full ">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none mx-auto cursor-pointer mb-2 p-2"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 p-2"
              aria-label="Close Menu"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Home Page"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="About Page"
            >
              About
            </Link>
            <Link
              to="/academics"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Academics Page"
            >
              Academics
            </Link>
            <Link
              to="/faculties"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Faculties Page"
            >
              Admission
            </Link>
            <Link
              to="/research"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Research Page"
            >
              Alumni
            </Link>
            <Link
              to="/events"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Events Page"
            >
              Athletics
            </Link>
            <Link
              to="/campus"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="News Page"
            >
              CampusLife
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-emerald-600 transition duration-300 font-medium text-lg"
              aria-label="Contact Page"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
