// "use client";
// import useTours from "@/utils/customHooks/useTours";
// import { IoLocationSharp } from "react-icons/io5";
// import { Heart } from "lucide-react";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { TourCardSkeleton } from "./LoadingSkeletons";
// import useWishList from "@/utils/customHooks/useWishList";
// import { FaHeart } from "react-icons/fa";

// const ToursCardsSection = ({ packageType }) => {
//   const [CategorisedTours, setCategorisedTours] = useState([]);
//   const router = useRouter();
//   const { isLoading, error, tours, success } = useTours();
//   const { wishedItems, toggleWishItem } = useWishList();

//   const handleWishList = (tour) => {
//     toggleWishItem(tour);
//   };

//   useEffect(() => {
//     if (packageType) {
//       setCategorisedTours(
//         tours?.filter(
//           (tour) => tour?.category?.toLowerCase() === packageType.toLowerCase()
//         )
//       );
//     } else {
//       setCategorisedTours(tours);
//     }
//   }, [success, tours, packageType]);

//   if (error) return <div>An error has occurred: {error.message}</div>;

//   return (
//     <>
//       {isLoading && [1, 2, 3].map((i) => <TourCardSkeleton key={i} />)}
//       {CategorisedTours?.slice(0, 7).map((tour, index) => (
//         <div
//           key={index}
//           className="relative bg-white rounded-xl shadow-lg overflow-hidden"
//           data-aos="fade-up"
//           data-aos-delay={index * 100}
//           data-aos-duration="1000"
//         >
//           <div className="relative h-[28rem] w-full">
//             <Image
//               src={`${process.env.NEXT_PUBLIC_BASE_URL}/${tour.image}`}
//               alt={tour.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg"
//             />
//             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
//               <div className="absolute top-2 right-2">
//                 <button
//                   className={`${
//                     wishedItems?.some(
//                       (wishedItem) => wishedItem._id === tour._id
//                     )
//                       ? "text-red-500"
//                       : "text-[#0000009a]"
//                   } bg-white bg-opacity-50 shadow rounded p-1 text-lg`}
//                   onClick={() => handleWishList(tour)}
//                 >
//                   <FaHeart />
//                 </button>
//               </div>
//               <div
//                 onClick={() => router.push(`/tours/${tour?._id}`)}
//                 className="hover:bg-[#0000006e] duration-500 text-white p-6 rounded-t-xl shadow-lg cursor-pointer"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-xl font-semibold">{tour.title}</h3>
//                   <div className="flex">
//                     <div className="text-slate-100">
//                       {Array(Math.floor(5 - tour.ratings))
//                         .fill(0)
//                         .map((_, i) => (
//                           <span key={i}>★</span>
//                         ))}
//                     </div>
//                     <div className="text-yellow-500">
//                       {Array(Math.floor(tour.ratings))
//                         .fill(0)
//                         .map((_, i) => (
//                           <span key={i}>★</span>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-200 text-xs flex items-center gap-1">
//                   <span className="text-red-400">
//                     <IoLocationSharp />
//                   </span>
//                   {tour.location}
//                 </p>
//                 <p className="text-red-400 font-medium mt-2">
//                   From {tour.cost}
//                 </p>
//                 <div className="text-xs text-gray-300 mt-1">
//                   {tour.reviews?.length || 0} reviews
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ToursCardsSection;

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

const toursDEMO = [
  {
    _id: "tour-001",
    title: "Sunset Kayaking",
    category: "popular",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$50",
    ratings: 4,
    reviews: ["Amazing experience!", "Highly recommended!"],
  },
  {
    _id: "tour-002",
    title: "Whale Watching Adventure",
    category: "popular",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$75",
    ratings: 5,
    reviews: ["Incredible!", "An unforgettable day!"],
  },
  {
    _id: "tour-003",
    title: "Hiking Trails",
    category: "popular",
    location: "Whispering Woods",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$30",
    ratings: 4,
    reviews: ["Beautiful scenery!", "A great hike."],
  },
  {
    _id: "tour-004",
    title: "Ancient Ruins Tour",
    category: "adventure",
    location: "Ancient Ruins",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$60",
    ratings: 4.5,
    reviews: ["Very informative!", "Loved the history."],
  },
  {
    _id: "tour-004",
    title: "Ancient Ruins Tour",
    category: "adventure",
    location: "Ancient Ruins",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$60",
    ratings: 4.5,
    reviews: ["Very informative!", "Loved the history."],
  },
  {
    _id: "tour-004",
    title: "Ancient Ruins Tour",
    category: "adventure",
    location: "Ancient Ruins",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$60",
    ratings: 4.5,
    reviews: ["Very informative!", "Loved the history."],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "international",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "international",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "international",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "honeymoon",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "honeymoon",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
  {
    _id: "tour-005",
    title: "Beach Bonfire Night",
    category: "honeymoon",
    location: "Mystic Cove",
    image: "https://www.naturewings.com/images/nepal/nepal-tour-packages.webp",
    cost: "$20",
    ratings: 5,
    reviews: ["Best night ever!", "So much fun!"],
  },
];

const ToursCardsSection = ({ packageType }) => {
  const [isLoadingDEMO, setIsLoadingDEMO] = useState(false);
  const [errorDEMO, setErrorDEMO] = useState(false);
  const [CategorisedTours, setCategorisedTours] = useState([]);
  const router = useRouter();
  const { isLoading, error, tours, success } = useTours();
  const { wishedItems, toggleWishItem } = useWishList();

  useEffect(() => {
    setIsLoadingDEMO(true);
    setTimeout(() => {
      setIsLoadingDEMO(false);
    }, 3000);
  }, []);

  const handleWishList = (tour) => {
    toggleWishItem(tour);
  };

  useEffect(() => {
    if (packageType) {
      setCategorisedTours(
        toursDEMO?.filter(
          (tour) => tour?.category?.toLowerCase() === packageType.toLowerCase()
        )
      );
    } else {
      setCategorisedTours(toursDEMO);
    }
  }, [success, toursDEMO, packageType]);

  if (errorDEMO) return <div>An error has occurred: {errorDEMO.message}</div>;

  return (
    <>
      {isLoadingDEMO
        ? [1, 2, 3].map((i) => <TourCardSkeleton key={i} />)
        : CategorisedTours?.slice(0, 7).map((tour, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="relative h-[28rem] w-full">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_BASE_URL}/${tour.image}`}
                  src={`${tour.image}`}
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
                          (wishedItem) => wishedItem._id === tour._id
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
                    // onClick={() => router.push(`/tours/${tour?._id}`)}
                    onClick={() => router.push(`/tours/DEMO_ID`)}
                    className="hover:bg-[#0000006e] duration-500 text-white p-6 rounded-t-xl shadow-lg cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{tour.title}</h3>
                      <div className="flex">
                        <div className="text-slate-100">
                          {Array(Math.floor(5 - tour.ratings))
                            .fill(0)
                            .map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                        </div>
                        <div className="text-yellow-500">
                          {Array(Math.floor(tour.ratings))
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
                      {tour.location}
                    </p>
                    <p className="text-red-400 font-medium mt-2">
                      From {tour.cost}
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
