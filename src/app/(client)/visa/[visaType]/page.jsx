import FlagsComponent from "@/components/VisaPage/FlagsComponent";
import React from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const staticParams4VisaPage = [
    {
      visaType: "StudentVisa",
    },
    {
      visaType: "TouristVisa",
    },
  ];
  return staticParams4VisaPage;
}

const VisaTypePage = ({ params }) => {
  return (
    <section>
      {/* Background Section */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-bottom"
          style={{
            backgroundImage: `url("https://jmc.tours/wp-content/uploads/2021/10/breadcrumb.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            zIndex: -1,
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-start">
          <div className="container">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
              {params?.visaType}
            </h1>
          </div>
        </div>

        <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
          <div className="container mx-auto px-4">
            <p className="text-lg">
              <span className="text-gray-500">Home</span> /{" "}
              <span className="text-red-500 font-bold">{params?.visaType}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Country Flags */}
      <FlagsComponent />
    </section>
  );
};

export default VisaTypePage;
