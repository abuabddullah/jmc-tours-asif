## changed files🧮 at branch : "tours-portfolio-project"
* tailwind.config.js
* src\middleware.js
* src\app\(client)\page.js
* src\app\(client)\all-tours\page.jsx (newly created)
* src\app\(client)\blogsDetails\DEMO_ID\page.jsx (newly created)
* src\app\(client)\contact\page.jsx
* src\app\(client)\locations\DEMO_ID\page.jsx  (newly created)
* src\app\(client)\packages\[packageType]\page.jsx
* src\app\(client)\tours\DEMO_ID\page.jsx (newly created)
* src\app\dashboard\(manageProfile)\my-wishlist\page.jsx
* src\components\blogsPage\AllBlogs.jsx
* src\components\blogsPage\LocationCardComponent.jsx
* src\components\blogsPage\RecentBlogsComponent.jsx
* src\components\blogsPage\SingleBlogCard.jsx
* src\components\blogsPage\TagsBlogSection.jsx
* src\components\homepage\GoExotic.jsx
* src\components\homepage\PopularTours.jsx
* src\components\packageBookingPage\PackageBookingForm.jsx
* src\components\shared\LocationsCard.jsx
* src\components\shared\ToursCardsSection.jsx
* README.md
* src\app\dashboard\(manageTours)\all-tours\page.jsx
* src\app\dashboard\(manageBlogs)\all-blogs\page.jsx
* src\app\dashboard\(manageLocations)\all-locations\page.jsx
* firebase.config.js


### login এর ্কাজ করব "tours-portfolio-project" branch এ আর যখন backend ready হবে just এই পেইজ গুলো তে গিলে comment করা code গুলো কে revive দিব আর login page এর functionality check দিব

* src\components\shared\Navbar\Navbar2.jsx
* src\components\shared\Navbar\navComponents\UserLogOutDrop.jsx


## during vercel deploy deleted files and codes from "tours-asif-client-forDeploy" branch
### src\app\(client)\blogs\[blogCategory]\page.jsx
```
import AllBlogs from "@/components/blogsPage/AllBlogs";

export async function generateStaticParams() {
  const { categories } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/categories/unique`
  ).then((res) => res.json());

  const staticParams4CategorisedBlogs = categories.map((category) => ({
    blogCategory: category,
  }));
  return staticParams4CategorisedBlogs;
}

export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const CategorisedBlogs = ({ params }) => {
  return <AllBlogs blogCategory={params?.blogCategory} />;
};

export default CategorisedBlogs;

```
### src\app\(client)\blogsDetails\[id]\page.jsx
```
import React from "react";
import CommnetBlogForm from "@/components/blogsPage/CommnetBlogForm";
import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
import TagsBlogSection from "@/components/blogsPage/TagsBlogSection";
import LocationsCard from "@/components/shared/LocationsCard";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaRegComment,
  FaRegFolderOpen,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import LocationCardComponent from "@/components/blogsPage/LocationCardComponent";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { blogs } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
  ).then((res) => res.json());

  const staticParams4BlogDetails = blogs.map((blog) => ({
    id: blog._id,
  }));

  console.log("staticParams4BlogDetails", staticParams4BlogDetails);
  return staticParams4BlogDetails;
}

