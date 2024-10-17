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
  console.log("user from UserInfoContext.jsx", userState?.user);
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((x) => x.startsWith("token"))
      ?.split("=")[1];
    if (token) {
      setUserState({ loading: true });

      const api4userInfo = `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TOURS}/api/user`;
      fetch(api4userInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserState({ user: data?.user, loading: false });
        })
        .catch((err) => {
          setUserState({ error: err, loading: false });
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
