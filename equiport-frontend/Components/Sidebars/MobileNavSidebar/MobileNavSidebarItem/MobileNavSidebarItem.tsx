import * as React from "react";

export interface IMobileNavSidebarItemProps {
  children: any;
}

export default function MobileNavSidebarItem(
  props: IMobileNavSidebarItemProps,
) {
  const { children } = props;
  return <div className="side-bar-item">{children}</div>;
}
