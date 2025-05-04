"use client";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import useBlogs from "@/utils/customHooks/useBlogs";
import { useRouter } from "next/navigation";

const BlogEditor = () => {
  const { refetchBlogs } = useBlogs();
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDescriptionChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!title || !description || !imageUrl) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }
    const payload = {
      title,
      description,
      image_url: imageUrl,
    };
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (response.status === 201 && data.status === "success") {
        refetchBlogs();
        router.replace("/dashboard/all-blogs");
      } else {
        setError(data.message || "Failed to add blog.");
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error("Error submitting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="blogFields">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border my-2 p-3 w-full"
            required
          />
          <input
            type="url"
            placeholder="Thumbnail Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
              defaultValue={""}
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
          {loading ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
