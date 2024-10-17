import React from "react";
import ToursCardsSection from "../shared/ToursCardsSection";

const CategoryBasedPackagesPage = ({ packageType }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ToursCardsSection packageType={packageType} />
      </div>
    </>
  );
};

export default CategoryBasedPackagesPage;
