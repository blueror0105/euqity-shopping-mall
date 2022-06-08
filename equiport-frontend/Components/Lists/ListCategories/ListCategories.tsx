import * as React from "react";
import Link from "next/link";

export interface IListCategoriesProps {}

export default function ListCategories(props: IListCategoriesProps) {
  const categoriesHolder = [
    "Fences",
    "workbench",
    "metal shelter",
    "party tent",
    "sawhorse",
    "landing-slider",
    "party tent",
    "sawhorse",
    "landing-slider",
  ];
  return (
    <div className="list-categories">
      {categoriesHolder.map(categories => {
        return (
          <div className="list-categories__single-categories" key={categories}>
            {categories}
          </div>
        );
      })}
    </div>
  );
}
