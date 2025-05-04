"use client";
import React, { useState, useEffect, useRef } from "react";

const BookingUpdateForm = () => {
  const bookingId = "66f4f0186ceaab1c2c75b783";
  const updateformRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    nationality: "",
    passportNumber: "",
    travelDetails: {
      tourPackageName: "",
      departureDate: "",
      returnDate: "",
      numberOfAdults: 0,
      numberOfChildren: 0,
    },
    accommodationPreferences: {
      hotelType: "",
      roomConfiguration: "",
      specialRequests: "",
    },
    transportationPreferences: {
      flightPreference: "",
      airportTransfers: false,
      specialTransportationRequests: "",
    },
    emergencyContactInformation: {
      name: "",
      relationship: "",
      contactNumber: "",
    },
    paymentInformation: {
      paymentMethod: "",
      creditCardDetails: "",
      billingAddress: "",
    },
    additionalComments: {
      specificDietary: "",
      specialRequests: "",
    },
  });

  // Fetch booking data
  const fetchBookingData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/ticket-bookings/${bookingId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const bookingData = await response.json();

      console.log("fetched Booking data:", bookingData);
      const formattedData = {
        ...bookingData,
        travelDetails: {
          ...bookingData.travelDetails,
          departureDate: bookingData.travelDetails.departureDate.split("T")[0],
          returnDate: bookingData.travelDetails.returnDate.split("T")[0],
        },
      };

      setFormData(formattedData);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  useEffect(() => {
    fetchBookingData();
  }, [bookingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTravelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      travelDetails: {
        ...prevData.travelDetails,
        [name]: value,
      },
    }));
  };

  const handleAccommodationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      accommodationPreferences: {
        ...prevData.accommodationPreferences,
        [name]: value,
      },
    }));
  };

  const handleTransportationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      transportationPreferences: {
        ...prevData.transportationPreferences,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleEmergencyChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      emergencyContactInformation: {
        ...prevData.emergencyContactInformation,
        [name]: value,
      },
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentInformation: {
        ...prevData.paymentInformation,
        [name]: value,
      },
    }));
  };

  const handleCommentsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      additionalComments: {
        ...prevData.additionalComments,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/ticket-bookings/${bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Booking updated:", result);
      // Reset form or show success message here if needed

      updateformRef.current.reset();
      alert("Booking updated. Thank you!");
      await fetchBookingData(bookingId);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <form
        onSubmit={handleSubmit}
        ref={updateformRef}
        className="grid grid-cols-1 gap-6"
      >
        {/* Personal Information */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Personal Information:</h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Contact Number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Nationality"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Passport Number (for international tours)
            </label>
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Passport Number (for international tours)"
            />
          </div>
        </section>

        {/* Travel Details */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Travel Details:</h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Tour Package Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tourPackageName"
              value={formData.travelDetails.tourPackageName}
              onChange={handleTravelChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Tour Package Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Departure Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.travelDetails.departureDate}
              onChange={handleTravelChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Return Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.travelDetails.returnDate}
              onChange={handleTravelChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Number of Adults <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="numberOfAdults"
              value={formData.travelDetails.numberOfAdults}
              onChange={handleTravelChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Adults"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Number of Children (if applicable)
            </label>
            <input
              type="number"
              name="numberOfChildren"
              value={formData.travelDetails.numberOfChildren}
              onChange={handleTravelChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Children"
            />
          </div>
        </section>

        {/* Accommodation Preferences */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Accommodation Preferences:
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Hotel Type
            </label>
            <input
              type="text"
              name="hotelType"
              value={formData.accommodationPreferences.hotelType}
              onChange={handleAccommodationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Hotel Type"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Room Configuration
            </label>
            <input
              type="text"
              name="roomConfiguration"
              value={formData.accommodationPreferences.roomConfiguration}
              onChange={handleAccommodationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Room Configuration"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Special Requests
            </label>
            <input
              type="text"
              name="specialRequests"
              value={formData.accommodationPreferences.specialRequests}
              onChange={handleAccommodationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Special Requests"
            />
          </div>
        </section>

        {/* Transportation Preferences */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Transportation Preferences:
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Flight Preference
            </label>
            <input
              type="text"
              name="flightPreference"
              value={formData.transportationPreferences.flightPreference}
              onChange={handleTransportationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Flight Preference"
            />
          </div>
          <div>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                name="airportTransfers"
                checked={formData.transportationPreferences.airportTransfers}
                onChange={handleTransportationChange}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Airport Transfers</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Special Transportation Requests
            </label>
            <input
              type="text"
              name="specialTransportationRequests"
              value={
                formData.transportationPreferences.specialTransportationRequests
              }
              onChange={handleTransportationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Special Transportation Requests"
            />
          </div>
        </section>

        {/* Emergency Contact Information */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Emergency Contact Information:
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.emergencyContactInformation.name}
              onChange={handleEmergencyChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Emergency Contact Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Relationship <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="relationship"
              value={formData.emergencyContactInformation.relationship}
              onChange={handleEmergencyChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Relationship"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.emergencyContactInformation.contactNumber}
              onChange={handleEmergencyChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Emergency Contact Number"
              required
            />
          </div>
        </section>

        {/* Payment Information */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Payment Information:</h3>
          <h3 className="text-lg font-semibold mb-4">Payment Information:</h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              name="paymentInformation.paymentMethod"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={handlePaymentChange}
              required
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Credit Card Details (if applicable)
            </label>
            <input
              type="text"
              name="creditCardDetails"
              value={formData.paymentInformation.creditCardDetails}
              onChange={handlePaymentChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Credit Card Details"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Billing Address
            </label>
            <input
              type="text"
              name="billingAddress"
              value={formData.paymentInformation.billingAddress}
              onChange={handlePaymentChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Billing Address"
            />
          </div>
        </section>

        {/* Additional Comments */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Additional Comments:</h3>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Specific Dietary Requirements
            </label>
            <input
              type="text"
              name="specificDietary"
              value={formData.additionalComments.specificDietary}
              onChange={handleCommentsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Specific Dietary Requirements"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Special Requests
            </label>
            <input
              type="text"
              name="specialRequests"
              value={formData.additionalComments.specialRequests}
              onChange={handleCommentsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Special Requests"
            />
          </div>
        </section>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingUpdateForm;
