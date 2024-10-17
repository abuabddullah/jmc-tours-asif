export const authenticateNAccessToken = async (auth) => {
  /** set the necessary information in the local storage like,
   * set user basic info in the local storage
   * set the token in the local storage
   * set the token in a cookie
   */
  const token = auth?.token;
  localStorage.setItem("token", token);

  // Set the token in a cookie
  document.cookie = `token=${token}; path=/; max-age=${
    process.env.NEXT_PUBLIC_COOKIE_EXPIRY * 3600
  };`; // expires in NEXT_PUBLIC_COOKIE_EXPIRY hour
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TOURS}/api/logout`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response from logout", response);
    if (response.ok) {
      // Clear user data from local storage or cookies if necessary
      // localStorage.removeItem("user"); // Remove user info
      localStorage.removeItem("token"); // Remove token
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear token cookie
      return response.status;
    } else {
      console.error("Logout failed:", await response.text());
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};
