"use client";
import React from "react";
import Image from "next/image";
import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { FaCheck, FaRegClock } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { LuPlane } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { PiGlobeX } from "react-icons/pi";
import Link from "next/link";
// import CategoryBasedPackagesPage from "../packagePage/CategoryBasedPackages";
import LocationCardComponent from "@/components/blogsPage/LocationCardComponent";
import LocationPacakgePageAccordion from "@/components/packagePage/LocationPacakgePageAccordion";
import CategoryBasedPackagesPage from "@/components/packagePage/CategoryBasedPackages";

const tourDEMO = {
  _id: "nepal-tour-001",
  title: "Nepal Adventure Tour",
  country: "Nepal",
  location: "Kathmandu, Pokhara, Chitwan",
  image:
    "https://www.realjourneytravels.com/wp-content/uploads/Beautiful-beach-scene-2006x760.jpeg",
  cheapPriceFrom: 599.99,
  durationDays: 10,
  tourType: "Group",
  overview:
    "Experience the breathtaking landscapes and vibrant culture of Nepal. From the bustling streets of Kathmandu to the serene lakes of Pokhara, this tour offers a perfect blend of adventure and relaxation.",
  features: {
    pickNdrop: true,
    mealPerDay: 3,
    cruiseDinner: false,
    musicEvent: true,
    foodNDrink: true,
    visitPlacesCountInTheCity: 5,
    visitPlacesCountInTheCityWithGroup: true,
    additionalServices: true,
    insurance: true,
    freeTicket: false,
    maxGuest: 20,
    minAge: 15,
    languageSupport: true,
  },
  tourPlan: [
    "Day 1: Arrival in Kathmandu",
    "Day 2: Kathmandu Sightseeing",
    "Day 3: Drive to Pokhara",
    "Day 4: Explore Pokhara",
    "Day 5: Chitwan Wildlife Safari",
    "Day 6: Return to Kathmandu",
    "Day 7: Free Day in Kathmandu",
    "Day 8: Day Trip to Nagarkot",
    "Day 9: Farewell Dinner",
    "Day 10: Departure",
  ],
  category: "adventure",
};

