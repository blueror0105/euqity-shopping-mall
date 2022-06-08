import * as React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/redux/store";
import LeftGridLayout from "../../../Components/BlogLayout/LeftGridLayout/LeftGridLayout";
import NormalLayout from "../../../Components/BlogLayout/NormalLayout/NormalLayout";

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
  return <div className="category-page"></div>;
}
