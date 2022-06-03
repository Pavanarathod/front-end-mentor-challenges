/* eslint-disable @next/next/no-img-element */
import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  HomeIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { HomeIcon as HomeSolid } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";

const SideNavigation = () => {
  const router = useRouter();

  return (
    <header className="flex fixed flex-col bg-white z-50 border-r border-gray-300 justify-between items-center py-5 w-[88px] h-screen">
      <div>
        <img src="/images/Mlogo.png" alt="Mlogo" className="h-12" />
      </div>
      <div className="flex flex-col space-y-10">
        {router.pathname === "/" ? (
          <HomeSolid className="h-6" />
        ) : (
          <HomeIcon className="h-6" />
        )}
        <BellIcon className="h-6" />
        <BookmarkIcon className="h-6" />
        <DocumentTextIcon className="h-6" />
        <PencilIcon className="h-6" />
      </div>
      <div>
        <UserIcon className="h-12 bg-gray-200 px-3 py-3 rounded-full" />
      </div>
    </header>
  );
};

export default SideNavigation;
