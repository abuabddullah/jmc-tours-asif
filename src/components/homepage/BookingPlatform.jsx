import { FaHeart, FaMountain, FaPlay } from "react-icons/fa";
import { Modal } from "../shared/Modal";
import SectionSubtitle from "../shared/SectionSubtitle";
import { IoIosGlobe } from "react-icons/io";

const BookingPlatform = () => {
  return (
    <section className="relative py-10 lg:p-40 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/bg-1.jpg')`, // Path to your image in the public directory
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Ensure it is behind other content
          height: "100%", // Ensure the background covers the full section height
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000036] opacity-50 z-0"></div>

      {/* Content Wrapper */}
      <div className="z-10 max-w-screen-xl mx-auto px-8 text-white lg:flex items-center gap-8">
        <div className="lg:w-[65%]">
          <Modal />
          <SectionSubtitle twCss="my-10 text-green-400 text-4xl lg:text-5xl font-bold">
            Are You Ready To Travel?
          </SectionSubtitle>
          <h2 className="lg:text-5xl text-3xl font-bold mb-16">
            JMC is a World Leading Online Tour Booking Platform
          </h2>
        </div>

        <div className="grid gap-4 mb-12 lg:grid-cols-2 grid-cols-2 lg:w-[35%]">
          {[
            {
              packName: "Popular",
              packIcon: <FaPlay />,
            },
            {
              packName: "International",
              packIcon: <IoIosGlobe />,
            },
            {
              packName: "Honeymoon",
              packIcon: <FaHeart />,
            },
            {
              packName: "Adventure",
              packIcon: <FaMountain />,
            },
          ].map((pack, i) => (
            <div
              key={i}
              style={{ borderRadius: "5px" }}
              className="border p-10 relative overflow-hidden group cursor-pointer"
            >
              <div className="flex flex-col gap-4 items-center relative z-10">
                <div>
                  <span className="text-white text-2xl">{pack?.packIcon}</span>
                </div>
                <p className="text-center font-semibold">
                  {pack?.packName} <br /> Package
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#DD7364] transition-transform duration-500 ease-in-out transform -translate-y-full group-hover:translate-y-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingPlatform;
