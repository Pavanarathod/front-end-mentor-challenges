import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

const ArrowDownButton = ({ targetSelector }) => {
  const handleArrowDown = () => {
    const targetElement = window.document.querySelector(targetSelector);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };
  return (
    <>
      <ChevronDownIcon
        onClick={handleArrowDown}
        className="h-16 hover:animate-bounce cursor-pointer"
      />
    </>
  );
};

export default ArrowDownButton;
