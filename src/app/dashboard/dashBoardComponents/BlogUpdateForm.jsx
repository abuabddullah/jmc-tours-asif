"use client";
import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRouter } from "next/navigation";
import useBlogs from "@/utils/customHooks/useBlogs";

const UpdateBlog = ({ blog }) => {
  console.log({blog})
  const router = useRouter();
  const { refetchBlogs } = useBlogs();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch existing blog data
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog?.title || "",
        description: blog?.description || "",
        image_url: blog?.image_url || "",
      });
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!formData.title || !formData.description || !formData.image_url) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${blog?.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.status === 200 && data.status === "success") {
        refetchBlogs();
        router.push("/dashboard/all-blogs");
      } else {
        setError(data.message || "Failed to update blog.");
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDescriptionChange = (content) => {
    setFormData((prev) => ({ ...prev, description: content }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="blogFields">
          <input
            type="text"
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="outline-none border my-2 p-3 w-full"
            required
          />
          <input
            type="url"
            placeholder="Thumbnail Image URL"
            value={formData.image_url}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, image_url: e.target.value }))
            }
            className="outline-none border my-2 p-3 w-full"
            required
          />
          <div className="border p-2 my-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <SunEditor
              autoFocus={true}
              placeholder="Enter the blog content"
              width="100%"
              height="300"
              setContents={formData.description}
              onChange={handleDescriptionChange}
              setDefaultStyle={`color:black;`}
              setOptions={{
                font: [
                  "Arial",
                  "Comic Sans MS",
                  "Courier New",
                  "Impact",
                  "Georgia",
                  "Tahoma",
                  "Trebuchet MS",
                  "Verdana",
                  "Logical",
                  "Salesforce Sans",
                  "Garamond",
                  "Sans-Serif",
                  "Serif",
                  "Times New Roman",
                  "Helvetica",
                ],
                fontSize: [
                  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 42, 55,
                  60,
                ],
                popupDisplay: "local",
                buttonList: [
                  ["undo", "redo"],
                  ["font", "fontSize", "formatBlock"],
                  ["textStyle", "fontColor", "hiliteColor", "horizontalRule"],
                  ["bold", "underline", "italic", "strike"],
                  ["subscript", "superscript", "removeFormat", "blockquote"],
                  [
                    "list",
                    "align",
                    "table",
                    "image",
                    "preview",
                    "video",
                    "audio",
                  ],
                ],
              }}
            />
          </div>
        </div>
        {error && <div className="text-red-500 text-sm my-2">{error}</div>}
        <button
          type="submit"
          className="border p-3 bg-black text-white w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
