
export const Tier = ({level, amount}) => {
  
  return( 
        <>
          <div   className="w-full md:w-1/2 lg:w-1/3 p-4">
          
          <div className="relative pt-16 px-10 pb-52 flex flex-col gap-5 h-full bg-gradient-radial-dark border border-gray-800  rounded-5xl">
          
          <div className="relative z-10" >
          {/* <!-- <img className="mb-8 mx-auto" src="nightsable-assets/images/cards/card-image1.png" alt="" data-config-id="auto-img-1-2" 0.0.0"> --> */}
          <h3 className="mb-6 text-white tracking-3xl outline text-center text-5xl" data-config-id="auto-txt-4-2">
            {level}  
          </h3>
          <p className="text-white text-opacity-60" data-config-id="auto-txt-5-2" >
            {amount}
            </p>
          </div>
          {/* <!-- <img className="absolute right-0 bottom-0" src="nightsable-assets/images/cards/card-blur.svg" alt="" data-config-id="auto-img-2-2" 0.1"> --> */}
          <button className="outline outline-red-700 px-10">Stake Now</button>
          </div>
          </div>

        </>
  )
}
// </>
    // )
// }
            
