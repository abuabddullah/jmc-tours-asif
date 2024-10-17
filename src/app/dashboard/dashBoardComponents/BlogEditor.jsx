"use client";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import useBlogs from "@/utils/customHooks/useBlogs";
import { useRouter } from "next/navigation";

const BlogEditor = () => {
  const { isLoading, error, blogs, refetchBlogs } = useBlogs();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [seoDescriptions, setSeoDescriptions] = useState("");
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleContentChange = (content) => {
    console.log(content);
    setContent(content);
  };
  const handleImageUpload4Suneditor = (targetElement, index, state, image) => {
    // console.log("targetElement", targetElement);
    // console.log("index", index);
    // console.log("state", state);
    // console.log("image", image);
  };
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // validate all fields are filled or not if not then return and show error based on that in frontend
    if (
      !title ||
      !seoDescriptions ||
      !content ||
      !category ||
      !tags ||
      !image
    ) {
      alert("Please fill all the fields");
      return;
    }
    formData.append("title", title);
    formData.append("seoDescriptions", seoDescriptions);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("tags", JSON.stringify(tags));
    if (image) {
      formData.append("image", image);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`,
        {
          method: "POST",
          headers: {
            //   "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        refetchBlogs();
        router.replace("/dashboard/all-blogs");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
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
          />
          <div className="border p-2  my-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option selected value="" disabled>
                Select a category
              </option>
              {[
                "Adventure",
                "Beach",
                "Culture",
                "Historical",
                "Nature",
                "Wildlife",
                "Uncategorized",
              ].map((sgCtg, index) => (
                <option key={index} value={sgCtg}>
                  {sgCtg}
                </option>
              ))}
            </select>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 w-full  mt-2 mb-8"
          />

          <SunEditor
            autoFocus={true}
            placeholder="Enter the content"
            width="100%"
            height="500"
            defaultValue={""}
            onChange={handleContentChange}
            onImageUpload={handleImageUpload4Suneditor}
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

        <div className="my-2">
          <div className="seoFields grid grid-cols-1 gap-4 my-8">
            <input
              type="text"
              onChange={(e) => setTags(e.target.value.split(","))}
              className="border p-2"
              placeholder="use comma(,) for tags"
            />

            <textarea
              onChange={(e) => setSeoDescriptions(e.target.value)}
              className="border p-2 min-h-44"
              placeholder="seo descriptions"
            />
          </div>

          <button
            type="submit"
            className="border p-3 bg-black text-white w-full"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
