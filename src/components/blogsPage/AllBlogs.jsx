// "use client";
// import React, { useEffect, useState } from "react";
// import SingleBlogCard from "@/components/blogsPage/SingleBlogCard";
// import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
// import { SkeletonCard } from "@/components/shared/loadingComponents/Skeleton";
// import useBlogs from "@/utils/customHooks/useBlogs";
// import { SkeletonAllBlogs } from "../shared/LoadingSkeletons";

// const AllBlogs = ({ blogCategory }) => {
//   const { isLoading, error, blogs, refetchBlogs } = useBlogs(blogCategory);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const blogsPerPage = 3;

//   useEffect(() => {
//     if (blogs) {
//       setFilteredBlogs(blogs);
//     }
//   }, [blogs]);

//   useEffect(() => {
//     if (searchTerm) {
//       const filtered = blogs.filter((blog) =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBlogs(filtered);
//     } else {
//       setFilteredBlogs(blogs);
//     }
//     setCurrentPage(1);
//   }, [searchTerm, blogs]);

//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs =
//     filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (error) return <div>Error loading blogs</div>;

//   return (
//     <div>
//       {/* Background Section */}
//       {isLoading ? (
//         <SkeletonAllBlogs />
//       ) : (
//         <>
//           <div className="relative h-32 lg:h-64 ">
//             <div
//               className="absolute inset-0 "
//               style={{
//                 backgroundImage: `url("https://jmc.tours/wp-content/uploads/2024/04/JMC-Tours-3.jpeg")`,
//                 backgroundAttachment: "fixed",
//                 backgroundSize: "cover",
//                 zIndex: -1,
//                 height: "100%",
//               }}
//             />
//             <div className="absolute justify-center inset-0 bg-[#000000c5] flex items-center">
//                 <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
//                   Latest Blogs
//                 </h1>
//             </div>
//           </div>

//           {/* Search bar for mobile */}
//           <div className="lg:hidden">
//             <div className="p-4 rounded-xl">
//               <h4 className="text-sm font-medium mb-2 text-gray-500">Search</h4>
//               <input
//                 type="text"
//                 placeholder="Search blogs..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-3 bg-gray-50 rounded-2xl border "
//               />
//             </div>
//           </div>

//           {/* blogs page */}
//           <div className="max-w-screen-xl mx-auto py-8 px-4">
//             <div className="flex flex-col lg:flex-row gap-8 ">
//               <div className="w-full lg:w-2/3 ">
//                 {currentBlogs?.length == 0 && (
//                   <small>
//                     <strong>No blogs yet</strong>
//                   </small>
//                 )}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
//                   {currentBlogs?.map((blog, index) => (
//                     <SingleBlogCard index={index} key={blog?._id} blog={blog} />
//                   ))}
//                 </div>

//                 <div className="flex justify-center mt-8 ">
//                   <ul className="inline-flex items-center -space-x-px ">
//                     {Array.from(
//                       {
//                         length: Math.ceil(filteredBlogs?.length / blogsPerPage),
//                       },
//                       (_, i) => (
//                         <li key={i}>
//                           <button
//                             onClick={() => paginate(i + 1)}
//                             className={`px-3 py-2 leading-tight ${
//                               currentPage === i + 1
//                                 ? "text-blue-600 border border-blue-300 bg-blue-50"
//                                 : "text-gray-500 border border-gray-300 bg-white"
//                             } rounded ml-2`}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>
//               </div>

//               <div className="w-full lg:w-1/3 ">
//                 {/* Search bar for larger screens */}
//                 <div className="hidden lg:block mb-8 border p-8 rounded-xl">
//                   <h4 className="text-md font-semibold mb-2 text-teal-950">Search</h4>
//                   <input
//                     type="text"
//                     placeholder="Search blogs..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full p-2 bg-gray-50 rounded"
//                   />
//                 </div>

//                 <RecentBlogsComponent />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AllBlogs;

