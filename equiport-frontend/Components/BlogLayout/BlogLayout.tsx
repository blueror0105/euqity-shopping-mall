import * as React from "react";
import NormalLayout from "./NormalLayout/NormalLayout";
import LeftGridLayout from "./LeftGridLayout/LeftGridLayout";

export interface IBlogLayoutProps {
  BlogLayout: string;
}

export default function BlogLayout(props: IBlogLayoutProps) {
  const { BlogLayout } = props;
  switch (BlogLayout) {
    case "normal":
      return <NormalLayout />;
    case "leftgrid":
      return <LeftGridLayout />;
    default:
      return <></>;
  }
}
