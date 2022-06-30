/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

const NavItem = ({ Icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="">
      <a href="#" onClick={() => setOpen(!open)}>
        <Icon className="h-10 px-2 py-2 rounded-full text-white bg-gray-600 hover:bg-gray-700" />
      </a>
      {open && children}
    </li>
  );
};

export default NavItem;
