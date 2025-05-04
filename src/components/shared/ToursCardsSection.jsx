
"use client";
import useTours from "@/utils/customHooks/useTours";
import { IoLocationSharp } from "react-icons/io5";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TourCardSkeleton } from "./LoadingSkeletons";
import useWishList from "@/utils/customHooks/useWishList";
import { FaHeart } from "react-icons/fa";

const ToursCardsSection = ({ packageType }) => {
  const [CategorisedTours, setCategorisedTours] = useState([]);
  const router = useRouter();
  const { isLoading, error, tours, success } = useTours();
  const { wishedItems, toggleWishItem } = useWishList();

  const handleWishList = (tour) => {
    toggleWishItem(tour);
  };

  useEffect(() => {
    if (packageType) {
      setCategorisedTours(
        tours?.filter(
          (tour) => tour?.category?.toLowerCase() === packageType.toLowerCase()
        )
      );
    } else {
      setCategorisedTours(tours);
    }
  }, [success, tours, packageType]);

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <>
      {isLoading && [1, 2, 3].map((i) => <TourCardSkeleton key={i} />)}
      {CategorisedTours?.slice(0, 7).map((tour, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="1000"
        >
          <div className="relative h-[28rem] w-full">
            <Image
              src={`${tour.image_url}`}
              alt={tour.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute top-2 right-2">
                <button
                  className={`${
                    wishedItems?.some(
                      (wishedItem) => wishedItem.id === tour.id
                    )
                      ? "text-red-500"
                      : "text-[#0000009a]"
                  } bg-white bg-opacity-50 shadow rounded p-1 text-lg`}
                  onClick={() => handleWishList(tour)}
                >
                  <FaHeart />
                </button>
              </div>
              <div
                onClick={() => router.push(`/tours/${tour?.id}`)}
                className="hover:bg-[#0000006e] duration-500 text-white p-6 rounded-t-xl shadow-lg cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{tour.title.slice(0,12)+"....."}</h3>
                  <div className="flex">
                    <div className="text-slate-100">
                      {Array(Math.floor(5 - tour.rating_average))
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                    <div className="text-yellow-500">
                      {Array(Math.floor(tour.rating_average))
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 text-xs flex items-center gap-1">
                  <span className="text-red-400">
                    <IoLocationSharp />
                  </span>
                  {tour.location_id}
                </p>
                <p className="text-red-400 font-medium mt-2">
                  From {tour.price}
                </p>
                <div className="text-xs text-gray-300 mt-1">
                  {tour.reviews?.length || 0} reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToursCardsSection;
