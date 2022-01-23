import React, { useState } from "react";
import MobileNavSidebar from "../../../Sidebars/MobileNavSidebar/MobileNavSidebar";
import CartSidebar from "../../../Sidebars/CartSidebar/CartSidebar";
import LanguageButton from "../../../Buttons/LanguageButton/LanguageButton";
import RoundButton from "../../../Buttons/RoundButton/RoundButton";
import LocationSwitcher from "../../../Selects/LocationSwitcher/LocationSwitcher";
import { useDispatch } from "react-redux";
import {
  setShowModal,
  setModalContent,
} from "../../../../Store/redux/slices/modalSlice";
import ProductSearch from "../../../Inputs/ProductSearchBar/ProductSearchBar";

export interface ITabletNavbarProps {}

export default function TabletNavbar(props: ITabletNavbarProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const dispatch = useDispatch();

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  const handleCartOpenClose = (state: boolean) => {
    setCartSidebarOpen(state);
  };

  const handleLoginClick = () => {
    dispatch(setShowModal(true));
    dispatch(setModalContent("oauth"));
  };

  const handleSearchOpen = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  return (
    <>
      <div className="mobile-navbar">
        <div className="mobile-navbar__left-side-wrap">
          <RoundButton
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}
          >
            <span
              className="iconify"
              data-icon="majesticons:menu-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
          <RoundButton
            onClick={() => {
              handleSearchOpen();
            }}
          >
            <span
              className="iconify"
              data-icon="majesticons:search-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
        </div>
        <div className="mobile-navbar__right-side-wrap">
          <RoundButton
            onClick={() => {
              handleCartOpenClose(true);
            }}
          >
            <span
              className="iconify"
              data-icon="majesticons:shopping-cart-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
          <RoundButton
            onClick={() => {
              handleLoginClick();
            }}
          >
            <span
              className="iconify"
              data-icon="majesticons:user-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
          <div className="navbar__selected-city">
            <LocationSwitcher />
          </div>
          <div className="mobile-navbar__language-selector">
            <LanguageButton />
          </div>
        </div>
      </div>
      <div
        className={
          searchIsOpen
            ? "mobile-navbar__product-search-bar"
            : "mobile-navbar__product-search-bar--hidden"
        }
      >
        <div className="mobile-navbar__product-search-wrap">
          <ProductSearch />
        </div>
      </div>
      <MobileNavSidebar
        onClose={() => closeMobileNav()}
        showMobileNav={showMobileNav}
      />
      <CartSidebar
        onClose={() => handleCartOpenClose(false)}
        showCartSidebar={cartSidebarOpen}
      />
    </>
  );
}
