

"use client";

import React from 'react'
import Image from 'next/image';

const profile = () => {
  return (
    <div className=' flex w-full items-center justify-center top-5  flex-col'>
      <Image
      src={"https://avatars.githubusercontent.com/u/101176342?v=4"}
      width={70}
      height={70}
      alt="profile"
      className="rounded-full ring-4 ring-white  border-2 border-white hover:ring-white hover:border-[#333333] hover:bg-[#F5F5F5] w-full h-full"
      />
      <div>
        <h4>
          {/* name4 under image centred */}
          <span className=' p-2 mt-2 flex justify-center items-center text-[#333333] text-2xl capitalize' >
            justify  centere name
          </span>
        </h4>

      </div>
    </div>
  )
}

export default profile