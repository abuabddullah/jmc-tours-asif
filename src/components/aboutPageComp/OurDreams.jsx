import React from "react";
import { TbBulb } from "react-icons/tb";

const dreams = [
  {
    name: `Looking ahead, our vision is to set benchmarks in the travel industry. We aspire to be renowned for promoting cultural appreciation and global understanding through thoughtfully curated journeys. Whether it's historical explorations, wildlife safaris, family retreats, or solo expeditions, JMC Tours and Travels Limited is your trusted companion in unlocking the world's wonders.`,
    icon: <TbBulb />,
  },
  {
    name: `Explore beyond boundaries, discover with us, and create lasting memories that resonate with adventure, cultural immersion, and unparalleled service excellence. Your dream escape begins here, with JMC Tours and Travels Limited.`,
    icon: <TbBulb />,
  },
];

const OurDreams = () => {
  return (
    <>
      <div className="relative h-[1000px] lg:h-[750px] overflow-hidden lg:mb-12">
        <div
          className="absolute inset-0 bg-bottom"
          style={{
            backgroundImage: `url("https://www.propertycouncil.com.au/wp-content/uploads/2023/03/Header-11-Partner-with-us.png")`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#000000c4] flex items-center p-4">
          <div className="container  max-w-7xl mx-auto lg:p-16 p-4 overflow-hidden text-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl text-careerRed font-bold"
            >
              Our Dreams
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white my-6  text-sm md:text-base "
            >
              Ready to embark on your digital transformation?
            </p>
            <div className="my-10  mx-auto inline-block">
              {dreams?.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  className="text-white mb-2 text-sm md:text-base "
                >
                  <p className=" flex items-start gap-1.5 mb-6 bg-[#6362629d] p-4 text-justify rounded-lg max-w-2xl mx-auto">
                    <span className="bg-white text-careerRed p-1.5 rounded-lg">
                      {item.icon}
                    </span>{" "}
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-white mt-6  text-sm md:text-base max-w-2xl mx-auto"
            >
              Contact us today and let&apos;s unlock the potential within your
              story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDreams;
