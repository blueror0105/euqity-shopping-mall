import * as React from "react";
import MobileNavSidebarItem from "./MobileNavSidebarItem/MobileNavSidebarItem";
import MobileNavSidebarSmallItem from "./MobileNavSidebarSmallItem/MobileNavSidebarSmallItem";
import LoginSignup from "../../Buttons/LoginSignupButton/LoginSignupButton";
import NormalOverlays from "../../Overlays/NormalOverlays/NormalOverlays";
export interface IMobileNavSidebarProps {
  showMobileNav: boolean;
  onClose: () => void;
}

export default function MobileNavSidebar(props: IMobileNavSidebarProps) {
  const { showMobileNav } = props;
  const handleSidebarClose = () => {
    props.onClose();
  };

  return (
    <>
      <NormalOverlays show={showMobileNav} />
      <div
        className={
          showMobileNav ? "mobile-nav-sidebar" : "unshow-mobile-nav-sidebar"
        }
      >
        <div className="mobile-nav-sidebar__logo-bar">
          <div className="mobile-nav-sidebar__logo">Equiport</div>
          <div
            className="mobile-nav-sidebar__close-button"
            onClick={() => {
              handleSidebarClose();
            }}
          >
            X
          </div>
        </div>
        <MobileNavSidebarItem>Search</MobileNavSidebarItem>
        <MobileNavSidebarItem>Shop our products</MobileNavSidebarItem>
        <div className="mobile-nav-sidebar__login-button-wrap">
          <LoginSignup />
        </div>
        <section className="mobile-nav-sdebar__bottom-section">
          <MobileNavSidebarSmallItem>Location</MobileNavSidebarSmallItem>
          <MobileNavSidebarSmallItem>
            Terms and Condtions
          </MobileNavSidebarSmallItem>
          <MobileNavSidebarSmallItem>Marketing</MobileNavSidebarSmallItem>
        </section>
      </div>
    </>
  );
}
