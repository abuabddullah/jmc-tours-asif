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
  const { data: { blogs } } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
  ).then((res) => res.json());

  const staticParams4BlogDetails = blogs.map((blog) => ({
    id: blog.id.toString(),
  }));

  console.log("staticParams4BlogDetails", staticParams4BlogDetails);
  return staticParams4BlogDetails;
}

// i want to create fn for generate metadata
export async function generateMetadata({ params }) {
  const blog = await fetchBlogById(params.id); // fetching the blog by ID
  return {
    title: blog?.title, // using the fetched blog data
    description: blog?.description?.slice(0, 30) || "Fantastice place it was awesome",
    keywords: blog?.tags?.join(", ") || "Blogs,Tours,Travels,Bangladesh,Rangamati,Sundarban",
    openGraph: {
      images: [
        {
          url: `${blog?.image_url}` || `https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
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
    const { data: { blog } } = await response.json();
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
              backgroundImage: `url("https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
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
                  {blog?.category || "Travels & Tours"}
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
                <span>{blog?.author_name}</span>
              </div>
              <div className="text-base flex items-center">
                <FaRegFolderOpen className="inline-block mr-1 text-red-400" />
                <span>{blog?.category || "Travels & Tours"}</span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {blog?.title || "Blogs Title Here"}
              </h1>
              <section className="text-gray-500 text-justify my-6">
                <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
              </section>
            </div>

            <hr className="bg-red-50 mt-10 mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex gap-2 flex-wrap">
                <h1 className="text-base font-medium text-gray-800">Tags : </h1>
                {
                  ["Blogs", "Tours", "Travels", "Bangladesh", "Rangamati", "Sundarban"]?.map((tag, index) => (
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
                  {blog?.author_name || "Me.Writer"}
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
