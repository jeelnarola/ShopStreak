import React from 'react'
import leftimg from '../assets/left-banner-1.jpg'
import product1 from '../assets/product1.png'
import { FaStar } from 'react-icons/fa'
import MyCompare from './MyCompare'
function CZleftbanner() {
    return (
        <div className='container mx-auto flex mt-10'>
            <div className='w-[400px] mb-20 ml-10'>
                <img src={leftimg} alt="" className='w-full rounded-lg' />
                <div className='mt-10  rounded-lg'>
                    <ul className='border-[1px] border-gray-300 rounded-lg'>
                        <p className='font-semibold border-b-[1px] border-gray-300 rounded-t-lg p-4'>New Products</p>
                        <li className='flex items-center gap-4  px-3 pt-1 hover:bg-gray-100 cursor-pointer'>
                            <img src={product1} alt="" className='w-25' />
                            <div>
                                <p className='text-sm hover:text-red-500 transition-all duration-200'>Plastic Bamboo Dustpan & Brush</p>
                                <ul className="flex gap-1 mb-2 mt-2">
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-gray-400" />
                                    </li>
                                </ul>
                                <p className="mb-1 text-red-600 font-semibold">
                                    <span className="text-gray-500 mr-2 font-normal">
                                        <del>$58.00</del>
                                    </span>
                                    $51.40
                                </p>
                            </div>
                        </li>
                        <li className='flex items-center gap-4  px-3 pt-1 hover:bg-gray-100 cursor-pointer'>
                            <img src={product1} alt="" className='w-25' />
                            <div>
                                <p className='text-sm hover:text-red-500 transition-all duration-200'>Plastic Bamboo Dustpan & Brush</p>
                                <ul className="flex gap-1 mb-2 mt-2">
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-gray-400" />
                                    </li>
                                </ul>
                                <p className="mb-1 text-red-600 font-semibold">
                                    <span className="text-gray-500 mr-2 font-normal">
                                        <del>$58.00</del>
                                    </span>
                                    $51.40
                                </p>
                            </div>
                        </li>
                        <li className='flex items-center gap-4  px-3 pt-1 hover:bg-gray-100 cursor-pointer'>
                            <img src={product1} alt="" className='w-25' />
                            <div>
                                <p className='text-sm hover:text-red-500 transition-all duration-200'>Plastic Bamboo Dustpan & Brush</p>
                                <ul className="flex gap-1 mb-2 mt-2">
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-yellow-500" />
                                    </li>
                                    <li>
                                        <FaStar className="text-gray-400" />
                                    </li>
                                </ul>
                                <p className="mb-1 text-red-600 font-semibold">
                                    <span className="text-gray-500 mr-2 font-normal">
                                        <del>$58.00</del>
                                    </span>
                                    $51.40
                                </p>
                            </div>
                        </li>
                        <li className='text-right text-sm font-semibold text-red-500 border-t-[1px] border-gray-300 rounded-b-lg p-2 hover:bg-gray-100 cursor-pointer'>
                            View All <span className='text-red-500'>Products</span>
                        </li>
                    </ul>
                </div>
                <div className='mt-10  rounded-lg'>
                    <ul className='border-[1px] border-gray-300 rounded-lg'>
                        <p className='font-semibold border-b-[1px] border-gray-300 rounded-t-lg p-4'>Blog Categories</p>
                        <li className='flex items-center gap-4  px-3 pt-1 hover:bg-gray-100 cursor-pointer'>
                            <div>
                                <ul className=" list-inside ml-3 text-md text-gray-800 pt-3">
                                    <li className='pb-2'>Ecommerce Trends</li>
                                    <li className='pb-1 pl-3'>- Shopping</li>
                                    <li className='pb-3 pl-3'>- Digital Market</li>
                                </ul>

                            </div>
                        </li>
                        </ul>
                </div>
            </div>
            <div className='w-[100%] mb-20 ml-10 '>
                <MyCompare />
            </div>
        </div>
    )
}

export default CZleftbanner