
export const MessageData = [
    {
        id: 1,
        title: 'work Title',
        description: 'Kudos! work Description',
        image: '/sidebar/w.png',
        date: '2022-07-10'
    },
    {
        id: 2,
        title: 'work Title',
        description: 'Kudos! work Description',
        image: '/sidebar/w.png',
        date: '2022-07-10'
    },
    {
        id: 3,
        title: 'work Title',
        description: 'Kudos! work Description',
        image: '/sidebar/w.png',
        date: '2022-07-10'
    },
    {
        id: 4,
        title: 'work Title',
        description: 'Kudos! work Description',
        image: '/sidebar/w.png',
        date: '2022-07-10'
    },

]


import { AiFillEye } from 'react-icons/ai'

import React from 'react'
import Image from 'next/image'

const Messages = () => {
    return (
        <div className=' flex  flex-col w-full top-0 bg-[#fafafafa] shadow-md m-3 ' >
            <div className=' flex flex-row  mb-4 w-full  bg-slate-400 justify-between '>
                <div className=''>
                    <h1 className=' font-[18px] text-[#333333]  ' >Messages</h1>
                </div>
                <div>
                    <h2 className=' font-[14px] text-[#333333] ' >Message</h2>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-start '>
                {/* activity with image  and description on clivck  image of works=>matched color  loop all activites for user has done oprder by datae recent  */}
                <div className=' flex flex-row  '  >
                    <Image
                        src={'/sidebar/w.png'}
                        alt="work"
                        width={50}
                        height={50}
                        className=' rounded-full border-[1px] border-[#333333]  m-2'
                    />
                    <div className=' flex flex-col items-start justify-center  flex-1'>
                        <h3 className='font-[18px]  text-[#333333] ' >
                            work Title
                        </h3>
                        <p className=' font-[12px] text-[#333333] ' >
                            Kudos! Lorem ipsum dolor sit 
                        </p>

                    </div>
                    <div className=' flex items-center justify-center mx-3   '>
                        <AiFillEye color='#37CB87' size={25} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Messages