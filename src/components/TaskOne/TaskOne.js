/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
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
            <button className="border border-gray-500 px-6 py-2 rounded-lg focus:outline-none transition-all duration-150 delay-100 ease-in-out hover:bg-gray-800 hover:text-white">
              Register
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row">
          <div>one</div>
          <div>
            <img src="/images/image-hero-mobile.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskOne;