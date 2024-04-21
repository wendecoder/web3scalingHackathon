"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="decor">
      {/* <!-- outer border --> */}
      <div className="flex w-full h-full justify-between absolute overflow-hidden">
         
        {/* <!-- mid --> */}
        <div className="w-full h-4 bg-red-800 absolute inset-0"></div>
       
        {/* <!-- sides --> */}
        {[1,2].map((i,index)=>{
        return(
          <div 
            className="w-4 h-[60vh]  bg-red-800 relative overflow-hidden">
            <div className="aspect-square w-5 h-10 cbg-[dfsdf'./sdsdffsdfs../assetdsdfsdfs/splash.png')] bg-cover mix-blend-difference rotate-180 absolute -bottom-2"></div>
          </div>   
        )
        })}
      </div> 

      {/* <!-- inner border --> */}
      <div className="p-6 flex justify-between absolute  w-full z-0">
        
        {/* <!-- <div> --> */}
          <img src="../assets/border(3).svg" className="aspect-auto h-24 nborder-t-4 border-red-800" alt="" />
        {/* <!-- </div> --> */}
                
        {/* <!-- <div> --> */}
          <img src="../assets/border(3).svg" className="aspect-auto h-24 nborder-t-4 border-red-800 -scale-x-[1]" alt="" />
        {/* <!-- </div> --> */}
      </div>

  </div>
  );
};
