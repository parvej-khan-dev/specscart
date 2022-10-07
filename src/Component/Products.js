import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <h2 className="text-[18px] text-slate-600 font-bold mx-2">
        {" "}
        Lorem Ipsum Dolor Sit Amet, Consectetur.
      </h2>
      <section
        className="gallary bg-[url('https://i.ibb.co/F81WnR2/Parallax-Background.jpg')] 
      h-[100%] bg-no-repeat bg-cover bg-center  m-2 my-5 mt-8 flex justify-around "
      >
        <img src={require("./Test Folder/Desk4.jpg")} className="w-[150px]  " />
        <img src={require("./Test Folder/G1.jpg")} className="w-[150px] " />
      </section>
      <p className="px-4 text-center text-[12px] mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices..
      </p>
      <Product />
      <Product />
    </div>
  );
};

export default Products;
