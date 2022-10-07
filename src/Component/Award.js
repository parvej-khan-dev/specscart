import React from "react";
import AwardSlider from "./AwardSlider";

const Award = () => {
  return (
    <div className="lg:flex">
      <div className="lg:justify-center lg:p-5 lg:text-left ">
        <h2 className="text-[18px] text-slate-700 font-bold lg:text-3xl lg:ml-4 lg:py-5 mx-2 ">
          Awards. Followers. Rewards.
        </h2>
        <p className="px-4 text-center text-slate-400 text-[12px] mt-2 lg:mr-20   lg:text-left lg:text-[14px] mb-5 font-semibold">
          Our work speaks for itself - Specscart has been awarded first prize in
          Venture Further 2018 Business Category. We are constantly working to
          innovate new ways and technology to become UK’s leading Eye Care
          provider.
        </p>
      </div>
      <div>
        {/* <AwardSlider /> */}
        <img
          src={require("./Test Folder/specscart_awards_follower_rewards.png")}
          className="lg:text-center lg:mr-30"
        />

        <div class="my-5">
          <ul class="flex items-center justify-center">
            {/* <!-- Note that we have one <li> for each image in our gallery --></li> */}
            <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-[#08b1a2]"></li>
            <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
            <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
            <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Award;
