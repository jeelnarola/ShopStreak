import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center  h-[50px] px-4 lg:px-0 cursor-pointer">

      {/* Left: Categories */}
      <div className='flex items-center justify-between w-full lg:w-auto lg:px-4 cursor-pointer'>
        <div
          className="flex items-center justify-between w-[350px] px-4 text-gray-700 hover:text-gray-900  border-r border-gray-300"
          title="Shop By Categories"
        >
          <div className="flex items-center gap-2 lg:gap-4">
            <RiMenu2Fill className='text-xl' />
            <p className='uppercase font-semibold'>Shop By Categories</p>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-4 text-gray-700 text-sm font-semibold text-2xl ml-10">
            <li className="text-[16px] px-1 ">Home</li>
            <li className="text-[16px] px-1">Fashion</li>
            <li className="text-[16px] px-1">New Arrivals</li>
            <li className="text-[16px] px-1">All brands</li>
            <li className="text-[16px] px-1">Best deals</li>
            <li className="text-[16px] px-1">Blog</li>
          </ul>
        </nav>
      </div>

      {/* Right: Delivery Message */}
      <div className="text-[17px] text-gray-600 whitespace-nowrap font-bold flex items-center gap-2">
        <IoRocketOutline className='text-2xl' />
        <p>Free International Delivery</p>
      </div>
    </div>
  );
}

export default Header;
