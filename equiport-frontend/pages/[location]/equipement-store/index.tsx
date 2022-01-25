import * as React from "react";
import ProductCard from "../../../Components/Cards/product-card/product-card";
import ProductTypeCard from "../../../Components/Cards/ProductCategoryCard/ProductCategoryCard";
import productTypes from "../../../Store/hardcoded/product-types";
import CategorySelect from "../../../Components/Selects/CategorySelect/CategorySelect";
import { useRouter } from "next/router";
import hardcodedProduct from "../../../Store/hardcoded/hardcoded-products";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/redux/store";

export interface IEquipementStoreProps {}

export default function EquipementStore(props: IEquipementStoreProps) {
  const router = useRouter();
  const { location } = router.query;
  const products = useSelector(
    (state: RootState) => state.products.productStore,
  );
  const collection = useSelector(
    (state: RootState) => state.products.categoryStore,
  );
  console.log("products", products);
  return (
    <div className="equipement-store">
      <div className="equipement-store__title">Our inventory in {location}</div>
      <div className="equipement-store__categories-and-items">
        {collection.map(item => {
          if (item.image) {
            return (
              <ProductTypeCard
                name={item.handle}
                key={item.handle}
                backgroundImage={item.image.src}
                onClick={() =>
                  router.push(`/montreal/equipement-store/${item.handle}`)
                }
              />
            );
          }
        })}
      </div>
      <div className="equipement-store__select-product-wrap">
        <CategorySelect />
        <div className="equipement-store__products-cards">
          {products.map(item => {
            console.log("images:", item.images[0].src);
            return (
              <ProductCard
                onClick={() => {
                  /**GO TO PRODUCT PAGE */
                }}
                key={item.name}
                name={item.title}
                price={item.variants[0].price}
                backgroundImage={item.images[0].src}
                description={item.description}
                variants={item.variants}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
