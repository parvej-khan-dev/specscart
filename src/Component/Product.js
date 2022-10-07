import React from "react";
import { HiOutlineHeart } from "react-icons/hi";

const Product = () => {
  return (
    <div className="my-10 relative lg:m-10">
      <HiOutlineHeart className="text-left absolute top-1 text-slate-600  right-4 text-2xl" />
      <img
        src={require("./Test Folder/Glass1.jpg")}
        className="pt-5 lg:w-[350px]"
      />
      <ul class="flex items-center justify-center">
        {/* <!-- Note that we have one <li> for each image in our gallery --></li> */}
        <li class="h-4 w-4 rounded-full mx-1 cursor-pointer bg-black"></li>
        <li class="h-4 w-4 rounded-full mx-1 cursor-pointer bg-[#F1CA89] ring-2 ring-[#34D399] "></li>
        <li class="h-4 w-4 rounded-full mx-1 cursor-pointer bg-blue-500"></li>
        <li class="h-4 w-4 rounded-full mx-1 cursor-pointer bg-[#F8EDE3]"></li>
      </ul>

      <div className="flex justify-around mt-5 items-center mt-10 mx-10">
        <span className="text-[12px]  text-slate-500">Tom Archer</span>
        <span className="font-bold text-[18px] ">Darwen 1</span>
        <span className="text-[12px] text-slate-500">£39.99</span>
      </div>
      <button class="bg-[#F1F5F9] text-slate-600 text-[12px]  py-1  my-4 px-6 rounded-full">
        view
      </button>
      <button class="bg-[#14B8A6] text-white text-[12px]  py-1  px-6 my-6 mx-5 rounded-full">
        Try At Home
      </button>
    </div>
  );
};

export default Product;
