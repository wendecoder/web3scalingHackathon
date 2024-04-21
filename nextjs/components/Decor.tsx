

export const Decor = () => {
return(

  <div className="decor">
      {/* <!-- outer border --> */}
      <div className="flex w-full h-full justify-between absolute overflow-hidden">
         
        {/* <!-- mid --> */}
        <div className="w-full h-4 bg-red-800 absolute inset-0"></div>
       
        {/* <!-- sides --> */}
        {[1,2].map((i,index)=>{
          return(

            <div className="w-4 h-[60vh]  bg-red-800 relative overflow-hidden">
          <div className="aspect-square w-5 h-10 bg-[url('/assets/splash.png')] bg-cover mix-blend-difference rotate-180 absolute -bottom-2"></div>
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
    )
}