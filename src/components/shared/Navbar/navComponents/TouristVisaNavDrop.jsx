import { IoBookSharp } from "react-icons/io5";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { GiCampingTent } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const TouristVisaNavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm text-gray-600 rounded-md flex gap-1 items-end hover:text-green-600 font-medium relative z-10  lg:pb-2   mt-2"
      >
        <span  >Tour Packages</span>
        <IoIosArrowDown />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="lg:absolute lg:left-0 z-40 w-56 py-2 mt-2 overflow-hidden origin-top-right lg:bg-white rounded-md lg:shadow-xl dark:bg-gray-800 transition-opacity duration-100 ease-in-out sm:w-48 md:w-56">
          <hr className="lg:border-gray-200 border-0 dark:border-gray-700" />

          <Link
            href="/packages/popular"
            className="flex items-center p-3 text-sm text-gray-500 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="items-center">Popular Packages</span>
          </Link>

          <Link
            href="/packages/international"
            className="flex items-center p-3 text-sm text-gray-500 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="mx-1">International Packages</span>
          </Link>
          <Link
            href="/packages/honeymoon"
            className="flex items-center p-3 text-sm text-gray-500 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="mx-1">Honeymoon Packages</span>
          </Link>
          <Link
            href="/packages/adventure"
            className="flex items-center p-3 text-sm text-gray-500 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="mx-1">Adventure Packages</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TouristVisaNavDrop;
