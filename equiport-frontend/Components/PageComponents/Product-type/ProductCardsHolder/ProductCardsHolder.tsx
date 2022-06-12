import * as React from "react";
import ProductCard from "../../../Cards/product-card/product-card";
import { useRouter } from "next/router";

export interface IProductCardsHolderProps {}

export default function ProductCardsHolder(props: IProductCardsHolderProps) {
  const router = useRouter();
  const { productType } = router.query;
  const products = [
    {
      name: "skid-steer",
      price: "3000",
      description: "lorem ipsum lorem ipsum",
      image: "dummyImage",
    },
  ];
  return (
    <div className="product-card-holder">
      {products.map((item: any) => {
        return (
          <ProductCard
            key={item.title}
            name={item.title}
            description={item.description}
            backgroundImage={item.images[0].src}
            onClick={() =>
              router.push(
                `/montreal/equipement-store/${productType}/${item.title}`,
              )
            }
          />
        );
      })}
    </div>
  );
}
