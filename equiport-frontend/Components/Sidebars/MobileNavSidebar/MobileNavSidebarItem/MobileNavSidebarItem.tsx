import * as React from "react";

export interface IMobileNavSidebarItemProps {
  children: any;
  icon?: any;
}

export default function MobileNavSidebarItem(
  props: IMobileNavSidebarItemProps,
) {
  const { children, icon } = props;
  return (
    <div className="side-bar-item">
      <div className="side-bar-item__text">{children}</div>
      <div className="side-bar-item__icon">{icon}</div>
    </div>
  );
}
