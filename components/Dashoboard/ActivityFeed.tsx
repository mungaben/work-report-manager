




import Image from 'next/image'
import React from 'react'

const ActivityFeed = () => {
  return (
    <div className='w-full ' >
        <div className=' flex flex-row justify-between  '>
        <div>
            <h1 className=' font-[18px] text-[#333333]  ' >Activity Feed</h1>
        </div>
        <div>
            <h2 className=' font-[14px] text-[#333333] ' >Activity</h2>
        </div>
        </div>
     
        <div className=' flex flex-col justify-center items-center '>
            {/* activity with image  and description on clivck  image of works=>matched color  loop all activites for user has done oprder by datae recent  */}
            <div className=' flex flex-row  '  >
               <Image
               src={'/sidebar/w.png'}
               alt="work"
               width={200}
               height={200}
               />
               <div className=' flex flex-col   '>
                <h3 className='font-[18px]  text-[#333333] ' >
                    Action like delete,edit,add
                </h3>
                <p  className=' font-[12px] text-[#333333] ' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam!
                </p>

               </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityFeed