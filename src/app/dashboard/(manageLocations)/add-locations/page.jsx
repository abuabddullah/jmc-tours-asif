"use client";
import useLocations from "@/utils/customHooks/useLocations";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddLocationForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Get token from cookies
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Authentication required. Please login again.");
      setLoading(false);
      return;
    }

    // Create API submission object with only required fields
    const submissionData = {
      name: formData.name,
      image_url: formData.image_url,
      description: formData.description,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === "success") {
        console.log("Location added successfully:", data.data.location);
        // Refetch locations after adding a new one
        refetchLocations();
        router.replace("/dashboard/all-locations");
      } else {
        setError(data.message || "Failed to add location");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'tourCount' ? parseInt(value) || 0 : value 
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Add New Location</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            onChange={handleChange}
            type="url"
            name="image_url"
            value={formData.image_url}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
            placeholder="https://example.com/images/location.jpg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            onChange={handleChange}
            rows="4"
            name="description"
            value={formData.description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            onChange={handleChange}
            name="category"
            value={formData.category}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
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
            onChange={handleChange}
            type="number"
            name="tourCount"
            value={formData.tourCount}
            min="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Adding Location..." : "Add Location"}
        </button>
      </form>
    </div>
  );
};

export default AddLocationForm;
