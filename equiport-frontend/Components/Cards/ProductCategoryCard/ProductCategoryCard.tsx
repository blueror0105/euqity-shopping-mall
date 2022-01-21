import * as React from "react";

export interface IProductTypeCardProps {
  name: string;
  backgroundImage: string;
}

export default function ProductTypeCard(props: IProductTypeCardProps) {
  const { name, backgroundImage } = props;
  return (
    <div
      className="product-type-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="product-type-card__title">{name}</div>
    </div>
  );
}
