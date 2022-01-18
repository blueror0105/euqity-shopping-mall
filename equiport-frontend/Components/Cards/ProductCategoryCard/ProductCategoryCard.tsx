import * as React from "react";

export interface IProductTypeCardProps {
  productType: string;
  // productTypeBackgroundImage: string;
}

export default function ProductTypeCard(props: IProductTypeCardProps) {
  const { productType } = props;
  return (
    <div
      className="product-type-card"
      // style={{ backgroundImage: `url(${productTypeBackgroundImage})` }}
    >
      <div className="product-type-card__title">{productType}</div>
    </div>
  );
}
