import * as React from "react";
import CategoriesTab from "./CategoriesTab/CategoriesTab";
import CategoryTitle from "./CategoriesTitle/CategoriesTitle";

export interface ICategorySelectProps {}

export default function CategorySelect(props: ICategorySelectProps) {
  const categories = [
    {
      title: "shelter",
      products: ["40ft60ft74b", "60ft40gh40db", "60ft40gh40db"],
    },
    {
      title: "toolbox",
      products: ["40ft60ft74b", "60ft40gh40db", "60ft40gh40db"],
    },
  ];
  return (
    <div className="category-select">
      <div className="category-select__wrap">
        <h1 className="category-select__title">Categories</h1>
      </div>
      {categories.map(item => {
        if (item.title.length > 0) {
          return <CategoryTitle>{item.title}</CategoryTitle>;
        }
        item.products.map(products => {
          return <CategoriesTab key={products}>{products}</CategoriesTab>;
        });
      })}
    </div>
  );
}
