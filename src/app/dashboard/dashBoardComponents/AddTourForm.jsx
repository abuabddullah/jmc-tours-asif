// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import axios from "axios";
// import useTours from "@/utils/customHooks/useTours";

// const AddTourForm = () => {
//   const router = useRouter();
//   const { refetchTours } = useTours();
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     country: "",
//     cheapPriceFrom: 0,
//     durationDays: 0,
//     tourType: "air",
//     overview: "",
//     ratings: 0,
//     cost: 0,
//     category: "",
//     tourCount: 0,
//     features: {
//       pickNdrop: false,
//       mealPerDay: 0,
//       cruiseDinner: false,
//       musicEvent: false,
//       visitPlacesCountInTheCity: 0,
//       visitPlacesCountInTheCityWithGroup: false,
//       additionalServices: false,
//       insurance: false,
//       foodNDrink: false,
//       freeTicket: false,
//     },
//     tourPlan: {
//       day1: "",
//       day2: "",
//       day3: "",
//       day4: "",
//       day5: "",
//     },
//     seo: {
//       keywords: "",
//       description: "",
//     },
//     image: null,
//     maxGuest: 0,
//     minAge: 0,
//   });

//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       // setFormData((prev) => ({ ...prev, image: selectedFile.name }));
//       setFormData((prev) => ({ ...prev, image: selectedFile }));
//       setPreview(URL.createObjectURL(selectedFile));
//     } else {
//       setFile(null);
//       setPreview("");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     if (id.includes(".")) {
//       const [mainField, subField] = id.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [mainField]: { ...prev[mainField], [subField]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [id]: value }));
//     }
//   };

//   const handleFeatureChange = (e) => {
//     const { id, checked } = e.target;
//     if (id.includes(".")) {
//       const [mainField, subField] = id.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         features: { ...prev.features, [subField]: checked },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         features: { ...prev.features, [id]: checked },
//       }));
//     }
//   };

//   const handleAddPost = async (e) => {
//     e.preventDefault();
//     console.log("formData", formData);
//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (typeof value === "object") {
//         Object.entries(value).forEach(([subKey, subValue]) => {
//           form.append(`${key}.${subKey}`, subValue);
//         });
//       } else {
//         form.append(key, value);
//       }
//     });
//     if (file) form.append("file", file);

//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`,
//         form,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Tour added successfully!");
//       refetchTours();
//       router.replace(`/dashboard/all-tours`);
//     } catch (error) {
//       console.error("Error during posting tour:", error);
//       alert("Failed to add tour.");
//     }
//   };

//   return (
//     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
//       <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
//         Add Tour
//       </h2>
//       <form onSubmit={handleAddPost}>
//         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//           {/* Tour Details */}
//           <div>
//             <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
//               Title
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="location"
//             >
//               Location
//             </label>
//             <input
//               id="location"
//               type="text"
//               value={formData.location}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="country"
//             >
//               Country
//             </label>
//             <input
//               id="country"
//               type="text"
//               value={formData.country}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="cheapPriceFrom"
//             >
//               Cheap Price From
//             </label>
//             <input
//               id="cheapPriceFrom"
//               type="number"
//               min="0"
//               value={formData.cheapPriceFrom}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="durationDays"
//             >
//               Duration (Days)
//             </label>
//             <input
//               id="durationDays"
//               type="number"
//               min="0"
//               value={formData.durationDays}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="tourType"
//             >
//               Tour Type
//             </label>
//             <select
//               id="tourType"
//               value={formData.tourType}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             >
//               <option value="air">Air</option>
//               <option value="land">Land</option>
//               <option value="sea">Sea</option>
//             </select>
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="overview"
//             >
//               Overview
//             </label>
//             <textarea
//               id="overview"
//               value={formData.overview}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="ratings"
//             >
//               Ratings
//             </label>
//             <input
//               id="ratings"
//               type="number"
//               min="0"
//               max="5"
//               value={formData.ratings}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label className="text-gray-700 dark:text-gray-200" htmlFor="cost">
//               Cost
//             </label>
//             <input
//               id="cost"
//               type="number"
//               min="0"
//               value={formData.cost}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="category"
//             >
//               Category
//             </label>
//             {/* <input
//               id="category"
//               type="text"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             /> */}

