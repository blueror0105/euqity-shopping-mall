import React from "react";
import ProductCard from "../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  const router = useRouter();
  const { productType } = router.query;
  const products = ["example", "example", "example", "example"];
  return (
    <div className="product-type">
      <div className="product-type__title">Our inventory of {productType}</div>
      <div className="product-type__product-wrapper">
        {products.map(item => {
          const name = item;
          return <ProductCard key={name} title={name} />;
        })}
      </div>
    </div>
  );
}
