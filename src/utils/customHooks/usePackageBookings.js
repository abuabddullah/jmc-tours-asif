import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/* export const usePackageBookings = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["packageBookings"],
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/package-bookings`;
      const response = await fetch(url);
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

  return { isLoading, error, packageBookings, success, refetchPackageBookings };
}; */

import { useState, useEffect } from "react";

export const usePackageBookings = () => {
  const [state, setState] = useState({
    packageBookings: [],
    isLoading: true,
    error: null,
  });

  const fetchBookings = async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await fetch("/package-bookings.json");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setState({ packageBookings: data, isLoading: false, error: null });
    } catch (err) {
      setState({ packageBookings: [], isLoading: false, error: err });
    }
  };

  // Use useEffect to fetch bookings on initial render
  useEffect(() => {
    fetchBookings();
  }, []);

  return { ...state, refetchPackageBookings: fetchBookings };
};

/* **************************** */
/* Delete Package Booking by tanstack qurey useMutation */
export const deletePackageBooking = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/package-bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
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
