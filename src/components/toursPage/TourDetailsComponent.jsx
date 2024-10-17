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
import LocationCardComponent from "../blogsPage/LocationCardComponent";
import LocationPacakgePageAccordion from "../packagePage/LocationPacakgePageAccordion";
import CategoryBasedPackagesPage from "../packagePage/CategoryBasedPackages";

const TourDetailsComponent = ({ tour }) => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/${tour?.image}`}
          alt={tour?.title}
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
                {tour?.title}, <br /> {tour?.country}
              </h1>
              <p className="text-gray-500 mt-2 flex gap-2 items-center">
                <span className="text-xl text-red-400">
                  <CiLocationOn />
                </span>
                {tour?.location}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0 mt-4 lg:mt-0 lg:border-none border-t border-gray-300 lg:pt-0 pt-6 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <BsCashCoin className="text-red-400 text-4xl" />
                <div className="flex-col flex">
                  <span className="text-gray-500">From </span>
                  <span>${tour?.cheapPriceFrom?.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-red-400 text-4xl" />
                <div className="flex-col flex">
                  <span className="text-gray-500">Duration </span>
                  <span>{tour?.durationDays} days</span>
                </div>
              </div>
              <div className="capitalize flex items-center gap-3">
                <LuPlane className="text-red-400 text-4xl" />
                <span className="text-gray-500">{tour?.tourType} tour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="lg:flex justify-between lg:gap-4 my-12 lg:container p-8">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-500">{tour?.overview || "No overview"}</p>
            </div>

            {/* Included/Excluded Services */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Included/Excluded</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8 text-gray-500">
                <div className="bg-white rounded-lg">
                  <ul className="list-none space-y-2">
                    {tour?.features?.pickNdrop && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Pick & Drop</span>
                      </li>
                    )}

                    {tour?.features?.mealPerDay && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>{tour?.features?.mealPerDay} Meal Per Day</span>
                      </li>
                    )}

                    {tour?.features?.cruiseDinner && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Cruise Dinner</span>
                      </li>
                    )}

                    {tour?.features?.musicEvent && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Music Event</span>
                      </li>
                    )}

                    {tour?.features?.foodNDrink && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Food & Drink</span>
                      </li>
                    )}

                    {tour?.features?.visitPlacesCountInTheCityWithGroup &&
                      tour?.features?.visitPlacesCountInTheCity && (
                        <li className="flex gap-2 items-center">
                          <span>
                            <FaCheck className="text-red-600" />
                          </span>
                          <span>
                            Visit {tour?.features?.visitPlacesCountInTheCity}{" "}
                            Places in the city with Groups
                          </span>
                        </li>
                      )}

                    {tour?.features?.additionalServices && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Additional Services</span>
                      </li>
                    )}

                    {tour?.features?.insurance && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <FaCheck className="text-red-600" />
                        </span>
                        <span>Insurance</span>
                      </li>
                    )}

                    {tour?.features?.freeTicket && (
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
                    {!tour?.features?.pickNdrop && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Pick & Drop</span>
                      </li>
                    )}

                    {!tour?.features?.mealPerDay && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>{tour?.features?.mealPerDay} Meal Per Day</span>
                      </li>
                    )}

                    {!tour?.features?.musicEvent && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Music Event</span>
                      </li>
                    )}
                    {!tour?.features?.cruiseDinner && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Cruise Dinner</span>
                      </li>
                    )}

                    {!tour?.features?.additionalServices && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Additional Services</span>
                      </li>
                    )}

                    {!tour?.features?.insurance && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Insurance</span>
                      </li>
                    )}

                    {!tour?.features?.foodNDrink && (
                      <li className="flex gap-2 items-center">
                        <span>
                          <TiDeleteOutline className="text-xl text-black" />
                        </span>
                        <span>Food & Drink</span>
                      </li>
                    )}

                    {!tour?.features?.freeTicket && (
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
            <LocationPacakgePageAccordion tourPlan={tour?.tourPlan} />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Related Tours</h3>
              <CategoryBasedPackagesPage packageType={tour?.category} />
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
                    <span>{tour?.features?.maxGuest || 50}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoPeopleOutline className="text-red-400 text-4xl" />
                  <div className="flex-col flex">
                    <span className="text-gray-500">Min Age </span>
                    <span>{tour?.features?.minAge || 12} +</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LuPlane className="text-red-400 text-4xl" />
                  <span className="text-gray-500">
                    {tour?.location || "Domestic"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {tour?.features?.languageSupport ? (
                    <CiGlobe className="text-red-400 text-4xl" />
                  ) : (
                    <PiGlobeX className="text-red-400 text-4xl" />
                  )}
                  <span className="text-gray-500">Languages Support</span>
                </div>
                <div>
                  <Link href={`/package-booking/${tour?._id}/${tour?.title}`}>
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
                            src="https://i.ibb.co/jvBVcJh/tour-9.jpg"
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
