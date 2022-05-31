/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import DropDown from "./TaskTwo/DropDown";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [selectedOncologist, setSelectedOncologist] = useState("");
  const oncologistOptions = [
    "Doctors near me",
    "International experts",
    "Teams (Local + International)",
  ];
  const homeServiceOptions = [
    "Nursing",
    "Chemo",
    "Caregiver",
    "Lab sample collection",
    "Medicine delevery",
    "Hospital pick up & drop",
  ];

  console.log(router);
  return (
    <>
      <header className="bg-gray-50 h-[126px] flex border-b border-gray-200 shadow-md sticky top-0">
        <nav className="container mx-auto px-4 flex items-center space-x-24">
          <div>
            <Link href="/">
              <img
                src="/images/BrandLogo.png"
                alt="brand-logo"
                className="h-[69px] w-[189px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center space-x-5 text-sm text-gray-500">
            {/* ITEMS */}
            <DropDown
              selected={selectedOncologist}
              setSelected={setSelectedOncologist}
              defaultValue={"Oncologist"}
              optionValue={oncologistOptions}
            />
            <a
              href="/hospital-service"
              className={`${
                router.pathname === "/hospital-service"
                  ? "border-b-4 mt-2 pb-1 border-[#007E84]"
                  : ""
              }`}
            >
              Hospital Services
            </a>
            <a
              href="/diagnosis"
              className={`${
                router.pathname === "/diagnosis"
                  ? "border-b-4 mt-2 pb-1 border-[#007E84]"
                  : ""
              }`}
            >
              Diagnosis
            </a>
            <DropDown
              selected={selectedOncologist}
              setSelected={setSelectedOncologist}
              defaultValue={"Home Service"}
              optionValue={homeServiceOptions}
            />
            <Link href="/">Financial guidence</Link>
            <Link href="/">Wellness package</Link>
            <div className="flex items-center divide-x-2 divide-gray-600">
              <div className="pr-3">
                <SearchIcon className="h-5" />
              </div>
              <div className="flex items-center space-x-2 pl-3">
                <p>Providers</p>
                <ChevronDownIcon className="h-5" />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-2 border border-gray-500 px-1 rounded-full py-[2px]">
                <UserIcon className="h-8 px-2 py-2 border border-gray-400 rounded-full" />
                <span className="text-sm pr-2 truncate">Pavan</span>
              </div>
              <button className="px-6 py-2 bg-[#007E84] text-white rounded-full">
                Download now
              </button>
              <div>
                <GlobeAltIcon className="h-10 px-2 py-2 border text-[#007E84] bg-gray-100 border-[#007E84] rounded-full" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
