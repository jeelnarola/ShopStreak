import React from 'react'
import user1 from '../assets/user1 (1).jpg';
function ClientSay() {
  return (
    <div>
        <h1 className='font-semibold text-2xl'>What Our Clients Say</h1>
        <div className='grid grid-cols-3 gap-5 my-10'>
            <div className=' border-[1px] border-gray-400 p-7 rounded-lg shadow-lg '>
                <div className='flex items-center gap-3'>
                    <img src={user1} alt="" className='rounded-full w-18 h-20 ml-5'/>
                    <div>
                        <p className='font-semibold text-lg'>Patrick Goodman</p>
                        <p className='text-gray-500'>Manager</p>
                    </div>
                </div>
                <p className='px-3 py-5 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text randomised words which dont look even slightly believable</p>
            </div>
            <div className=' border-[1px] border-gray-400 p-7 rounded-lg shadow-lg'>
                <div className='flex items-center gap-3'>
                    <img src={user1} alt="" className='rounded-full w-18 h-20 ml-5'/>
                    <div>
                        <p className='font-semibold text-lg'>Patrick Goodman</p>
                        <p className='text-gray-500'>Manager</p>
                    </div>
                </div>
                <p className='px-3 py-5 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text randomised words which dont look even slightly believable</p>
            </div>
            <div className=' border-[1px] border-gray-400 p-7 rounded-lg shadow-lg'>
                <div className='flex items-center gap-3'>
                    <img src={user1} alt="" className='rounded-full w-18 h-20 ml-5'/>
                    <div>
                        <p className='font-semibold text-lg'>Patrick Goodman</p>
                        <p className='text-gray-500'>Manager</p>
                    </div>
                </div>
                <p className='px-3 py-5 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text randomised words which dont look even slightly believable</p>
            </div>
        </div>
    </div>
  )
}

export default ClientSay