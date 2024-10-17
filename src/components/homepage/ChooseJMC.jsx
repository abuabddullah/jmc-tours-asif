import Image from "next/image";
import React from "react";
import iceBg from "./../../assets/JMC-Tours-Travels.webp";
import { CiLocationOn } from "react-icons/ci";
import SectionSubtitle from "../shared/SectionSubtitle";

const ChooseJMC = () => {
  return (
    <div className="lg:flex px-4 lg:px-0 md:px-8 pb-24 bg-slate-900">
      {/* Image Section */}
      {/* <Image
        src={iceBg}
        alt="Scenic Mountain"
        className="lg:w-1/2 lg:h-[600px] pt-9 lg:pt-0"
        width={500}
        height={500}
      /> */}

      <iframe
        // width="500"
        // height="500"
        className="lg:w-1/2 lg:h-[600px] w-full h-[40vh] pt-9 lg:pt-0"
        src="https://www.youtube.com/embed/wpxyhVeTaTM?si=AeJ9NbkT3pAx6Kkn&autoplay=1&loop=1&playlist=wpxyhVeTaTM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* Text Section */}
      <div className=" flex flex-col  justify-center lg:px-16 lg:w-[35%]">
        <SectionSubtitle twCss="text-green-500 text-4xl lg:text-5xl my-8 font-extrabold">
          Our Benefit Lists
        </SectionSubtitle>
        <br />
        <h2 className="lg:text-6xl text-3xl font-bold mb-4 text-white">
          Why Choose JMC Tours & Travels?
        </h2>
        <p className="text-md text-gray-500 lg:my-8 my-6 text-justify ">
          JMC is one of the best Travel agencies in Bangladesh. We are providing
          reasonably priced tour packages with the safest journey possible.
          Fulfill your dream with us.​
        </p>
        <div className="flex items-center">
          <div className="text-2xl">
            <CiLocationOn className="text-green-600 mr-4" />
          </div>
          <h4 className="text-md text-gray-400">Aftabnagar, Dhaka</h4>
        </div>
        <div className="flex items-center mt-4">
          <div className="text-2xl">
            <CiLocationOn className="text-green-600 mr-4" />
          </div>
          <h4 className="text-md text-gray-400">Aftabnagar, Dhaka</h4>
        </div>
      </div>
    </div>
  );
};

export default ChooseJMC;
