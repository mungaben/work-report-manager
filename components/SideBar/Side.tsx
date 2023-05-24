



import React from 'react'
import Logo from './Logo'
import Link from 'next/link' 

const Side = () => {
  return (
  <div className=' h-full w-full flex flex-col md:space-y-4  '>
    <div>
     <Logo/>
    </div>
    <div className=' flex  justify-start items-start transition '>
      <Link href={"/"}>
        <div className=' bg-[#377D77] P-3 mx-4 rounded-md hover:translate-x-6'>
          <h2 className=' text-[#333333] text-2xl p-2  '>
            Dashboard
          </h2>
        </div>
      </Link>
      
    </div>
    <div className='flex  justify-start items-start transition w-full '>
    <Link href={"/Reports/Report"}>
        <div className=' bg-[#377D77] P-3 mx-4 rounded-md hover:translate-x-6'>
          <h2 className=' text-[#333333] text-2xl p-2  '>
            Reports
          </h2>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default Side