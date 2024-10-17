import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firebase.config";
import { logout } from "@/utils/authUtils/authenticateNAccessToken";
import { useRouter } from "next/navigation";

const UserLogOutDrop = ({ user, setUserState }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // sign out
  // const [signOut, loading, error] = useSignOut(auth);
  const handleSignOut = async () => {
    const status = await logout();

    if (status === 200) {
      router.replace("/");
      setUserState({
        user: null,
        loading: false,
        error: null,
      });
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="  text-base text-gray-600 bg-white  rounded-md  flex gap-1 items-center hover:text-green-400 border-b-2 border-transparent hover:border-[#DD7364] relative z-10 lg:px-3 lg:pb-2  mt-2"
      >
        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
          <img
            src={
              user?.photoURL ||
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            }
            className="object-cover w-full h-full"
            alt="avatar"
            width={50}
            height={50}
          />
        </div>
        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
          {user?.name || "Anonymous"}
        </h3>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="lg:absolute lg:right-0 z-40 w-56 py-2 mt-2 overflow-hidden origin-top-right lg:bg-white rounded-md shadow-xl dark:bg-gray-800 transition-opacity duration-100 ease-in-out sm:w-48 md:w-56">
          <hr className="border-gray-200 dark:border-gray-700" />

          <Link
            href="/dashboard"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="mx-1">Dashboard</span>
          </Link>

          <div
            onClick={handleSignOut}
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MdLogout />
            <span className="mx-1">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLogOutDrop;
