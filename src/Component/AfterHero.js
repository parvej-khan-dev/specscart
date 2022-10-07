import React from "react";

const AfterHero = () => {
  return (
    <div>
      <h2 className="text-[20px] font-bold mt-8  md:mb-4 text-slate-700 lg:text-4xl ">
        4 frames, 3 lenses, 7 days - direct to your home
      </h2>
      <p className="px-4 text-center text-slate-500 md:px-20 md:text-xl md:mb-10 ">
        We get it - sometimes you need to hold the glasses in your hand (or take
        a selfie wearing them) to know if they’re made for you or not. With our
        Free Home Trial, get 4 frames of your choice at your home, along with 3
        cool lenses.
      </p>
      <div className="lg:grid lg:grid-cols-5 lg:items-center lg:mx-12 ">
        <section
          className=" bg-[url('https://i.ibb.co/zPW9Jh1/7.jpg')] 
        h-[100%] bg-no-repeat bg-cover bg-center  m-2 lg:m-0 my-5
          lg:my-2 mt-8 lg:p-5  rounded-t-lg lg:col-span-3 "
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
        <section className="h-[100%] lg:rounded relative  lg:col-span-1 bg-gradient-to-r from-[#32074a] to-[#5f336f] m-2 lg:m-0 p-2">
          <div>
            <h3
              className="lg:text-xl text-[14px] text-white text-left p-1 my-1 
          rounded-md w-[100px] lg:w-[150px] "
            >
              Free Coatings
            </h3>
            <img
              src={require("./Test Folder/Image 30.png")}
              className="z-[revert-layer] w-[69px] absolute right-5 top-[1px]"
            />
          </div>
          <div className="flex lg:block justify-around ml-[-5px] text-left my-5 md:p-2 ">
            <div className="lg:flex lg:justify-start lg:items-center lg:mb-2">
              <img
                src={require("./Test Folder/Group 5544.png")}
                className="w-3 h-3 lg:w-6 lg:h-6 text-left"
              />
              <span className="mr-[10px] lg:mx-2 text-left text-white text-[8px] lg:text-[12px] lg:text-[12px]">
                Anti Dust
              </span>
            </div>
            <div className="lg:flex lg:justify-start lg:items-center lg:mb-2 ">
              <img
                src={require("./Test Folder/Group 5556.png")}
                className="w-3 h-3 lg:w-6 lg:h-6 text-left"
              />
              <span className="mr-[10px] lg:mx-2 text-left text-white text-[8px] lg:text-[12px]">
                Impact Resistance{" "}
              </span>
            </div>

            <div className="lg:flex lg:justify-start lg:items-center lg:mb-2 ">
              <img
                src={require("./Test Folder/Group 5636.png")}
                className="w-3 h-3 lg:w-6 lg:h-6 text-left"
              />
              <span className="mr-[10px] text-left lg:mx-2 text-white text-[8px] lg:text-[12px] lg:mb-2 ">
                Anti-Scratch
              </span>
            </div>

            <div className="lg:flex lg:justify-start lg:my-2 lg:items-center lg:mb-2 ">
              <img
                src={require("./Test Folder/Group 5547.png")}
                className="w-3 h-3 text-left lg:w-6 lg:h-6"
              />
              <span className="mr-[10px]  lg:mx-2 text-left text-white text-[8px] lg:text-[12px] ">
                Anti-Glare{" "}
              </span>
            </div>
          </div>
        </section>

        {/* 24 hourse dispatch fuction  */}
        <section
          className="h-[100%] relative  bg-gradient-to-r from-[#5f336f] to-[#5f336f] 
      m-2 lg:m-1 p-5"
        >
          <div>
            <h3
              className="lg:text-xl text-[14px] text-white text-left p-1 my-1 
          rounded-md w-[100px] lg:w-[150px] 
          "
            >
              24H Dispatch
            </h3>
            <p className="text-white text-[10px] text-left lg:text-[12px] lg:w-[120px]">
              Free Shipping Across the Globe!
            </p>
          </div>
          <img
            src={require("./Test Folder/Group 6249.png")}
            className="z-[revert-layer] w-[69px] absolute right-5 top-[12px]"
          />
        </section>
      </div>
      <section className="shop-button">
        <button class="bg-[#08b1a2] text-white font-bold py-2 px-8 my-4 rounded-l-lg mx-2">
          Shop Men
        </button>
        <button class="bg-[#08b1a2] text-white font-bold py-2 px-8 my-4 rounded-r-lg">
          Shop Women
        </button>
        <h2 className="text-[20px] font-bold my-2 text-slate-700 lg:text-3xl lg:mt-10 ">
          Your eyes are splendid. Let people see them clearly.
        </h2>

        <p className="mx-3 text-[12px] text-slate-500 py-2 text-center lg:text-xl lg:mx-10 lg:my-5">
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
      <section className="flex m-5 lg:justify-center ">
        <img
          src={require("./Test Folder/blurcar.png")}
          className="w-[160px]  lg:w-[360px]"
        />
        <img
          src={require("./Test Folder/clearcar.png")}
          className="w-[160px]  lg:w-[360px]"
        />
      </section>
    </div>
  );
};

export default AfterHero;
