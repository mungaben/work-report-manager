

export const DataFeed = [
    {
        id: 1,
        image: '/sidebar/w.png',
        description: 'Action like delete,edit,add',
        date: '2022-07-22',
        time: '10:00',
    },
    {
        id: 2,
        image: '/sidebar/w.png',
        description: 'Action like delete,edit,add',
        date: '2022-07-22',
        time: '10:00',
    },
    {
        id: 3,
        image: '/sidebar/w.png',
        description: 'Action like delete,edit,add',
        date: '2022-07-22',
        time: '10:00',
    }

]


import { RiDeleteBin6Line } from 'react-icons/ri'
import Image from 'next/image'
import React from 'react'

const ActivityFeed = () => {
    return (
        <div className='w-full flex flex-col shadow-md m-4 rounded-md p-2 ' >
            <div className=' flex flex-row justify-between md:mb-3  '>
                <div>
                    <h1 className=' font-[18px] text-[#333333]  ' >Activity Feed</h1>
                </div>
                <div>
                    <h2 className=' font-[14px] text-[#333333] ' >Activity</h2>
                </div>
            </div>
            {
                DataFeed.map((item, index) =>( 
                    
                        <div key={item.id} className=' flex flex-col justify-center items-center  '>
                            {/* activity with image  and description on clivck  image of works=>matched color  loop all activites for user has done oprder by datae recent  */}
                            <div className=' flex flex-row  justify-center items-center '  >
                                <Image
                                    src={'/sidebar/w.png'}
                                    alt="work"
                                    width={50}
                                    height={50}
                                    className='rounded-full border-[1px] border-[#333333] m-1  '
                                />
                                <div className=' flex flex-col   '>
                                    <h3 className='font-[18px]  text-[#333333] ' >
                                        Action like delete,edit,add
                                    </h3>
                                    <p className=' font-[12px] text-[#333333] ' >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam!
                                    </p>

                                </div>
                                <div className=' m-1'>
                                    <RiDeleteBin6Line color='#FF5630' size={20} />
                                </div>
                            </div>
                            <hr className=' bg-[#333333] w-full h-1 m-0.5'/>
                        </div> ))
                  
        }
     
       
    </div>
    )
}

export default ActivityFeed