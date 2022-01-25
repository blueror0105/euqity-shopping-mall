import * as React from "react";
import AddToCartButton from "../../Buttons/AddToCartButton/AddToCartButton";

export interface IAddToCartSectionProps {
  productName: string | string[] | undefined;
}

export default function AddToCartSection(props: IAddToCartSectionProps) {
  const { productName } = props;
  return (
    <div className="add-to-cart">
      <div className="add-to-cart__product-name">{productName}</div>
      <div className="add-to-cart__rating-wrap">
        <div className="add-to-cart__rating">5 starts</div> |
        <div className="add-to-cart__question">Ask a question</div>
      </div>
      <div className="add-to-cart__product-price">5000.99$</div>
      <div className="add-to-cart__code">SKU TMG</div>
      <div className="add-to-cart__quantity">
        <div className="add-to-cart__in-stock">in stock: 5</div>
        <div>
          <p>Quantity</p>
        </div>
      </div>
      <AddToCartButton />
    </div>
  );
}
