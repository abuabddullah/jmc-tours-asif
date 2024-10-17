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
