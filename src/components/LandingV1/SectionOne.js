import React from "react";
import ArrowDownButton from "./ArrowDownButton";

const SectionOne = () => {
  return (
    <section
      id="section-one"
      className="h-screen bg-green-300 flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">Sectionone</h1>
        <ArrowDownButton targetSelector={"#section-two"} />
      </div>
    </section>
  );
};

export default SectionOne;
