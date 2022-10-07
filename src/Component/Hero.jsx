import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="font-['Roboto] bg-[#f7f8fa]  lg:h-[80vh]">
        <div className="my-5 relative hidden md:block md:pr-20 ">
          <img
            src={require("./Test Folder/Image 39.png")}
            className=" w-[490px] absolute top-[92px] right-[13px]"
          />
          <img
            src={require("./Test Folder/Image 35.png")}
            className=" w-[310px] absolute top-[69px] right-[350px] "
          />
          <img
            src={require("./Test Folder/Group 6248.png")}
            className="w-[402px] absolute top-[232px] right-[158px] "
          />
        </div>
        <div className="text-hero p-10 bg-[#f7f8fa] lg:py-20 lg:pl-20 lg:my-10 ">
          <h3 className="my-2 font-semibold lg:text-left ">Try at Home 2.0</h3>
          <h2 className="text-[20px] font-bold my-2  md:text-left lg:text-3xl text-slate-700">
            It’s An Experience!
          </h2>
          <h2 className="text-[20px] font-bold md:text-left lg:text-3xl text-slate-700">
            Four Frames. Three Lenses. 1Laser
          </h2>

          <div className="video mx-auto lg:flex lg:justify-start lg:items-center">
            <button class="bg-[#08b1a2] text-white font-bold py-1 px-8 my-4 rounded-full ">
              Try Now
            </button>
            <AiFillPlayCircle className="text-center lg:text-left text-3xl text-[#08b1a2] rounded-lg lg:mx-2 mx-auto shadow-[0_30px_70px_rgba(8,_177,_162,_0.8)]" />
            <p className="my-2  ">Watch Whats New!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
