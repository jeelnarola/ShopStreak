import React from 'react'
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";

function CWC() {
  return (
    <div className='flex items-center justify-center gap-4 lg:gap-4  border-l px-4 lg:pr-0 border-gray-300'>
      <div className="relative inline-block">
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 rotate-90 cursor-pointer" title='Compare'>
          <IoGitCompareOutline className="text-4xl" />
        </button>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </div>
      <div className="relative inline-block">
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer" title='Whishist'>
          <CiHeart className="text-4xl" />
        </button>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </div>
      <div className="relative inline-block">
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer" title='Cart'>
          <RiShoppingCart2Line className="text-4xl" />
        </button>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </div>
    </div>
  )
}

export default CWC