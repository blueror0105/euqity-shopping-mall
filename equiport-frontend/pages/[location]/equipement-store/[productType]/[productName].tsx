import React from "react";
import ProductImages from "../../../../Components/Products/ProductImages/ProductImages";
import { useRouter } from "next/router";
import AddToCartButton from "../../../../Components/Buttons/AddToCartButton/AddToCartButton";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  const router = useRouter();
  const { productName } = router.query;
  return (
    <div className="product-page">
      <section className="product-page__image-section">
        <ProductImages />
      </section>
      <section className="product-page__description-section">
        <div className="product-page__product-name">{productName}</div>
        <div className="product-page__rating-wrap">
          <div className="product-page__rating"></div>
          <div className="product-page__question"></div>
        </div>
        <div className="product-page__product-price">5.99$</div>
        <div className="product-page__in-stock">in stock</div>
        <div className="product-page__code">SKU TMG SUCKADICK</div>
        <div className="product-page__quantity">
          <p>Quantity</p>
          <AddToCartButton />
        </div>
        <div>Product Description</div>
        <div>DESCRiPTION OF MY SUCKA DIUCK SNDIFNSIUDBFIUSB</div>
      </section>
      <div>you may also like section</div>
      <div>You recently</div>
    </div>
  );
}
