import PackageBookingForm from "@/components/packageBookingPage/PackageBookingForm";
import React from "react";

const PackageBookingPage = ({ params }) => {
  const tourPackageId = params.segments[0] || "Random_id_RBQhYmZiYmMwYzYzNzFh";
  const tourPackageName =
    params.segments[1].replace(/%20/g, " ") || "Demo Package";
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
              Package-Booking
            </h1>
          </div>
        </div>

        <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
          <div className="container mx-auto px-4">
            <p className="text-lg">
              <span className="text-gray-500">Home</span> /{" "}
              <span className="text-red-500 font-bold capitalize">
                Package-Booking
              </span>
            </p>
          </div>
        </div>
      </div>
      <PackageBookingForm
        tourPackageId={tourPackageId}
        tourPackageName={tourPackageName}
      />
    </section>
  );
};

export default PackageBookingPage;
