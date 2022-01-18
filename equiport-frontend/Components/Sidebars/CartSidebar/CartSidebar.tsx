import * as React from "react";

export interface ICartSidebarProps {
  showCartSidebar: boolean;
  onClose: () => void;
}

export default function CartSidebar(props: ICartSidebarProps) {
  const { showCartSidebar } = props;
  const boughtProducts = ["example", "example", "example"];
  const handleCartClose = () => {
    props.onClose();
  };
  return (
    <div className={showCartSidebar ? "cart-sidebar" : "unshow-cart-sidebar"}>
      <div onClick={() => handleCartClose()}>X</div>
      {boughtProducts.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
