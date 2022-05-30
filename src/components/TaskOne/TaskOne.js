/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import heroImageData from "../../utils/heroImageData";
import TaskOneDropDown from "./TaskOneDropDown";

const TaskOne = () => {
  const [selected, setSelected] = useState("");
  const people = [
    { name: "Todo List", imageLink: "/images/icon-todo.svg" },
    { name: "Calendar", imageLink: "/images/icon-calendar.svg" },
    { name: "Reminder", imageLink: "/images/icon-reminders.svg" },
    { name: "Planning", imageLink: "/images/icon-planning.svg" },
  ];

  return (
    <>
      <header className="bg-white">
        <nav className="container mx-auto px-5 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <div>
              <img src="/images/logo.svg" alt="" className="mt-2" />
            </div>
            <div className="space-x-8 text-gray-500 font-semibold hidden lg:inline-flex">
              <TaskOneDropDown
                selected={selected}
                setSelected={setSelected}
                optionValue={people}
                defaultValue="Features"
              />
              <TaskOneDropDown
                selected={selected}
                setSelected={setSelected}
                optionValue={people}
                defaultValue="Compony"
                imageLink="/images/icon-todo.svg"
              />
              <Link href="#">Careers</Link>
              <Link href="#">About</Link>
            </div>
          </div>
          <div className="hidden lg:inline-flex items-center space-x-10">
            <Link href="/">Login</Link>
            <button className="border border-gray-500 px-6 py-3 rounded-xl focus:outline-none transition-all duration-150 delay-100 ease-in-out hover:bg-gray-800 hover:text-white">
              Register
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-5 mt-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-20 lg:max-w-6xl lg:mx-auto ">
          <div className="flex flex-col items-center lg:items-start space-y-14 mt-12 lg:mt-0 lg:w-[55%]">
            <h1 className="font-bold text-4xl  lg:text-8xl text-gray-800">
              Make remote work
            </h1>
            <p className="text-center lg:text-left font-semibold  text-xl text-gray-400 lg:text-gray-600 lg:w-[75%]">
              Get your team in sync no matter your location. Streamline process,
              create team rituals. and watch productivityu soar.
            </p>
            <div>
              <button className="px-7 py-3 bg-gray-900 text-white focus:outline-none rounded-xl border hover:border-gray-700 hover:text-black transition delay-100 duration-300 ease-in-out hover:bg-transparent">
                Learn More
              </button>
            </div>

            <div className="flex items-center lg:space-x-14 space-x-1">
              {heroImageData.map((item) => (
                <img src={item} alt="client-image" key={item} />
              ))}
            </div>
          </div>
          <div>
            <img
              src="/images/image-hero-mobile.png"
              alt="logo-image"
              className="lg:hidden"
            />
            <img
              src="/images/image-hero-desktop.png"
              alt="logo-image"
              className="hidden lg:inline-flex h-[700px] object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskOne;
