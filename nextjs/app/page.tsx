"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import {FAQ} from "../components/FAQ"
import { Card } from "~~/components/Card";
import { useGlobalState } from "~~/services/store/store";

// import Card from '../components/Card.vue';
// import FAQ from '../components/FAQ.vue';
// import Wallet from '../components/Wallet.vue'
import {Tier} from '~~/components/Tier';


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const idos = useGlobalState(state => state.idos);


  return (
    <>

      <div className="coutline h-fit flex flex-1">
            <div className=" cbg-blue-500 aspect-square w-full [] flex flex-col gap-10 items-statrtx justify-center">
              {/* <!-- <Wallet />  */}
              <h2 className="text-6xl self-start  py-10">Welcome to 
              <span className="text-red-700 block">
              We Launch
              </span>
              
              </h2>
              <p>Sophisticated. Balanced. Secure. Enabling the future of Web3. ChainGPT Pad is the
                decentralized fundraising platform incubating and launching the next generation of
                GameFi, AI, Infra, DeFi, DecSi, SocialFi projects.
              </p>

          <div className="flex gap-5  items-start">
            <button>IDO pools </button>
            <button>Stake </button>
            <button>Get Notified </button>
          </div>
          <div className="grid grid-cols-3 items-center gap-5 divide-x ">
                    <div className="pr-10">100 Projects</div>
                    <div className="pl-10">12 Give Aways</div>
                </div>

        </div>
            <div className="cbg-[url('../assets/hand1.png')] bg-contain w-full bg-center relative">
              <img src="../assets/coin.png" className="w-1/4 aspect-square m-auto absolute inset-0 -top-10 z-10"  alt=""/>
              <img src="../assets/hand1.png" className="scale-150 w-full aspect-square m-auto absolute inset-0"  alt=""/>
              {/* <!-- <img src="../assets/hand1.png" className="outline bg-cover" alt=""> --> */}
            </div>
      </div>
      
      
      <div className="coutline h-20 flex flex-1 flex-col md:flex-row text-center">
          
        <div className="coutline cbg-red-500 p-2 aspect-square w-full flex flex-col gap-2 items-center justify-center">
  
            {/* <img src="../assets/pot3.png" className="aspect-auto h-24" alt="" /> */}
            
            <h2 className="text-3xl font-bold">Sign Up and KYC</h2>
            
            <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button>Sign Up</button>
        </div>
  
        <div className="Coutline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2 className="text-3xl font-bold">Verify Wallet</h2>

          <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button>Verify Wallet</button>

  
        </div>
        
        <div className="Coutline cbg-red-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2 className="text-3xl font-bold">Stake</h2>

          <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button>Stake</button>

  
        </div>
  
        <div className="Coutline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2 className="text-3xl font-bold">Register</h2>

          <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button>Register</button>

  
        </div>
      </div>
  
      <div className="flex outline">
        {[{name:"Silver", value:"0.02-0.04"},{name:"Gold", value:"0.05-0.08"},{name:"Diamond", value:"0.09-0.12"}].map((item,index)=>{
          return(
            <Tier key={index} level={item.name} amount={item.value}/>
          )
        })}
      </div>
      
      <div className="coutline h-52 flex flex-1">
          <div className="coutline cbg-blue-500 aspect-square w-full">
            <p className="p-10">Upcoming</p>
            <div className="flex flex-wrap gap-16 justify-center items-center coutline outline-lime-500 w-full h-fit">
             {[1,2,3,4,5,6,7,8,9].map(()=>{
              return(
                <>
                {idos.map((ido)=>{
                  return(
                    <Card ido={ido} />
                  )
                })}
                </>
              )
             })}
            </div>
          </div>
          {/* <!-- <div className="outline cbg-red-500 aspect-square w-full"></div> --> */}
      </div>
  
      <FAQ />

      </>
      )}


export default Home;
