"use client";
import useFlags from "@/utils/customHooks/useFlags";
import React from "react";
import { SkeletonCard } from "../shared/loadingComponents/Skeleton";
import Flags from "./Flags";
import { FlagSkeleton } from "../shared/LoadingSkeletons";

const FlagsComponent = () => {
  const { isLoading, error, countries, refetchFlags } = useFlags();
  return (
    <div>
      <div className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? [1, 2, 3, 4].map((i) => <FlagSkeleton key={i} />)
          : countries
              ?.slice(0, 30)
              ?.map((country, index) => (
                <Flags country={country} key={index} />
              ))}
      </div>
    </div>
  );
};

export default FlagsComponent;
