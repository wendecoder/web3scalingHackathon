
// import Button from './Button';
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import Link from "next/link";


export const Nav =  () => {
    // <!-- <div className="fixed"> -->
        // <!-- small -->

        return(
        <>
            <div className="nav sm:hidden block cbg-laser  w-full h-fit  py-8 px-20 pb-0">
            <div className="flex justify-center mt-5">
            {/* // <!-- <p>Menu</p> --> */}
            {/* // <fa className="text-lg bg-white text-black p-2 rounded-full aspect-suare" icon="bars"/> */}
            {/* // <!-- <button className="bg-transparent border-white border-4 rounded-none">Menu</button> --> */}
            </div>
            </div>
            
            {/* // <!-- big --> */}
            <div className="sm:block hidden cbg-laser mx-auto w-full h-fit py-8 px-20 pb-0 z-[9999999] sticky">
            
            <div className="flex gap-10 justify-between">
            {/* <!-- <div className="flex justify-around outline w-full gap-5"> --> */}
            {/* <!-- flex justify-around outline w-full gap-5 --> */}
            
            {/* <!-- start of nav --> */}
            <div className="flex justify-between items-center w-full">
            <img src="../assets/pot3.png" className="aspect-square h-16" alt="" />
            <div className="flex w-full gap-10 pl-8">
            {/* <!-- <div className="flex justify-around w-full gap-5"> --> */}
            <Link href="/">
            <fa icon="rocket" className="text-laser text-xl" />
                Launch Pad
            </Link>

            <Link href="/staking" className="text-start">
                <img src="../assets/coin.png" className="h-6 aspect-square m-auto inline"  alt=""/>
                Staking
            </Link>
            {/* <p>Learn</p> */}
            </div>
            </div>
            
        {/* <!-- middle logo --> */}
        <div className="outline outline-laser aspect-square h-10 rotate-45 m-10 mx-auto">
        <img 
        className=" -rotate-45" alt="" 
        src="../assets/knot.png" 
        />
        </div>
        
        {/* <!-- end of nav --> */}
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-end w-full gap-10 pr-8">
            {/* <Link href="/" className="text-red-500 cursor-pointer"> 
                Home 
            </Link> */}
            
            <Link href="/profile" className="text-red-500 cursor-pointer">
            Profile
            </Link>
            
            {/* <!-- <p>Learn</p> --> */}
            
            </div>
            {/* <!-- <p>Learn</p> --> */}
            {/* <Button label="Connect Wallet" /> */}
            <RainbowKitCustomConnectButton />
            {/* <button className="bg-transparent outline rounded-none whitespace-wrap md:whitespace-nowrap text-xs">
            Connect Wallet
            </button> */}
        </div> 
        </div>
        </div>
        </>
    )}