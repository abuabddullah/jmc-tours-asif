import UpdateLocationForm from "@/app/dashboard/dashBoardComponents/UpdateLocationForm";
import React from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { locations } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());

  const staticParams4updateLocation = locations.map((location) => ({
    id: location._id,
  }));
  console.log("staticParams4updateLocation", staticParams4updateLocation);
  return staticParams4updateLocation;
}

async function fetchLocationById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const { location } = await response.json();
    return location;
  } catch (error) {
    console.error(`Failed to fetch location by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const UpdateLocation = async ({ params }) => {
  try {
    const location = await fetchLocationById(params?.id); // Use params?.id instead of params?._id
    console.log(location);
    return (
      <section>
        <div className="text-center">
          <p>
            <small>
              UpdateLocation:{" "}
              <span className="text-green-600">{location?._id}</span>
            </small>
          </p>
        </div>
        <div>
          <UpdateLocationForm location={location} />
        </div>
      </section>
    );
  } catch (error) {
    return <div>Error fetching location data</div>;
  }
};

export default UpdateLocation;
