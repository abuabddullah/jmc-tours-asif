"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import caroselImg1 from "./../../assets/image.png";
import caroselImg2 from "./../../assets/Best-tour-and-travel-agency-in-Dhaka-jmc-tours-and-travles.webp";
import caroselImg3 from "./../../assets/fahim-reza-ETeDLzMMAUQ-unsplash-1.webp";
import SectionSubtitle, { greatVibes } from "../shared/SectionSubtitle";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const images = [
  {
    src: caroselImg1,
    alt: "Image 1",
    content: (
      <div className="relative text-center text-white px-4 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 5, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 carouselH1"
        > <SectionSubtitle twCss="text-[#e8604c] text-center lg:text-right text-5xl lg:text-[70px] w-[100vw] lg:w-[70%]">
          Travel and Adventure With JMC
        </SectionSubtitle>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 5,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-base md:text-lg lg:text-3xl mb-8 carouselP"
        >
          Where would you like to go?
        </motion.p>
      </div>
    ),
  },
  {
    src: caroselImg2,
    alt: "Image 2",
    content: (
      <div className="relative text-center text-white px-4 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 5, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 carouselH1"
        ><SectionSubtitle twCss="text-center text-[#e8604c] text-center lg:text-right text-5xl lg:text-[70px] w-[100vw] lg:w-[70%]">
          Discover Your Next Adventure
          </SectionSubtitle>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 5,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-xl md:text-lg lg:text-3xl mb-8 carouselP"
        >
          Explore new horizons with our curated tours.
        </motion.p>
      </div>
    ),
  },
  {
    src: caroselImg3,
    alt: "Image 3",
    content: (
      <div className="relative text-center text-white px-4 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 carouselH1"
        ><SectionSubtitle twCss="text-center text-[#e8604c] text-center lg:text-right text-5xl lg:text-[70px] w-[100vw] lg:w-[100%]">
          Travel Your Dream
        </SectionSubtitle>
          
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 5,
            delay: .5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-base md:text-lg lg:text-3xl mb-8 carouselP"
        >
          Turn your travel dreams into reality.
        </motion.p>
      </div>
    ),
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[50vh] lg:h-[80vh] overflow-hidden flex items-center justify-center z-0">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
              {images[currentIndex].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={handlePrev}
        className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 text-md rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 "
      >
        <IoIosArrowBack  />

      </button>
      <button
        onClick={handleNext}
        className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 text-md rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 "
      >
      <IoIosArrowForward />
      </button>
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`size-3 rounded-full ${
              index === currentIndex ? "bg-teal-500" : "border-2 border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