//             <select
//               id="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               <option value="adventure">Adventure</option>
//               <option value="international">International</option>
//               <option value="honeymoon">Honeymoon</option>
//               <option value="popular">Popular</option>
//             </select>
//           </div>

//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="tourCount"
//             >
//               Tour Count
//             </label>
//             <input
//               id="tourCount"
//               type="number"
//               min="0"
//               value={formData.tourCount}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>
//         </div>

//         {/* Features */}
//         <div className="mt-6">
//           <h3 className="text-gray-700 dark:text-gray-200">Features</h3>
//           <div className="grid grid-cols-2 gap-2 mt-2">
//             <div>
//               <label
//                 className="text-gray-700 dark:text-gray-200"
//                 htmlFor="features.mealPerDay"
//               >
//                 Meals Per Day
//               </label>
//               <input
//                 id="features.mealPerDay"
//                 type="number"
//                 min="0"
//                 value={formData.features.mealPerDay}
//                 onChange={handleInputChange}
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//               />
//             </div>
//             <div>
//               <label
//                 className="text-gray-700 dark:text-gray-200"
//                 htmlFor="features.visitPlacesCountInTheCity"
//               >
//                 Visit Places Count In The City
//               </label>
//               <input
//                 id="features.visitPlacesCountInTheCity"
//                 type="number"
//                 min="0"
//                 value={formData.features.visitPlacesCountInTheCity}
//                 onChange={handleInputChange}
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//               />
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="pickNdrop"
//                   checked={formData.features.pickNdrop}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Pick N Drop
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="cruiseDinner"
//                   checked={formData.features.cruiseDinner}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Cruise Dinner
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="musicEvent"
//                   checked={formData.features.musicEvent}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Music Event
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="visitPlacesCountInTheCityWithGroup"
//                   checked={formData.features.visitPlacesCountInTheCityWithGroup}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Visit Places Count In The City With Group
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="additionalServices"
//                   checked={formData.features.additionalServices}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Additional Services
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="insurance"
//                   checked={formData.features.insurance}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Insurance
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="foodNDrink"
//                   checked={formData.features.foodNDrink}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Food & Drink
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="freeTicket"
//                   checked={formData.features.freeTicket}
//                   onChange={handleFeatureChange}
//                   className="mr-2"
//                 />
//                 Free Ticket
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Tour Plan */}
//         <div className="mt-6">
//           <h3 className="text-gray-700 dark:text-gray-200">Tour Plan</h3>
//           <div className="grid grid-cols-1 gap-2 mt-2">
//             {[...Array(5)].map((_, index) => (
//               <div key={index}>
//                 <label
//                   className="text-gray-700 dark:text-gray-200"
//                   htmlFor={`tourPlan.day${index + 1}`}
//                 >
//                   Day {index + 1} Plan
//                 </label>
//                 <textarea
//                   id={`tourPlan.day${index + 1}`}
//                   value={formData.tourPlan[`day${index + 1}`]}
//                   onChange={handleInputChange}
//                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* SEO */}
//         <div className="mt-6">
//           <h3 className="text-gray-700 dark:text-gray-200">SEO</h3>
//           <div className="grid grid-cols-1 gap-2 mt-2">
//             <div>
//               <label
//                 className="text-gray-700 dark:text-gray-200"
//                 htmlFor="seo.keywords"
//               >
//                 Keywords
//               </label>
//               <input
//                 id="seo.keywords"
//                 type="text"
//                 value={formData.seo.keywords}
//                 onChange={handleInputChange}
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//               />
//             </div>

