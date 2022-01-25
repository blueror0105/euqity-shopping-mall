import * as React from "react";

export interface IProductTypeCardProps {
  name: string;
  backgroundImage?: string;
  onClick: () => void;
}

export default function ProductTypeCard(props: IProductTypeCardProps) {
  const { name, backgroundImage } = props;
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div
      className="product-type-card"
      style={{
        backgroundColor: "gray",
        /* backgroundImage: `url(${backgroundImage})`*/
      }}
      onClick={() => handleClick()}
    >
      <div className="product-type-card__title">{name}</div>
    </div>
  );
}
