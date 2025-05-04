// "use client";

// import React, { useRef, useState } from "react";

// const TicketBookingForm = () => {
//   const formRef = useRef();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     nationality: "",
//     passportNumber: "",
//     travelDetails: {
//       tourPackageName: "",
//       departureDate: "",
//       returnDate: "",
//       numberOfAdults: 1,
//       numberOfChildren: 0,
//     },
//     accommodationPreferences: {
//       hotelType: "Standard",
//       roomConfiguration: "Single",
//       specialRequests: "",
//     },
//     transportationPreferences: {
//       flightPreference: "",
//       airportTransfers: false,
//       specialTransportationRequests: "",
//     },
//     emergencyContactInformation: {
//       name: "",
//       relationship: "",
//       contactNumber: "",
//     },
//     paymentInformation: {
//       paymentMethod: "Credit Card",
//       creditCardDetails: "",
//       billingAddress: "",
//     },
//     additionalComments: {
//       specificDietary: "",
//       specialRequests: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const [mainField, subField] = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [mainField]: { ...prev[mainField], [subField]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("formData", formData);
//     const token = localStorage.getItem("token");
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/ticket-bookings`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || "Network response was not ok");
//       }
//       const result = await response.json();
//       console.log("Booking successful:", result);
//       formRef.current.reset();
//       alert("Booking successful. Thank you!");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white">
//       <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
//         {/* Personal Information */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Personal Information:</h3>
//           {[
//             {
//               label: "Full Name",
//               name: "fullName",
//               type: "text",
//               required: true,
//             },
//             {
//               label: "Email Address",
//               name: "email",
//               type: "email",
//               required: true,
//             },
//             {
//               label: "Contact Number",
//               name: "contactNumber",
//               type: "tel",
//               required: true,
//             },
//             {
//               label: "Nationality",
//               name: "nationality",
//               type: "text",
//               required: true,
//             },
//             {
//               label: "Passport Number (for international tours)",
//               name: "passportNumber",
//               type: "text",
//             },
//           ].map(({ label, name, type, required }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {label} {required && <span className="text-red-500">*</span>}
//               </label>
//               <input
//                 name={name}
//                 type={type}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//                 placeholder={label}
//                 onChange={handleChange}
//                 required={required}
//               />
//             </div>
//           ))}
//         </section>

//         {/* Travel Details */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Travel Details:</h3>
//           {[
//             {
//               label: "Tour Package Name",
//               name: "travelDetails.tourPackageName",
//               type: "text",
//               required: true,
//             },
//             {
//               label: "Departure Date",
//               name: "travelDetails.departureDate",
//               type: "date",
//               required: true,
//             },
//             {
//               label: "Return Date",
//               name: "travelDetails.returnDate",
//               type: "date",
//               required: true,
//             },
//             {
//               label: "Number of Adults",
//               name: "travelDetails.numberOfAdults",
//               type: "number",
//               required: true,
//               min: 1,
//             },
//             {
//               label: "Number of Children (if applicable)",
//               name: "travelDetails.numberOfChildren",
//               type: "number",
//               min: 0,
//             },
//           ].map(({ label, name, type, required, min }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {label} {required && <span className="text-red-500">*</span>}
//               </label>
//               <input
//                 name={name}
//                 type={type}
//                 min={min}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//                 placeholder={label}
//                 onChange={handleChange}
//                 required={required}
//               />
//             </div>
//           ))}
//         </section>

//         {/* Accommodation Preferences */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">
//             Accommodation Preferences:
//           </h3>
//           {[
//             {
//               label: "Hotel Type",
//               name: "accommodationPreferences.hotelType",
//               options: ["Standard", "Deluxe", "Luxury"],
//             },
//             {
//               label: "Room Configuration",
//               name: "accommodationPreferences.roomConfiguration",
//               options: ["Single", "Double", "Triple"],
//             },
//           ].map(({ label, name, options }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {label}
//               </label>
//               <select
//                 name={name}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//                 onChange={handleChange}
//               >
//                 {options.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ))}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Special Requests (if any)
//             </label>
//             <textarea
//               name="accommodationPreferences.specialRequests"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
//               placeholder="Special Requests (if any)"
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </section>

//         {/* Transportation Preferences */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">
//             Transportation Preferences:
//           </h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Flight Preference (if applicable)
//             </label>
//             <input
//               name="transportationPreferences.flightPreference"
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//               placeholder="Flight Preference"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex items-center mb-4">
//             <input
//               name="transportationPreferences.airportTransfers"
//               type="checkbox"
//               className="mr-2"
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   transportationPreferences: {
//                     ...prev.transportationPreferences,
//                     airportTransfers: e.target.checked,
//                   },
//                 }))
//               }
//             />
//             <label>Airport Transfers Required</label>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Special Transportation Requests (if any)
//             </label>
//             <textarea
//               name="transportationPreferences.specialTransportationRequests"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
//               placeholder="Special Transportation Requests (if any)"
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </section>

//         {/* Emergency Contact Information */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">
//             Emergency Contact Information:
//           </h3>
//           {[
//             {
//               label: "Name",
//               name: "emergencyContactInformation.name",
//               required: true,
//             },
//             {
//               label: "Relationship",
//               name: "emergencyContactInformation.relationship",
//               required: true,
//             },
//             {
//               label: "Contact Number",
//               name: "emergencyContactInformation.contactNumber",
//               type: "tel",
//               required: true,
//             },
//           ].map(({ label, name, required }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {label} {required && <span className="text-red-500">*</span>}
//               </label>
//               <input
//                 name={name}
//                 type="text"
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//                 placeholder={label}
//                 onChange={handleChange}
//                 required={required}
//               />
//             </div>
//           ))}
//         </section>

//         {/* Payment Information */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Payment Information:</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Payment Method
//             </label>
//             <select
//               name="paymentInformation.paymentMethod"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//               onChange={handleChange}
//             >
//               {["Credit Card", "PayPal", "Bank Transfer"].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Credit Card Details (if applicable)
//             </label>
//             <input
//               name="paymentInformation.creditCardDetails"
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//               placeholder="Credit Card Details"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Billing Address (if applicable)
//             </label>
//             <input
//               name="paymentInformation.billingAddress"
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
//               placeholder="Billing Address"
//               onChange={handleChange}
//             />
//           </div>
//         </section>

//         {/* Additional Comments */}
//         <section>
//           <h3 className="text-xl font-semibold mb-4">Additional Comments:</h3>
//           {[
//             {
//               label: "Specific Dietary Requirements",
//               name: "additionalComments.specificDietary",
//             },
//             {
//               label: "Special Requests (if any)",
//               name: "additionalComments.specialRequests",
//             },
//           ].map(({ label, name }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {label}
//               </label>
//               <textarea
//                 name={name}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
//                 placeholder={label}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//           ))}
//         </section>

//         {/* Submit Button */}
//         <div>
//           <button className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800">
//             Book Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TicketBookingForm;

/* **************** */
/* v-2 auto user info from state of context api */

"use client";

import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "@/utils/contextAPIs/UserInfoContext";

const TicketBookingForm = () => {
  const { user, loading } = useContext(UserContext);
  const formRef = useRef();
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
      numberOfAdults: 1,
      numberOfChildren: 0,
    },
    accommodationPreferences: {
      hotelType: "Standard",
      roomConfiguration: "Single",
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
      paymentMethod: "Credit Card",
      creditCardDetails: "",
      billingAddress: "",
    },
    additionalComments: {
      specificDietary: "",
      specialRequests: "",
    },
  });

  // Effect to pre-fill the form data with user info
  useEffect(() => {
    if (!loading && user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.username || "",
        email: user.email || "",
        contactNumber: user.phone || "",
        nationality: "", // Set default or use user data if available
      }));
    }
  }, [loading, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [mainField, subField] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [mainField]: { ...prev[mainField], [subField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/ticket-bookings`,
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
    <div className="max-w-5xl mx-auto p-6 bg-white">
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
            {
              label: "Nationality",
              name: "nationality",
              type: "text",
              required: true,
            },
            {
              label: "Passport Number (for international tours)",
              name: "passportNumber",
              type: "text",
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
                value={formData[name]} // Controlled input
                required={required}
              />
            </div>
          ))}
        </section>

        {/* Travel Details */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Travel Details:</h3>
          {[
            {
              label: "Tour Package Name",
              name: "travelDetails.tourPackageName",
              type: "text",
              required: true,
            },
            {
              label: "Departure Date",
              name: "travelDetails.departureDate",
              type: "date",
              required: true,
            },
            {
              label: "Return Date",
              name: "travelDetails.returnDate",
              type: "date",
              required: true,
            },
            {
              label: "Number of Adults",
              name: "travelDetails.numberOfAdults",
              type: "number",
              required: true,
              min: 1,
            },
            {
              label: "Number of Children (if applicable)",
              name: "travelDetails.numberOfChildren",
              type: "number",
              min: 0,
            },
          ].map(({ label, name, type, required, min }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={name}
                type={type}
                min={min}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                placeholder={label}
                onChange={handleChange}
                value={formData[name]} // Controlled input
                required={required}
              />
            </div>
          ))}
        </section>

        {/* Accommodation Preferences */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Accommodation Preferences:
          </h3>
          {[
            {
              label: "Hotel Type",
              name: "accommodationPreferences.hotelType",
              options: ["Standard", "Deluxe", "Luxury"],
            },
            {
              label: "Room Configuration",
              name: "accommodationPreferences.roomConfiguration",
              options: ["Single", "Double", "Triple"],
            },
          ].map(({ label, name, options }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <select
                name={name}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                onChange={handleChange}
                value={formData[name]} // Controlled select
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Special Requests (if any)
            </label>
            <textarea
              name="accommodationPreferences.specialRequests"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
              placeholder="Special Requests (if any)"
              onChange={handleChange}
              value={formData.accommodationPreferences.specialRequests} // Controlled textarea
            ></textarea>
          </div>
        </section>

        {/* Transportation Preferences */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Transportation Preferences:
          </h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Flight Preference (if applicable)
            </label>
            <input
              name="transportationPreferences.flightPreference"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
              placeholder="Flight Preference"
              onChange={handleChange}
              value={formData.transportationPreferences.flightPreference} // Controlled input
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              name="transportationPreferences.airportTransfers"
              type="checkbox"
              className="mr-2"
              checked={formData.transportationPreferences.airportTransfers} // Controlled checkbox
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  transportationPreferences: {
                    ...prev.transportationPreferences,
                    airportTransfers: e.target.checked,
                  },
                }))
              }
            />
            <label>Airport Transfers Required</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Special Transportation Requests (if any)
            </label>
            <textarea
              name="transportationPreferences.specialTransportationRequests"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
              placeholder="Special Transportation Requests (if any)"
              onChange={handleChange}
              value={
                formData.transportationPreferences.specialTransportationRequests
              } // Controlled textarea
            ></textarea>
          </div>
        </section>

        {/* Emergency Contact Information */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Emergency Contact Information:
          </h3>
          {[
            {
              label: "Name",
              name: "emergencyContactInformation.name",
              required: true,
            },
            {
              label: "Relationship",
              name: "emergencyContactInformation.relationship",
              required: true,
            },
            {
              label: "Contact Number",
              name: "emergencyContactInformation.contactNumber",
              type: "tel",
              required: true,
            },
          ].map(({ label, name, required }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={name}
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                placeholder={label}
                onChange={handleChange}
                value={formData[name]} // Controlled input
                required={required}
              />
            </div>
          ))}
        </section>

        {/* Payment Information */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Payment Information:</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              name="paymentInformation.paymentMethod"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
              onChange={handleChange}
              value={formData.paymentInformation.paymentMethod} // Controlled select
            >
              {["Credit Card", "PayPal", "Bank Transfer"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Credit Card Details (if applicable)
            </label>
            <input
              name="paymentInformation.creditCardDetails"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
              placeholder="Credit Card Details"
              onChange={handleChange}
              value={formData.paymentInformation.creditCardDetails} // Controlled input
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Billing Address (if applicable)
            </label>
            <input
              name="paymentInformation.billingAddress"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
              placeholder="Billing Address"
              onChange={handleChange}
              value={formData.paymentInformation.billingAddress} // Controlled input
            />
          </div>
        </section>

        {/* Additional Comments */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Additional Comments:</h3>
          {[
            {
              label: "Specific Dietary Requirements",
              name: "additionalComments.specificDietary",
            },
            {
              label: "Special Requests (if any)",
              name: "additionalComments.specialRequests",
            },
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <textarea
                name={name}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 min-h-32"
                placeholder={label}
                onChange={handleChange}
                value={formData[name]} // Controlled textarea
              ></textarea>
            </div>
          ))}
        </section>

        {/* Submit Button */}
        <div>
          <button className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketBookingForm;
