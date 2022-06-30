import React from "react";

const Navbar = ({ children }) => {
  return (
    <nav className="h-20 bg-gray-800 sticky top-0 py-4 px-5">
      <ul className="max-w-full h-full flex space-x-10 items-center justify-end">
        {children}
      </ul>
    </nav>
  );
};

export default Navbar;
