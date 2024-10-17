// "use client";

import AllBlogs from "@/components/blogsPage/AllBlogs";

export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const Blogs = () => {
  return <AllBlogs />;
};

export default Blogs;
