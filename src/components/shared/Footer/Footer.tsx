import Image from "next/image";
import Link from "next/link";
// import jmctourslogo from "./../../../assets/jmc-tours-logo.png"
import jmctourslogo from "../../../assets/jmc-tours-logo.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import FooterForm from "./FooterForm";
import WhiterFooter from "./WhiterFooter";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-neutral-content font-bold text-white">
      <div className="container lg:flex lg:flex-wrap justify-between gap-6  lg:p-10">
        <div>
          <Link href="/" className="mb-0">
            <Image src={jmctourslogo} alt="logo" width={100} />
          </Link>
          <p className=" text-gray-500 py-4">
            Welcome to our JMC Tours & Travel <br /> Limited.
          </p>

          {/* <Separator class=" text-gray-400 mb-4" /> */}

          <div className="grid grid-cols-1 gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <FaEnvelope />
              <a
                className="hover:text-[#DD7364] delay-100 transition-all"
                href="mailto:info@jmc.tours"
              >
                info@jmc.tours
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              <a
                className="hover:text-[#DD7364] delay-100 transition-all"
                href="tel:+8801321210094"
              >
                01321210094
              </a>
            </div>
            <div className="flex items-center gap-4">
              <CiLocationOn />
              <Link
                className="hover:text-[#DD7364] delay-100 transition-all"
                href="/"
              >
                Aftabnagar, Dhaka
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <h6 className="text-xl font-bold mb-6">Company</h6>
          <div className="grid grid-cols-1 gap-4 text-gray-500">
            <Link href="/" className="mb-0">
              About Us
            </Link>
            <Link href="/" className="mb-0">
              Blogs
            </Link>
            <Link href="/" className="mb-0">
              Careers
            </Link>
            <Link href="/" className="mb-0">
              Travel with us
            </Link>
            <Link href="/" className="mb-0">
              Contact
            </Link>
          </div>
        </div>
        <div className="">
          <h6 className="text-xl font-bold mb-6">Explore</h6>
          <div className="grid grid-cols-1 gap-4 text-gray-600">
            <Link href="/" className="mb-0">
              Account
            </Link>
            <Link href="/" className="mb-0">
              Privacy Policy
            </Link>
            <Link href="/" className="mb-0">
              Terms & Condition
            </Link>
          </div>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4">Newsletter</h6>
          <FooterForm />
        </div>
      </div>
      <div>
        <WhiterFooter/>
      </div>
      
      <p className="text-gray-700 lg:mx-80 lg:hidden bg-white text-center p-4">
              © Copyright 2024 by JMC Tours. All rights reserved.
            </p>
    </footer>
  );
};

export default Footer;
