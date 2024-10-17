import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <input
              id="username"
              placeholder="Your name"
              type="text"
              className="block text-sm w-full px-4 py-5 mt-2 text-gray-700 bg-[#FAF5EE] rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <input
              id="emailAddress"
              placeholder="email"
              type="email"
              className="block text-sm w-full px-4 py-5 mt-2 text-gray-700 bg-[#FAF5EE] rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <input
              id="Phone No."
              placeholder="Phone No."
              type="password"
              className="block text-sm w-full px-4 py-5 mt-2 text-gray-700 bg-[#FAF5EE] rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <input
              id="Subject"
              placeholder="Subject"
              type="text"
              className="block text-sm w-full px-4 py-5 mt-2 text-gray-700 bg-[#FAF5EE] rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="mt-8">
          <textarea
            id="message"
            placeholder="Write message"
            type="text"
            className="block text-sm w-full px-4 py-5 min-h-40 mt-2 text-gray-700 bg-[#FAF5EE] rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div className="flex justify-start mt-6">
          <button
            type="submit"
            className="uppercase text-sm px-16 py-5 leading-5 text-white transition-colors duration-300 transform bg-[#E8604C] rounded-xl hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Send A Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
