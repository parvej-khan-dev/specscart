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
      <section className="h-[100%] relative  bg-gradient-to-r from-[#32074a] to-[#5f336f] m-2 p-2">
        <div>
          <h3
            className="bg-[#08b1a2] text-[14px] text-white text-left p-1 my-1 
          rounded-md w-[100px] "
          >
            Free Coatings
          </h3>
          <img
            src={require("./Test Folder/Image 30.png")}
            className="z-[revert-layer] w-[69px] absolute right-5 top-[1px]"
          />
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

      {/* 24 hourse dispatch fuction  */}
      <section
        className="h-[100%] relative  bg-gradient-to-r from-[#5f336f] to-[#5f336f] 
      m-2 p-5"
      >
        <div>
          <h3
            className="text-[12px] text-white text-left my-1 
          "
          >
            24H Dispatch
          </h3>
          <p className="text-white text-[10px] text-left">
            Free Shipping Across the Globe!
          </p>
        </div>
        <img
          src={require("./Test Folder/Group 6249.png")}
          className="z-[revert-layer] w-[69px] absolute right-5 top-[12px]"
        />
      </section>
      <section className="shop-button">
        <button class="bg-[#08b1a2] text-white font-bold py-2 px-8 my-4 rounded-l-lg mx-2">
          Shop Men
        </button>
        <button class="bg-[#08b1a2] text-white font-bold py-2 px-8 my-4 rounded-r-lg">
          Shop Women
        </button>
        <h2 className="text-[20px] font-bold my-2 text-slate-700 ">
          Your eyes are splendid.
        </h2>
        <h2 className="text-[20px] font-bold  text-slate-700 ">
          Let people see them clearly.
        </h2>
        <p className="mx-3 text-[12px] text-slate-500 py-2 text-center">
          We know how frustrating glasses glare can be. Anti-reflective or
          anti-glare coating prevents glare on your lenses - letting almost all
          light through. Not only do anti-reflective glasses help in computer
          use and driving at night, they also allow other people to see you
          clearly. You don’t need to tilt your head at awkward angles while
          getting photographed, either! Since more light reaches your eyes,
          you’ll also notice an improvement in your vision. And the best part?
          Anti-glare, anti-scratch, and anti-UV coatings are all free of cost at
          Specscart!
        </p>
      </section>

      {/* image blurey section */}
      <section className="flex m-5 ">
        <img
          src={require("./Test Folder/blurcar.png")}
          className="w-[160px] "
        />
        <img
          src={require("./Test Folder/clearcar.png")}
          className="w-[160px] "
        />
      </section>
    </div>
  );
};

export default AfterHero;
