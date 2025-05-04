"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useTours from "@/utils/customHooks/useTours";
import useLocations from "@/utils/customHooks/useLocations";

const AddTourForm = () => {
  const router = useRouter();
  const { refetchTours } = useTours();
  const { isLoading, locations } = useLocations();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    duration: 1,
    max_group_size: 1,
    difficulty: "easy",
    rating_average: 0,
    rating_quantity: 0,
    image_url: "",
    location_id: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        ["price", "duration", "max_group_size", "rating_average", "rating_quantity", "location_id"].includes(name)
          ? value === "" ? "" : Number(value)
          : value,
    }));
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Prepare the payload
    const payload = {
      ...formData,
      // Ensure location_id is a number
      location_id: Number(formData.location_id),
    };

    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.status === 201 && data.status === "success") {
        alert("Tour added successfully!");
        refetchTours();
        router.replace(`/dashboard/all-tours`);
      } else {
        setError(data.message || "Failed to add tour.");
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error("Error during posting tour:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Tour
      </h2>
      <form onSubmit={handleAddPost}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">
              Price
            </label>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="duration">
              Duration (Days)
            </label>
            <input
              name="duration"
              type="number"
              min="1"
              value={formData.duration}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="max_group_size">
              Max Group Size
            </label>
            <input
              name="max_group_size"
              type="number"
              min="1"
              value={formData.max_group_size}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="difficulty">
              Difficulty
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
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
            <label className="text-gray-700 dark:text-gray-200" htmlFor="rating_average">
              Rating Average
            </label>
            <input
              name="rating_average"
              type="number"
              min="0"
              max="5"
              step="0.01"
              value={formData.rating_average}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="rating_quantity">
              Rating Quantity
            </label>
            <input
              name="rating_quantity"
              type="number"
              min="0"
              value={formData.rating_quantity}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="image_url">
              Image URL
            </label>
            <input
              name="image_url"
              type="url"
              value={formData.image_url}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              placeholder="https://example.com/images/sunset-safari.jpg"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="location_id">
              Location
            </label>
            <select
              name="location_id"
              value={formData.location_id}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              required
            >
              <option value="" disabled>
                Select Location
              </option>
              {!isLoading && locations
                ? locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name || "Surprise"}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-4">{error}</div>
        )}

        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            {loading ? "Adding..." : "Add Tour"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTourForm;
