import Image from "next/image";
import React from "react";

const WhoWeAreComp = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-slate-100">
        <div className="container max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 "
            data-aos="fade-right"
          >
            <Image
              src="https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/who-we-are/who-we-are-our-beliefs.png"
              alt="hero"
              className="object-cover object-center rounded-2xl"
              width={1000}
              height={667}
            />
          </div>
          <div
            data-aos="fade-left"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed">
              Who We Are
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              we specialize in crafting bespoke travel experiences that
              transcend expectations. Our commitment to seamless exploration is
              underscored by a secure online payment system, ensuring peace of
              mind for every transaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreComp;
