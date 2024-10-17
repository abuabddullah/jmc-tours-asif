"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TagsBlogSection = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/categories/unique`)
      .then((res) => res.json())
      .then((data) => setCategories(data?.categories));
  }, []);

  return (
    <div className="mb-8 border p-8 rounded-xl">
      <h4 className="text-lg font-bold mb-4  ps-2 border-s-2 border-rose-400">
        Tags
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories?.map((tag, index) => (
          <Link key={index} href={`/blogs/${tag}`}>
            <span className="px-3 py-1 bg-red-50 hover:bg-red-400 hover:text-white text-gray-700 rounded-full text-sm cursor-pointer">
              {tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsBlogSection;
