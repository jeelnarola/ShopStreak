import React, { useState } from "react";
import product from "../assets/product1.png";
import { IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import PurchaseCartProce from "./PurchaseCartProce";
import { Link, Outlet, useLocation } from "react-router-dom";
function MyCart() {
  const location = useLocation();
  const [show, setShow] = useState(true);
  
  return (
    <div className="container mx-auto">
      <div className="m-5 my-10 flex gap-10">
        <Outlet/>
        

        <div className="w-[30%] border border-gray-300 rounded-md overflow-hidden">
          <div className="py-5 px-5 text-red-500 font-medium border-b-1 border-gray-300">
            <div className="flex justify-between text-md pt-5">
              <p className="text-black font-medium pb-2">1 item</p>
              <p>$86.00</p>
            </div>
            <div className="flex justify-between text-md">
              <p className="text-black font-medium">Shipping</p>
              <p>$7.00</p>
            </div>
          </div>
          <div className="py-5 px-5 text-red-500 font-medium ">
            <div className="flex justify-between text-md">
              <p className="text-black font-medium pb-2">Total (tax excl.)</p>
              <p>$93.00</p>
            </div>
            <div className="flex justify-between text-md">
              <p className="text-black font-medium pb-2">Total (tax incl.)</p>
              <p>$93.00</p>

            </div>
            <div className="flex justify-between text-md">
              <p className="text-black font-medium pb-2">Taxes:</p>
              <p>$0.00</p>
            </div>
            <p className="font-normal underline cursor-pointer">Have a promo code?</p>
            {
             location.pathname === "/cart"  && (
                <Link to={'summary'} className="uppercase block mx-auto bg-[#e72d23] text-white px-4 py-[6px] px-8 rounded hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-blue-300 uppercase mt-10 cursor-pointer text-lg">
              <div className="flex items-center justify-center m-[10px]" onClick={()=>setShow(!show)}>
                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                </div>
                <div class="ml-2">   proceed to checkout</div>
              </div>
                </Link>

              )
            }

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MyCart;
