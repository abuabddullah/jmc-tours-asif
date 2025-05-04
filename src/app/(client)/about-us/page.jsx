import React from "react";
import WhoWeAreComp from "@/components/aboutPageComp/WhoWeAreComp";
import AboutOurMissionVission from "@/components/aboutPageComp/AboutOurMissionVission";
import OurDreams from "@/components/aboutPageComp/OurDreams";
import ComprehensiveSupport from "@/components/aboutPageComp/ComprehensiveSupport";

const AboutPage = () => {
  return (
    <div>
      <div className="relative h-96">
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
        <div className="absolute inset-0 bg-[#00000071] flex items-center p-4">
          <div className="container  max-w-7xl mx-auto lg:p-16 p-4 overflow-hidden">
            <h1 className="text-3xl md:text-5xl text-careerRed font-bold">
              {[...Array("About".length)].map((_, i) => (
                <span
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={(i + 1) * 100}
                >
                  {"About"[i]}
                </span>
              ))}
              <span
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {" "}
                Us
              </span>
            </h1>
            <p
              data-aos="fade-left"
              className="text-white my-6 md:font-bold text-sm md:text-base max-w-2xl"
            >
              Welcome to JMC Tours and Travels Limited, nestled in the vibrant
              heart of Dhaka, Bangladesh. As a distinguished
              government-registered company with essential credentials. We have
              the travel agency registration certificate which is issued by the
              Ministry of Civil Aviation and Tourism. Located at our central hub
              in Aftabnagar, Dhaka
            </p>
          </div>
        </div>
      </div>
      {/* who we are */}
      <WhoWeAreComp />
      <AboutOurMissionVission />
      <OurDreams />
      <ComprehensiveSupport />
    </div>
  );
};

export default AboutPage;
