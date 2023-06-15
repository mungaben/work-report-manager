



import React from 'react'
import Image from 'next/image';
import { useMessageStore } from '@/app/utils/Stores/Messages';
import MeassgeForm from '../Dashoboard/MessgeForm';

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


const Recent = () => {
  const { message,addMessage,setMessage }=useMessageStore()
  console.log("uyguky",message);
  
  return (
    <div className=' w-full flex flex-col  transition  justify-start md:ml-5  '>
      <div className='text-[#333333]/90 text-4xl -ml-5  text-start  p-2 hover:underline font-semibold m-4 justify-start  items-center  '>Recent</div>
      <div className=' w-full flex justify-start flex-col items-start '>
        {message?.slice(0,4).map((item) => (
          <div key={item.id} className='transition  flex-1 justify-start items-start   p-1 mx-5 pr-5 space-y-5 my-3  bg-[#878787]/60 rounded-md'>
            <div className=' flex flex-row mx-2   justify-start items-start mr-5    rounded-lg  '>
              <Image
                src={'/sidebar/w.png'}
                width={50}
                height={50}
                alt="avatar"
                className='rounded-full object-center object-cover justify-center items-center  '
              />
              <div className=' flex w-full flex-col space-x-0 space-y-0 justify-center  mx-4   '>
               <div className='w-full'>
               <p className=' text-start items-center  tracking-wider text-2xl font-medium  '>{item.author?.name}</p>

               </div>
                

                <p className=' text-start ml-4 items-start justify-start truncate break-words max-md whitespace-pre-wrap'>{item.content.slice(0,10)}</p>



              </div>
             

            </div>
            <div>
            <MeassgeForm receiverId={item?.receiverId}/>
            </div>
          </div>
        ))}


        
      </div>
    </div>
  )
}

export default Recent