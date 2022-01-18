import React, { useState } from "react";
import MobileNavSidebar from "../../../Sidebars/MobileNavSidebar/MobileNavSidebar";
import BasicDropdown from "../../../Dropdowns/BasicDropdown/BasicDropdown";
import RoundButton from "../../../Buttons/RoundButton/RoundButton";

export interface ITabletNavbarProps {}

export default function TabletNavbar(props: ITabletNavbarProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cities = [[{ description: "Montreal" }], [{ description: "Toronto" }]];

  const selectLocation = (selectedCity: any) => {
    console.log("selectedCity", selectedCity);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
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
          <RoundButton onClick={() => {}}>
            <span
              className="iconify"
              data-icon="majesticons:search-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
        </div>
        <div className="mobile-navbar__right-side-wrap">
          <RoundButton onClick={() => {}}>
            <span
              className="iconify"
              data-icon="majesticons:shopping-cart-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
          <RoundButton onClick={() => {}}>
            <span
              className="iconify"
              data-icon="majesticons:user-line"
              data-width="30"
              data-height="30"
            ></span>
          </RoundButton>
          <div className="navbar__selected-city">
            Select city:
            <BasicDropdown
              width={"5rem"}
              list={cities}
              isListOpen={isDropdownOpen}
              onSelect={city => selectLocation(city)}
            />
          </div>
        </div>
      </div>
      <MobileNavSidebar
        onClose={() => closeMobileNav()}
        showMobileNav={showMobileNav}
      />
    </>
  );
}
