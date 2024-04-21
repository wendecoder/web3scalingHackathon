// import Range from './Range';


const data = 
    [{
        title: 'upcoming',
        from: '01.07.2021',
        to: '01.07.2021'
    },
    {
        title: 'swap',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'filled',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'claimable',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'ended',
        from: '01.07.2021',
        to: '01.07.2021',
    }
    ]


export const Timeline = () => {
      return(
        
        <div className=" text-white text-start flex flex-col gap-2">
    <p className="text-3xl  w-full">Swap Progress</p>
    {/* <!-- 
    <input className="text-red-400 w-full" type="range" name="" id="">
    <p className=" flex justify-between my-0">
      <span> (86%)</span>
      <span> 1,976,074/2,272,727</span>
    </p> --> */}
    {/* <Range /> */}
  
  <ol className="border-l border-neutral-300 dark:border-neutral-500">
      {data.map((item, index) => {
        return(
          <li key={index}>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-700"></div>
          <h4 className="mb-1.5 text-xl font-semibold capitalize bg-slate-700/50 p-5 rounded-2xl">
            {item.title}
          </h4>  
        </div>
        <div className="mb-2 ml-4 mt-2">
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                <span> Interest Period </span>
                <span className="block">
                    From {item.from} to  {item.to}
                </span>
            </p>
        </div>
      </li>
        )
    })}
      
  </ol>

        </div>
    ) 
  }