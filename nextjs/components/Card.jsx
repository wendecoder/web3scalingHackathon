import Link from "next/link"


export const Card = ({ido}) => {

    return(

        <Link href={"/ido"}>       
            <div className="cursor-pointer bg-[#1a191e] hover:bg-[#1a191e]/80 hover:scale-105 transition-all duration-100 outline h-fit outline-red-600 w-64 p-3 rounded-2xl relative">

                
                <div className="relative min-h-64 coutline">
                    {/* <!-- borders --> */}
                    <img className="h-20 absolute top-0  block cabsolute " src="./../assets/border(3).svg" alt=""/>
                    <img className="h-20 absolute right-0  [transform:scaleX(-1)] " src="./../assets/border(3).svg" alt=""/>
                    <img className="h-20 absolute bottom-0 left-0 [transform:scaleY(-1)] " src="./../assets/border(3).svg" alt=""/>
                    <img className="h-20 absolute bottom-0 right-0    [transform:scale(-1)] " src="./../assets/border(3).svg" alt=""/>
                    {/* <!-- borders -->     */}
                    
                    <div className=" inset-0 m-auto coutline pb-12 outline-red-500 ch-[65%] h-fit   ">
                        <div className="w-64 h-36  bg-[url('/assets/bg.png')] bg-cover bg-center oultine outline-white cbg-blue-500">
                        </div>
                        <p className="bg-white text-black px-4 text-center rounded-2xl hover:bg-red-600 hover:text-white">
                            {ido.public?  'Public' : 'Private'}
                        </p>

                        <div className="description capitalize text-sm flex flex-col gap-3">

                            <p className="text-red-700 text-lg p-4">{ido.title}</p>
                            <p  className="flex justify-between gap-10">
                                <span>
                                    total raised
                                </span>
                                <span>
                                {ido.featured.total_raised}
                                </span>    
                            </p>

                            <p  className="flex justify-between">
                                <span>
                                    token price
                                </span>
                                <span>
                                {ido.featured.token_price}
                                </span>
                                </p>
                            <p  className="flex justify-between">
                                <span>
                                    start date
                                </span>
                                <span>
                                {ido.featured.start_date}
                                </span>
                                </p>
                            <p  className="flex justify-between">
                                <span>
                                refund term
                                </span>
                                <span>
                                {ido.featured.refund_term}
                                </span>
                                </p>
                            <p  className="flex justify-between">
                                <span>
                                market maker
                                </span>
                                <span>
                                {ido.featured.market_maker}
                                </span>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
)
}