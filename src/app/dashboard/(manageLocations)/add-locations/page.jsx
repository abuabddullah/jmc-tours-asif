"use client";
import useLocations from "@/utils/customHooks/useLocations";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AddLocationForm = () => {
  const router = useRouter();
  const { refetchLocations } = useLocations();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    tourCount: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDetails = new FormData();

    // Append each form data key-value pair to formDetails
    formDetails.append("name", formData.name);
    formDetails.append("file", formData.image); // File
    formDetails.append("description", formData.description);
    formDetails.append("category", formData.category);
    formDetails.append("tourCount", formData.tourCount);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`;

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDetails,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Location added successfully:", result.location);

      // Refetch locations after adding a new one
      refetchLocations();

      router.replace("/dashboard/all-locations");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Add New Location</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            type="file"
            accept="image/*"
            className="mt-1 block w-full"
            name="image"
            // multiple
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
            name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            name="category"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            <option selected value="" disabled>
              Select a category
            </option>
            <option value="Wildlife">Wildlife</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tour Count
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, tourCount: e.target.value })
            }
            type="number"
            name="tourCount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLocationForm;
