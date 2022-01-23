import React from "react";
import ProductImages from "../../../../Components/Products/ProductImages/ProductImages";
import AddToCartSection from "../../../../Components/Products/AddToCartSection/AddToCartSection";
import { useRouter } from "next/router";
import AddToCartButton from "../../../../Components/Buttons/AddToCartButton/AddToCartButton";
import DescriptionProduct from "../../../../Components/Products/DescriptionProduct/DescriptionProduct";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  const router = useRouter();
  const { productName } = router.query;
  return (
    <div className="product-page">
      <section className="product-page__image-section">
        <ProductImages images={["null", "null"]} />
      </section>
      <section className="product-page__description-section">
        <AddToCartSection productName={productName} />
        <DescriptionProduct />
      </section>
      {/* <div>Product Description</div>
      <div>DESCRiPTION OF MY SUCKA DIUCK SNDIFNSIUDBFIUSB</div> */}
      {/* <div>you may also like section</div>
      <div>You recently</div> */}
    </div>
  );
}
