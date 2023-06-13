"use client"
import axios, { AxiosResponse } from 'axios'
import { useActivitiesStore } from '@/app/utils/Stores/Activities'
import { GrUpdate } from 'react-icons/gr'
import { MdReportGmailerrorred } from 'react-icons/md'
import { AiOutlineLogin } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
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
import React, { useCallback, useEffect } from 'react'
import { ActivityTypes } from '@/app/utils/Types/Mytypes'

const ActivityFeed = () => {
    const { setActivities, activities } = useActivitiesStore()

    const fetchActivitiesData = useCallback(async () => {
        try {
            const activities: AxiosResponse<ActivityTypes[]> = await axios.get("/api/Activity"); // Replace with your API fetching logic
            const dataactivies = activities.data;
            setActivities(dataactivies);
        } catch (error) {
            console.error("Error fetching activities:", error);
        }
    }, []);

    useEffect(() => {
        fetchActivitiesData();
    }, []);
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
                activities.slice(0,5).map((item, index) => (

                    <div key={item.id} className=' flex flex-col justify-center items-start  '>
                        {/* activity with image  and description on clivck  image of works=>matched color  loop all activites for user has done oprder by datae recent  */}
                        <div className=' flex flex-row justify-between  items-center w-full  '  >
                            <Image
                                src={'/sidebar/w.png'}
                                alt="work"
                                width={50}
                                height={50}
                                className='rounded-full border-[1px] border-[#333333] m-1  '
                            />
                            <div className=' flex flex-col  justify-center items-center  '>
                                <p className=' font-[12px] text-[#333333] ' >
                                    {item.content}
                                </p>

                            </div>
                            <div className=' m-1'>
                                {
                                    (() => {
                                        if (item.content.includes("delete")) {
                                            return <RiDeleteBin6Line color='#FF5630' size={20} />;
                                        } else if (item.content.includes("Report")) {
                                            return <MdReportGmailerrorred color='#FF5630' size={20} />;
                                        } else if (item.content.includes("update")) {
                                            return <GrUpdate color='#FF5630' size={20} />;
                                        } else if (item.content.includes("log")) {
                                            return <AiOutlineLogin color='#FF5630' size={20} />;
                                        } else {
                                            return <BiLogInCircle color='#FF5630' size={20} />;
                                        }
                                    })()
                                }

                            </div>
                        </div>
                        <hr className=' bg-[#333333] w-full h-1 m-0.5' />
                    </div>))

            }


        </div>
    )
}

export default ActivityFeed