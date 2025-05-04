"use client";
import React, { useEffect, useState } from "react";
import SingleBlogCard from "@/components/blogsPage/SingleBlogCard";
import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
import { SkeletonCard } from "@/components/shared/loadingComponents/Skeleton";
import useBlogs from "@/utils/customHooks/useBlogs";
import { SkeletonAllBlogs } from "../shared/LoadingSkeletons";

const AllBlogs = () => {
  const { isLoading, error, blogs, refetchBlogs } = useBlogs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 3;

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(blogs);
    }
  }, [blogs]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
    setCurrentPage(1);
  }, [searchTerm, blogs]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs =
    filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (error) return <div>Error loading blogs</div>;

  return (
    <div>
      {/* Background Section */}
      {isLoading ? (
        <SkeletonAllBlogs />
      ) : (
        <>
          <div className="relative h-32 lg:h-64 ">
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                zIndex: -1,
                height: "100%",
              }}
            />
            <div className="absolute justify-center inset-0 bg-[#000000c5] flex items-center">
                <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
                  Latest Blogs
                </h1>
            </div>
          </div>

          {/* Search bar for mobile */}
          <div className="lg:hidden">
            <div className="p-4 rounded-xl">
              <h4 className="text-sm font-medium mb-2 text-gray-500">Search</h4>
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-2xl border "
              />
            </div>
          </div>

          {/* blogs page */}
          <div className="max-w-screen-xl mx-auto py-8 px-4">
            <div className="flex flex-col lg:flex-row gap-8 ">
              <div className="w-full lg:w-2/3 ">
                {currentBlogs?.length == 0 && (
                  <small>
                    <strong>No blogs yet</strong>
                  </small>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                  {currentBlogs?.map((blog, index) => (
                    <SingleBlogCard index={index} key={blog?.id} blog={blog} />
                  ))}
                </div>

                <div className="flex justify-center mt-8 ">
                  <ul className="inline-flex items-center -space-x-px ">
                    {Array.from(
                      {
                        length: Math.ceil(filteredBlogs?.length / blogsPerPage),
                      },
                      (_, i) => (
                        <li key={i}>
                          <button
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-2 leading-tight ${
                              currentPage === i + 1
                                ? "text-blue-600 border border-blue-300 bg-blue-50"
                                : "text-gray-500 border border-gray-300 bg-white"
                            } rounded ml-2`}
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/3 ">
                {/* Search bar for larger screens */}
                <div className="hidden lg:block mb-8 border p-8 rounded-xl">
                  <h4 className="text-md font-semibold mb-2 text-teal-950">Search</h4>
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded"
                  />
                </div>

                <RecentBlogsComponent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllBlogs;
