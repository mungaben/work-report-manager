import Login from '@/components/Auth/Login'
import Dash from '@/components/Dashoboard/Dash'
import RightBar from '@/components/RIghtBar/RightBar'
import Side from '@/components/SideBar/Side'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen md:m-4 flex-col bg-white  ">
  {/* <Suspense fallback={<div>loading ... </div>}>
    
   


  </Suspense> 
   */}
    {/* <Login /> */}
   <div className=' flex flex-row w-full justify-between  h-full transition' >
    <div className=' w-1/6  bg-gradient-to-r from-[#fafafa] to-[#fafafa] shadow-sm h-screen '>
      <Side/>
    </div>

    
    <div className=' w-3/6 bg-gradient-to-r from-[#fafafa] to-[#fafafa] h-full shadow-md rounded-sm m-4'>
    <Dash/>
    </div>
    <div className=' w-1/5  bg-gradient-to-r from-[#fafafa] to-[#fafafa] shadow-md'>
      <RightBar/>
    </div>

   </div>
  
    </main>
  )
}
