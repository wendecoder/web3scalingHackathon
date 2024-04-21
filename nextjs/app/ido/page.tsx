"use client";

import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth';
import {Timeline} from '../../components/Timeline';
import type { NextPage } from "next";
import { Tier } from '~~/components/Tier';

const data = [
    {
        key: 'Price per token',
        value:"0.017 USDT per $PLENA"
        },{
        key: 'Swap Amount',
        value:"0.017 USDT per 11,764,705 $PLENA"
        },{
        key: 'Total Raise',
        value:"200,000"
        },{
        key: 'Claim Type',
        value:"On chain"
        },{
        key: 'Refund Term ',
        value:"7 days"
        },
    ]
const info = `lena Connect stands out as a groundbreaking initiative in the crypto investment field, launching an
Account Abstraction Software Development Kit (SDK) that sets new standards for easy integration and
user experiences within the decentralized ecosystem. By utilizing Account Abstraction, Plena Connect
gives dApps the ability to improve user control over funds, increase security, and make transaction
processes more efficient. As the leading AA SDK available, Plena Connect is set to change the way
developers create blockchain user experiences, providing an easy, cost-effective, and complete
solution for dApps aimed at improving user interactions without the usual complexities and costs.`




const IDO: NextPage = () => {

    return(
    <div className=" flex flex-1 ">

    <div className="flex flex-col gap-10 coutline">

        <div className="cbg-blue-500 w-fit pl-10 pr-10 rounded-2xl overflow-hidden sticky">

            <p>Profile</p>
            <Timeline />
        </div>

        <RainbowKitCustomConnectButton />

        
        {/* <div className="cbg-red-500 w-fit h-fit p-10 flex flex-col gap-5">
            <p className="mb-10">Please connect your wallet to participate</p>
            <button className="outline outline-red-700 px-10">Connect Wallet</button>
        </div> */}

    </div>

    <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center coutline">

            <div className="flex gap-3 items-center ">
                <div className="bg-[url('/assets/bg.png')] bg-white bg-contain w-20 aspect-square outline bg-center bg-no-repeat"></div>
                <p>Plea FInance</p>
            </div>
            <div className="flex gap-5 h-fit text-black">

                <button className="bg-white ">Public IDO</button>
                <button className="bg-white" >Bronze at min tier</button>
            </div>
        </div>

        <div className="flex gap-5 w-fit">
            <p className="p-2 rounded-lg outline outline-red-500 bg-red-500 text-white w-fit">Project INfo</p>
            <p className="p-2 rounded-lg outline outline-red-500 w-fit">Swap and Claim</p>
        </div>
        
        {[1,2].map((i,index)=>{
            return(

                <div className="flex gap-5 flex-1 justify-between">
            <div
            className=" cbg-red-400 bg-black px-5 rounded-xl w-full h-fit p-4"
            >
            
            {data.map((i, index)=>{

                return(

            <div className="flex justify-between" >
                <p>{i.key}</p>
                <p>{i.value}</p>
            </div>
            )
            })}
        </div>
        </div>
        )
    })}

<div className="flex outline">
        {[{name:"Silver", value:"0.02-0.04"},{name:"Gold", value:"0.05-0.08"},{name:"Diamond", value:"0.09-0.12"}].map((item,index)=>{
          return(
            <Tier key={index} level={item.name} amount={item.value}/>
          )
        })}
      </div>

    {[1,2,3].map(()=>{
        return(       
    <div v-for="i in 10" className="coutline h-full px-10">
        <h3 className="text-3xl font-bold underline">Roadmap</h3>
        <p v-for="i in 10">
            { info }
        </p>
    </div>
    )
    })}
    </div>
</div>
    )
}

export default IDO