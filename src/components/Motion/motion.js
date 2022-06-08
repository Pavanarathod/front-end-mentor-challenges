import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MenuAlt4Icon } from "@heroicons/react/solid";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Motion = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <motion.nav animate={toggle ? "open" : "closed"} variants={variants}>
        <MenuAlt4Icon
          className="h-10 text-white"
          onClick={() => setToggle(!toggle)}
        />

        <h1>items</h1>
        <h1>items</h1>
        <h1>items</h1>
        <h1>items</h1>
        <h1>items</h1>
        <h1>items</h1>
      </motion.nav>
    </div>
  );
};

export default Motion;
