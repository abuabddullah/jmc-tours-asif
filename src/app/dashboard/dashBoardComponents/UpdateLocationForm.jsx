"use client";
import useLocations from "@/utils/customHooks/useLocations";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const UpdateLocationForm = ({ location }) => {
  const router = useRouter();
  const { refetchLocations } = useLocations();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    tourCount: 0,
  });

  useEffect(() => {
    if (location) {
      setFormData({
        name: location.name,
        image: location.image,
        description: location.description,
        category: location.category,
        tourCount: location.tourCount,
      });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDetails = new FormData();

    formDetails.append("name", formData.name);
    if (formData.image instanceof File) {
      formDetails.append("file", formData.image); // Append file if it's changed
    }
    formDetails.append("description", formData.description);
    formDetails.append("category", formData.category);
    formDetails.append("tourCount", formData.tourCount);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${location._id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formDetails,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update location");
      }

      await refetchLocations();
      router.push("/dashboard/all-locations");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Update Location</h1>
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
            value={formData.name}
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
          />
          {formData.image && typeof formData.image === "string" && (
            <div className="mt-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${formData.image}`}
                alt="Current location image"
                width={200}
                height={150}
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={formData.description}
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
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            name="category"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
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
            value={formData.tourCount}
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

export default UpdateLocationForm;
