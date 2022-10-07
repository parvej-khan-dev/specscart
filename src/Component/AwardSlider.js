import "../App.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

export default class AwardSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={2} dotWidth={30} />;
      },
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={require("./Test Folder/slider2.png")} />
        </div>
        <div>
          <img src={require("./Test Folder/slider1.png")} />
        </div>
      </Slider>
    );
  }
}
