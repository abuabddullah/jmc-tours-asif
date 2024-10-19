"use client";
import { UserContext } from "@/utils/contextAPIs/UserInfoContext";
import React, { useContext, useRef, useState, useEffect } from "react";

const PackageBookingForm = ({ tourPackageId, tourPackageName }) => {
  const { user, loading, error } = useContext(UserContext);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    queryMessages: "",
    tourPackageName: tourPackageName,
    tourPackageId: tourPackageId,
  });

  // Effect to update formData when user info is available
  useEffect(() => {
    if (!loading && user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.username || "",
        email: user.email || "",
        contactNumber: user.phone || "",
      }));
    }
  }, [loading, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/package-bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Network response was not ok");
      }

      const result = await response.json();
      console.log("Booking successful:", result);
      formRef.current.reset();
      alert("Booking successful. Thank you!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="max-w-5xl mx-auto p-6 py-16 bg-white">
      <div
        className="bg-white shadow-md rounded-lg p-6 mb-8"
        style={{ backgroundColor: "#faf3ee" }}
      >
        <h2 className="text-xl lg:text-3xl font-bold text-center text-red-500 mb-4">
          Book Now for <br />
          <span className="">{tourPackageName}</span> <br />
          <span className="text-base text-center break-all lg:text-lg">
            ({tourPackageId})
          </span>
        </h2>
        <p className="text-base text-gray-700 text-center mb-6">
          Fill out the form to book your tour package. We will get back to you
          shortly.
        </p>
        <hr className="border-gray-300 mb-6" />
      </div>

      <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
        {/* Personal Information */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Personal Information:</h3>
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              required: true,
            },
            {
              label: "Email Address",
              name: "email",
              type: "email",
              required: true,
            },
            {
              label: "Contact Number",
              name: "contactNumber",
              type: "tel",
              required: true,
            },
          ].map(({ label, name, type, required }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={name}
                type={type}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                placeholder={label}
                onChange={handleChange}
                value={formData[name]} // Set the input value
                required={required}
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Query Messages (if any)
            </label>
            <textarea
              name="queryMessages"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
              placeholder="Ask any questions you may have about the tour"
              onChange={handleChange}
              value={formData.queryMessages} // Set the textarea value
            ></textarea>
          </div>
        </section>

        {/* Submit Button */}
        <div>
          <button className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default PackageBookingForm;
