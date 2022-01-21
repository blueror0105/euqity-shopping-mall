import * as React from "react";
import ProductCard from "../../../Components/Cards/product-card/product-card";
import ProductTypeCard from "../../../Components/Cards/ProductCategoryCard/ProductCategoryCard";
import productTypes from "../../../Store/hardcoded/product-types";
import CategorySelect from "../../../Components/Selects/CategorySelect/CategorySelect";
import { useRouter } from "next/router";

export interface IEquipementStoreProps {}

export default function EquipementStore(props: IEquipementStoreProps) {
  const router = useRouter();
  const { location } = router.query;
  const ProductsFromMontreal = ["example", "example", "example", "example"];
  console.log(productTypes);
  return (
    <div className="equipement-store">
      <div className="equipement-store__title">Our inventory in {location}</div>
      <div className="equipement-store__categories-and-items">
        {productTypes.map(item => {
          return (
            <ProductTypeCard
              name={item.name}
              key={item.name}
              backgroundImage={item.bacgroundImage}
            />
          );
        })}
      </div>
      <div className="equipement-store__products-cards">
        {ProductsFromMontreal.map(item => {
          return <ProductCard key={item} title={item} />;
        })}
      </div>
    </div>
  );
}
