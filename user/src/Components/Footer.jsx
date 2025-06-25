import React from 'react'
import { BsChatSquare } from "react-icons/bs";
function Footer() {
    return (
        <div className='flex flex-col md:flex-row  items-start bg-white '>
            <div className='w-[570px] border-r-2 border-gray-200 pr-25 '>
                <h2 className='text-xl font-bold pb-5'>Contact us</h2>
                <p className='text-gray-600 text-md pr-5 pb-3 w-full'>Classyshop - Mega Super Store
                    507-Union Trade Centre
                    France</p>
                <p className='text-gray-600 pb-3'>sales@yourcompany.com</p>
                <h1 className='text-2xl font-bold text-red-500'>(+91) 9876-543-210</h1>
                <p className='flex items-center pt-5'>
                    <span className='mr-2 '><BsChatSquare className='text-3xl text-red-500' /></span>
                    <span className='text-lg font-medium'>Online Chat <br></br>
                        Get Expert Help</span>
                </p>
            </div>
            <div className=' grid grid-cols-4 gap-10 pl-40'>
                <div clas>
                    <h2 className='text-xl font-bold pb-2 '>Products</h2>
                    <ul className='text-gray-600 text-md'>
                        <li className='pt-3'>Prices drop</li>
                        <li className='pt-3'>New products</li>
                        <li className='pt-3'>Best sales</li>
                        <li className='pt-3'>Contact us</li>
                        <li className='pt-3'>Sitemap</li>
                        <li className='pt-3'>Stores</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold pb-2 '>Our company</h2>
                    <ul className='text-gray-600 text-md'>
                        <li className='pt-3'>Delivery</li>
                        <li className='pt-3'>Legal Notice</li>
                        <li className='pt-3'>Terms and conditions of use</li>
                        <li className='pt-3'>About us</li>
                        <li className='pt-3'>Secure payment</li>
                        <li className='pt-3'>Login</li>
                    </ul>
                </div>
                <div className='w-[400px]  pr-25 '>
                    <h2 className='text-xl font-bold pb-5'>Subscribe to newsletter</h2>
                    <p className='text-gray-600 text-md pr-2 pb-4'>Subscribe to our latest newsletter to get news about special discounts.</p>
                    <p className='text-gray-600 pb-4'><input type="text" className='border-[1px] text-gray-400 w-[100%] p-2 ' placeholder='Your Email Address' /></p>
                    <button className='text-sm font-bold bg-red-500 text-white opacity-60 uppercase p-3 px-8 rounded-md'>Subscribe</button>
                    <p className='flex items-center pt-5'>
                        <span className='mr-2 mt-2 text-sm text-gray-600'><input type="checkbox" name="" id="" className='mr-2'/>I agree to the terms and conditions and the privacy policy</span>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer