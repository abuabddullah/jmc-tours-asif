import { useQuery, useQueryClient } from "@tanstack/react-query";

const useBlogs = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["blogs"], // Include category in the query key
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the blogs query
  const refetchBlogs = () => {
    queryClient.invalidateQueries(["blogs"]);
  };



  return { isLoading, error, blogs: data?.data?.blogs, success: data?.success, refetchBlogs };
};

export async function deleteBlogs(id) {
  try {
    const token = localStorage.getItem("token")
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${id}`;
    console.log("delete blog by id", id, apiUrl);
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
