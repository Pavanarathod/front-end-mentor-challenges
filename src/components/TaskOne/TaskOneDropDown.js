/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const TaskOneDropDown = ({
  selected,
  setSelected,
  optionValue,
  defaultValue,
}) => {
  const [dropOn, setDropON] = useState(false);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div onClick={() => setDropON(!dropOn)} className="relative">
        <Listbox.Button className="flex items-center space-x-2">
          <span className="block truncate text-gray-500 font-semibold hover:text-gray-900">
            {selected.name ? selected.name : defaultValue}
          </span>
          <span className="pointer-events-none inset-y-0 right-0 flex items-center">
            {dropOn ? (
              <ChevronUpIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 py-3 px-4  min-h-60  rounded-md text-base border bg-white border-gray-200 shadow-2xl focus:outline-none sm:text-sm">
            {optionValue.map((person, personIdx) => (
              <div className="flex items-center space-x-2" key={personIdx}>
                <div className="w-5">
                  <img src={person.imageLink} alt="" className="h-4 w-4" />
                </div>
                <div>
                  <Listbox.Option
                    className={({ active }) =>
                      `relative select-none py-2 cursor-pointer ${
                        active ? "text-indigo-700" : "text-gray-900"
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
                          {person.name}
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

export default TaskOneDropDown;
