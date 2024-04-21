import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="text-center p-10 md:pb-0 flex gap-5 flex-col justify-center items-center">

        
        <img src="./../assets/pot3.png" className="h-10 w-10" alt="" />
        <p className="text-lg"> 
            Launch hand-picked projects and help them shine.
        </p>

        {/* <!-- socials --> */}
        {/* <div className="outline w-full flex gap-16 text-lg justify-center p-3">
            <fa
            // @click="console.log('bar footer')"
            className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>
            <fa className="cursor-pointer"icon="bars"/>   
        </div> */}
        <div className="">

            <div className="outline w-screen px-6 py-4 flex justify-between">
                <p className="cwhitespace-nowrap">
                    <span className="cwhitespace-nowrap"> Copyright &copy; 2024.</span>
                    <span className="cwhitespace-nowrap block md:inline"> All rights reserved </span> 
                </p>

                <div className="grid grid-cols-3 items-center gap-5 divide-x ">
                    <div>Terms and Conditions</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>
        </div>
    
    </div>
  );
};
