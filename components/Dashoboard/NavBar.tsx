
// get data from the ssesion to pulate user name
import React from 'react'

const NavBar = () => {
    const name = "John Doe"
    return (


        <div className='fixed flex flex-col justify-start w-full p-4 '>
            <h2 className=' font-sans text-3xl font-[23px]'>
                Dashboard
            </h2>
            <h5 className=' font-[12px]' >
                Hello,{name}. Welcome to the dashboard.

            </h5>

        </div>
    )
}

export default NavBar