import React from "react";
import LocationsCard from "../shared/LocationsCard";
const fetchLocaiton = async () => {
  const { locations } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());
  return locations;
};
const LocationCardComponent = async () => {
  const locations = await fetchLocaiton();
  return (
    <div className="grid grid-cols-1 gap-8">
      {locations?.slice(0, 2).map((location, index) => (
        <LocationsCard key={location?.id} index={index} location={location} />
      ))}
    </div>
  );
};

export default LocationCardComponent;
