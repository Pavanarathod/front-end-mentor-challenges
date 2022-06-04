import React from "react";
import ArrowDownButton from "./ArrowDownButton";

const SectionThree = () => {
  return (
    <section
      id="section-three"
      className="h-screen bg-indigo-300 flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">SectionThree</h1>
        <ArrowDownButton targetSelector={"#section-one"} />
      </div>
    </section>
  );
};

export default SectionThree;
