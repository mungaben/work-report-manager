"use client"

// import Login from '@/components/Auth/Login'
import Dash from '@/components/Dashoboard/Dash'
import RightBar from '@/components/RIghtBar/RightBar'
import Side from '@/components/SideBar/Side'
import Image from 'next/image'
import { Suspense } from 'react'
import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Session from './Sessions/Session'
import MainPage from './Main/page'
import Register from './auth/register/page'
import Login from './auth/signin/page'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  console.log(session);
  


  return (
    <main className="flex min-h-screen md:m-4 flex-col bg-white  ">
      {
        session.status === "authenticated" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        ) : (
          <div className="flex h-screen w-full items-center justify-center">
            {/* <Register/> */}
            <Login />
          </div>
        )
      }


    </main>
  )
}
