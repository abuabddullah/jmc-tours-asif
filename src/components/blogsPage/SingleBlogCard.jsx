// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
// import { FaRegComment } from "react-icons/fa";

// const SingleBlogCard = ({ blog, index }) => {
//   const { title, imagePath, descriptions, writer, comments } = blog;

//   // Extract a short description for preview
//   // const shortDescription = descriptions
//   //   ? descriptions.length > 0
//   //     ? descriptions[0].replace(/<[^>]*>/g, "").slice(0, 100) + " ..."
//   //     : ""
//   //   : "";

//   return (
//     <div
//       className="max-w-sm  bg-white border border-gray-100 rounded overflow-hidden cursor-pointer "
//       data-aos="fade-up"
//       data-aos-delay={index * 300} // Adjust delay based on index
//       data-aos-duration="1000" // Optional: duration of the animation
//     >
//       {/* Blog Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={
//             `${process.env.NEXT_PUBLIC_BASE_URL}/${imagePath}` ||
//             "https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF3947_450n.jpg"
//           }
//           alt={title || "Blog Image"}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="px-4 py-6">

//         {/* Short Description */}
//         {/* <p className="text-gray-700 mb-4">
//           <small>
//             {descriptions.length > 0
//               ? descriptions[0].slice(0, 100) + " ..."
//               : "..."}
//           </small>
//         </p> */}

//         {/* Writer and Comments */}
//         <div className="flex items-center text-sm text-gray-600 mb-4">
//           <span className="mr-2">{writer.slice(0, 7) || "Anonymous"}</span>
//           <span className="mx-2">|</span>
//           <FaRegComment className="inline-block text-red-500 mr-1" />
//           <span>{comments?.length || 0} Comments</span>
//         </div>

//         {/* Title */}
//         <h2 className="text-lg font-semibold mb-2">{title}</h2>

//         {/* Read More Button */}
//         <div>
//           <Link href={`/blogsDetails/${blog._id}`}>
//             <span className="text-red-500 text-sm font-medium hover:underline">
//               Read More →
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBlogCard;

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa";

const SingleBlogCard = ({ blog, index }) => {
  const { title, imagePath, descriptions, writer, comments } = blog;

  // Extract a short description for preview
  // const shortDescription = descriptions
  //   ? descriptions.length > 0
  //     ? descriptions[0].replace(/<[^>]*>/g, "").slice(0, 100) + " ..."
  //     : ""
  //   : "";

  return (
    <div
      className="max-w-sm  bg-white border border-gray-100 rounded overflow-hidden cursor-pointer "
      data-aos="fade-up"
      data-aos-delay={index * 300} // Adjust delay based on index
      data-aos-duration="1000" // Optional: duration of the animation
    >
      {/* Blog Image */}
      <div className="relative w-full h-48">
        <Image
          // src={
          //   `${process.env.NEXT_PUBLIC_BASE_URL}/${imagePath}` ||
          //   "https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF3947_450n.jpg"
          // }
          src={imagePath}
          alt={title || "Blog Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-6">
        {/* Short Description */}
        {/* <p className="text-gray-700 mb-4">
          <small>
            {descriptions.length > 0
              ? descriptions[0].slice(0, 100) + " ..."
              : "..."}
          </small>
        </p> */}

        {/* Writer and Comments */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="mr-2">{writer.slice(0, 7) || "Anonymous"}</span>
          <span className="mx-2">|</span>
          <FaRegComment className="inline-block text-red-500 mr-1" />
          <span>{comments?.length || 0} Comments</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        {/* Read More Button */}
        <div>
          {/* <Link href={`/blogsDetails/${blog._id}`}> */}
          <Link href={`/blogsDetails/DEMO_ID`}>
            <span className="text-red-500 text-sm font-medium hover:underline">
              Read More →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
