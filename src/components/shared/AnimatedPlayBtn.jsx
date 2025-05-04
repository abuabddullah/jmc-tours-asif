// import React from "react";
// import { FaPlay } from "react-icons/fa";

// const AnimatedPlayBtn = () => {
//   return (
//     <div className="p-6 bg-green-600 inline-block rounded-lg transform transition-transform duration-500 hover:scale-110 shadow-lg relative cursor-pointer my-8">
//       <FaPlay className="text-white text-4xl" />
//       <div className="absolute top-0 left-0 border-2 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[3500ms] animate-ease-linear">
//         {" "}
//       </div>
//       <div className="absolute top-0 left-0 border-2 border-green-600 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[5500ms] animate-ease-linear">
//         {" "}
//       </div>
//       <div className="absolute top-0 left-0 border-2 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[6500ms] animate-ease-linear">
//         {" "}
//       </div>
//     </div>
//   );
// };

// export default AnimatedPlayBtn;



import React from "react";
import { FaPlay } from "react-icons/fa";

const AnimatedPlayBtn = () => {
  return (
    <div className="p-6 bg-green-600 inline-block rounded-[8px] transform transition-transform duration-500 hover:scale-110 shadow-lg relative cursor-pointer my-8">
      <FaPlay className="text-white text-4xl" />
      <div className="absolute top-0 left-0 border-2 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[3500ms] animate-ease-linear animate-ping-delay-1">
        {" "}
      </div>
      <div className="absolute top-0 left-0 border-2 border-green-600 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[5500ms] animate-ease-linear animate-ping-delay-2">
        {" "}
      </div>
      <div className="absolute top-0 left-0 border-2 w-full h-full rounded-lg animate-ping animate-infinite animate-duration-[6500ms] animate-ease-linear animate-ping-delay-3">
        {" "}
      </div>
    </div>
  );
};

export default AnimatedPlayBtn;


