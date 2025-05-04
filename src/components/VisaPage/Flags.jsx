import Link from "next/link";
import React from "react";

const Flags = ({ country, key }) => {
  return (
    <Link
      href={`/studen-visa/${country?.name}`}
      data-aos="fade-up"
      data-aos-delay={key * 300} // Adjust delay based on index
      data-aos-duration="1000" // Optional: duration of the animation
    >
      <div className="border p-4 flex flex-col items-center">
        <img
          src={country.flag}
          alt={country.name}
          className="w-full h-32 object-cover mb-4 shadow"
        />
        <p className="text-center font-semibold">{country.name}</p>
      </div>
    </Link>
  );
};

export default Flags;
