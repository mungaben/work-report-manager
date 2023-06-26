


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
        <div className='flex flex-col '>
            <nav className='flex flex-row items-start justify-between '>
                <div className='flex items-start justify-start '>
                    <NavBar />
                </div>
                <div className='flex flex-row items-center justify-end w-full p-4 mt-6 rounded-sm '>
                    <SearchBar />
                </div>
            </nav>
            <div className='flex my-4  md:mx-4'>
                {/*   @ts-expect-error Server Component */}
                <AnalyticCards />
            </div>
            <div>
                <CenterCard />
            </div>
            <div className='flex flex-row items-center justify-between w-full '>
                <div className='flex items-center w-3/5 '>
                    <ActivityFeed />
                </div>
                <div className='flex items-center w-2/5 '>
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default Dash