import * as React from "react";
import AddToCartButton from "../../Buttons/AddToCartButton/AddToCartButton";

export interface IAddToCartSectionProps {
  title: string;
  price: number;
  reviews: number;
}

export default function AddToCartSection(props: IAddToCartSectionProps) {
  const { title, price } = props;
  return (
    <div className="add-to-cart">
      <h1>{title}</h1>
      <div>{price} CAD</div>
      <div>In Stock| Can be shipped</div>
      <div>SKU TMG-HPC60</div>

      <AddToCartButton />
    </div>
  );
}
