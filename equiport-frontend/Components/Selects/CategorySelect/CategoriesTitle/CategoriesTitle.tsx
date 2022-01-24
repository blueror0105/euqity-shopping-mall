import * as React from "react";

export interface ICategoryTitleProps {
  children: any;
}

export default function CategoryTitle(props: ICategoryTitleProps) {
  const { children } = props;
  return <div className="category-title">{children}</div>;
}
