import "../App.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default class Feed extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={20} />;
      },
    };

    return (
      <>
        <h2 className="text-[22px] lg:text-3xl text-center text-slate-700 font-bold mx-2  mt-10">
          Our Feed.
        </h2>
        <div className="lg:m-20">
          <Slider {...settings}>
            <div className="p-2 lg:p-1 mt-[-24px]">
              <img
                src={require("./Test Folder/slider4.png")}
                className="m-10 lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 mt-[-24px]">
              <img
                src={require("./Test Folder/feed2.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 mt-[-24px]">
              <img
                src={require("./Test Folder/slider3.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 my-[-24px]">
              <img
                src={require("./Test Folder/feed2.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 my-[-24px]">
              <img
                src={require("./Test Folder/slider3.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 my-[-24px]">
              <img
                src={require("./Test Folder/slider4.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
            <div className="p-2 lg:p-1 my-[-24px]">
              <img
                src={require("./Test Folder/slider5.png")}
                className="m-10  lg:w-[450px]"
              />
            </div>
          </Slider>
        </div>

        <button
          class="border-slate-700 border-2  text-slate-700 font-semibold 
        py-2 px-5 my-4 lg:mb-8 rounded-full mx-auto   flex justify-around items-center "
        >
          Follow @Specscartuk
          <div className="flex mx-2 justify-around ">
            <span className="mx-1">
              <FiInstagram />
            </span>
            <span className="mx-1">
              <FiFacebook />
            </span>
            <span className="mx-1">
              {" "}
              <FiTwitter />
            </span>
            <span className="mx-1">
              <FiYoutube />
            </span>
          </div>
        </button>
      </>
    );
  }
}
