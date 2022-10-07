import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      {/* <section
        className=" gallary bg-[url('https://i.ibb.co/F81WnR2/Parallax-Background.jpg')] 
      h-[100%] bg-no-repeat bg-cover bg-center    m-2 my-5 mt-8 flex justify-around "
      >
        <div className="lg:relative ">
          <h2 className="text-[18px] text-white  font-bold mx-2 lg:mt-10 ">
            {" "}
            Lorem Ipsum Dolor Sit Amet, Consectetur.
          </h2>
          <img
            src={require("./Test Folder/Desk4.jpg")}
            className="w-[150px] lg:w-[278px] lg:mt-[17px]  lg:absolute  "
          />
        </div>
        <div>
          <img
            src={require("./Test Folder/G1.jpg")}
            className="w-[150px]   lg:w-[300px]"
          />
        </div>
      </section>
      <p className="px-4 text-center text-[12px] mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices..
      </p> */}
      <div className="lg:flex lg:m-30 lg:justify-center lg:my-10">
        <Product />

        <Product />
      </div>
    </div>
  );
};

export default Products;
