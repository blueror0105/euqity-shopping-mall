import React from "react";
import ProductCard from "../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  const router = useRouter();
  const { productName } = router.query;
  return (
    <div>
      <div>our selection of {productName}</div>
    </div>
  );
}