//             <div>
//               <label
//                 className="text-gray-700 dark:text-gray-200"
//                 htmlFor="seo.description"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="seo.description"
//                 value={formData.seo.description}
//                 onChange={handleInputChange}
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div className="mt-6">
//           <label className="text-gray-700 dark:text-gray-200" htmlFor="image">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             id="image"
//             onChange={handleFileChange}
//             className="block w-full mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//           />
//           {preview && (
//             <img
//               src={preview}
//               alt="Image Preview"
//               className="mt-4 h-32 w-auto"
//             />
//           )}
//         </div>

//         {/* Max Guests and Min Age */}
//         <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="maxGuest"
//             >
//               Max Guest
//             </label>
//             <input
//               id="maxGuest"
//               type="number"
//               min="0"
//               value={formData.maxGuest}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>
//           <div>
//             <label
//               className="text-gray-700 dark:text-gray-200"
//               htmlFor="minAge"
//             >
//               Min Age
//             </label>
//             <input
//               id="minAge"
//               type="number"
//               min="0"
//               value={formData.minAge}
//               onChange={handleInputChange}
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-end mt-6">
//           <button
//             type="submit"
//             className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
//           >
//             Add Tour
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AddTourForm;

/* ************ */
/* v-2 auto tours spot name from api */

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import useTours from "@/utils/customHooks/useTours";
import { useTourSpotsName } from "@/utils/customHooks/useTourSpotsName";

