import React from 'react'
import mycom from '../assets/mountain-fox-vector-graphics.jpg'
import { CiHeart } from 'react-icons/ci'
import { IoGitCompareOutline } from 'react-icons/io5'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { MdZoomOutMap } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
const MyCompare = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium mb-8'>Products Comparison</h1>
            <table className='table-auto w-full '>
                <tbody className=' w-[50%] border-[1px] border-gray-300'>
                    <tr>
                        {/* Left cell with label */}
                        <td className="align-top border-[1px] border-gray-300 p-2 w-[2%] font-medium pt-5 text-gray-600">
                            Features:
                        </td>

                        {/* Right cell with image */}
                        <td className="align-top  w-[100px]">
                            <div className={`relative border-r-[1px] border-gray-300 w-[50%]`}>
                                <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
                                    <img
                                        src={mycom}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="ml-5">
                                    <p className="text-gray-500">Initech space</p>
                                    <p className="text-md mt-2">
                                        Apple Smart Watch / Midnight Aluminum
                                    </p>
                                    <p className="pb-5 text-red-600 font-semibold">
                                        <span className="text-gray-500 mr-2 font-normal">
                                            <del>$58.00</del>
                                        </span>
                                        $51.40
                                    </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* Left cell with label */}
                        <td className="align-top border-[1px] border-gray-300 p-2 w-[2%] font-medium pt-5 text-gray-600">
                            Composition 
                        </td>

                        {/* Right cell with image */}
                        <td className="align-top  w-[100px]">
                            <div className={`relative border-r-[1px] border-t-[1px] border-gray-300 w-[50%] p-4 text-gray-500`}>
                                <p>Cotton</p>
                            </div>
                        </td>
                    </tr>
                      <tr>
                        {/* Left cell with label */}
                        <td className="align-top border-[1px] border-gray-300 p-2 w-[2%] font-medium pt-5 text-gray-600">
                            Property
                        </td>

                        {/* Right cell with image */}
                        <td className="align-top  w-[100px]">
                            <div className={`relative border-r-[1px] border-t-[1px] border-gray-300 w-[50%] p-4 text-gray-500`}>
                                <p>Removable cover</p>
                            </div>
                        </td>
                    </tr>
                      <tr>
                        {/* Left cell with label */}
                        <td className="align-top border-[1px] border-gray-300 p-2 w-[2%] font-medium pt-5 text-gray-600">
                           Style	
                        </td>

                        {/* Right cell with image */}
                        <td className="align-top  w-[100px]">
                            <div className={`relative border-r-[1px] border-t-[1px] border-gray-300 w-[50%] p-4 text-gray-500`}>
                                <p>Classic</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="border-2 border-gray-300 rounded-md shadow-sm"> */}
            {/* <div className='border-2 border-gray-300 w-[50%]'>
                    <div className=' flex items-center justify-between '>
                        <div className="border-r px-4 py-2 font-medium ">Composition</div>
                        <div>
                            <img
                                src={mycom}
                                alt="Pendant Light"
                                className="w-24 h-24 object-contain"
                            />

                        </div>
                    </div>
                </div> */}
            {/* <div className='flex border-l-2 border-gray-300'>
    <h2 className="font-semibold mb-4">Features:</h2>
    <div className='border-l-2 border-gray-300 pl-4'>
        <img
        src={mycom}
        alt="Pendant Light"
        className="w-24 h-24 object-contain"
      />
    </div>
  </div> */}

            {/* <div className=" border rounded-md">
    <div className="col-span-2 flex gap-4 p-4">
      <img
        src={mycom}
        alt="Pendant Light"
        className="w-24 h-24 object-contain"
      />
      <div>
        <h3 className="font-medium">Pendant Light Lamps for...</h3>
        <p className="text-sm text-gray-600">
          We denounce with righteous indignation and dislike men...
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="line-through text-gray-400">$92.00</span>
          <span className="text-red-500 font-bold">$84.64</span>
        </div>
      </div>
    </div>
    <div className="flex justify-end p-4">
      <button className="text-red-600 hover:text-red-800">
        🗑️
      </button>
    </div>
  </div>

    {/* Product Details Table */}
            {/* <div className="col-span-3 border-t">
      <div className="grid grid-cols-2 text-sm">
        
        <div className="border px-4 py-2 font-medium">Composition</div>
        <div className="border px-4 py-2">Cotton</div>

        <div className="border px-4 py-2 font-medium">Property</div>
        <div className="border px-4 py-2">Removable cover</div>

        <div className="border px-4 py-2 font-medium">Style</div>
        <div className="border px-4 py-2">Classic</div>
      </div>
    </div> */}
            {/* </div> */}

            {/* Continue Shopping */}
            <div className="mt-4">
                <button className="text-sm text-black hover:underline">
                    ← Continue Shopping
                </button>
            </div>
        </div>

    )
}

export default MyCompare