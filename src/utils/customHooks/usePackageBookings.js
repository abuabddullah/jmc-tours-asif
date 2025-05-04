import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMyPackageBookings = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["packageBookings"],
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/bookings/my-bookings`;
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the packageBookings query
  const refetchPackageBookings = () => {
    queryClient.invalidateQueries(["packageBookings"]);
  };

  const { packageBookings, success } = data || {};

  return { isLoading, error, packageBookings: data?.data?.bookings, success: data?.success, refetchPackageBookings };
};

export const useAllBookingsByAdmin = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["packageBookings"],
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/bookings`;
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the packageBookings query
  const refetchPackageBookings = () => {
    queryClient.invalidateQueries(["packageBookings"]);
  };

  const { packageBookings, success } = data || {};

  return { isLoading, error, packageBookings: data?.data?.bookings, success: data?.success, refetchPackageBookings };
};



/* **************************** */
/* Delete Package Booking by tanstack qurey useMutation */
export const deletePackageBooking = async (id) => {
  const token = localStorage.getItem("token")
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    }
  );

  if (!response.ok) throw new Error("Failed to delete booking");
  return response.status;
};

/* **************************** */

export const usePackageBookingById = (id) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["packageBookingById", id],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/package-bookings/${id}`
      ).then((res) => res.json()),
  });

  const refetchPackageBookingById = () => {
    queryClient.invalidateQueries(["packageBookingById", id]);
    refetch();
  };

  return {
    isLoading,
    error,
    packageBooking: data?.packageBooking,
    refetchPackageBookingById,
  };
};
