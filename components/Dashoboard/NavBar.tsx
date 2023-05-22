
// get data from the ssesion to pulate user name
import React from 'react'

const NavBar = () => {
    const name ="Emma"
  return (


    <div className=' flex flex-col p-4 justify-start items-center'>
        <h2 className=' font-sans  font-[23px]'>
Dashboard
        </h2>
        <h5 className=' font-[12px]' >
        Hello,{name}. Welcome to the dashboard.

        </h5>

    </div>
  )
}

export default NavBar