import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

function Navbar(props: any) {
  const { children } = props;
  return (
    <>
      <div className="desktop-navbar-wrap">
        <DesktopNavbar />
      </div>
      <div className="mobile-navbar-wrap">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
