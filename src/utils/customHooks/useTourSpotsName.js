import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTourSpotsName = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["tourSpotsName"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/locations/unique`).then(
        (res) => res.json()
      ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the locations query
  const refetchTourSpotsName = () => {
    queryClient.invalidateQueries(["tourSpotsName"]);
  };
  const { names, success } = data || {};
  return {
    isLoading,
    error,
    tourSpotsName: names,
    success,
    refetchTourSpotsName,
  };
};
