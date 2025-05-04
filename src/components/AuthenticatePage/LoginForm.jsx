import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { authenticateNAccessToken } from "@/utils/authUtils/authenticateNAccessToken";

const LoginForm = ({ setToggleSignIn }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  const router = useRouter();
  const [redirectPath, setRedirectPath] = useState("/"); // Default redirect path

  useEffect(() => {
    // Get the redirect path from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get("redirect");
    if (redirect) {
      setRedirectPath(redirect);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, error: "", loading: true }));

    const { email, password } = formState;
    if (!email || !password) {
      setFormState((prev) => ({
        ...prev,
        error: "Please enter email and password",
        loading: false,
      }));
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.status === 200 && data.status === "success") {
        setFormState((prev) => ({
          ...prev,
          loading: false,
        }));

        // Authenticate and set token in cookies
        authenticateNAccessToken(data);

        // Redirect to the desired route
        router.push(redirectPath);
      } else {
        setFormState((prev) => ({
          ...prev,
          error: data.message || "Something went wrong",
          loading: false,
        }));
      }
    } catch (err) {
      console.error("Login error:", err);
      setFormState((prev) => ({
        ...prev,
        error: "An error occurred during login. Please try again.",
        loading: false
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <AiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>
          <input
            type="email"
            name="email"
            value={formState?.email}
            onChange={handleChange}
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <AiOutlineLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>
          <input
            type="password"
            name="password"
            value={formState?.password}
            onChange={handleChange}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
            required
          />
        </div>

        {/* Error Message */}
        {formState?.error && (
          <p className="mt-4 text-sm text-red-500">
            {formState?.error}
          </p>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={formState?.loading}
            className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${formState?.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {formState?.loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Toggle to Sign Up */}
          <div className="mt-6 text-center">
            <span
              onClick={() => setToggleSignIn(false)}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
            >
              Not have an account? Sign Up now
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
