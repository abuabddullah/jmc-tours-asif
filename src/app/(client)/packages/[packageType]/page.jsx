import CategoryBasedPackagesPage from "@/components/packagePage/CategoryBasedPackages";
import SectionSubtitle from "@/components/shared/SectionSubtitle";
import ToursCardsSection from "@/components/shared/ToursCardsSection";
import React from "react";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const staticParams4packagePage = [
    {
      packageType: "popular",
    },
    {
      packageType: "international",
    },
    {
      packageType: "honeymoon",
    },
    {
      packageType: "adventure",
    },
  ];
  return staticParams4packagePage;
}

const PackageTypePage = ({ params }) => {
  return (
    <section>
      {/* Background Section */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-bottom"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            zIndex: -1,
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#000000c5] flex items-center justify-start">
          <div className="container">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center capitalize">
              {params?.packageType} Packages
            </h1>
          </div>
        </div>

        <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
          <div className="container mx-auto px-4">
            <p className="text-lg">
              <span className="text-gray-500">Home</span> /{" "}
              <span className="text-red-500 font-bold capitalize">
                {params?.packageType} Packages
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* tours Flags */}
      <section className=" lg:my-16 my-10">
        <div>
          <SectionSubtitle twCss="text-center text-green-600 text-3xl lg:text-6xl font-extrabold">
            Tours
          </SectionSubtitle>
          <br />
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12 capitalize">
            {params?.packageType} Packages
          </h2>
        </div>

        <div className="container">
          <CategoryBasedPackagesPage packageType={params?.packageType} />
        </div>
      </section>
    </section>
  );
};

export default PackageTypePage;
