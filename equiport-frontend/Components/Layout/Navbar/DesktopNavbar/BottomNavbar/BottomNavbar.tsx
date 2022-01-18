import React, { useState } from "react";
import Link from "next/link";
import RoundButton from "../../../../Buttons/RoundButton/RoundButton";
import LoginSignup from "../../../../Buttons/LoginSignupButton/LoginSignupButton";
import ProductSearch from "../../../../Inputs/ProductSearchBar/ProductSearchBar";
import CartButton from "../../../../Buttons/CartButton/CartButton";
import BasicDropdown from "../../../../Dropdowns/BasicDropdown/BasicDropdown";
import LanguageButton from "../../../../Buttons/LanguageButton/LanguageButton";
import CartSidebar from "../../../../Sidebars/CartSidebar/CartSidebar";

export interface IBottomNavbarProps {}

export default function BottomNavbar(props: IBottomNavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartSidebarOpen, setCartSideOpen] = useState(false);
  const cities = [[{ description: "Montreal" }], [{ description: "Toronto" }]];

  const selectLocation = (selectedCity: any) => {
    console.log("selectedCity", selectedCity);
  };
  const handleCartOpenClose = () => {
    setCartSideOpen(!cartSidebarOpen);
  };
  return (
    <>
      <nav className="navbar">
        <Link href="/" passHref>
          <p>Logo</p>
        </Link>
        <div className="navbar__section-left">
          <Link href="/montreal/equipement-store" passHref>
            <p>Shop</p>
          </Link>
          <Link href="/deals" passHref>
            <p>Services</p>
          </Link>
        </div>
        <div className="navbar__search">
          <ProductSearch />
        </div>
        <div className="navbar__section-right">
          <div className="navbar__login-signup">
            <LoginSignup />
          </div>
          <div className="navbar__cart">
            <div>
              <RoundButton onClick={() => handleCartOpenClose()}>
                <CartButton items={3} />
              </RoundButton>
            </div>
          </div>
          <div className="navbar__selected-city">
            Select city:
            <BasicDropdown
              width={"5rem"}
              list={cities}
              isListOpen={isDropdownOpen}
              onSelect={city => selectLocation(city)}
            />
          </div>
          <div className="navbar__language-selector">
            <LanguageButton />
          </div>
        </div>
      </nav>
      <CartSidebar
        onClose={() => handleCartOpenClose()}
        showCartSidebar={cartSidebarOpen}
      />
    </>
  );
}
