import React from "react";
import BookingUpdateForm from "./BookingUpdateForm";

const UpdateTicketBookingPageComponent = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-bottom"
          style={{
            backgroundImage: `url("https://jmc.tours/wp-content/uploads/2024/05/dan-freeman-7Zb7kUyQg1E-unsplash-scaled.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            zIndex: -1,
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#000000c5] flex items-center justify-start">
          <div className="container">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center capitalize">
              Update Ticket Booking
            </h1>
          </div>
        </div>

        <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
          <div className="container mx-auto px-4">
            <p className="text-lg">
              <span className="text-gray-500">Home</span> /{" "}
              <span className="text-red-500 font-bold capitalize">
                Update Ticket Booking
              </span>
            </p>
          </div>
        </div>
      </div>
      <BookingUpdateForm />
    </div>
  );
};

export default UpdateTicketBookingPageComponent;
