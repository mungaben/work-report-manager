

"use client";

import React from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  console.log(session?.user?.name);
  return (
    <div className=' flex w-full items-center justify-center top-5  flex-col transition'>
      <Image
      src={"https://avatars.githubusercontent.com/u/101176342?v=4"}
      width={50}
      height={50}
      alt="profile"
      className="rounded-full flex  items-center justify-center ring-4 ring-white   border-2 border-white hover:ring-white hover:border-[#333333] hover:bg-[#F5F5F5] w-full h-full p-8 md:m-5"
      />
      <div>
        <h4 className=' flex flex-col items-center justify-center'>
          {/* name4 under image centred */}
          <span className=' p-2 mt-2 flex text-center justify-center items-center text-[#333333] text-2xl capitalize hover:underline' >
            {session?.user?.name}
          </span>
          <span >
            <span className=' p-2 text-[#333333] text-xl capitalize hover:underline justify-center items-center' >
              Director works
            </span>
          </span>
        </h4>

      </div>
    </div>
  )
}

export default Profile