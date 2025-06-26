import React from 'react'

const MyWishlists = () => {
    return (
        <div className=' mx-auto'>
            <nav className='bg-gray-100 py-10'>
                <ul className='flex container mx-auto '>
                    <li className='border-r-[1px] border-gray-400 px-2 cursor-pointer hover:text-red-500 transition-all duration-200'>Home</li>
                    <li className='border-r-[1px] border-gray-400 px-2 cursor-pointer hover:text-red-500 transition-all duration-200 '>My Account</li>
                    <li className='text-gray-500 px-2'>wishlist</li>
                </ul>
            </nav>

            <div className='container mx-auto py-10'>
                <h1 className="text-2xl font-medium mb-8">New wishlist</h1>
                <div className='border-[1px] border-gray-300 w-[100%] p-4 rounded-sm'>
                    <h2 className="text-sm fotn-bold">Name</h2>
                    <form action="" className='m-2'>
                        <input type="text" className='w-[100%] border-[1px] border-gray-300 p-2 rounded-sm focus:outline-none mt-2' placeholder='Enter name of new wishlist'/>
                        <button className=" mt-5 bg-[#e72d23] text-white px-4 py-[6px] px-8 rounded hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-blue-300 uppercase ml-2 mt-3 cursor-pointer text-lg opacity-80 transition-all duration-200">Save </button>                   
                    </form>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default MyWishlists