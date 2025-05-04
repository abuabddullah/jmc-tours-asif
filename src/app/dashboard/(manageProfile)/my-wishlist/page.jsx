"use client";
import useWishList from "@/utils/customHooks/useWishList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const MyWishListPage = () => {
  const router = useRouter();
  const { wishedItems, toggleWishItem, clearWishList } = useWishList();
  console.log(wishedItems);

  const handleWishList = (tour) => {
    toggleWishItem(tour);
  };
  return (
    <section className=" w-full lg:m-10">
      <h1 className="text-2xl font-bold text-center my-8 md:text-4xl">
        My Wish List Page
      </h1>
      <>
        {wishedItems?.length === 0 && (
          <div className="text-center">
            <p className="text-lg font-bold">No items in your wish list</p>
            <button
              onClick={() => router.push("/tours")}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Explore tours
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishedItems?.map((tour, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="relative h-[28rem] w-full">
                <Image
                  src={`${tour?.image_url}`}
                  alt={tour?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute top-2 right-2">
                    <button
                      className={`${
                        wishedItems?.some(
                          (wishedItem) => wishedItem.id === tour?.id
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
                      <h3 className="text-xl font-semibold">{tour?.title}</h3>
                      <div className="flex">
                        <div className="text-slate-100">
                          {Array(Math.floor(5 - tour?.rating_average))
                            .fill(0)
                            .map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                        </div>
                        <div className="text-yellow-500">
                          {Array(Math.floor(tour?.rating_average))
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
                      {tour?.location}
                    </p>
                    <p className="text-red-400 font-medium mt-2">
                      From {tour?.price}
                    </p>
                    <div className="text-xs text-gray-300 mt-1">
                      {tour?.reviews?.length || 6} reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default MyWishListPage;
