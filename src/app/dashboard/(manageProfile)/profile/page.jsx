"use client";
import { UserProfileSkeleton } from "@/components/shared/LoadingSkeletons";
import { UserContext } from "@/utils/contextAPIs/UserInfoContext";
import React, { useContext, useState } from "react";

const Profile = () => {
  const { user, loading } = useContext(UserContext);
  const [showPermissions, setShowPermissions] = useState(false);

  if (loading) {
    return <UserProfileSkeleton />; // You might want to show a loader while data is being fetched
  }

  return (
    <div className="md:p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid md:grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {user?.friendsCount || 0}
              </p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {user?.photosCount || 0}
              </p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {user?.commentsCount || 0}
              </p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img
                src={user?.photo || "https://shorturl.at/j50zJ"}
                alt={user?.name || "Anonymous"}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="md:space-x-8 flex flex-col md:flex-row items-center gap-4 mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              User Settings
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user?.name || "Anonymous"},{" "}
            <span className="font-light text-gray-500">
              {user?.age || "18+"}
            </span>
          </h1>
          <p className="font-light text-gray-600 mt-3">
            {user?.present_address || "Present Address"}
          </p>
          <p className="mt-8 text-gray-500">
            Role: {user?.role || "Solution Manager - Creative Tim Officer"}
          </p>
          <p className="mt-2 text-gray-500">
            {user?.permanent_address || "Permanent address"}
          </p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            Connected from :{" "}
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "16/12/1971"}
          </p>
          <div>
            <div className="text-center">
              <button
                className="text-indigo-500 py-2 px-4 font-medium mt-4 "
                onClick={() => setShowPermissions(!showPermissions)}
              >
                {showPermissions ? "Hide" : "Show more"}
              </button>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4"
              style={{ display: showPermissions ? "grid" : "none" }}
            >
              {user?.permissions?.map((permission, index) => (
                <li key={index} className="list-disc">
                  {permission}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
