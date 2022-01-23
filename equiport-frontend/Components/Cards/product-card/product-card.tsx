import Image from "next/image";
import AddToCartButton from "../../Buttons/AddToCartButton/AddToCartButton";
import QuantityButton from "../../Buttons/QuantityButton/QuantityButton";

export interface IProductCardProps {
  name: string;
  description: string;
  variants: any[];
  backgroundImage: string;
  onClick: () => void;
}

export default function ProductCard(props: IProductCardProps) {
  const { name, description, variants, backgroundImage } = props;
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div className="product-card" onClick={() => handleClick()}>
      <div className="product-card__image-placeholder" />
      <div className="product-card__">
        <div className="product-card__name">{name}</div>
        <div className="product-card__description">{description}</div>
        <QuantityButton />
        <AddToCartButton />
      </div>
    </div>
  );
}
