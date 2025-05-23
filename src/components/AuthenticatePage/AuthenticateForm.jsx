"use client";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SocailLoginBtn from "./SocailLoginBtn";
import LoginForm from "./LoginForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/navigation";

const AuthenticateForm = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) {
    return <div>Loading ...</div>
  }
  return (
    <>
      {/* <form className="w-full max-w-md"> */}
      <section className="w-full max-w-md">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://images.unsplash.com/photo-1646204892016-711ed35535ec?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center mt-6">
          <span
            onClick={() => setToggleSignIn(true)}
            className={`cursor-pointer w-1/3 pb-4 font-medium text-center capitalize ${
              toggleSignIn
                ? "text-gray-800 border-blue-500  border-b-2  dark:border-blue-400 dark:text-white"
                : "text-gray-500  border-b dark:border-gray-400 dark:text-gray-300"
            }     `}
          >
            sign in
          </span>

          <span
            onClick={() => setToggleSignIn(false)}
            className={`cursor-pointer w-1/3 pb-4 font-medium text-center capitalize ${
              !toggleSignIn
                ? "text-gray-800 border-blue-500  border-b-2  dark:border-blue-400 dark:text-white"
                : "text-gray-500  border-b dark:border-gray-400 dark:text-gray-300"
            }     `}
          >
            sign up
          </span>
        </div>

        <SocailLoginBtn />
        {toggleSignIn ? (
          <LoginForm setToggleSignIn={setToggleSignIn} />
        ) : (
          <SignUpForm setToggleSignIn={setToggleSignIn} />
        )}
      </section>
    </>
  );
};

export default AuthenticateForm;
