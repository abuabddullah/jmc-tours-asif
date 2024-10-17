import Link from "next/link";
import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const WhiterFooter = () => {
  return (
    <footer className="flex lg:flex-row-reverse mt-8 lg:bg-transparent bg-white border-b lg:border-none rounded-ss-lg">
      <div className="flex">
        <div className=" bg-[#DD7364] flex p-8 rounded-ss-lg">
          <button className="text-white">
            <Link href="/">
              <FaArrowUp />
            </Link>
          </button>
        </div>
        <div className="lg:flex justify-between items-center bg-white lg:px-8">
          <div className="flex gap-4 items-center text-gray-700 px-3 py-4">
            <div className="rounded-full bg-red-50 p-3">
              <FaFacebookSquare />
            </div>
            <div className="rounded-full bg-red-50 p-3">
              <FaInstagram />
            </div>
            <div className="rounded-full bg-red-50 p-3">
              <FaTwitter />
            </div>
            <div className="rounded-full bg-red-50 p-3">
              <FaLinkedin />
            </div>
          </div>

          <div>
            <p className="text-gray-700 lg:mx-80 hidden lg:block">
              © Copyright 2024 by JMC Tours. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WhiterFooter;
