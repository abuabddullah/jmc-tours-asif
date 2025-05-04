import { usePathname } from "next/navigation";
import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext(null);

const UserInfoContext = ({ children }) => {
  const pathname = usePathname();
  const [userState, setUserState] = useState({
    user: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((x) => x.startsWith("token"))
      ?.split("=")[1];

    if (token) {
      setUserState((prev) => ({ ...prev, loading: true, error: null }));

      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          
          if (res.status === 200 && data.status === "success") {
            setUserState({
              user: data.data.user,
              loading: false,
              error: null,
            });
          } else {
            setUserState({
              user: null,
              loading: false,
              error: data.message || "Failed to fetch user information",
            });
          }
        })
        .catch((err) => {
          setUserState({
            user: null,
            loading: false,
            error: "An error occurred while fetching user information",
          });
          console.error("Error fetching user info:", err);
        });
    } else {
      setUserState({
        user: null,
        loading: false,
        error: "No authentication token found",
      });
    }
  }, [pathname]);
  return (
    <section>
      <UserContext.Provider value={{ ...userState, setUserState }}>
        {children}
      </UserContext.Provider>
    </section>
  );
};

export default UserInfoContext;
