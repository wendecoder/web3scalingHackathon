
export const Range = () => {
 
    return(
    <div className="relative mb-6">
            {/* <!-- <label for="labels-range-input" className="sr-only">Labels range</label> --> */}
            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-red-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">(86%)</span>
            {/* <!-- <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span> --> */}
            {/* <!-- <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span> --> */}
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">1,976,074/2,272,727</span>
    </div>
    )
}


