import {
  BriefcaseIcon,
  CalendarIcon,
  CameraIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import NavItem from "./NavItem";

function FacebookDropdown({ children }) {
  return (
    <Navbar>
      <NavItem Icon={HomeIcon} />
      <NavItem Icon={BriefcaseIcon} />
      <NavItem Icon={CalendarIcon} />
      <NavItem Icon={CameraIcon} />
      <NavItem Icon={ChevronDownIcon}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default FacebookDropdown;
