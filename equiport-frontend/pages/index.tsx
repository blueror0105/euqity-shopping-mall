import { GetStaticPropsContext } from "next";
import QuadCarousel from "../Components/Carousels/QuadCarousel/QuadCarousel";
import ProductCard from "../Components/Cards/product-card/product-card";
import ProductTypeCard from "../Components/Cards/ProductCategoryCard/ProductCategoryCard";
import ReviewCard from "../Components/Cards/reviewCard/ReviewCard";
import ShopNowButton from "../Components/Buttons/ShopNowButton/ShopNowButton";
import productTypes from "../Store/hardcoded/product-types";
import review from "../Store/hardcoded/reviews";
import Slider from "react-slick";

export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <QuadCarousel />
      <section className="product-section">
        <h1 className="product-section__title">
          High quality industrial equipments delivered for your business needs
        </h1>
        <div className="product-section__subtitle">
          Over 50 time tested products for your choosing
        </div>
        <div className="product-section__card-wrapper">
          {productTypes.map(productType => {
            return (
              <ProductTypeCard key={productType} productType={productType} />
            );
          })}
        </div>
        <ShopNowButton />
      </section>
      <section className="characteristics-section">
        <div className="characteristics-section__wrap">
          <div className="characteristics-section__icons-descriptions">
            <span className="iconify" data-icon="majesticons:star-line"></span>
            4.9/5 Average Order Rating
          </div>
          <div className="characteristics-section__icons-descriptions">
            <span className="iconify" data-icon="majesticons:truck-line"></span>
            Reliable+On-Time Delivery
          </div>
          <div className="characteristics-section__icons-descriptions">
            <span
              className="iconify"
              data-icon="majesticons:thumb-up-line"
            ></span>
            Quality Guaranteed
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="reviews-section__left-section">
          <h1 className="reviews-section__title">
            Here is what our customers say about us for our service
          </h1>
        </div>
        <div className="reviews-section__right-section">
          <Slider {...settings}>
            {review.map(item => {
              return <ReviewCard key={item} />;
            })}
          </Slider>
        </div>
      </section>
      <section className="contact-section"></section>
      <section className="get-it-done">
        <div>Let’s Get Sh*t Done</div>
        <div>Every delivery saves you time and money</div>
      </section>
    </div>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  console.log("local:,", locale);
  return {
    props: {
      messages: require(`../Locales/${locale}.json`),
    },
  };
}
