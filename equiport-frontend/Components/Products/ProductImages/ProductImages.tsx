import React, { useState } from "react";
import Slider from "react-slick";

export interface IProductImagesProps {
  images: string[];
}

export default function ProductImages(props: IProductImagesProps) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClick = (selectedImage: any) => {
    setCurrentImage(selectedImage);
  };
  return (
    <div>
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
  );
}
