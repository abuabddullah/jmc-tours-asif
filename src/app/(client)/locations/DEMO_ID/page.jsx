"use client";
import SectionSubtitle from "@/components/shared/SectionSubtitle";
import ToursCardsSection from "@/components/shared/ToursCardsSection";
import Image from "next/image";
import React from "react";

const locationDEMO = {
  _id: "mystic-cove-001",
  name: "Mystic Cove",
  category: "Seaside Retreat",
  image:
    "https://static.wanderon.in/wp-content/uploads/2024/09/best-places-to-visit-in-kashmir-in-may.jpg",
  tourCount: 5,
  description:
    "Discover the hidden gems of Mystic Cove.\r\nExperience breathtaking sunsets and pristine beaches.\r\nPerfect for relaxation and adventure alike.\r\n\r\nExperience breathtaking sunsets and pristine beaches.\r\nPerfect for relaxation and adventure alike.\r\nExperience breathtaking sunsets and pristine beaches.\r\nPerfect for relaxation and adventure alike.\r\n\r\nExperience breathtaking sunsets and pristine beaches.\r\nPerfect for relaxation and adventure alike.\r\nExperience breathtaking sunsets and pristine beaches.\r\nPerfect for relaxation and adventure alike.",
};

const LocationDetails = () => {
  const paragraphs = locationDEMO?.description?.split("\r\n");
  return (
    <section className="py-20 bg-[#FBF6F2]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative w-full min-h-60 overflow-hidden border-[12px] border-white rounded-xl shadow-xl">
          <Image
            src={`${locationDEMO?.image}`}
            alt={locationDEMO.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            {locationDEMO?.name || "Location name"}
          </h1>
          <hr className="w-12 border border-red-500 mt-2 mb-4" />
          {
            <div>
              {paragraphs.map((para, index) => (
                <p
                  className="text-[#757783] leading-7 mt-1 text-justify"
                  key={index}
                >
                  {para.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          }
        </div>
      </div>

      <section className=" lg:my-20 my-10">
        <div>
          <SectionSubtitle twCss="text-center text-green-600 text-3xl lg:text-4xl font-extrabold text-red-500">
            Explore Tour
          </SectionSubtitle>
          <br />
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Most Popular Tours
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToursCardsSection packageType={"popular"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationDetails;
