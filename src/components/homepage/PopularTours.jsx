// import SectionSubtitle from "../shared/SectionSubtitle";
// import ToursCardsSection from "../shared/ToursCardsSection";

// const PopularTours = () => {
//   return (
//     <div className="lg:p-8 pb-16">
//       <div className="max-w-screen-xl lg:mx-auto mx-4 md:mx-8">
//         <SectionSubtitle twCss="text-center text-green-600 text-4xl lg:text-5xl font-extrabold">
//           Popular Tours
//         </SectionSubtitle>

//         <h2 className="lg:text-5xl text-3xl text-teal-950 font-bold text-center mb-8">Tour Packages</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
//           <ToursCardsSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularTours;

import SectionSubtitle from "../shared/SectionSubtitle";
import ToursCardsSection from "../shared/ToursCardsSection";

const PopularTours = () => {
  return (
    <div className="lg:p-8 pb-16">
      <div className="max-w-screen-xl lg:mx-auto mx-4 md:mx-8">
        <SectionSubtitle twCss="text-center text-green-600 text-4xl lg:text-5xl font-extrabold">
          Popular Tours
        </SectionSubtitle>

        <h2 className="lg:text-5xl text-3xl text-teal-950 font-bold text-center mb-8">
          Tour Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          <ToursCardsSection packageType="popular" />
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
