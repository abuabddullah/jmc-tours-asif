// import { useState, useEffect } from "react";

// const useFlags = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch("https://restcountries.com/v2/all");
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   return { countries, setCountries };
// };

// export default useFlags;

import { useQuery, useQueryClient } from "@tanstack/react-query";

const useFlags = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["flags"],
    queryFn: () =>
      fetch("https://restcountries.com/v2/all").then((res) => res.json()),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Function to invalidate and refetch the locations query
  const refetchFlags = () => {
    queryClient.invalidateQueries(["flags"]);
  };

  // const countries = data;

  return { isLoading, error, countries: data, refetchFlags };
};

export default useFlags;
