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
