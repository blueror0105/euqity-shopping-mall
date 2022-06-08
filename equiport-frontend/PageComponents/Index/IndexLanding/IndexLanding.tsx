import * as React from "react";
import ListCategories from "../../../Components/Lists/ListCategories/ListCategories";
import Slider from "react-slick";
import Image from "next/image";

export interface IIndexLandingProps {}

export default function IndexLanding(props: IIndexLandingProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const landingSlides = [
    { url: "https://via.placeholder.com/300", alt: "first-image" },
    { url: "https://via.placeholder.com/300", alt: "second-image" },
    { url: "https://via.placeholder.com/300", alt: "first-image" },
  ];

  const LandingSlides = () => {
    return landingSlides.map(item => {
      return (
        <Image layout="fill" key={item.alt} src={item.url} alt={item.alt} />
      );
    });
  };

  const LandingSlider = () => {
    return (
      <div className="landing-slider">
        <Slider {...settings}>{LandingSlides}</Slider>
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
