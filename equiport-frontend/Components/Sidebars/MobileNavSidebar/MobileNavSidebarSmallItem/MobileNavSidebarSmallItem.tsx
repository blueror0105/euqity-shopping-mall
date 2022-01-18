import * as React from "react";

export interface IMobileNavSmallItemProps {
  children: any;
}

export default function MobileNavSmallItem(props: IMobileNavSmallItemProps) {
  const { children } = props;
  return <div className="smaller-item-nav">{children}</div>;
}
