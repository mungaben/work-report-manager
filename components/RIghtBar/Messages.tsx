



import React from 'react'
import Image from 'next/image';
import MeassgeForm from '../Dashoboard/MeassgeForm';
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
    <div className=' w-full flex flex-col  transition  justify-start ml-5  '>
      <div className='text-[#333333]/90 text-4xl  text-start  p-2 hover:underline font-semibold m-4 -ml-5 justify-start items-center  '>Message</div>
      <div className=' w-full flex justify-start flex-col '>
        {data.map((item) => (
          <div key={item.id} className='transition  flex-1 justify-start   p-1 mx-5 pr-5 space-y-5 my-3'>
            <div className=' flex flex-row mx-2   justify-start items-start mr-5  bg-[#878787]/60 rounded-lg  '>
              <Image
                src={item.avatar}
                width={50}
                height={50}
                alt="avatar"
                className='rounded-full object-center object-cover justify-center items-center  '
              />
              <div className=' flex w-full flex-col space-x-0 space-y-0 justify-center  mx-4   '>
               <div className='w-full'>
               <p className=' text-start items-center  tracking-wider text-2xl font-medium  '>{item.name}</p>

               </div>
                

                <p className=' text-start ml-4 items-start justify-start w-full break-words truncate'>{item.message}</p>
                <div>
                <MeassgeForm/>
                </div>


              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages