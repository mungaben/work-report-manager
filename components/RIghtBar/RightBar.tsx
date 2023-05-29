import React from 'react'
import Profile from './Profile'
import Messages from './Messages'

const RightBar = () => {
  return (
    <div className=' w-full  top-5 mt-5 flex   p-2'>
      <div className=' flex flex-col items-center '>
        <div className=' w-full flex justify-center items-center'>
          <Profile />
        </div>
        <div className='flex w-full'>
          <Messages />
        </div>

      </div>

    </div>
  )
}

export default RightBar