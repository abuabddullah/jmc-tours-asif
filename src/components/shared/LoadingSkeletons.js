import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonCard } from "./loadingComponents/Skeleton";

export const FlagSkeleton = () => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <Skeleton height={128} className="w-full h-32 object-cover mb-4 shadow" />
      <Skeleton width={150} height={30} className="text-center font-semibold" />
    </div>
  );
};

export const TourPackageSkeleton = () => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <Skeleton height={128} className="w-full h-32 object-cover mb-4 shadow" />
      <Skeleton width={150} height={30} className="text-center font-semibold" />
    </div>
  );
};

export const LocationCardSkeleton = () => {
  return (
    <div className="bg-transparent rounded-xl shadow-lg overflow-hidden relative">
      <div className="relative h-64 w-full overflow-hidden">
        <Skeleton
          height="100%"
          className="rounded-t-lg transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Skeleton
            width={40}
            height={20}
            className="text-white px-2 bg-green-600 rounded-full shadow-md"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex justify-between items-center mb-2">
            <Skeleton
              width={100}
              height={25}
              className="text-green-700 font-extrabold text-5xl"
            />
          </div>
          <Skeleton
            width={150}
            height={30}
            className="text-2xl font-bold text-white"
          />
        </div>
      </div>
    </div>
  );
};

export const TourCardSkeleton = () => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
      <div className="relative h-64 w-full">
        <Skeleton
          height="100%"
          className="rounded-t-lg transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Skeleton
            width={40}
            height={20}
            className="bg-black text-white opacity-45 text-xl p-1 rounded-sm shadow-md hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="hover:bg-[#0000006e] duration-500 text-white p-4 rounded-t-xl shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <Skeleton
                width={150}
                height={30}
                className="text-xl font-semibold"
              />
              <div className="flex">
                <Skeleton width={50} height={20} className="text-slate-100" />
                <Skeleton width={50} height={20} className="text-yellow-500" />
              </div>
            </div>
            <Skeleton
              width={150}
              height={30}
              className="text-gray-200 text-sm"
            />
            <Skeleton
              width={150}
              height={30}
              className="text-red-300 font-semibold mt-2"
            />
            <Skeleton
              width={150}
              height={30}
              className="text-sm text-gray-300 mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonAllBlogs = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-[#000000c5] flex items-center">
          <div className="container">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
              <Skeleton width={150} height={30} />
            </h1>
          </div>
        </div>
      </div>

      {/* blogs page */}
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="w-full lg:w-2/3 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden">
              {[...Array(9)].map((_, i) => (
                <SkeletonCard key={i} twcss="p-4 h-56 w-full" />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <ul className="inline-flex items-center -space-x-px">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <Skeleton
                      width={30}
                      height={30}
                      className="rounded-lg ml-2"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3 ">
            <div className="mb-8  border p-8 rounded-xl">
              <h4 className="text-lg font-bold mb-2">
                <Skeleton width={100} height={30} />
              </h4>
              <Skeleton width="100%" height={30} className="my-2" />
              <Skeleton width="100%" height={30} className="my-2" />
            </div>

            <div className="mb-8  border p-8 rounded-xl">
              <h4 className="text-lg font-bold mb-2">
                <Skeleton width={100} height={30} />
              </h4>
              <Skeleton width="100%" height={30} className="my-2" />
              <Skeleton width="100%" height={30} className="my-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonListTable = () => {
  return (
    <div className="w-64 lg:w-full lg:m-8">
      <div className="flex items-center py-4">
        <Skeleton width={200} height={40} className="max-w-sm" />
        <Skeleton width={100} height={40} className="ml-auto" />
      </div>
      <div className="rounded-md border">
        <div className="flex items-center h-12 border-b">
          <Skeleton width={100} height={30} className="mr-4" />
          <Skeleton width={100} height={30} className="mr-4" />
          <Skeleton width={100} height={30} className="mr-4" />
          <Skeleton width={100} height={30} className="mr-4" />
          <Skeleton width={100} height={30} />
        </div>
        <div className="h-96 overflow-y-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center h-12 border-b">
              <Skeleton width={100} height={30} className="mr-4" />
              <Skeleton width={100} height={30} className="mr-4" />
              <Skeleton width={100} height={30} className="mr-4" />
              <Skeleton width={100} height={30} className="mr-4" />
              <Skeleton width={100} height={30} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          <Skeleton width={200} height={20} />
        </div>
        <div className="space-x-2">
          <Skeleton width={100} height={40} />
          <Skeleton width={100} height={40} />
        </div>
      </div>
    </div>
  );
};

export const UserProfileSkeleton = () => {
  return (
    <div className="md:p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid md:grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                <Skeleton width={50} height={30} />
              </p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                <Skeleton width={50} height={30} />
              </p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                <Skeleton width={50} height={30} />
              </p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <Skeleton width={48} height={48} className="rounded-full" />
            </div>
          </div>
          <div className="md:space-x-8 flex flex-col md:flex-row items-center gap-4 mt-32 md:mt-0 md:justify-center">
            <Skeleton width={100} height={40} className="rounded" />
            <Skeleton width={100} height={40} className="rounded" />
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            <Skeleton width={200} height={40} />
          </h1>
          <p className="font-light text-gray-600 mt-3">
            <Skeleton width={150} height={20} />
          </p>
          <p className="mt-8 text-gray-500">
            <Skeleton width={150} height={20} />
          </p>
          <p className="mt-2 text-gray-500">
            <Skeleton width={150} height={20} />
          </p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            <Skeleton width={300} height={60} />
          </p>
          <Skeleton width={100} height={40} className="rounded" />
        </div>
      </div>
    </div>
  );
};

export const UserProfilePicSkeleton = () => {
  return (
    <div className="text-base text-gray-600 bg-white rounded-md flex gap-1 items-center hover:text-green-400 border-b-2 border-transparent relative z-10 lg:px-3 lg:pb-2 mt-2">
      <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
        <Skeleton circle={true} height={32} width={32} />
      </div>
      <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
        <Skeleton height={20} width={100} />
      </h3>
    </div>
  );
};
