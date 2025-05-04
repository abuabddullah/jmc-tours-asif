import AllBlogs from "@/components/blogsPage/AllBlogs";



export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const CategorisedBlogs = ({ params }) => {
  return <AllBlogs />;
};

export default CategorisedBlogs;
