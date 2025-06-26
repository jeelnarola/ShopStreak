import React from "react";
import { IoList } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import product1 from "../assets/product1.png";
const MyWishlists = () => {
  return (
    <div className=" mx-auto border-b-[1px] border-gray-300 py-4 mb-10">
      <nav className="bg-gray-100 py-10">
        <ul className="flex container mx-auto ">
          <li className="border-r-[1px] border-gray-400 px-2 cursor-pointer hover:text-red-500 transition-all duration-200">
            Home
          </li>
          <li className="border-r-[1px] border-gray-400 px-2 cursor-pointer hover:text-red-500 transition-all duration-200 ">
            My Account
          </li>
          <li className="text-gray-500 px-2">wishlist</li>
        </ul>
      </nav>

      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-medium mb-8">New wishlist</h1>
        <div className="border-[1px] border-gray-300 w-[100%] p-4 rounded-sm">
          <h2 className="text-sm fotn-bold">Name</h2>
          <form action="" className="m-2">
            <input
              type="text"
              className="w-[100%] border-[1px] border-gray-300 p-2 rounded-sm focus:outline-none mt-2"
              placeholder="Enter name of new wishlist"
            />
            <button className=" mt-5 bg-[#e72d23] text-white px-4 py-[6px] px-8 rounded hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-blue-300 uppercase ml-2 mt-3 cursor-pointer text-lg opacity-80 transition-all duration-200">
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto">
        <table className="w-[100%] border-[1px] border-gray-300">
          <thead className="bg-gray-200 p-2 ">
            <tr className="p-10">
              <td className="p-2">Name</td>
              <td className="p-2">Quantity</td>
              <td className="p-2">Created</td>
              <td className="p-2">Direct Link</td>
              <td className="p-2">Default</td>
              <td className="p-2"> Delete</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-gray-200">
              <td className="p-3 flex items-center cursor-pointer">
                <IoList className="text-xl" />
                <p className="pl-2 text-md">
                  Apple Smart Watch / Midnight Aluminum
                </p>
              </td>
              <td className="px-6 text-gray-600">1</td>
              <td className="text-gray-600">2025-06-25 14:29:47</td>
              <td className="text-black px-6">View</td>
              <td className="text-gray-600 px-6">
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <MdDelete className="mx-6 cursor-pointer hover:text-red-500 " />
              </td>
            </tr>
            <tr>
              <td className="p-3 flex items-center cursor-pointer">
                <IoList className="text-xl" />
                <p className="pl-2 text-md">
                  Apple Smart Watch / Midnight Aluminum
                </p>
              </td>
              <td className="px-6 text-gray-600">1</td>
              <td className="text-gray-600">2025-06-25 14:29:47</td>
              <td className="text-black px-6">View</td>
              <td className="text-gray-600 px-6">
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <MdDelete className="mx-6 cursor-pointer hover:text-red-500 " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container mx-auto mt-10 ">
        <div className="relative w-[200px] p-8">
          <img src={product1} alt="" className="w-[200px] h-[150px]" />
          <MdDelete className="mx-6 cursor-pointer hover:text-red-500 absolute top-0 right-0 text-xl" />
          <p className="text-center pt-3 hover:text-red-500 cursor-pointer">
            Apple Smart Watch /...
          </p>
          <button className="block mx-auto mt-3 bg-[#e72d23] text-white px-4 py-[6px] px-8 rounded hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-blue-300 uppercase  cursor-pointer text-lg opacity-80 transition-all duration-200">
            MOVE
          </button>
        </div>
      </div>
      <div className="container mx-auto flex mb-10">
        <p className="pr-3 hover:text-red-500 cursor-pointer">
          Back to Your Account
        </p>
        <p className="hover:text-red-500 cursor-pointer">Home</p>
      </div>
    </div>
  );
};

export default MyWishlists;
