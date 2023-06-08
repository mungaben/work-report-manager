"use client"

// import Login from '@/components/Auth/Login'
import { Suspense } from 'react'

import { Session } from 'inspector'
import { useSession } from 'next-auth/react'
import MainPage from './Main/page'
import Login from './auth/signin/page'
type UseSessionResponse = {
  data: Session | null; // Represents the session data if the user is authenticated, otherwise null
  loading: boolean; // Indicates whether the session data is still being fetched
  error: Error | null; // Holds any error that occurred while fetching the session data, otherwise null
};



export default function Home() {
  // const [session, setsession] = useState<UseSessionResponse>()
  const session = useSession();
  console.log(session);



  return (
    <main className="flex min-h-screen md:m-4 flex-col bg-white  ">
      {
        session?.status === "authenticated" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        ) : (session?.status === "loading" ? (<div> loading ...</div>) : (
          <div className="flex h-screen w-full items-center justify-center">
            {/* <Register/> */}
            <Login />
          </div>
        ))
      }


    </main>
  )
}
