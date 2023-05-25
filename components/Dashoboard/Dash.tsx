


import React from 'react'
import NavBar from './NavBar'
import AnalyticCards from './AnalyticCards'
import CenterCard from './CenterCard'
import ActivityFeed from './ActivityFeed'
import SearchBar from './SearchBar'
import Message from '../Messages/Message'
import Messages from './Messages'

const Dash = () => {
    return (
        <div className=' flex flex-col'>
            <nav className=' flex  flex-row  justify-between  items-start   '>
                <div className='flex justify-start items-start  '>
                    <NavBar />
                </div>
                <div className=' flex flex-row  justify-end items-center w-full rounded-sm  mt-6 p-4 '>
                    <SearchBar />
                </div>
            </nav>
            <div className=' md:mx-4  my-4  flex'>
                <AnalyticCards />
            </div>
            <div>
                <CenterCard />
            </div>
            <div className=' w-full flex flex-row justify-between items-center '>
                <div className=' w-3/5 flex items-center'>
                    <ActivityFeed />
                </div>
                <div className='w-2/5 flex items-center '>
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default Dash