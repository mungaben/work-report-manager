



import React from 'react'
import Image from 'next/image';
export const data = [
  {
    "id": 1,
    "name": "John Doe",
    "avatar": "https://avatars1.githubusercontent.com/u/105234?v=4",
    "message": " developer"
  },
  {
    "id": 2,
    "name": "John Doe",
    "avatar": "https://avatars1.githubusercontent.com/u/105234?v=4",
    "message": 'developer'
  }


]


const Messages = () => {
  return (
    <div className=' w-full flex flex-col  transition  justify-start  '>
      <div className='text-[#333333]/90 text-4xl mx-4 text-center  p-2 hover:underline font-semibold  '>Message</div>
      <div className=' w-full  bg-green-500 flex justify-start flex-col '>
        {data.map((item) => (
          <div key={item.id} className='transition w-full flex-1 justify-start  bg-red-500 m-4 p-1   '>
            <div className=' flex flex-row mx-2  w-full justify-start items-start mb-0 pb-0  '>
              <Image
                src={item.avatar}
                width={50}
                height={50}
                alt="avatar"
                className='rounded-full mx-2 mb-0 justify-center items-center  '
              />
              <div className=' flex w-full flex-col '>
               <div className='w-full'>
               <p className='text-3xl text-center items-center  tracking-wider  '>{item.name}</p>

               </div>
                

                <p className='text-xl text-center items-start justify-start w-full break-words truncate'>{item.message}</p>


              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages