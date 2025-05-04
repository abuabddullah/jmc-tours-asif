import React from "react";

const CommnetBlogForm = () => {
  return (
    <section className="w-full bg-white  dark:bg-gray-800">
      <form>
        <div>
          <input
            id="username"
            placeholder="Your name"
            name="name"
            type="text"
            className="block text-sm w-full rounded px-4 py-7 mt-2 text-gray-700 bg-[#FAF5EE]  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <input
            id="email"
            placeholder="Your email"
            name="email"
            type="text"
            className="block text-sm w-full rounded px-4 py-7 mt-4 text-gray-700 bg-[#FAF5EE]  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div className="gap-2 flex my-5">
          <input
            type="checkbox"
            className="block text-sm rounded text-gray-700 bg-[#FAF5EE]  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
          <p className="text-gray-500">
          Save my name, email, and website in this browser for the next time I comment.          </p>
        </div>

        <div className="">
          <textarea
            id="comment"
            name="comment"
            placeholder="Write message"
            type="text"
            className="block rounded text-sm w-full px-4 py-5 min-h-40 mt-2 text-gray-700 bg-[#FAF5EE]  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div className="flex justify-start mt-6">
          <button
            type="submit"
            className="uppercase text-sm px-16 py-5 leading-5 text-white transition-colors duration-300 transform bg-[#E8604C] rounded-xl hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add A Comment
          </button>
        </div>
      </form>
    </section>
  );
};

export default CommnetBlogForm;
