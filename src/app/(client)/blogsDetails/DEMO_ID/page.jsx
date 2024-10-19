"use client";
import React from "react";
import CommnetBlogForm from "@/components/blogsPage/CommnetBlogForm";
import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
import TagsBlogSection from "@/components/blogsPage/TagsBlogSection";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaRegFolderOpen,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import LocationCardComponent from "@/components/blogsPage/LocationCardComponent";

const SgBlogDetails = ({ params }) => {
  const blog = {
    _id: "demo-blog-001",
    title: "The Hidden Gems of Bali",
    imagePath: "images/bali-blog.jpg",
    descriptions: `
      <p>Bali, an island paradise, offers more than just beaches. Discover the serene rice terraces, vibrant culture, and hidden waterfalls.</p>
      <p>Whether you're seeking adventure or relaxation, Bali has it all. Explore local markets, enjoy authentic cuisine, and immerse yourself in the rich traditions of the Balinese people.</p>
    `,
    writer: "Alice Green",
    category: "Travel",
    tags: ["bali", "travel", "adventure", "culture"],
    comments: [
      { id: 1, text: "Incredible insights, thank you!" },
      { id: 2, text: "I can't wait to visit!" },
    ],
  };

  return (
    <>
      <div>
        {/* Background Section */}
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-bottom"
            style={{
              backgroundImage: `url("https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              zIndex: -1,
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-start">
            <div className="container">
              {/* <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
              Student Visa
            </h1> */}
            </div>
          </div>

          <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
            <div className="container mx-auto px-4">
              <p className="text-lg">
                <span className="text-gray-500">Home</span> /{" "}
                <span className="text-red-500 font-bold">
                  {blog?.category || "Uncategorized"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[1.5fr_0.5fr] lg:grid-rows-[1fr] gap-8 py-24">
          <div className="">
            <div className="flex items-center text-sm text-gray-600 gap-4 mb-4">
              <div className="text-base flex items-center">
                <FaRegUser className="inline-block mr-1 text-red-400" />
                <span>{blog?.writer}</span>
              </div>
              <div className="text-base flex items-center">
                <FaRegFolderOpen className="inline-block mr-1 text-red-400" />
                <span>{blog?.category || "Uncategorized"}</span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {blog?.title || "Blogs Title Here"}
              </h1>
              <section className="text-gray-500 text-justify my-6">
                <div dangerouslySetInnerHTML={{ __html: blog?.descriptions }} />
              </section>
            </div>

            <hr className="bg-red-50 mt-10 mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex gap-2 flex-wrap">
                <h1 className="text-base font-medium text-gray-800">Tags : </h1>
                {
                  // ["inani beach", "inani beach hotel", "inani beach resort"]
                  blog?.tags.map((tag, index) => (
                    <span className="flex   uppercase    items-center px-3 py-1 bg-red-400 text-white  000000000000000    rounded-full text-sm ">
                      {tag}
                    </span>
                  ))
                }
              </div>
              <div className="flex gap-2 lg:justify-end">
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* writer */}
            <div className="bg-rose-50/50 rounded p-16 my-8">
              <div className="ms-8">
                <h1 className="text-2xl font-bold">
                  {blog?.writer || "Me.Writer"}
                </h1>
                <hr className="border-rose-400 border w-8 mt-2" />
              </div>
            </div>

            {/* addacomment */}
            <div className="">
              <h1 className="text-base font-medium text-gray-800">
                Add a comment
              </h1>
              <hr className="border-rose-400 border w-8 mt-2" />
              <p className="text-gray-500 mt-8 mb-4 text-sm">
                Your email address will not be published.
              </p>
              <CommnetBlogForm />
            </div>
          </div>

          {/* sidesection */}
          <div className="flex flex-col gap-8">
            <RecentBlogsComponent />

            <TagsBlogSection />
            <LocationCardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SgBlogDetails;
