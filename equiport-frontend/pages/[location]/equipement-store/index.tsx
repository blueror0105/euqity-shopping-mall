import * as React from "react";
import ProductCard from "../../../Components/Cards/product-card/product-card";
import ProductTypeCard from "../../../Components/Cards/ProductCategoryCard/ProductCategoryCard";
import CategorySelect from "../../../Components/Selects/CategorySelect/CategorySelect";
import { useRouter } from "next/router";

export interface IEquipementStoreProps {}

export default function EquipementStore(props: IEquipementStoreProps) {
  const router = useRouter();
  const { location } = router.query;
  const InventoryBasedInMontreal = {
    type: "",
  };
  const productTypes = [
    "boxes",
    "gardens",
    "help mom i love her",
    "i am just a small man",
  ];
  const ProductsFromMontreal = ["example", "example", "example", "example"];
  return (
    <div className="equipement-store">
      Our inventory in {location}
      <div className="equipement-store__categories-and-items">
        {productTypes.map(item => {
          return <ProductTypeCard key={item} productType={item} />;
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
