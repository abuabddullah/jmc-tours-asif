"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import partner1 from "./../../assets/partner1.jpg";
import partner2 from "./../../assets/partner2.png";
import partner3 from "./../../assets/partner3.png";
import partner4 from "./../../assets/partner4.png";

const OurPartner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const partners = [
    {
      href: "/partner1",
      src: partner1,
      alt: "Partner 1",
    },
    {
      href: "/partner2",
      src: partner2,
      alt: "Partner 2",
    },
    {
      href: "/partner3",
      src: partner3,
      alt: "Partner 3",
    },
    {
      href: "/partner4",
      src: partner4,
      alt: "Partner 4",
    },
  ];

  return (
    // <section className="py-16 lg:p-40 bg-green-600">
    <div className="lg:flex gap-8 justify-center items-center bg-green-600 py-16 lg:p-40 p-10">
      <h1 className="lg:text-6xl text-3xl font-bold text-white mb-8 ps-4">
        Our <br className="hidden lg:block" /> Partners
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
        {partners.map((partner, index) => (
          <Link href={partner.href} key={index}>
            <div
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                className={`transition-transform duration-1000 ${
                  hoveredIndex === index ? "hover:scale-105" : ""
                }`}
                objectFit="cover"
                width={150}
                height={150}
              />
              {hoveredIndex !== index && (
                <div className="absolute inset-0 bg-green-600 opacity-30 transition-opacity duration-300"></div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
    // </section>
  );
};

export default OurPartner;
