import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

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
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="h-60 bg-indigo-300">
            <div className="flex items-center h-full justify-center">
              <h1>{index + 1}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SliderTest;
