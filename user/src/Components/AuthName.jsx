import React from 'react'

function AuthName() {
  return (
    <div className='flex items-center justify-center text-gray-900 text-md  '>
      <p className=' py-2 hover:text-[#e72d23] cursor-pointer '>Login </p>
      <span className='pl-1'>/</span>
      <p className='ml-1 hover:text-[#e72d23]'>Register</p>
    </div>
  )
}

export default AuthName