import React from "react";
import ArrowDownButton from "./ArrowDownButton";

const SectionTwo = () => {
  return (
    <section
      id="section-two"
      className="h-screen bg-yellow-300 flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">SectionTwo</h1>
        <ArrowDownButton targetSelector={"#section-three"} />
      </div>
    </section>
  );
};

export default SectionTwo;
