import * as React from "react";
import MobileNavSidebarItem from "./MobileNavSidebarItem/MobileNavSidebarItem";
import MobileNavSidebarSmallItem from "./MobileNavSidebarSmallItem/MobileNavSidebarSmallItem";
import LoginSignup from "../../Buttons/LoginSignupButton/LoginSignupButton";
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
      <div className={showMobileNav ? "overlay" : "no-overlay"} />
      <div
        className={
          showMobileNav ? "mobile-nav-sidebar" : "unshow-mobile-nav-sidebar"
        }
      >
        <div
          onClick={() => {
            handleSidebarClose();
          }}
        >
          X
        </div>
        <MobileNavSidebarItem>Search</MobileNavSidebarItem>
        <MobileNavSidebarItem>Shop our products</MobileNavSidebarItem>
        <MobileNavSidebarItem>
          <LoginSignup />
        </MobileNavSidebarItem>
        <section className="mobile-nav-sdebar__bottom-section">
          <MobileNavSidebarSmallItem>locatoin</MobileNavSidebarSmallItem>
        </section>
      </div>
    </>
  );
}
