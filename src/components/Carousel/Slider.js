/* eslint-disable @next/next/no-img-element */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import sliderData from "../../utils/sliderData";

function SliderTest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="max-w-6xl mx-auto my-8">
      <div className="" style={{}}>
        <Slider {...settings}>
          {sliderData.map((item, index) => {
            console.log(`url("${item}")`);
            return (
              <div key={index} className="h-64 relative">
                <img
                  src={item}
                  alt="logo"
                  className="object-contain absolute w-full"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default SliderTest;
