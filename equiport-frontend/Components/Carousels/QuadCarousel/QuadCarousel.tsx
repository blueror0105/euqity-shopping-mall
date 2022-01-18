import * as React from "react";
import Slider from "react-slick";

export interface IQuadCarouselProps {}

export default function QuadCarousel(props: IQuadCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="quad-carousel">
      <div className="quad-carousel__left-section">
        <Slider {...settings}>
          <div>
            <img src={"https://via.placeholder.com/300"} />
          </div>
          <div>
            <img src={"https://via.placeholder.com/300"} />
          </div>
          <div>
            <img src={"https://via.placeholder.com/300"} />
          </div>
        </Slider>
      </div>
      <div className="quad-carousel__right-section">
        <div className="quad-carousel__second-slider">
          <Slider {...settings}>
            <div>
              <img src={"https://via.placeholder.com/300"} />
            </div>
            <div>
              <img src={"https://via.placeholder.com/300"} />
            </div>
            <div>
              <img src={"https://via.placeholder.com/300"} />
            </div>
          </Slider>
        </div>
        <div className="quad-carousel__images">
          <div className="quad-carousel__third-image">
            <div className="third-image"></div>
          </div>
          <div className="quad-carousel__fourth-image">
            <div className="fourth-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
