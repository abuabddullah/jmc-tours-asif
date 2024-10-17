import React from "react";
// import { Qwitcher_Grypen } from "next/font/google";
import { Great_Vibes } from "next/font/google";
export const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});
const SectionSubtitle = ({ children, twCss }) => {
  return (
    <>
      <div className={`${greatVibes.className} ${twCss} leading-snug`}>
        {children}
      </div>
    </>
  );
};

export default SectionSubtitle;
