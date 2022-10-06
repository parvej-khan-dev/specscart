import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="bg-white  sm:px-4  drop-shadow-lg ">
      <div className="container flex  justify-around items-center mx-auto">
        <a href="#" className="flex items-center">
          <AiOutlineMenu className="w-[58px] h-[30px] text-[#321940] mx-1" />
          <img
            src={require("./Test Folder/logo.png")}
            className="mr-[2.5rem] h-[40px] w-[50px]sm:h-9 "
            alt="specscart Logo"
          />
        </a>
        {/* iocn nav */}
        <div className="left-nav flex flex-column justify-around  p-2">
          <img
            src={require("./Test Folder/acount.png")}
            className="mr-3 h-[24px] w-[30px ]sm:h-9  mx-2"
            alt="specscart Logo"
          />{" "}
          <img
            src={require("./Test Folder/heart.png")}
            className="mr-3 h-[24px] w-[30px ]sm:h-9 mx-2"
            alt="specscart Logo"
          />{" "}
          <img
            src={require("./Test Folder/Group 2967.png")}
            className="mr-3 h-[24px] w-[30px ]sm:h-9 mx-2"
            alt="specscart Logo"
          />{" "}
          <img
            src={require("./Test Folder/Cart.png")}
            className="mr-3 h-[24px] w-[30px ]sm:h-9 mx-2"
            alt="specscart Logo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
