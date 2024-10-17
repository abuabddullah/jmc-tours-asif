import { useQuery, useQueryClient } from "@tanstack/react-query";

const useBlogs = (blogCategory) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["blogs", blogCategory], // Include category in the query key
    queryFn: async () => {
      const url = blogCategory
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/categories/${blogCategory}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!blogCategory || blogCategory === undefined, // Only run query if category is provided or undefined
  });

  // Function to invalidate and refetch the blogs query
  const refetchBlogs = () => {
    queryClient.invalidateQueries(["blogs"]);
  };

  const { blogs, success } = data || {};

  return { isLoading, error, blogs, success, refetchBlogs };
};

export async function deleteBlogs(id) {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${id}`;
    console.log("delete blog by id", id, apiUrl);
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("deleteBlogs frontend response", response);
    return { status: response.status };
  } catch (error) {
    console.error("Error:", error.message);
    return { status: 404 };
  }
}

export const useBlogById = (id) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["blogById", id],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${id}`).then(
        (res) => res.json()
      ),
  });

  const refetchBlogById = () => {
    queryClient.invalidateQueries(["blogById", id]);
    refetch();
  };

  return { isLoading, error, blog: data?.blog, refetchBlogById };
};

export default useBlogs;
