import React from 'react'

function Search() {
  return (
    <div>
        <input type="text" className='border-[1px] border-gray-400 focus:outline-none p-2 pl-5 mt-3 ml-10 w-[600px] rounded-md'   placeholder="Search Product here..."/>
       <button className="bg-[#e72d23] text-white px-4 py-[6px] px-8 rounded hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-blue-300 uppercase ml-2 mt-3 cursor-pointer text-lg">
  Search
</button>

    </div>
  )
}

export default Search