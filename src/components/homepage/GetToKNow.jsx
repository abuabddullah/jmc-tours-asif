import Image from "next/image";
import iceBg from "./../../assets/JMC-Tours-Travels.webp";
import SectionSubtitle from "../shared/SectionSubtitle";
const GetToKNow = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto mx-4 flex flex-col md:flex-row items-center lg:items-center lg:my-40 md:my-20">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2">
        <Image
          src={iceBg}
          alt="Scenic Mountain"
          className="w-full h-auto rounded shadow-lg"
          
        />
        {/* <div className="absolute bottom-16 lg:bottom-1/2 left-4 bg-white text-black p-3 md:px-10 rounded-lg shadow-md">
          <p className="text-sm md:text-base font-bold">BOOK NOW</p>
          <p className="text-sm md:text-lg font-semibold">+8801321210094</p>
        </div> */}
      </div>

      {/* Text Section */}
      <div className="mt-8 lg:mt-0 lg:ml-16 md:ml-8 w-full lg:w-1/2">
        <SectionSubtitle twCss={"text-green-600 text-4xl lg:text-5xl md:text-3xl font-extrabold"}>Get To Know Us</SectionSubtitle> <br />
        <h2 className="lg:text-5xl text-teal-950 text-3xl md:text-2xl font-bold mb-8 md:mb-4">
          Plan Your Trip with
          JMC Tours & Travels
        </h2>
        <p className="text-sm text-teal-900 mb-12 md:mb-6 leading-6">
          Experience amazing trips with the top-notch company, JMC Tour and
          Travel. From breathtaking scenery to traditionally diverse places, we
          offer personalized experiences based on your preferences. Allow us to
          guide you on an easygoing journey where every moment is thrilling and
          educational.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex lg:items-center items-baseline">
            <span className="text-white text-xs px-2 py-1 mr-4 rounded-full bg-teal-700">
              ✔
            </span>
            <span className="text-teal-900 text-sm leading-0">Invest in your dream with an expedition.</span>
          </li>
          <li className="flex lg:items-center items-baseline">
            <span className="text-white text-xs px-2 py-1 mr-4 rounded-full bg-teal-700">
              ✔
            </span>
            <span className="text-teal-900 text-sm">
              Every location provides you with unforgettable memories.
            </span>
          </li>
          <li className="flex lg:items-center items-baseline">
            <span className="text-white text-xs px-2 py-1 mr-4 rounded-full bg-teal-700">
              ✔
            </span>
            <span className="text-teal-900 text-sm">Feel the nature and fade on it.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetToKNow;
