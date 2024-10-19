"use client";
import Image from "next/image";
import Link from "next/link";
import jmctourslogo from "./../../../assets/jmc-tours-logo.png";

import { useContext, useState } from "react";
import VisaNavDrop from "./navComponents/VisaNavDrop";
import TouristVisaNavDrop from "./navComponents/TouristVisaNavDrop";
import { auth } from "../../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import UserLogOutDrop from "./navComponents/UserLogOutDrop";
import { UserContext } from "@/utils/contextAPIs/UserInfoContext";
import { UserProfilePicSkeleton } from "../LoadingSkeletons";

const Navbar2 = () => {
  const [user, loading, error] = useAuthState(auth);
  // const { user, loading, error, setUserState } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" bg-white backdrop-blur-2xl bg-opacity-50 dark:bg-gray-800">
      <div className="max-w-screen-xl py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center mx-4 md:mx-8 lg:mx-0 justify-between">
            <Link href="/">
              <Image
                src={jmctourslogo}
                className="w-auto h-8 sm:h-10"
                alt="Logo"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-10 text-sm w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col  lg:space-x-8 lg:flex-row lg:items-center lg:mx-8">
              <Link
                href="/"
                className=" py-2  font-medium mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100XXXXX dark:hover:bg-gray-700XXXX hover:text-green-600 border-[#FFFFFF]"
              >
                Home
              </Link>

              <div className="cursor-pointer  py-2  mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100XXXXX dark:hover:bg-gray-700XXXX  border-[#FFFFFF]">
                <VisaNavDrop />
              </div>
              <div className="cursor-pointer  py-2  mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100XXXXX dark:hover:bg-gray-700XXXX  border-[#FFFFFF]">
                <TouristVisaNavDrop />
              </div>

              <Link
                href="/blogs"
                className=" py-2  mt-2 font-medium text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100XXXXX dark:hover:bg-gray-700XXXX hover:text-green-700  border-[#FFFFFF]"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className=" py-2  mt-2 font-medium text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100XXXXX dark:hover:bg-gray-700XXXX hover:text-green-700  border-[#FFFFFF]"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0 font-medium text-gray-700">
              {loading ? (
                <UserProfilePicSkeleton />
              ) : user ? (
                <>
                  <div
                    type="button"
                    className="flex items-center focus:outline-none cursor-pointer"
                    aria-label="toggle profile dropdown"
                  >
                    <UserLogOutDrop user={user} />
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <Link href={"/login"}>Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
