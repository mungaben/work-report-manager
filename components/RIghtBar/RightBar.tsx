import React from 'react'
import Profile from './Profile'
import Messages from './Messages'

const RightBar = () => {
  return (
    <div className=' w-full  top-5 mt-5 flex justify-center relative   '>
      <div className=' flex flex-col  justify-center top-0 '>
        <div className=' w-full flex justify-center items-center  '>
          <Profile />
        </div>
        <div className='bg-yellow-500 w-full absolute '>
          <Messages />
        </div>

      </div>

    </div>
  )
}

export default RightBar