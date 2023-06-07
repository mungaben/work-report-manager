
"use client"
import React from 'react'
import { signIn, signOut } from "next-auth/react"
// import sessiondata from '@/app/api/auth/sessions'


const Login = async () => {





  // if (session) {
  //   return <div>
  //     <p>Logged in as </p>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </div>
  // }
  return (
    <div>
      <p>Not signed in yap</p>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>

    </div>
  )
}

export default Login