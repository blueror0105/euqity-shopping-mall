import React, { useState } from "react";
import Slider from "react-slick";

export interface IProductImagesProps {
  images: string[];
}

export default function ProductImages(props: IProductImagesProps) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="product-images">
      <div className="product-images__selected">{currentImage}</div>
      <Slider {...settings}>
        <div className="product-images__slide">
          <div
            onClick={() => setCurrentImage(1)}
            className="product-images__dummy"
          >
            1
          </div>
        </div>
        <div className="product-images__slide">
          <div
            onClick={() => setCurrentImage(2)}
            className="product-images__dummy"
          >
            2
          </div>
        </div>
        <div className="product-images__slide">
          <div
            onClick={() => setCurrentImage(3)}
            className="product-images__dummy"
          >
            3
          </div>
        </div>
        <div className="product-images__slide">
          <div
            onClick={() => setCurrentImage(4)}
            className="product-images__dummy"
          >
            4
          </div>
        </div>
      </Slider>
    </div>
  );
}