const TourDetailsComponent = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        <Image
          //   src={`${process.env.NEXT_PUBLIC_BASE_URL}/${tourDEMO?.image}`}
          src={`${tourDEMO?.image}`}
          alt={tourDEMO?.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mx-auto">
        {/* Title and Basic Info */}
        <div className="bg-[#faf3ee] p-6">
          <div className="lg:container flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                {tourDEMO?.title}, <br /> {tourDEMO?.country}
              </h1>
              <p className="text-gray-500 mt-2 flex gap-2 items-center">
                <span className="text-xl text-red-400">
                  <CiLocationOn />
                </span>
                {tourDEMO?.location}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0 mt-4 lg:mt-0 lg:border-none border-t border-gray-300 lg:pt-0 pt-6 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <BsCashCoin className="text-red-400 text-4xl" />
                <div className="flex-col flex">
                  <span className="text-gray-500">From </span>
                  <span>${tourDEMO?.cheapPriceFrom?.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-red-400 text-4xl" />
                <div className="flex-col flex">
                  <span className="text-gray-500">Duration </span>
                  <span>{tourDEMO?.durationDays} days</span>
                </div>
              </div>
              <div className="capitalize flex items-center gap-3">
                <LuPlane className="text-red-400 text-4xl" />
                <span className="text-gray-500">{tourDEMO?.tourType} tour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="lg:flex justify-between lg:gap-4 my-12 lg:container p-8">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-500">
                {tourDEMO?.overview || "No overview"}
              </p>
            </div>

            {/* Included/Excluded Services */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Included/Excluded</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8 text-gray-500">
                <div className="bg-white rounded-lg">
                  <ul className="list-none space-y-2">
                    {tourDEMO?.features?.pickNdrop && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Pick & Drop</span>
                      </li>
                    )}

                    {tourDEMO?.features?.mealPerDay && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>
                          {tourDEMO?.features?.mealPerDay} Meal Per Day
                        </span>
                      </li>
                    )}

                    {tourDEMO?.features?.cruiseDinner && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Cruise Dinner</span>
                      </li>
                    )}

                    {tourDEMO?.features?.musicEvent && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Music Event</span>
                      </li>
                    )}

                    {tourDEMO?.features?.foodNDrink && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Food & Drink</span>
                      </li>
                    )}

                    {tourDEMO?.features?.visitPlacesCountInTheCityWithGroup &&
                      tourDEMO?.features?.visitPlacesCountInTheCity && (
                        <li className="flex gap-2 items-center">
                          <span>
                            <FaCheck className="text-red-600" />
                          </span>
                          <span>
                            Visit{" "}
                            {tourDEMO?.features?.visitPlacesCountInTheCity}{" "}
                            Places in the city with Groups
                          </span>
                        </li>
                      )}

                    {tourDEMO?.features?.additionalServices && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Additional Services</span>
                      </li>
                    )}

                    {tourDEMO?.features?.insurance && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Insurance</span>
                      </li>
                    )}

                    {tourDEMO?.features?.freeTicket && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Free Ticket</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="bg-white rounded-lg">
                  <ul className="list-none space-y-2">
                    {!tourDEMO?.features?.pickNdrop && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Pick & Drop</span>
                      </li>
                    )}

                    {!tourDEMO?.features?.mealPerDay && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>
                          {tourDEMO?.features?.mealPerDay} Meal Per Day
                        </span>
                      </li>
                    )}

                    {!tourDEMO?.features?.musicEvent && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Music Event</span>
                      </li>
                    )}
                    {!tourDEMO?.features?.cruiseDinner && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Cruise Dinner</span>
                      </li>
                    )}

                    {!tourDEMO?.features?.additionalServices && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Additional Services</span>
                      </li>
                    )}

                    {!tourDEMO?.features?.insurance && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Insurance</span>
                      </li>
                    )}

                    {!tourDEMO?.features?.foodNDrink && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Food & Drink</span>
                      </li>
                    )}

                    {!tourDEMO?.features?.freeTicket && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Free Ticket</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tour Plan Accordion */}
            <LocationPacakgePageAccordion tourPlan={tourDEMO?.tourPlan} />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Related Tours</h3>
              <CategoryBasedPackagesPage packageType={tourDEMO?.category} />
            </div>
          </div>

          <aside>
            {/* Tour Information */}
            <div className="bg-white p-6 rounded-2xl border lg:mt-8">
              <h3 className="text-xl font-bold mb-4 border-s border-red-500 ps-3">
                Tour Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IoPeopleOutline className="text-red-400 text-4xl" />
                  <div className="flex-col flex">
                    <span className="text-gray-500">Max Guests </span>
                    <span>{tourDEMO?.features?.maxGuest || 50}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoPeopleOutline className="text-red-400 text-4xl" />
                  <div className="flex-col flex">
                    <span className="text-gray-500">Min Age </span>
                    <span>{tourDEMO?.features?.minAge || 12} +</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LuPlane className="text-red-400 text-4xl" />
                  <span className="text-gray-500">
                    {tourDEMO?.location || "Domestic"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {tourDEMO?.features?.languageSupport ? (
                    <CiGlobe className="text-red-400 text-4xl" />
                  ) : (
                    <PiGlobeX className="text-red-400 text-4xl" />
                  )}
                  <span className="text-gray-500">Languages Support</span>
                </div>
                <div>
                  <Link
                    href={`/package-booking/${tourDEMO?._id}/${tourDEMO?.title}`}
                  >
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg w-full">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Last Minute Deals (if needed) */}
            <div className="bg-white p-6 rounded-2xl border my-6">
              <h3 className="text-xl font-bold mb-4">Last Minute Deals</h3>
              <div className="grid grid-cols-1 gap-4">
                {Array.from({ length: 4 })
                  .slice(0, 5)
                  .map((_, i) => (
                    <div key={i}>
                      <div className="flex space-x-4 items-center">
                        <div className="w-24 h-24 relative">
                          <Image
                            src="https://www.naturewings.com/images/nepal/nepal-tour-packages.webp"
                            alt="Kuakata"
                            layout="fill"
                            className="rounded-lg"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold hover:text-red-400">
                            <Link href="#">Kuakata...</Link>
                          </h4>
                          <p className="text-gray-500 text-sm">
                            From <span className="text-red-400">$39.00</span>
                          </p>
                        </div>
                      </div>
                      <hr className={`${i === 3 ? "hidden" : ""} mt-4`} />
                    </div>
                  ))}
              </div>
            </div>

            <LocationCardComponent />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsComponent;
