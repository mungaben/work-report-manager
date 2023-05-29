



import React from 'react'
import Image from 'next/image';
export const data=[
      {
        "id": 1,
        "name": "John Doe",
        "avatar": "https://avatars1.githubusercontent.com/u/105234?v=4",
        "message": "Hello, how are you? I'm a developer and I'm a great developer"
      },
      {
        "id": 2,
        "name": "John Doe",
        "avatar": "https://avatars1.githubusercontent.com/u/105234?v=4",
        "message": "Hello, how are you? I'm a developer and I'm a great developer"
      }


    ]
  

const Messages = () => {
  return (
    <div className=' w-full flex flex-col  transition bg-green-400  '>
        <div className='text-[#333333]/90 text-4xl mx-4 text-center  p-2 hover:underline font-semibold  '>Message</div>
        <div className=' w-full  '>
            {data.map((item)=>(
                <div key={item.id} className='transition w-full flex-1 justify-center  '>
                    <div className=' flex flex-row m-2  w-full'>
                       <Image
                       src={item.avatar}
                       width={20}
                       height={20}
                       alt="avatar"
                       className='rounded-full m-2 justify-center items-center  '
                       />
                       <p className='text-3xl text-center items-center  tracking-wider  '>{item.name}</p>
                    </div>
                    <div className=' text-center items-center p-2 m-2  '>
                        <p className='text-xl text-center w-full break-words truncate'>{item.message}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Messages