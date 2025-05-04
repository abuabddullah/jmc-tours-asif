import TourDetailsComponent from "@/components/toursPage/TourDetailsComponent";
import React from "react";
//generateStaticParams for tours

export async function generateStaticParams() {
  const { data:{tours} } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`
  ).then((res) => res.json());
  const staticParams4TourDetails = tours.map((tour) => ({
    id: tour?.id.toString(),
  }));
  console.log("staticParams4TourDetails", staticParams4TourDetails);
  return staticParams4TourDetails;
}

// generatemetada fn
export async function generateMetadata({ params }) {
  const { data:{tour} } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours/${params.id}`
  ).then((res) => res.json());
  return {
    title: tour?.title,
    description: tour?.seo?.description,
    keywords: tour?.seo?.keywords || "",
  };
}

//fetchTourById
export async function fetchTourById(id) {
  const { data:{tour} } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours/${id}`
  ).then((res) => res.json());
  console.log("fetch tour by id", tour);
  return tour;
}

const TourDetailsPage = async ({ params }) => {
  const tour = await fetchTourById(params?.id);
  console.log("tours/id", tour);
  return (
    <section>
      <TourDetailsComponent tour={tour} />
    </section>
  );
};

export default TourDetailsPage;
