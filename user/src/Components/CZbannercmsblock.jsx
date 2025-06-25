import React from 'react'
import cms4 from "../assets/cms-banner-4.jpg";
function CZbannercmsblock() {
  return (
    <div>
        <div class="grid grid-cols-2 gap-4 justify-center bg-white">
          {/* <!-- Card 1 --> */}
          <div class="flex items-center bg-blue-300 rounded-md w-full h-[350px] gap-4 relative overflow-hidden cursor-pointer group">
            <img
              src={cms4}
              alt="Samsung S22"
              class="w-full h-full object-cover hover:scale-115 transition-all duration-2000"
            />
            <div className="absolute top-10 left-10 text-black px-2 py-1 rounded-bl-md">
              <p className="mt-10">Save Up To 20% Off</p>

              <h3 class="font-semibold text-4xl mt-5">
                Santa Lucia Three
                <br />
                Seater Sofa
              </h3>
              {/* <p class="text-red-500 font-bold">$250.00</p> */}
              {/* <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a> */}
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="flex items-center bg-blue-300 rounded-md w-full h-[350px] gap-4 relative overflow-hidden cursor-pointer group">
            <img
              src={cms4}
              alt="Samsung S22"
              class="w-full h-full object-cover hover:scale-115 transition-all duration-2000"
            />
            <div className="absolute top-10 left-10 text-black px-2 py-1 rounded-bl-md">
              <p className="mt-10">Save Up To 20% Off</p>

              <h3 class="font-semibold text-4xl mt-5">
                Santa Lucia Three
                <br />
                Seater Sofa
              </h3>
              {/* <p class="text-red-500 font-bold">$250.00</p> */}
              {/* <a href="#" class="text-sm underline font-medium text-black hover:text-blue-600">SHOP NOW</a> */}
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CZbannercmsblock