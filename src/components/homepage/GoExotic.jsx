"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionSubtitle, { greatVibes } from "../shared/SectionSubtitle";
import LocationsCard from "../shared/LocationsCard";
import { SkeletonCard } from "../shared/loadingComponents/Skeleton";
import { LocationCardSkeleton } from "../shared/LoadingSkeletons";
import useLocations from "@/utils/customHooks/useLocations";

const GoExotic = () => {
  const { isLoading, error, locations, success, refetchLocations } =
    useLocations();

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="lg:p-8 pt-24 lg:pt-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionSubtitle twCss="text-center text-green-600 text-3xl lg:text-5xl font-bold">
          Destination lists
        </SectionSubtitle>
        <br />
        <h2 className="lg:text-5xl text-3xl text-teal-950 font-bold text-center mb-12 lg:mb-16">
          Go Exotic Places
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 md:mx-8 lg:mx-0 lg:grid-cols-3 gap-6">
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <LocationCardSkeleton key={index} />
            ))}

          {locations?.map((location, index) => (
            <LocationsCard
              key={location?._id}
              index={index}
              location={location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoExotic;
