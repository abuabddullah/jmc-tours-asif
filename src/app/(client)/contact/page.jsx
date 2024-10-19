"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactUsPageComp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("form", form);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-us`,
        form
      );
      setSubmitted(true);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("There was an error submitting your message. Please try again.");
    }
  };

  const data = {
    contacts: {
      showrooms: [
        {
          name: "JMC Tours Hotline (International)",
          phone: "+880 13212 10094",
        },
        {
          name: "JMC Domestic Tours Hotline",
          phone: "+880 13212 10041",
        },
        {
          name: "JMC Student Counseling Hotline",
          phone: "+880 13212 10042",
        },
      ],
      hotline: [
        {
          name: "JMC Group Hotline",
          phone: "+880 13099 91999",
        },
      ],
      email: {
        consultant: "consultant@jmc.tours",
        address: "info@jmc.tours",
      },
      website: "www.jmc.tours",
      social_media: {
        facebook: "www.facebook.com/JMCToursBD",
        linkedin: "www.linkedin.com/company/jmctours",
        instagram: "www.instagram.com/jmctoursbd",
        youtube: "www.youtube.com/@jmctourstravelsltd",
        tiktok: "www.tiktok.com/@jmc_tours",
        twitter: "www.x.com/jmctourstravels",
        threads: "www.threads.net/@jmctoursbd",
        pinterest: "www.pinterest.com/jmctourstravels",
      },
      address:
        "Flat# 8B, Level# 08, Main Road, Block# H, Aftabnagar, Badda, Dhaka-1212, Bangladesh",
    },
  };

  return (
    <div className="bg-[#faf6f6] py-12">
      <div className="border max-w-5xl mx-auto lg:p-8 bg-white">
        <div className="flex justify-center items-center">
          <div className="bg-white border w-full flex flex-col-reverse md:flex-row gap-8">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 lg:p-6">
              <h2 className="text-xl font-bold mb-4 mt-6 lg:mt-0 text-center">
                Write Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 p-8 lg:mt-12">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile: +880"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message Here..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-contactBlue text-white p-2 rounded-md hover:bg-contactBlueHover transition duration-300"
                >
                  Send
                </button>
                {submitted && (
                  <p className="text-green-500 font-bold mt-2">
                    <small>Success!</small>
                  </p>
                )}
                {error && (
                  <p className="text-red-500 font-bold mt-2">{error}</p>
                )}
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="w-full lg:w-1/2 bg-contactBlue text-white p-6 text-sm">
              <h2 className="text-xl font-bold mb-4 text-center">
                Contact Information
              </h2>
              <div className="lg:p-8">
                <p className="mb-4">Address: {data.address}</p>
                <div className="mb-4">
                  {data.contacts.showrooms?.map((showroom, index) => (
                    <p key={index}>
                      {showroom.name}: {showroom.phone}
                    </p>
                  ))}
                  {data.contacts.hotline.map((line, index) => (
                    <p key={index}>
                      {line.name}: {line.phone}
                    </p>
                  ))}
                </div>
                <p className="mb-4">
                  Email:{" "}
                  <a
                    href={`mailto:${data.contacts.email.address}`}
                    className="underline"
                  >
                    {data.contacts.email.address}
                  </a>
                </p>
                <p className="mb-4">
                  Web:{" "}
                  <a
                    href={`https://${data.contacts.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {data.contacts.website}
                  </a>
                </p>
                <h3 className="font-bold mt-4 mb-2">Social Media:</h3>
                <ul className="space-y-1">
                  {Object.entries(data.contacts.social_media).map(
                    ([platform, link], index) => (
                      <li key={index} className="p-0 max-w-full break-words">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}:{" "}
                        <a
                          href={`https://${link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mx-auto">
          <h1 className="my-10 text-3xl font-bold text-center">Location Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4953412447626!2d90.44234737533637!3d23.765369178660077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a260534d25e4a87%3A0x36028b95229d0743!2sJMC%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1724913040926!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageComp;
