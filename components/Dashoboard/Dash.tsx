


import React from 'react'
import NavBar from './NavBar'
import AnalyticCards from './AnalyticCards'
import CenterCard from './CenterCard'
import ActivityFeed from './ActivityFeed'
import SearchBar from './SearchBar'

const Dash = () => {
  return (
    <div className=' flex flex-col'>
        <nav className=' flex  flex-row  justify-between  items-start   '>
            <div className='flex justify-start items-start  '>
                <NavBar/>
            </div>
            <div className=' flex flex-row  justify-end items-center w-full rounded-sm  mt-6 p-4 '>
                <SearchBar/>
            </div>
        </nav>
        <div>
            <AnalyticCards/>
        </div>
        <div>
            <CenterCard/>
        </div>
        <div>
            <div>
                <ActivityFeed/>
            </div>
        </div>
    </div>
  )
}

export default Dash