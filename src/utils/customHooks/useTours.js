import { useQuery, useQueryClient } from "@tanstack/react-query";

const useTours = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["tours"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours`).then((res) =>
        res.json()
      ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the locations query
  const refetchTours = () => {
    queryClient.invalidateQueries(["tours"]);
  };
  
  return { isLoading, error, tours:data?.data?.tours, success:data?.success, refetchTours };
};

export async function deleteTours(id) {
  try {
    const token = localStorage.getItem("token")
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tours/${id}`;
    console.log("delete tours by id", id, apiUrl);
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("delete tours frontend response", response);
    return { status: response.status };
  } catch (error) {
    console.error("Error:", error.message);
    return { status: 404 };
  }
}

export default useTours;
