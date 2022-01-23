import * as React from "react";
import TopNavbar from "./TopNavbar/TopNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";

export interface IDesktopNavbarProps {}

export default function DesktopNavbar(props: IDesktopNavbarProps) {
  return (
    <nav>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
}
