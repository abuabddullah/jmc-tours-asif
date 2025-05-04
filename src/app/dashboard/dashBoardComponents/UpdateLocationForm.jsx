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
    image_url: "",
    description: "",
    category: "",
    tourCount: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location) {
      setFormData({
        name: location.name || "",
        image_url: location.image_url || "",
        description: location.description || "",
        category: location.category || "",
        tourCount: location.tourCount || 0,
      });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required. Please login again.");
      setLoading(false);
      return;
    }

    const submissionData = {
      name: formData.name,
      image_url: formData.image_url,
      description: formData.description,
      // category: formData.category,
      // tourCount: formData.tourCount,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${location.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await res.json();

      if (res.status === 200 && data.status === "success") {
        await refetchLocations();
        router.push("/dashboard/all-locations");
      } else {
        setError(data.message || "Failed to update location");
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tourCount" ? parseInt(value) || 0 : value,
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Update Location</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            value={formData.image_url}
            onChange={handleChange}
            type="url"
            name="image_url"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/images/location.jpg"
            required
          />
          {formData.image_url && (
            <div className="mt-2">
              <Image
                src={formData.image_url}
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
            onChange={handleChange}
            rows="4"
            name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={formData.category}
            onChange={handleChange}
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
            onChange={handleChange}
            type="number"
            name="tourCount"
            min="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Updating..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UpdateLocationForm;
