import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white  sm:px-4  drop-shadow-lg lg:hidden  ">
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
      {/* // desktop navbar */}
      <nav className="flex justify-center justify-between px-10 hidden md:flex">
        <div className="left p-2">
          <div className="submenu">
            <ul className="flex justify-between text-[10px]">
              <li className="mx-2">Free Return </li>|
              <li className="mx-2">Try At Home </li>|
              <li className="mx-2">24 Hr Dispatch </li>
            </ul>
          </div>
          <div className="main-menu text-[#5f336f] font-semibold  text-[14px] ">
            <ul className="flex justify-center items-center mt-2">
              <li className="mx-2">Glasses</li>
              <li className="mx-2">Sunglasses</li>
              <li className="mx-2">Eye-Test</li>
              <li className="mx-2">Blogs</li>
            </ul>
          </div>
        </div>
        <div className="center">
          <img
            src={require("./Test Folder/logo.png")}
            alt="logo"
            className="w-[200px]"
          />
        </div>
        <div className="right p-2">
          <div className="submenu">
            <ul className="flex justify-between text-[10px]">
              <li className="mx-2">+441613125767</li>|
              <li className="mx-2">Help </li>|<li className="mx-2">Log In</li>
            </ul>
          </div>
          <div className="left-nav flex flex-column justify-around mt-2 p-2">
            <img
              src={require("./Test Folder/Group 2964.png")}
              className="mr-3 h-[18px] w-[18px ]sm:h-9  mx-2"
              alt="specscart Logo"
            />{" "}
            <img
              src={require("./Test Folder/acount.png")}
              className="mr-3 h-[18px] w-[18px ]sm:h-9  mx-2"
              alt="specscart Logo"
            />{" "}
            <img
              src={require("./Test Folder/heart.png")}
              className="mr-3 h-[18px] w-[18px ]sm:h-9 mx-2"
              alt="specscart Logo"
            />{" "}
            <img
              src={require("./Test Folder/Group 2967.png")}
              className="mr-3 h-[18px] w-[18px ]sm:h-9 mx-2"
              alt="specscart Logo"
            />{" "}
            <img
              src={require("./Test Folder/Cart.png")}
              className="mr-3 h-[18px] w-[18px ]sm:h-9 mx-2"
              alt="specscart Logo"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
