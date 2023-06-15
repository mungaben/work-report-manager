

"use client"

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import MessgeForm from '../Dashoboard/MessgeForm';
import { useMessageStore } from '@/app/utils/Stores/Messages';


import axios from 'axios';
import { useSession } from 'next-auth/react';

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
 const { data: session, status } = useSession()
 console.log("session data ",session);
 const userid=session?.user?.id
 console.log("userid",userid);
 
  const url = "http://localhost:3000/api/Messages"
  const { message, addMessage, deleteMessage, setMessage } = useMessageStore()
  console.log("meassge",message);
  const inboxmessages = message.filter((item) => item.receiver?.id === userid)
  console.log("inboxmessages",inboxmessages);
  
  


  //   console.log("message", message);
  // const getallmessages = useCallback(async() => {
  //   const data=await axios.get(url)

  // setMessage(data.data)

  // },[message])
  // getallmessages()

useEffect(() => {}, [message])
  return (
    <div className=' w-full flex flex-col  transition  justify-start ml-5  '>
      <div className='text-[#333333]/90 text-4xl  text-start  p-2 hover:underline font-semibold m-4 -ml-5 justify-start items-center  '>Message</div>
      <div className=' w-full flex justify-start flex-col '>
        {inboxmessages?.slice(0,2).map((item) => (
          <div key={item.id} className='transition  flex-1 justify-start   p-1 mx-5 pr-5 space-y-5 my-3 overflow-y-auto overflow-x-auto' >
            <div className=' flex flex-row mx-2   justify-start items-start mr-5  bg-[#878787]/60 rounded-lg  '>
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


                <p className=' text-start ml-4 items-start justify-start w-full break-words truncate'>{item.content}</p>
                <div>{

                  <MessgeForm receiverId={item?.authorId} />
                }

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