const AddTourForm = () => {
  const router = useRouter();
  const { refetchTours } = useTours();
  const { isLoading, error, tourSpotsName, success, refetchTourSpotsName } =
    useTourSpotsName();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    country: "",
    cheapPriceFrom: 0,
    durationDays: 0,
    tourType: "air",
    overview: "",
    ratings: 0,
    cost: 0,
    category: "",
    tourCount: 0,
    features: {
      pickNdrop: false,
      mealPerDay: 0,
      cruiseDinner: false,
      musicEvent: false,
      visitPlacesCountInTheCity: 0,
      visitPlacesCountInTheCityWithGroup: false,
      additionalServices: false,
      insurance: false,
      foodNDrink: false,
      freeTicket: false,
    },
    tourPlan: {
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
    },
    seo: {
      keywords: "",
      description: "",
    },
    image: null,
    maxGuest: 0,
    minAge: 0,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // setFormData((prev) => ({ ...prev, image: selectedFile.name }));
      setFormData((prev) => ({ ...prev, image: selectedFile }));
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreview("");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id.includes(".")) {
      const [mainField, subField] = id.split(".");
      setFormData((prev) => ({
        ...prev,
        [mainField]: { ...prev[mainField], [subField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleFeatureChange = (e) => {
    const { id, checked } = e.target;
    if (id.includes(".")) {
      const [mainField, subField] = id.split(".");
      setFormData((prev) => ({
        ...prev,
        features: { ...prev.features, [subField]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        features: { ...prev.features, [id]: checked },
      }));
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "object") {
        Object.entries(value).forEach(([subKey, subValue]) => {
          form.append(`${key}.${subKey}`, subValue);
        });
      } else {
        form.append(key, value);
      }
    });
    if (file) form.append("file", file);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Tour added successfully!");
      refetchTours();
      router.replace(`/dashboard/all-tours`);
    } catch (error) {
      console.error("Error during posting tour:", error);
      alert("Failed to add tour.");
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Tour
      </h2>
      <form onSubmit={handleAddPost}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* Tour Details */}
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="location"
            >
              Location
            </label>
            <select
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              <option value="" disabled>
                Select Location
              </option>
              {!isLoading && tourSpotsName
                ? tourSpotsName.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="country"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="cheapPriceFrom"
            >
              Cheap Price From
            </label>
            <input
              id="cheapPriceFrom"
              type="number"
              min="0"
              value={formData.cheapPriceFrom}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="durationDays"
            >
              Duration (Days)
            </label>
            <input
              id="durationDays"
              type="number"
              min="0"
              value={formData.durationDays}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="tourType"
            >
              Tour Type
            </label>
            <select
              id="tourType"
              value={formData.tourType}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              <option value="air">Air</option>
              <option value="land">Land</option>
              <option value="sea">Sea</option>
            </select>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="overview"
            >
              Overview
            </label>
            <textarea
              id="overview"
              value={formData.overview}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="ratings"
            >
              Ratings
            </label>
            <input
              id="ratings"
              type="number"
              min="0"
              max="5"
              value={formData.ratings}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="cost">
              Cost
            </label>
            <input
              id="cost"
              type="number"
              min="0"
              value={formData.cost}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Category
            </label>
            {/* <input
              id="category"
              type="text"
              value={formData.category}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            /> */}

            <select
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="adventure">Adventure</option>
              <option value="international">International</option>
              <option value="honeymoon">Honeymoon</option>
              <option value="popular">Popular</option>
            </select>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="tourCount"
            >
              Tour Count
            </label>
            <input
              id="tourCount"
              type="number"
              min="0"
              value={formData.tourCount}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-gray-700 dark:text-gray-200">Features</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="features.mealPerDay"
              >
                Meals Per Day
              </label>
              <input
                id="features.mealPerDay"
                type="number"
                min="0"
                value={formData.features.mealPerDay}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="features.visitPlacesCountInTheCity"
              >
                Visit Places Count In The City
              </label>
              <input
                id="features.visitPlacesCountInTheCity"
                type="number"
                min="0"
                value={formData.features.visitPlacesCountInTheCity}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="pickNdrop"
                  checked={formData.features.pickNdrop}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Pick N Drop
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="cruiseDinner"
                  checked={formData.features.cruiseDinner}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Cruise Dinner
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="musicEvent"
                  checked={formData.features.musicEvent}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Music Event
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="visitPlacesCountInTheCityWithGroup"
                  checked={formData.features.visitPlacesCountInTheCityWithGroup}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Visit Places Count In The City With Group
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="additionalServices"
                  checked={formData.features.additionalServices}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Additional Services
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="insurance"
                  checked={formData.features.insurance}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Insurance
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="foodNDrink"
                  checked={formData.features.foodNDrink}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Food & Drink
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="freeTicket"
                  checked={formData.features.freeTicket}
                  onChange={handleFeatureChange}
                  className="mr-2"
                />
                Free Ticket
              </label>
            </div>
          </div>
        </div>

        {/* Tour Plan */}
        <div className="mt-6">
          <h3 className="text-gray-700 dark:text-gray-200">Tour Plan</h3>
          <div className="grid grid-cols-1 gap-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor={`tourPlan.day${index + 1}`}
                >
                  Day {index + 1} Plan
                </label>
                <textarea
                  id={`tourPlan.day${index + 1}`}
                  value={formData.tourPlan[`day${index + 1}`]}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEO */}
        <div className="mt-6">
          <h3 className="text-gray-700 dark:text-gray-200">SEO</h3>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="seo.keywords"
              >
                Keywords
              </label>
              <input
                id="seo.keywords"
                type="text"
                value={formData.seo.keywords}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="seo.description"
              >
                Description
              </label>
              <textarea
                id="seo.description"
                value={formData.seo.description}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div className="mt-6">
          <label className="text-gray-700 dark:text-gray-200" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="block w-full mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
          {preview && (
            <img
              src={preview}
              alt="Image Preview"
              className="mt-4 h-32 w-auto"
            />
          )}
        </div>

        {/* Max Guests and Min Age */}
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="maxGuest"
            >
              Max Guest
            </label>
            <input
              id="maxGuest"
              type="number"
              min="0"
              value={formData.maxGuest}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="minAge"
            >
              Min Age
            </label>
            <input
              id="minAge"
              type="number"
              min="0"
              value={formData.minAge}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Add Tour
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTourForm;
