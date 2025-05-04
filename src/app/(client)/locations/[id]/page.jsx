import SectionSubtitle from "@/components/shared/SectionSubtitle";
import ToursCardsSection from "@/components/shared/ToursCardsSection";
import Image from "next/image";
import React from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const {data:{locations}} = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());

  const staticParams4LocationDetails = locations.map((location) => ({
    id: location.id.toString(),
  }));
  return staticParams4LocationDetails;
}

// want generatemetadata
export async function generateMetadata({ params }) {
  const location = await fetchLocationById(params.id);
  return {
    title: location.name,
    description: location.description,
    keywords: location.name,
  };
}

async function fetchLocationById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const { data:{location} } = await response.json();
    return location;
  } catch (error) {
    console.error(`Failed to fetch location by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const LocationDetails = async ({ params }) => {
  const location = await fetchLocationById(params?.id); // Use params?.id instead of params?._id
  console.log(location);
  const paragraphs = location?.description?.split("\r\n");
  return (
    <section className="py-20 bg-[#FBF6F2]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative w-full min-h-60 overflow-hidden border-[12px] border-white rounded-xl shadow-xl">
          <Image
            src={`${location?.image_url}`}
            alt={location.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            {location?.name || "Location name"}
          </h1>
          <hr className="w-12 border border-red-500 mt-2 mb-4" />
          {
            <div>
              {paragraphs.map((para, index) => (
                <p
                  className="text-[#757783] leading-7 mt-1 text-justify"
                  key={index}
                >
                  {para.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          }
        </div>
      </div>

      <section className=" lg:my-20 my-10">
        <div>
          <SectionSubtitle twCss="text-center text-green-600 text-3xl lg:text-4xl font-extrabold text-red-500">
            Explore Tour
          </SectionSubtitle>
          <br />
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Most Popular Tours
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToursCardsSection category={"popular"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationDetails;
