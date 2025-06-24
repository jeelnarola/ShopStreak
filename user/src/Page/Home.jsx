import React from 'react';
import banner1 from '../assets/sample-1.jpg'
import subBanner1 from '../assets/sub-banner-1.jpg'
import subBanner2 from '../assets/sub-banner-2.jpg'
import subbanner from '../assets/subBanner.jpg'
import cms from '../assets/cms-banner-1.jpg'
import cms4 from '../assets/cms-banner-4.jpg'

import { FaTruckFast } from "react-icons/fa6";
import Product from '../Components/Product';
import Header from '../Components/Header';
import Topheader from '../Components/Topheader';

export default function Home() {
  const items = [
    { name: 'Smart Tablet', image: subbanner },
    { name: 'Crepe T-Shirt', image: subbanner },
    { name: 'Leather Watch', image: subbanner },
    { name: 'Rolling Diamond', image: subbanner },
    { name: 'Wooden Chair', image: subbanner },
    { name: 'Sneakers Shoes', image: subbanner },
    { name: 'Purse', image: subbanner },
  ];


  return (
    <div className=" ">
      <Topheader/>
      {/* <Header/> */}
      <div className='bg-[#f5f5f5f7] py-4'>
        <div className='container mx-auto '>
          <div className="flex flex-col md:flex-row gap-6  ">
            {/* Left Big Banner */}
            <div className="w-[1000px] bg-blue-100 rounded-xl relative ">
              <img
                src={banner1}
                alt="Modern Chair"
                className="w-full h-full"
              />
              <div className="md:text-left absolute top-1/5 px-7 left-1/2 translate-x-1/10 translate-x-1/15 ">
                <p className="text-black text-lg lading-9">Big Saving Days Sale</p>
                <h2 className="text-[45px]  font-bold my-2">
                  Women Solid Round
                  <p>Green T-Shirt</p>
                </h2>
                <p className="text-black">
                  Starting At Only  <span className="text-red-500 font-bold text-3xl">$59.00</span>
                </p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Right Two Product Cards */}
            <div className="flex flex-col gap-4 w-full md:w-96 ">
              {/* Card 1 */}
              <div className="bg-purple-100 rounded-xl relative flex items-center justify-between w-full overflow-hidden">
                <img
                  src={subBanner1}
                  alt="Samsung VR"
                  className="w-full object-contain hover:scale-125 transition-all duration-300"
                />
                <div className="md:text-left absolute px-7 top-15 left-0">
                  <h3 className="font-semibold text-2xl">Marcel Dining  <p>Room Chair</p></h3>
                  <p className="text-red-500 font-bold text-lg">$129.00</p>
                  <button className="text-sm text-black underline mt-1 ">SHOP NOW</button>
                </div>

              </div>

              {/* Card 2 */}
              <div className="bg-purple-100 rounded-xl relative flex items-center justify-between w-full overflow-hidden">
                <img
                  src={subBanner2}
                  alt="Samsung VR"
                  className="w-full object-contain hover:scale-125 transition-all duration-300"
                />
                <div className="md:text-left absolute px-7 top-15 right-0">
                  <h3 className="font-semibold text-2xl">Marcel Dining  <p>Room Chair</p></h3>
                  <p className="text-red-500 font-bold text-lg">$129.00</p>
                  <button className="text-sm text-black underline mt-1 ">SHOP NOW</button>
                </div>

              </div>
            </div>
          </div>
          <div className="w-full flex items-center my-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 group">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-[190px] bg-white rounded-md shadow-sm p-4 text-center hover:shadow-md cursor-pointer transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain w-full h-32 mb-2 hover:scale-110 transition-transform duration-1000"
                  />
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className='container mx-auto my-20 '>
        <div class="px-10 border border-red-400 rounded-md h-[100px] rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 text-center md:text-left gap-4">
          {/* <!-- Left: Icon + Text --> */}
          <div class="flex items-center gap-2">
            <FaTruckFast className="w-17 h-12" />
            <span class="font-bold text-black text-3xl mr-20 ml-10">FREE SHIPPING</span>
            <div class="hidden md:block w-px bg-gray-300 h-6"></div>
          </div>

          {/* <!-- Divider (Only visible in md+) --> */}

          {/* <!-- Center: Description --> */}
          <div class="text-lg text-gray-800">
            Free Delivery Now On Your First Order and over $200
          </div>

          {/* <!-- Divider (Only visible in md+) --> */}
          <div class="hidden md:block w-px bg-gray-300 h-6"></div>

          {/* <!-- Right: Price --> */}
          <div class="font-bold text-black text-3xl">
            - ONLY $200*
          </div>
        </div>


      </div>
      <div className="container mx-auto my-10">
        <div class="grid grid-cols-3 gap-4 justify-center p-6 bg-white">
          {/* <!-- Card 1 --> */}
          <div class="flex items-center bg-blue-100 rounded-md w-full  gap-4 relative overflow-hidden cursor-pointer group">
            <img src={cms} alt="Samsung S22" class="w-full h-auto object-contain hover:scale-115 transition-all duration-2000" />
            <div className='absolute top-10 right-10 text-black px-2 py-1 rounded-bl-md'>
              <h3 class="font-semibold text-2xl">S22 Samsung<br />Smartphone</h3>
              <p class="text-red-500 font-bold">$250.00</p>
              <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="flex items-center bg-blue-100 rounded-md w-full  gap-4 relative overflow-hidden cursor-pointer group">
            <img src={cms} alt="Samsung S22" class="w-full h-auto object-contain hover:scale-115 transition-all duration-2000" />
            <div className='absolute top-10 right-10 text-black px-2 py-1 rounded-bl-md'>
              <h3 class="font-semibold text-2xl">S22 Samsung<br />Smartphone</h3>
              <p class="text-red-500 font-bold">$250.00</p>
              <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="flex items-center bg-blue-100 rounded-md w-full  gap-4 relative overflow-hidden cursor-pointer group">
            <img src={cms} alt="Samsung S22" class="w-full h-auto object-contain hover:scale-115 transition-all duration-2000" />
            <div className='absolute top-10 right-10 text-black px-2 py-1 rounded-bl-md'>
              <h3 class="font-semibold text-2xl">S22 Samsung<br />Smartphone</h3>
              <p class="text-red-500 font-bold">$250.00</p>
              <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a>
            </div>
          </div>
        </div>

      </div>
      <div className="container mx-auto my-20">
      <Product/>
      </div>
      <div className="container mx-auto my-20">
        <div class="grid grid-cols-2 gap-4 justify-center bg-white">
          {/* <!-- Card 1 --> */}
          <div class="flex items-center bg-blue-300 rounded-md w-full h-[350px] gap-4 relative overflow-hidden cursor-pointer group">
            <img src={cms4} alt="Samsung S22" class="w-full h-full object-cover hover:scale-115 transition-all duration-2000" />
            <div className='absolute top-10 left-10 text-black px-2 py-1 rounded-bl-md'>
              <p className='mt-10'>Save Up To 20% Off</p>

              <h3 class="font-semibold text-4xl mt-5">Santa Lucia Three<br />Seater Sofa</h3>
              {/* <p class="text-red-500 font-bold">$250.00</p> */}
              {/* <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a> */}
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="flex items-center bg-blue-300 rounded-md w-full h-[350px] gap-4 relative overflow-hidden cursor-pointer group">
            <img src={cms4} alt="Samsung S22" class="w-full h-full object-cover hover:scale-115 transition-all duration-2000" />
            <div className='absolute top-10 left-10 text-black px-2 py-1 rounded-bl-md'>
              <p className='mt-10'>Save Up To 20% Off</p>

              <h3 class="font-semibold text-4xl mt-5">Santa Lucia Three<br />Seater Sofa</h3>
              {/* <p class="text-red-500 font-bold">$250.00</p> */}
              {/* <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a> */}
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
