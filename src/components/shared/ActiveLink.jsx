"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ href, children, className }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === href
          ? "underline text-red-300"
          : "no-underline font-normal"
      } hover:text-red-300 hover:bg-muted ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
