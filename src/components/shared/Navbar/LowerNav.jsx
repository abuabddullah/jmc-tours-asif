"use client";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import jmctourslogo from "./../../../assets/jmc-tours-logo.png";
import avatar from "./.././../../assets/avatar.png";

const LowerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <Image
                src={jmctourslogo}
                width={150}
                height={66}
                alt="jmctours-logo"
              />
            </div>
            <div className="hidden sm:flex sm:space-x-4">
              <Link
                href="/"
                className="hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black  px-3 py-2  text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black  px-3 py-2  text-sm font-medium"
              >
                <div className="flex gap-1 items-center">
                  Visa <IoIosArrowDown />
                </div>
              </Link>
              <Link
                href="#"
                className="hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black  px-3 py-2  text-sm font-medium"
              >
                <div className="flex gap-1 items-center">
                  Tour Packages <IoIosArrowDown />
                </div>
              </Link>
              <Link
                href="/blogs"
                className="hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black  px-3 py-2  text-sm font-medium"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black  px-3 py-2  text-sm font-medium"
              >
                Conatact Us
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={avatar}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="sm:hidden absolute top-16 inset-x-0 bg-white text-white">
          <div className="px-2 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black "
              inline-block
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black "
              inline-block
            >
              <div className="flex gap-1 items-center">
                Visa <IoIosArrowDown />
              </div>
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black "
              inline-block
            >
              <div className="flex gap-1 items-center">
                Tour Packages <IoIosArrowDown />
              </div>
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black "
              inline-block
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-400 border-b-2 hover:border-[#DD7364] border-[#FFFFFF] text-black "
              inline-block
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default LowerNav;