// i want to create fn for generate metadata
export async function generateMetadata({ params }) {
  const blog = await fetchBlogById(params.id); // fetching the blog by ID
  return {
    title: blog?.title, // using the fetched blog data
    description: blog?.seoDescriptions || blog?.descriptions.slice(0, 30),
    keywords: blog?.tags?.join(", "),
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${blog?.imagePath}`,
        },
      ],
    },
  };
}

async function fetchBlogById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error(`Failed to fetch blog by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const SgBlogDetails = async ({ params }) => {
  const blog = await fetchBlogById(params?.id); // Use params?.id instead of params?._id

  return (
    <>
      <div>
        {/* Background Section */}
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-bottom"
            style={{
              backgroundImage: `url("https://jmc.tours/wp-content/uploads/2021/10/breadcrumb.jpg")`,
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
                    <span className="flex bg-rose-300 text-rose-900 uppercase  text-xs  items-center px-2 rounded-full">
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

```
### src\app\(client)\locations\[id]\page.jsx
```
import SectionSubtitle from "@/components/shared/SectionSubtitle";
import ToursCardsSection from "@/components/shared/ToursCardsSection";
import Image from "next/image";
import React from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { locations } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());

  const staticParams4LocationDetails = locations.map((location) => ({
    id: location._id,
  }));
  console.log("staticParams4LocationDetails", staticParams4LocationDetails);
  return staticParams4LocationDetails;
}

// want generatemetadata
export async function generateMetadata({ params }) {
  const location = await fetchLocationById(params.id);
  return {
    title: location.name,
    description: location.description,
    keywords: location.name,
  };
}

async function fetchLocationById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const { location } = await response.json();
    return location;
  } catch (error) {
    console.error(`Failed to fetch location by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const LocationDetails = async ({ params }) => {
  const location = await fetchLocationById(params?.id); // Use params?.id instead of params?._id
  console.log(location);
  const paragraphs = location?.description?.split("\r\n");
  return (
    <section className="py-20 bg-[#FBF6F2]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative w-full min-h-60 overflow-hidden border-[12px] border-white rounded-xl shadow-xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${location?.image}`}
            alt={location.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            {location?.name || "Location name"}
          </h1>
          <hr className="w-12 border border-red-500 mt-2 mb-4" />
          {
            <div>
              {paragraphs.map((para, index) => (
                <p
                  className="text-[#757783] leading-7 mt-1 text-justify"
                  key={index}
                >
                  {para.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          }
        </div>
      </div>

      <section className=" lg:my-20 my-10">
        <div>
          <SectionSubtitle twCss="text-center text-green-600 text-3xl lg:text-4xl font-extrabold text-red-500">
            Explore Tour
          </SectionSubtitle>
          <br />
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Most Popular Tours
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToursCardsSection category={"popular"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationDetails;

```
### src\app\(client)\tours\[id]\page.jsx
```
import TourDetailsComponent from "@/components/toursPage/TourDetailsComponent";
import React from "react";
//generateStaticParams for tours

export async function generateStaticParams() {
  const { tours } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`
  ).then((res) => res.json());
  const staticParams4TourDetails = tours.map((tour) => ({
    id: tour?._id.toString(),
  }));
  console.log("staticParams4TourDetails", staticParams4TourDetails);
  return staticParams4TourDetails;
}

// generatemetada fn
export async function generateMetadata({ params }) {
  const { tour } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours/${params.id}`
  ).then((res) => res.json());
  return {
    title: tour?.title,
    description: tour?.seo?.description,
    keywords: tour?.seo?.keywords,
  };
}

//fetchTourById
export async function fetchTourById(id) {
  const { tour } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours/${id}`
  ).then((res) => res.json());
  console.log("fetch tour by id", tour);
  return tour;
}

const TourDetailsPage = async ({ params }) => {
  const tour = await fetchTourById(params?.id);
  console.log("tours/id", tour);
  return (
    <section>
      <TourDetailsComponent tour={tour} />
    </section>
  );
};

export default TourDetailsPage;

```
### src\app\dashboard\(manageBlogs)\update-blog\[id]\page.jsx
```
import React from "react";
import BlogUpdateForm from "../../../dashBoardComponents/BlogUpdateForm";

export async function generateStaticParams() {
  const { blogs } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
  ).then((res) => res.json());
  const staticParams4updateBlog = blogs.map((blog) => ({
    id: blog._id,
  }));
  console.log("staticParams4updateBlog", staticParams4updateBlog);
  return staticParams4updateBlog;
}

export async function fetchBlogById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error(`Failed to fetch blog by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const UpdateBlogPage = async ({ params: { id } }) => {
  const blog = await fetchBlogById(id);

  return (
    <section>
      <BlogUpdateForm blog={blog} />
    </section>
  );
};

export default UpdateBlogPage;

```
### src\app\dashboard\(manageLocations)\update-loaction\[id]\page.jsx
```
import UpdateLocationForm from "@/app/dashboard/dashBoardComponents/UpdateLocationForm";
import React from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { locations } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());

  const staticParams4updateLocation = locations.map((location) => ({
    id: location._id,
  }));
  console.log("staticParams4updateLocation", staticParams4updateLocation);
  return staticParams4updateLocation;
}

async function fetchLocationById(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const { location } = await response.json();
    return location;
  } catch (error) {
    console.error(`Failed to fetch location by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const UpdateLocation = async ({ params }) => {
  try {
    const location = await fetchLocationById(params?.id); // Use params?.id instead of params?._id
    console.log(location);
    return (
      <section>
        <div className="text-center">
          <p>
            <small>
              UpdateLocation:{" "}
              <span className="text-green-600">{location?._id}</span>
            </small>
          </p>
        </div>
        <div>
          <UpdateLocationForm location={location} />
        </div>
      </section>
    );
  } catch (error) {
    return <div>Error fetching location data</div>;
  }
};

export default UpdateLocation;

```
### src\app\dashboard\dashBoardComponents\MetaDataEditorForm.jsx
```
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

```
### src\components\blogsPage\BlogInDetailsComponent.jsx
```













```
### src\app\sitemap.js
```
import useBlogs from "@/utils/customHooks/useBlogs";
import useLocations from "@/utils/customHooks/useLocations";
import useTours from "@/utils/customHooks/useTours";

function generateSitemap(data) {
  return data.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${item._id}`,
    // lastModified: new Date(),
    // changeFrequency: "yearly",
    // priority: 1,
  }));
}

export default async function sitemap() {
  // want to have site map for blogs,locations,tours
  const { blogs } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
  ).then((res) => res.json());
  const { locations } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`
  ).then((res) => res.json());
  const { tours } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`
  ).then((res) => res.json());

  const dynamicSitemap = [
    ...generateSitemap(blogs),
    ...generateSitemap(locations),
    ...generateSitemap(tours),
  ];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
      //   lastModified: new Date(),
      //   changeFrequency: "yearly",
      //   priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/packages/popular-packages`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/visa/TouristVisa`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/visa/StudentVisa`,
    },

    ...dynamicSitemap,
  ];
}

```
### src\app\robots.js
```
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/admin"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sitemap.xml`,
  };
}

```
### 
```

```
### 
```

```
### 
```

```
### 
```

```
### 
```

```

