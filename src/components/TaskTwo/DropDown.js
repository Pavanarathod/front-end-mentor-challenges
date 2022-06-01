import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const DropDown = ({ selected, setSelected, optionValue, defaultValue }) => {
  const [dropOn, setDropON] = useState(false);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div onClick={() => setDropON(!dropOn)} className="relative">
        <Listbox.Button className="flex items-center space-x-2">
          <span className="block truncate text-gray-500  hover:text-gray-900">
            {selected ? selected : defaultValue}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-3 lg:mt-12 py-3  min-h-60 text-base border bg-white border-gray-100 z-50 shadow-md focus:outline-none sm:text-sm">
            {optionValue.map((person, personIdx) => (
              <div
                className="flex items-center w-full space-x-2"
                key={personIdx}
              >
                <div className="w-full">
                  <Listbox.Option
                    className={({ active }) =>
                      `relative select-none py-2 px-4 cursor-pointer transition-all delay-100 duration-100 ease-in-out ${
                        active
                          ? "hover:bg-[#007E84] hover:text-white"
                          : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person}
                        </span>
                        {/* {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null} */}
                      </>
                    )}
                  </Listbox.Option>
                </div>
              </div>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default DropDown;
