import Link from "next/link";
import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-1 shadow sticky top-0 z-50">
      <div className="bg-slate-800 hidden lg:block ">
        <div className="text-white flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex gap-6 text-xs">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <a
                className="hover:text-green-500 delay-100 transition-all"
                href="tel:+8801321210094"
              >
                013 2121 0094
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a
                className="hover:text-green-500 delay-100 transition-all"
                href="mailto:info@jmc.tours"
              >
                info@jmc.tours
              </a>
            </div>
          </div>
          <Link href="/ticket-booking">
            <button className="py-3 px-5 bg-green-600 hover:bg-green-800 delay-100 transition-all text-xs font-medium">
              Ticket Booking
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex gap-4 items-center bg-slate-900 text-white px-3 py-4">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <Navbar2 />
    </nav>
  );
};

export default Navbar;
