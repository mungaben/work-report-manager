"use client"

// import Login from '@/components/Auth/Login'
import { Suspense, useState } from 'react'

// import { Session } from 'inspector'
import { useSession } from 'next-auth/react'
import MainPage from './Main/page'
import Login from './auth/signin/page'
import { Session } from 'next-auth/core/types'
import {DefaultUser} from 'next-auth'
import Register from './auth/register/page'
type UseSessionResponse = {
  data: Session | null; // Represents the session data if the user is authenticated, otherwise null
  loading: boolean; // Indicates whether the session data is still being fetched
  error: Error | null; // Holds any error that occurred while fetching the session data, otherwise null
};



export default function Home() {
  const [sessiondata, setsession] = useState<UseSessionResponse>()
  const session = useSession();
  console.log(session);
  



  return (
    <main className="flex flex-col min-h-screen bg-white md:m-4 ">
      
      <div>
      { 
        session?.status === "authenticated" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        ) : 
        
        
        (session?.status === "loading" ? (<div className=' bg-[#fafafa]/50 flex justify-center items-center w-full h-full'>  loading ...</div>) : (
          <div className="flex items-center justify-center w-full h-screen">
            {/* <Register/> */}
            <Login />
          </div>
        ))
      }
    </div>


    </main>
  )
}
