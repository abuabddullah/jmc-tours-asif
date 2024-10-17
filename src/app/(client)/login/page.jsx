import AuthenticateForm from "@/components/AuthenticatePage/AuthenticateForm";
import BreadCrumbComponents from "@/components/shared/BreadCrumbComponents";
import React from "react";

const Authenticate = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 container">
        <BreadCrumbComponents page1={{ pageName: "Login", link: "/login" }} />
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <AuthenticateForm />
        </div>
      </section>
    </>
  );
};

export default Authenticate;
