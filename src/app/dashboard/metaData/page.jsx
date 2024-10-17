"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MetaData = () => {
  const router = useRouter();
  const redirectAfter5Seconds = () => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 5000);
  };

  useEffect(() => {
    redirectAfter5Seconds();
  }, []);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <p className="text-center">404 ! Not found</p>
      <p>
        Redirecting to Dashboard in <span className="font-bold">{count}</span>{" "}
        seconds.
      </p>
      {/* <MetaDataEditorForm /> */}
    </section>
  );
};

export default MetaData;
