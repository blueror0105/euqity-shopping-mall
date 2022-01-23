import * as React from "react";
import ProductInCart from "../../Cards/ProductsInCartCard/ProductInCartCard";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";

export interface ICartSidebarProps {
  showCartSidebar: boolean;
  onClose: () => void;
}

export default function CartSidebar(props: ICartSidebarProps) {
  const { showCartSidebar } = props;
  const productsInCart = useSelector(
    (state: RootState) => state.cart.cartItems,
  );
  // const boughtProducts = ["example", "example", "example"];
  const handleCartClose = () => {
    props.onClose();
  };
  return (
    <>
      <div className={showCartSidebar ? "overlay" : "no-overlay"} />
      <div className={showCartSidebar ? "cart-sidebar" : "unshow-cart-sidebar"}>
        <div className="cart-sidebar__top-wrap">
          <div className="cart-sidebar__title">What is in your cart</div>
          <div
            className="cart-sidebar__close-button"
            onClick={() => handleCartClose()}
          >
            X
          </div>
        </div>
        {productsInCart !== [] ? (
          <div className="cart-sidebar__content">
            {productsInCart.map((item: any) => {
              return <ProductInCart key={item.name} product={item} />;
            })}
          </div>
        ) : (
          <div className="cart-sidebar__no-content">
            No products in your cart
          </div>
        )}
      </div>
    </>
  );
}
