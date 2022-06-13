import * as React from "react";
import ListCategories from "../../../Lists/ListCategories/ListCategories";
import Slider from "react-slick";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
} from "../../../Carousels/ArrowsIndex/ArrowsIndex";

export interface IIndexLandingProps {}

export default function IndexLanding(props: IIndexLandingProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  const landingSlides = [
    { url: "http://via.placeholder.com/300", alt: "first-image" },
    { url: "http://via.placeholder.com/300", alt: "second-image" },
    { url: "http://via.placeholder.com/300", alt: "first-image" },
  ];

  const LandingSlides = () => {
    return landingSlides.map(item => {
      return (
        <div key={item.alt} className="landing-slide">
          <Image
            layout={"responsive"}
            width={"690"}
            height={"400"}
            src={item.url}
            alt={item.alt}
          />
        </div>
      );
    });
  };

  const LandingSlider = () => {
    return (
      <div className="landing-slider">
        <Slider {...settings}>{LandingSlides()}</Slider>
      </div>
    );
  };

  return (
    <section>
      <div className="index-landing">
        <ListCategories />
        <LandingSlider />
      </div>
    </section>
  );
}
