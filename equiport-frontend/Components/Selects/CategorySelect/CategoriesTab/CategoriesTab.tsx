import * as React from "react";

export interface ICategoriesTabProps {
  children: any;
}

export default function CategoriesTab(props: ICategoriesTabProps) {
  const { children } = props;
  return <div className="categories-tab">{children}</div>;
}