"use client";
import React, { useEffect, useState } from "react";
import SingleBlogCard from "@/components/blogsPage/SingleBlogCard";
import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
import { SkeletonCard } from "@/components/shared/loadingComponents/Skeleton";
import useBlogs from "@/utils/customHooks/useBlogs";
import { SkeletonAllBlogs } from "../shared/LoadingSkeletons";

export const blogsDEMO = [
  {
    _id: "blog-001",
    title: "Exploring the Wonders of Nepal",
    imagePath:
      "https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg",
    descriptions: [
      "Nepal, a land of majestic mountains and rich cultural heritage, offers a myriad of experiences for travelers.",
    ],
    writer: "John Doe",
    comments: [
      { id: 1, text: "Great article!" },
      { id: 2, text: "Very informative, thanks!" },
      { id: 3, text: "I can't wait to visit Nepal!" },
    ],
  },
  {
    _id: "blog-002",
    title: "A Culinary Journey Through Italy",
    imagePath:
      "https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg",
    descriptions: [
      "Italy is renowned for its rich culinary tradition, offering delicious dishes that vary from region to region.",
    ],
    writer: "Jane Smith",
    comments: [
      { id: 1, text: "I love Italian food!" },
      { id: 2, text: "Can't wait to try these recipes!" },
    ],
  },
  {
    _id: "blog-003",
    title: "Adventure Awaits in New Zealand",
    imagePath:
      "https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg",
    descriptions: [
      "From breathtaking landscapes to thrilling activities, New Zealand is a paradise for adventure seekers.",
    ],
    writer: "Emily Johnson",
    comments: [
      { id: 1, text: "This sounds amazing!" },
      { id: 2, text: "I want to go skydiving there!" },
      { id: 3, text: "Beautiful country!" },
    ],
  },
  {
    _id: "blog-004",
    title: "Cultural Treasures of Japan",
    imagePath:
      "https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg",
    descriptions: [
      "Japan's unique blend of tradition and modernity offers a fascinating glimpse into its rich culture and history.",
    ],
    writer: "Michael Lee",
    comments: [
      { id: 1, text: "Japan is on my bucket list!" },
      { id: 2, text: "I love the culture!" },
    ],
  },
  {
    _id: "blog-005",
    title: "Wildlife Safaris in Africa",
    imagePath:
      "https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg",
    descriptions: [
      "Embark on a thrilling safari adventure to witness Africa's incredible wildlife in their natural habitat.",
    ],
    writer: "Sarah Brown",
    comments: [
      { id: 1, text: "Amazing wildlife!" },
      { id: 2, text: "I want to see the Big Five!" },
    ],
  },
];

const AllBlogs = ({ blogCategory }) => {
  const [isLoadingDEMO, setIsLoadingDEMO] = useState(false);
  const [errorDEMO, setErrorDEMO] = useState(false);
  const { isLoading, error, refetchBlogs } = useBlogs(blogCategory);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 3;

  useEffect(() => {
    setIsLoadingDEMO(true);
    setTimeout(() => {
      setIsLoadingDEMO(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (blogsDEMO) {
      setFilteredBlogs(blogsDEMO);
    }
  }, [blogsDEMO]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = blogsDEMO.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogsDEMO);
    }
    setCurrentPage(1);
  }, [searchTerm, blogsDEMO]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs =
    filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (errorDEMO) return <div>Error loading blogs</div>;

  return (
    <div>
      {/* Background Section */}
      {isLoadingDEMO ? (
        <SkeletonAllBlogs />
      ) : (
        <>
          <div className="relative h-32 lg:h-64 ">
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: `url("https://www.indiaworldwidetravel.com/wp-content/uploads/2019/02/houseboat.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                zIndex: -1,
                height: "100%",
              }}
            />
            <div className="absolute justify-center inset-0 bg-[#00000079] flex items-center">
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
                {/* {currentBlogs?.length == 0 && (
                  <small>
                    <strong>No blogs yet</strong>
                  </small>
                )} */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                  {currentBlogs?.map((blog, index) => (
                    <SingleBlogCard index={index} key={blog?._id} blog={blog} />
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
                  <h4 className="text-md font-semibold mb-2 text-teal-950">
                    Search
                  </h4>
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
