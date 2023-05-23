



import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='flex flex-row '>
        <Link href="/" className=' flex flex-row justify-center items-center m-4' >
           <Image
            src="/sidebar/w.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer "
           
           />
           <h3>
            <span className="text-4xl   font-[18px]">Works</span>
           </h3>
        </Link>

        
    </div>
  )
}

export default Logo


