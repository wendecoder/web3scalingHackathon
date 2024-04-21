"use client";

import { Tier } from '~~/components/Tier';
import {Timeline} from '../../components/Timeline';
import {Pools} from '../../components/Pools';
import type { NextPage } from "next";
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth';

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




const Profile: NextPage = () => {

    return(
    <div className=" flex flex-1 gap-5">

    <div className="flex flex-col gap-10 coutline">

        {/* <div className='outline p-5 flex flex-col gap-5'>
            {['profile', 'tier', 'my pools'].map((item)=>{
                return(
                    <p className='capitalize'>
                        {item}
                    </p>
                )
            })}
            

        </div> */}

        {/* <div className="cbg-blue-500 w-fit pl-10 pr-10 rounded-2xl overflow-hidden sticky">

            <p>Profile</p>
            <Timeline />
        </div> */}
        
        {/* <div className="cbg-red-500 w-fit h-fit p-10 flex flex-col gap-5">
            <p className="mb-10">Please connect your wallet to participate</p>
            <button className="outline outline-red-700 px-10">Connect Wallet</button>
        </div> */}

    </div>

    <div className="w-full cbg-blue-600 flex flex-col gap-4 p-5">
        
        <div className='bg-black outline outline-1 p-5 '>

        <p>My Profile</p>
            <p>
                <span>
                wallet Information
                </span>
                <span>
                <RainbowKitCustomConnectButton />
                </span>
            </p>

            <p>
                <span> KYC Status </span>
                <span className='text-red-500'> Unverified </span>
            </p>
        </div>

        <div className='bg-black outline outline-1 p-5 '>

            <p>Tiers</p>

            <div className='flex'>
                {[1,2,3].map((i,index)=>{
                    return( <Tier /> ) 
                })}
            </div>

            <button>Stake Now</button>
        </div>

        <p>Pools</p>

        <div className='bg-black outline outline-1 p-5'>
            <Pools />
        </div>
        
    </div>

</div>
    )
}

export default Profile