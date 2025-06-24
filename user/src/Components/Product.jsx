import React, { useState } from "react";
import produt1 from "../assets/product1.png";
import produt2 from "../assets/product2.png";
// import produt2 from '../assets/product2.png'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Product({ name }) {
  const [activeCategory, setActiveCategory] = useState("Fashion");
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-0">
        <ul className="flex items-center text-xl gap-10 text-gray-700 text-sm font-semibold text-2xl mb-5">
          {name?.map((ele, index) => (
            <li
              key={index}
              className={`hover:text-red-600 cursor-pointer ${
                activeCategory === ele ? "text-red-600" : ""
              }`}
              onClick={() => setActiveCategory(ele)}
            >
              {ele}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
          <div className="w-[30px] h-[30px] items-center justify-center flex border-[1px] border-gray-300 rounded-full shadow-md bg-white hover:bg-red-600 hover:text-white transition-all duration-500">
            <IoIosArrowBack className="text-xl cursor-pointer font-semibold" />
          </div>
          <div className="w-[30px] h-[30px] items-center justify-center flex border-[1px] border-gray-300 rounded-full shadow-md bg-white hover:bg-red-600 hover:text-white transition-all duration-1000">
            <IoIosArrowForward className="text-lg cursor-pointer font-semibold" />
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0  ${
          name[0] == "Deal of the day"
            ? "border-3 border-red-600"
            : "border border-gray-300"
        }`}
      >
        <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>
        <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>
        <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>
         <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>
         <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>
         <div className={`relative group border-r-2 border-gray-300`}>
          <div className="px-4  w-full h-60 bg-white flex items-center justify-center relative">
            {/* <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea beatae animi, commodi alias cumque sed. Tempore voluptate soluta dicta id eius, debitis facere, fugiat veniam aliquam voluptatem iure doloremque.</p> */}
            <img
              src={produt1}
              alt=""
              className="absolute group-hover:opacity-0 transition-all duration-500"
            />
            <img src={produt2} alt="" className="hover:opacity-100 " />
          </div>
          <div>
            <p className="absolute top-3 left-4 text-red-500 bg-red-600 text-white text-[11px] p-1 px-2 rounded-sm">
              -12%
            </p>
            <p className="absolute top-10 left-1 transition-all duration-500 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:left-4 text-red-500 bg-green-600 text-white text-[11px] p-1 px-[10px] rounded-sm">
              New
            </p>
            <ul className="flex gap-1 ml-5 mb-3 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[18px] h-[18px] bg-gray-200 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-red-500 rounded-full border-[1px] border-gray-300"></li>
              <li className="w-[18px] h-[18px] bg-yellow-500 rounded-full border-[1px] border-gray-300"></li>
            </ul>
            <ul className="ml-5 mb-1 text-3xl absolute -top-2 right-2 gap-2 group-hover:top-2 invisible group-hover:visible transition-all duration-500 opacity-0 group-hover:opacity-100">
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group transition-all duration-300 cursor-pointer">
                <CiHeart className="text-xl font-normal hover:text-2xl cursor-pointer" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <IoGitCompareOutline className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <RiShoppingCart2Line className="text-xl font-normal" />
              </li>
              <li className="w-[35px] h-[35px] m-2 border-[1px] border-gray-300 rounded-full flex items-center justify-center mb-3 hover:bg-red-500 hover:text-white hover:font-semibold group trnsition-all duration-300 cursor-pointer">
                <MdZoomOutMap className="text-xl font-normal" />
              </li>
            </ul>
          </div>
          <div className="ml-5">
            <p className="text-gray-500">Initech space</p>
            <p className="text-md mt-2">
              Apple Smart Watch / Midnight Aluminum
            </p>
            <ul className="flex gap-1 mb-3 mt-3">
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
            <p className="mb-7 text-red-600 font-semibold">
              <span className="text-gray-500 mr-2 font-normal">
                <del>$58.00</del>
              </span>
              $51.40
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Product;
