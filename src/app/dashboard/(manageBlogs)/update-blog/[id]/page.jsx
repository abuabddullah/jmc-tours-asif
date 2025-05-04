import React from "react";
import BlogUpdateForm from "../../../dashBoardComponents/BlogUpdateForm";

export async function generateStaticParams() {
  const { data:{blogs} } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
  ).then((res) => res.json());
  const staticParams4updateBlog = blogs.map((blog) => ({
    id: blog.id.toString(),
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
    const {data:{blog}} = await response.json();
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
