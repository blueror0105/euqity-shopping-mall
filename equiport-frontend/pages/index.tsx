import { GetStaticPropsContext } from "next";
import QuadCarousel from "../Components/Carousels/QuadCarousel/QuadCarousel";
import ProductCard from "../Components/Cards/product-card/product-card";
import ProductTypeCard from "../Components/Cards/ProductCategoryCard/ProductCategoryCard";
import ReviewCard from "../Components/Cards/reviewCard/ReviewCard";
import ShopNowButton from "../Components/Buttons/ShopNowButton/ShopNowButton";
import TalkWithUsButton from "../Components/Buttons/TalkWithUsButton/TalkWithUsButton";
import productTypes from "../Store/hardcoded/product-types";
import review from "../Store/hardcoded/reviews";
import Image from "next/image";
import Slider from "react-slick";
import Reviews from "../Store/hardcoded/reviews";
import { ArrowRight, ArrowLeft } from "../Components/Carousels/Arrows/Arrows";
import deliveryImage from "../Assets/DummyImages/delivery.png";
import { client } from "../Services/Shopify.Service";
import { RootState } from "../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategories,
  setProducts,
  setCategoriesAndItem,
} from "../Store/redux/slices/productSlice";
import IndexLanding from "../Components/PageComponents/Index/IndexLanding/IndexLanding";
import DealsSection from "../Components/PageComponents/Index/DealsSection/DealsSection";
import WorkWithUsSection from "../Components/PageComponents/Index/WorkWithUsSection/WorkWithUsSection";

// appendDots: dots => (
//   <div
//     style={{
//       backgroundColor: "#ddd",
//       borderRadius: "10px",
//       padding: "10px"
//     }}
//   >
//     <ul style={{ margin: "0px" }}> {dots} </ul>
//   </div>
// )
// customPaging: i => (
//   <div
//     style={{
//       width: "30px",
//       color: "blue",
//       border: "1px blue solid"
//     }}
//   >
//     {i + 1}
//   </div>
// )

export default function Index(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.95,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  const getReviews = () => {
    return Reviews.map(item => {
      return (
        <ReviewCard
          imageSource={item.profileImage}
          review={item.review}
          name={item.name}
          key={item.name}
          compagnyName={item.compagny}
          purchase={item.purchase}
          date={item.date}
        />
      );
    });
  };
  const ReviewsSlides = getReviews();
  const dispatch = useDispatch();
  async function getProducts() {
    const products = await client.product.fetchAll();
    dispatch(setProducts(products));
    return products;
  }
  async function getCategories() {
    const collection = await client.collection.fetchAll();
    dispatch(setCategories(collection));
    return collection;
  }
  async function getCategoriesAndItems() {
    const collectionAndItems = await client.collection.fetchAllWithProducts();
    console.log("collectionAndItems:", collectionAndItems);
    dispatch(setCategoriesAndItem(collectionAndItems));
    return collectionAndItems;
  }

  getProducts();
  getCategories();
  getCategoriesAndItems();
  // console.log("collection", getCategories());

  // console.log("get products", getProducts());

  return (
    <div>
      <IndexLanding />
      <DealsSection />
      <section className="characteristics-section">
        <div className="characteristics-section__wrap">
          <div className="characteristics-section__icons-descriptions">
            <span
              className="iconify"
              data-icon="majesticons:star-line"
              data-width="30"
              data-height="30"
            ></span>
            4.9/5 Average Order Rating
          </div>
          <div className="characteristics-section__icons-descriptions">
            <span
              className="iconify"
              data-icon="majesticons:truck-line"
              data-width="30"
              data-height="30"
            ></span>
            Reliable+On-Time Delivery
          </div>
          <div className="characteristics-section__icons-descriptions">
            <span
              className="iconify"
              data-icon="majesticons:thumb-up-line"
              data-width="30"
              data-height="30"
            ></span>
            Quality Guaranteed
          </div>
        </div>
      </section>
      <section className="delivery-section">
        <div className="delivery-section__left">
          <div className="delivery-section__text">Need delivery help ?</div>
          <div className="delivery-section__sub-title">
            We offer pickup as well as delivery options
          </div>
          <pre className="delivery-section__description">
            {`Forklift for loading or onloading
Get bulk pricing with your larger orders
Access your dedicated account manager at all times`}
          </pre>
          <TalkWithUsButton />
        </div>
        <div className="delivery-section__right">
          <Image
            src={deliveryImage}
            width={"500"}
            height={"400"}
            alt={"delivery truck"}
          />
        </div>
      </section>
      <section className="reviews-section">
        <div className="reviews-section__reviews">
          <Slider {...settings}>{ReviewsSlides}</Slider>
        </div>
      </section>
      <section className="contact-section"></section>
      <section className="get-it-done">
        <div className="get-it-done__title">Let’s Get Sh*t Done</div>
        <div className="get-it-done__subtitle">
          Every delivery saves you time and money
        </div>
        <ShopNowButton />
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../Locales/${locale}.json`),
    },
  };
}
