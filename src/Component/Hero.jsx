import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="font-['Roboto] bg-[#f7f8fa] ">
        {/* <div className="my-5 relative background-image: url(./Test Folder/Banner.jpg)">
          <img
            src={require("./Test Folder/Image 39.png")}
            className="spec-book w-50 p-10 absolute left-[1.5rem]  z-1"
          />
          <img
            src={require("./Test Folder/Image 35.png")}
            className="pan-specs w-[230px] p-10 absolute left-[-52px] botton-5  "
          />
          <img
            src={require("./Test Folder/Group 6248.png")}
            className=" w-[230px] top-[138px]  left-[42px]  absolute"
          />
        </div> */}
      </div>
      <div className="text-hero p-10 bg-[#f7f8fa]">
        <h3 className="my-2 font-semibold">Try at Home 2.0</h3>
        <h2 className="text-[20px] font-bold my-2 ">It’s An Experience!</h2>
        <h2 className="text-[20px] font-bold ">
          Four Frames. Three Lenses. 1Laser
        </h2>
        <button class="bg-[#08b1a2] text-white font-bold py-1 px-8 my-4 rounded-full">
          Try Now
        </button>

        <div className="video mx-auto">
          <AiFillPlayCircle className="text-center text-3xl text-[#08b1a2] rounded-lg m-auto shadow-[0_30px_70px_rgba(8,_177,_162,_0.8)]" />
          <p className="my-2 ">Watch Whats New!</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
