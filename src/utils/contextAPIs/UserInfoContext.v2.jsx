// import React, { useState, useEffect, createContext } from "react";

// export const UserContext = createContext(null);

// const UserInfoContext = ({ children }) => {
//   const [userState, setUserState] = useState({
//     user: null,
//     loading: false,
//     error: null,
//   });

//   useEffect(() => {
//     const token = document.cookie
//       .split("; ")
//       .find((x) => x.startsWith("token"))
//       ?.split("=")[1];
//     if (token) {
//       const api4userInfo = `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TOURS}/api/me`;

//       const fetchUser = () => {
//         setUserState({ loading: true });

//         fetch(api4userInfo, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data", data);
//             setUserState({ user: data.user, loading: false });
//           })
//           .catch((err) => {
//             setUserState({ error: err, loading: false });
//           });
//       };

//       fetchUser();

//       const unsubscribe = watch(
//         () => userState.user,
//         () => fetchUser()
//       );

//       return () => unsubscribe();
//     }
//   }, []);
//   return (
//     <section>
//       <UserContext.Provider value={userState}>{children}</UserContext.Provider>
//     </section>
//   );
// };

// export default UserInfoContext;

/* ******************** */
/* v-2 fake user info */

import React, { useState, useEffect, createContext, useRef } from "react";
import userInfo from "./../../../public/userInfo.json";

export const UserContext = createContext(null);

const UserInfoContext = ({ children }) => {
  const [userState, setUserState] = useState({
    user: null,
    loading: false,
    error: null,
  });

  const previousUser = useRef(userState.user);
  useEffect(() => {
    if (
      userState.user &&
      JSON.stringify(userState.user) !== JSON.stringify(previousUser.current)
    ) {
      setUserState({ loading: true });
      setTimeout(() => {
        setUserState({ user: userInfo.user, loading: false });
      }, 2000);
    }
  }, [userState.user]);

  useEffect(() => {
    setUserState({ loading: true });
    setTimeout(() => {
      setUserState({ user: userInfo.user, loading: false });
    }, 2000);
  }, []);

  return (
    <section>
      <UserContext.Provider value={userState}>{children}</UserContext.Provider>
    </section>
  );
};

export default UserInfoContext;
