import * as React from "react";

export interface IProductInfoProps {}

export default function ProductInfo(props: IProductInfoProps) {
  return (
    <>
      <div className="product-info">
        <div>Product Information</div>
        <div>Photo/Video Gallery</div>
        <div>Customer Review</div>
        <div>Product Q&A</div>
        <div>Accessories</div>
      </div>
    </>
  );
}
