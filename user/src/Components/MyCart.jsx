import React from "react";
import product from "../assets/product1.png";
import { IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
function MyCart() {
  return (
    <div className="container mx-auto">
      <div className="m-5 my-10">
        <div className="w-[70%] border border-gray-300 rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <td className="text-black p-3 border-b-[1px] border-gray-300">
                  Shopping Cart
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-7 px-10 flex justify-between ">
                  <img
                    src={product}
                    alt=".."
                    className="border-[1px] border-gray-300 w-[100px] rounded-md"
                  />
                  <div>
                    <ul>
                      <li className="text-md font-medium pb-2">
                        Cropped Satin Bomber Jacket
                      </li>
                      <li className="text-red-500 font-bold">$94.00</li>
                      <li className="text-gray-700">
                        <span className="text-md font-medium text-black pr-2">
                          Size:
                        </span>
                        Small
                      </li>
                      <li className="text-gray-700">
                        <span className="text-md font-medium text-black pr-2">
                          Color:
                        </span>
                        Black
                      </li>
                    </ul>
                    {/* <td></td>
                    <td>$94.00</td>
                    <td>Size: Small</td>
                    <td>Color: Black</td> */}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-[20px] h-[45px] p-1 px-5 border-1 border-gray-300"
                    />
                    <div className="">
                      <button className="block p-[2px] border-1 border-gray-300">
                        <IoIosArrowUp />
                      </button>
                      <button className="p-[2px] border-1 border-gray-300">
                        <IoIosArrowUp className="rotate-180" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-red-600 font-semibold">$0.00</p>
                  </div>
                  <div>
                    <MdDelete className="mx-6 cursor-pointer hover:text-red-500 text-2xl " />
                  </div>
                </td>
              </tr>
              {/* <tr></tr>  */}
            </tbody>
          </table>
        </div>
        <p className="py-5 text-md font-medium">Continue shopping</p>
      </div>
    </div>
  );
}

export default MyCart;
