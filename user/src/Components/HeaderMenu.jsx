import React from 'react'
import themeheder from '../assets/3-1_thumb.jpg'
function HeaderMenu() {
    return (
        <div>
            <nav>
                <ul className="flex items-center justify-center gap-4 text-gray-700 text-sm font-semibold text-2xl ml-10">
                    <li className="text-[16px] px-1 ">Home</li>
                    <li className="text-[16px] px-1 relative group">Fashion
                        <div className="absolute w-[600px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-md pb-5 z-10 top-13 -left-10 p-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-9 transition-all duration-400">


                            <div className='grid grid-cols-3 pb-4'>

                                <div>
                                    <span className='font-bold text-sm hover:text-red-500 transition-all duration-100'>Apparel</span>
                                    <ul className='text-md font-normal'>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>Smart Tablet</li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Crepe T-Shirt
                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            leather watch
                                        </li >
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Rolling Diamond
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='font-bold text-sm hover:text-red-500 transition-all duration-100'>
                                        Outerwear
                                    </span>
                                    <ul className='text-md  font-normal'>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Wooden Chair
                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>

                                            Sneakers Shoes

                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Purse
                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>

                                            Xbox Controller

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='font-bold text-sm hover:text-red-500 transition-all duration-100'>
                                        Footwear
                                    </span>
                                    <ul className='text-md font-normal'>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Leather Watch
                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Cabinet Table
                                        </li >
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Headphones
                                        </li>
                                        <li className='pt-2 hover:text-red-500 transition-all duration-100'>
                                            Sunglasses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <img src={themeheder} alt="" className=' w-[100%]' />
                        </div>
                    </li>
                    <li className="text-[16px] px-1">New Arrivals</li>
                    <li className="text-[16px] px-1 relative group">All brands
                        <div className="absolute w-[200px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-md pb-5 z-10 top-13 -left-10 p-5 pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-9 transition-all duration-400">

                            <div>
                                <ul className='text-md font-normal'>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Gadget Zone
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Initech space
                                    </li >
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Looney Tunes
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Massive Dynamic
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Pro Tech Gear
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Soylent Green
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        The Simpsons
                                    </li>
                                    <li className='pt-3 text-[16px]  hover:text-red-500 transition-all duration-100'>
                                        Weeds Capital
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li className="text-[16px] px-1">Best deals</li>
                    <li className="text-[16px] px-1">Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu