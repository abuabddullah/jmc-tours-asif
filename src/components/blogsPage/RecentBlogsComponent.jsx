"use client";

// import { blogsDemo } from "@/app/(client)/blogs/page";
// import React, { useState } from "react";
// import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";

// const RecentBlogsComponent = () => {
//   const [blogs, setBlogs] = useState(blogsDemo);
//   return (
//     <div className="border p-8 rounded-xl">
//       {/* <h4 className="text-lg font-bold mb-4">Recent Blogs</h4> */}
//       <h4 className="text-lg font-bold mb-4  ps-2 border-s-2 border-rose-400">
//         Recent Blogs
//       </h4>
//       <ul className="space-y-7 ms-8 lg:ms-16">
//         {blogs
//           .sort((a, b) => new Date(b.date) - new Date(a.date))
//           .slice(0, 5)
//           .map((blog, index) => (
//             <li key={index} className="flex items-start">
//               <div>
//                 <div className="text-sm font-medium flex gap-2 items-center text-gray-400">
//                   <FaRegComments className="text-red-300 text-xl" />{" "}
//                   {blog?.comments?.length || 0} comments
//                 </div>
//                 <h5 className="text-base font-medium">
//                   {blog?.title || "Title here"}
//                 </h5>
//                 <p className="text-xs text-gray-500">
//                   <FaRegCalendarAlt className="inline mr-1" />
//                   {blog?.date || "Date here"}
//                 </p>
//               </div>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentBlogsComponent;

"use client";

import useBlogs from "@/utils/customHooks/useBlogs";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";

const RecentBlogsComponent = () => {
  const { isLoading, error, blogs } = useBlogs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs: {error.message}</div>;

  return (
    <div className="border p-8 rounded-xl">
      <h4 className="text-md font-semibold mb-4 ps-2 border-s-2 border-rose-400 text-teal-950">
        Recent Blogs
      </h4>
      <ul className="space-y-7 ms-8 lg:ms-16">
        {blogs?.length == 0 && (
          <small>
            <strong>No blogs yet</strong>
          </small>
        )}
        {blogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map((blog) => (
            <li key={blog._id} className="flex items-start">
              <div>
                <div className="text-sm font-medium flex gap-2 items-center text-gray-400">
                  <FaRegComments className="text-red-300 text-xl" />
                  {blog.comments.length || 0} comments
                </div>
                <h5 className="text-base font-medium">
                  <Link href={`/blogsDetails/${blog?._id}`}>
                    {blog.title || "Title here"}
                  </Link>
                </h5>
                <p className="text-xs text-gray-500">
                  <FaRegCalendarAlt className="inline mr-1" />
                  {new Date(blog.date).toLocaleDateString("en-US")}{" "}
                  {/* Format date */}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentBlogsComponent;
