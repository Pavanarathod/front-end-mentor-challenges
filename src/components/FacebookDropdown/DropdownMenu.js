import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const DropdownItem = ({ RightIcon, children, gotoMenu }) => {
    return (
      <div
        href="#"
        className="flex items-center text-white w-full justify-between hover:cursor-pointer space-x-4 hover:bg-gray-600 p-3 rounded-lg"
        onClick={() => gotoMenu && setActiveMenu(gotoMenu)}
      >
        <div className="flex items-center space-x-5">
          <RightIcon className="h-6 text-white" />
          {children}
        </div>
      </div>
    );
  };
  return (
    <div className="absolute top-[78px] rounded-lg w-[300px] border border-gray-400 -translate-x-[16rem] bg-gray-800 px-1 py-2 overflow-hidden">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem RightIcon={UserIcon}>
            <h1>My Profile</h1>
          </DropdownItem>
          <DropdownItem RightIcon={CogIcon} gotoMenu="settings">
            <h1>Settings</h1>
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem RightIcon={ChevronLeftIcon} gotoMenu="main">
            <h1>Home</h1>
          </DropdownItem>
          <DropdownItem RightIcon={CogIcon}>
            <h1>Settings</h1>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
