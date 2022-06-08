import * as React from "react";

export interface IDropdowntStoreProps {
  isOpen: boolean;
}

export default function DropdowntStore(props: IDropdowntStoreProps) {
  const { isOpen } = props;
  const categories = [
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
  const subCategories = [
    { title: "Iron Fences", subtitle: ["flat-top", "peak-top"] },
  ];
  return (
    <div className={isOpen ? "dropdown-store" : "hidden"}>
      <div className="dropdown-store__store-categories">
        {categories.map(item => {
          <div className="dropdown-store__categories"></div>;
        })}
      </div>
      <div className="dropdown-store__sub-categories">
        {subCategories.map(item => {
          if (Object.keys(item)[0] === "title") {
            return <h1>item</h1>;
          } else if (Object.keys(item)[0] === "subtitle") {
            return <p>item</p>;
          }
        })}
      </div>
    </div>
  );
}
