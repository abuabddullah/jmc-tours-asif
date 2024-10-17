"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const fetchMetaData = async (path) => {
//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/metadataPath`,
//       {
//         params: { path },
//       }
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching meta data:", error);
//     throw error;
//   }
// };

export const fetchMetaDataByPath = async (path) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/metadataPath`,
      {
        params: { path },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching meta data:", error);
    throw error;
  }
};

const MetaDataEditorForm = () => {
  const [paths, setPaths] = useState([
    "/",
    "/visa/StudentVisa",
    "/visa/TouristVisa",
    "/packages/popular-packages",
    "/contact",
    "/blogs",
  ]);

  const [selectedPath, setSelectedPath] = useState("");
  const [metaData, setMetaData] = useState({
    title: "",
    keywords: "",
    description: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    if (!selectedPath) {
      return;
    }
    fetchMetaDataByPath(selectedPath).then((data) => {
      setMetaData(data);
    });
  }, [selectedPath]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/metadata`, {
        path: selectedPath,
        ...metaData,
      })
      .then((response) => {
        console.log(response.data);
        setMetaData({
          title: "",
          keywords: "",
          description: "",
          author: "",
          content: "",
        });
      });
    alert("Meta tags saved!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Edit Meta Tags</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Page Path
          </label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedPath}
            onChange={(e) => setSelectedPath(e.target.value)}
          >
            <option value="">Select One Path </option>
            {paths.map((path) => (
              <option key={path} value={path}>
                {path}
              </option>
            ))}
            {/* <option value="add-new">Add new page path</option> */}
          </select>
        </div>

        {selectedPath === "add-new" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Page Path
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={metaData?.path || ""}
              onChange={(e) =>
                setMetaData({ ...metaData, path: e.target.value })
              }
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={metaData?.title || ""}
            onChange={(e) =>
              setMetaData({ ...metaData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Keywords
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={metaData?.keywords || ""}
            onChange={(e) =>
              setMetaData({ ...metaData, keywords: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={metaData?.description || ""}
            onChange={(e) =>
              setMetaData({ ...metaData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={metaData?.author || ""}
            onChange={(e) =>
              setMetaData({ ...metaData, author: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={metaData?.content || ""}
            onChange={(e) =>
              setMetaData({ ...metaData, content: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MetaDataEditorForm;
