import React from "react";

const AfterHero = () => {
  return (
    <div>
      <h2 className="text-[20px] font-bold my-8  ">
        4 frames, 3 lenses, 7 days - direct to your home
      </h2>
      <p className="px-4 text-center">
        We get it - sometimes you need to hold the glasses in your hand (or take
        a selfie wearing them) to know if they’re made for you or not. With our
        Free Home Trial, get 4 frames of your choice at your home, along with 3
        cool lenses.
      </p>
      <section
        className=" bg-[url('https://i.ibb.co/zPW9Jh1/7.jpg')] 
        h-[100%] bg-no-repeat bg-cover bg-center  m-2 my-5 mt-8  rounded-t-lg "
      >
        <div className="  top-3 left-5 text-left ml-2 pt-2 ">
          <h3 className="text-white text-[16px]">Anti Reflective Glasses</h3>
          <p className="text-blue-200 text-[12px]">At No Added Cost</p>
        </div>
        <div className="mt-20 text-white py-5 underline text-left ">
          <button className="mx-3 underline">Shop Men</button>
          <button className="underline">Shop Women</button>
        </div>
      </section>

      {/* free coting section  */}
      <section className="h-[100%] bg-gradient-to-r from-[#32074a] to-[#5f336f] m-2 p-2">
        <div>
          <h3
            className="bg-[#08b1a2] text-[14px] text-white text-left p-1 my-1 
          rounded-md w-[100px] "
          >
            Free Coatings
          </h3>
        </div>
        <div className="flex justify-around ml-[-5px] text-left my-5">
          <img
            src={require("./Test Folder/Group 5544.png")}
            className="w-3 h-3 text-left"
          />
          <span className="mr-[10px] text-left text-white text-[8px] ">
            Anti Dust
          </span>
          <img
            src={require("./Test Folder/Group 5556.png")}
            className="w-3 h-3 text-left"
          />
          <span className="mr-[10px] text-left text-white text-[8px] ">
            Impact Resistance{" "}
          </span>
          <img
            src={require("./Test Folder/Group 5636.png")}
            className="w-3 h-3 text-left"
          />
          <span className="mr-[10px] text-left text-white text-[8px] ">
            Anti-Scratch
          </span>
          <img
            src={require("./Test Folder/Group 5547.png")}
            className="w-3 h-3 text-left"
          />
          <span className="mr-[10px] text-left text-white text-[8px] ">
            Anti-Glare{" "}
          </span>
        </div>
      </section>
    </div>
  );
};

export default AfterHero;
