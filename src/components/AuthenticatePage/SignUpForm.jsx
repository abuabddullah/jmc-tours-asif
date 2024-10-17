/* --------------------------------------------
// v-1 no photo upload 
----------------------------------------------*/
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase.config";
import { authenticateNAccessToken } from "@/utils/authUtils/authenticateNAccessToken";

const SignUpForm = ({ setToggleSignIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // await createUserWithEmailAndPassword(email, password);
      await createUserWithEmailAndPassword(email, password).then((data) => {
        console.log("1.new user sign up done", data);
        if (data.user) {
          // এখানে আমরা user এর ইনফরমেশন গুলোকে backend এ save করব একটা common function বানাব যাতে সেটাকে আমরা login with fb/github/email-pass সবজ্যগায়ি use করতে পারি
          authenticateNAccessToken(data.user);
        }
      });
      await updateProfile({ displayName: username }).then((data) => {
        console.log("user name upadated", data);
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // If user is created successfully, console log the user and redirect
  useEffect(() => {
    if (user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center mt-8">
          <span className="absolute">{/* SVG for username */}</span>
          <input
            type="text"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-6">
          <span className="absolute">{/* SVG for email */}</span>
          <input
            type="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">{/* SVG for password */}</span>
          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">{/* SVG for confirm password */}</span>
          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {error && <p className="mt-2 text-red-500">{error.message}</p>}

          <div className="mt-6 text-center">
            <span
              onClick={() => setToggleSignIn(true)}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
            >
              Already have an account?
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;

/* --------------------------------------------
// //v-2 include photo upload 
----------------------------------------------*/

// import React, { useState } from "react";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { auth, storage } from "../../../firebase.config";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { useRouter } from "next/navigation";

// const SignUpForm = ({ setToggleSignIn }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [error, setError] = useState("");

//   const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     firebaseError,
//   ] = useCreateUserWithEmailAndPassword(auth);

//   const router = useRouter(); // If using Next.js

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (!username) {
//       setError("Username is required.");
//       return;
//     }
//     if (!email) {
//       setError("Email is required.");
//       return;
//     }
//     if (!password) {
//       setError("Password is required.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       // Create user with email and password
//       await createUserWithEmailAndPassword(email, password);

//       if (user) {
//         // If profile photo is selected, upload it
//         let photoURL = "";
//         if (profilePhoto) {
//           const photoRef = ref(storage, `profilePhotos/${user.user.uid}/${profilePhoto.name}`);
//           await uploadBytes(photoRef, profilePhoto);
//           photoURL = await getDownloadURL(photoRef);
//         }

//         // Update user profile with displayName and photoURL
//         await user.user.updateProfile({
//           displayName: username,
//           photoURL: photoURL || null,
//         });

//         console.log("User created:", user.user);

//         // Redirect to home page
//         router.replace("/"); // If using Next.js
//       }
//     } catch (err) {
//       console.error("Error creating user:", err);
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {/* Username Field */}
//         <div className="relative flex items-center mt-8">
//           <span className="absolute">
//             {/* User Icon SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//           </span>

//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Username"
//             required
//           />
//         </div>

//         {/* Profile Photo Field */}
//         <label
//           htmlFor="dropzone-file"
//           className="cursor-pointer flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed border-red-200 rounded-lg dark:border-gray-600 dark:bg-gray-900"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-gray-300 dark:text-gray-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//             />
//           </svg>

//           <h2 className="mx-3 text-gray-400">Profile Photo</h2>

//           <input
//             id="dropzone-file"
//             type="file"
//             className="hidden"
//             accept="image/*"
//             onChange={(e) => setProfilePhoto(e.target.files[0])}
//           />
//         </label>

//         {/* Email Field */}
//         <div className="relative flex items-center mt-6">
//           <span className="absolute">
//             {/* Email Icon SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>
//           </span>

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Email address"
//             required
//           />
//         </div>

//         {/* Password Field */}
//         <div className="relative flex items-center mt-4">
//           <span className="absolute">
//             {/* Password Icon SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//               />
//             </svg>
//           </span>

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Password"
//             required
//           />
//         </div>

//         {/* Confirm Password Field */}
//         <div className="relative flex items-center mt-4">
//           <span className="absolute">
//             {/* Confirm Password Icon SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//               />
//             </svg>
//           </span>

//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Confirm Password"
//             required
//           />
//         </div>

//         {/* Error Message */}
//         {error || firebaseError ? (
//           <p className="mt-4 text-sm text-red-500">{error || firebaseError.message}</p>
//         ) : null}

//         {/* Submit Button */}
//         <div className="mt-6">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>

//           {/* Toggle to Sign In */}
//           <div className="mt-6 text-center ">
//             <span
//               onClick={() => setToggleSignIn(true)}
//               className="text-sm text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
//             >
//               Already have an account?
//             </span>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignUpForm;
