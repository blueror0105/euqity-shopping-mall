import React, { useEffect, useState } from "react";
import ProductCard from "../../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Store/redux/store";
import ProductInfo from "../../../../../Components/PageComponents/ProductName/ProductInfo/ProductInfo";
import ProductQandA from "../../../../../Components/PageComponents/ProductName/ProductQandA/ProductQandA";
import ReviewSection from "../../../../../Components/PageComponents/ProductName/ReviewSection/ReviewSection";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  // const router = useRouter();
  // const [products, setProducts] = useState([]);
  // const { productType } = router.query;
  // const allCategoriesAndProducts = useSelector(
  //   (state: RootState) => state.products.categoriesAndProductsStore,
  // );

  return (
    <div className="product-page">
      <div className="product-page__image">
        <Image />
      </div>
      <>
        <div>
          <h1 className="product-page__title"> Title for the product</h1>
          <div className="product-page__HS-Code">HST title</div>
          <div className="product-page__ratings">5</div>
        </div>
        <div className="product-page__product-select">{/**/}</div>
      </>
      <div className="product-page__add-to-cart">
        <div>increase quantity</div>
        <div>quantity select</div>
        <button>add to cart</button>
      </div>
      <ProductInfo />
      <ProductQandA />
      <ReviewSection />
    </div>
  );
}
