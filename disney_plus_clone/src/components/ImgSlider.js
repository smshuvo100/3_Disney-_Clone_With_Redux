import React from "react";
import "../styleComponents/ImgSlider.css";
/* https://www.npmjs.com/package/react-slick */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="imgSlider">
      <Slider {...settings} className="imgSlider__carousel">
        <div className="imgSlider__wrap">
          <div href="/">
            <img src="/images/slider-scale.jpg" alt="" />
          </div>
        </div>

        <div className="imgSlider__wrap">
          <div>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
        </div>

        <div className="imgSlider__wrap">
          <div href="/">
            <img src="/images/slider-badag.jpg" alt="" />
          </div>
        </div>

        <div className="imgSlider__wrap">
          <div href="/">
            <img src="/images/slider-scales.jpg" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;
