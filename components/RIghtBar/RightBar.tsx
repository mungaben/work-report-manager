import React from 'react'
import Profile from './Profile'
import Messages from './Messages'
import Recent from './Recent'

const RightBar = () => {
  return (
    <div className=' w-full   '>
      <div className=' flex flex-col '>
        <div className=' w-full flex  justify-center items-center mx-4   '>
          <Profile />
        </div>
        <div className=' w-full  '>
          <Messages />
        </div>
        <div>
          <Recent/>
        </div>

      </div>

    </div>
  )
}

export default RightBar