import React, { useEffect, useState } from "react";
import ProductCard from "../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/redux/store";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const { productType } = router.query;
  const allCategoriesAndProducts = useSelector(
    (state: RootState) => state.products.categoriesAndProductsStore,
  );

  useEffect(() => {
    allCategoriesAndProducts.forEach(item => {
      if (item.handle === productType) {
        setProducts(item.products);
      }
    });
  }, [allCategoriesAndProducts, productType]);

  return (
    <div className="product-type">
      <div className="product-type__title">Our inventory of {productType}</div>
      <div className="product-type__product-wrapper">
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
    </div>
  );
}
