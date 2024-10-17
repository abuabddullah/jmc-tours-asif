import { useQuery, useQueryClient } from "@tanstack/react-query";

const useLocations = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["locations"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations`).then(
        (res) => res.json()
      ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the locations query
  const refetchLocations = () => {
    queryClient.invalidateQueries(["locations"]);
  };

  const { locations, success } = data || {};

  return { isLoading, error, locations, success, refetchLocations };
};

export async function deleteLocation(id) {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/${id}`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("deleteLocation frontend response", response.status);
    return { status: response.status };
  } catch (error) {
    console.error("Error:", error.message);
    return { status: 404 };
  }
}

export default useLocations;
