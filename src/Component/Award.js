import React from "react";
import AwardSlider from "./AwardSlider";

const Award = () => {
  return (
    <div>
      <h2 className="text-[18px] text-slate-700 font-bold mx-2 ">
        Awards. Followers. Rewards.
      </h2>
      <p className="px-4 text-center text-slate-400 text-[12px] mt-2  mb-5 font-semibold">
        Our work speaks for itself - Specscart has been awarded first prize in
        Venture Further 2018 Business Category. We are constantly working to
        innovate new ways and technology to become UK’s leading Eye Care
        provider.
      </p>

      <AwardSlider />
    </div>
  );
};

export default Award;
