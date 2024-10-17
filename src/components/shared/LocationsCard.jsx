import Image from "next/image";
import Link from "next/link";
import React from "react";
import { greatVibes } from "./SectionSubtitle";

const LocationsCard = ({ location, index }) => {
  return (
    <div
      className="bg-transparent rounded-xl shadow-lg overflow-hidden relative"
      data-aos="fade-up"
      data-aos-delay={index * 100} // Adjust delay based on index
      data-aos-duration="1000" // Optional: duration of the animation
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/locations/${location?._id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${location?.image}`}
            alt={location?.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transition-transform duration-1000 hover:scale-110"
          />
        </Link>
        <div className="absolute top-2 right-2">
          <button className="text-white px-2 bg-green-600/80 rounded-full shadow-md">
            {location?.tourCount || 0} tour
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex justify-between items-center mb-2">
            <h3
              className={`text-green-400 font-extrabold text-5xl ${greatVibes.className}`}
            >
              {location?.category}
            </h3>
          </div>
          <p className="text-2xl font-bold text-white">{location?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationsCard;
