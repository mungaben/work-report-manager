'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"



export default function Login() {
  const [SignInUser, setSignInUser] = useState(false)
  const session = useSession()
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  useEffect(() => {
    if (session?.status === 'authenticated') {
      // toast.success('Logged in successfully!')
      router.push('/')
    }
  })

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSignInUser(true)
    // console.log("data", data);
    signIn('credentials',
      {
        ...data, redirect: false
      })
      .then((callback) => {
        if (callback?.error && !callback.ok) {
         
          toast.error(callback.error)
           router.push('/auth/register')
          // console.log("error" );


        }

        if (callback?.ok && !callback?.error) {
          // get user
          const userData = callback // Access user data from the session object
          // Access the user ID from the user data
          // Store user data in local storage or session
          // localStorage.setItem('userData', JSON.stringify(userData));
          console.log("callback", callback);

          // router.push('/Main')
          toast.success('Logged in successfully!')

        }
      })
  }

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="w-auto h-10 mx-auto"
            src={'/Nairobiwater.png'}
            alt="Nairobiwater"
            width={100}
            height={100}
          />

          
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginUser}>
            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={data.username}
                  onChange={e => setData({ ...data, username: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={e => setData({ ...data, email: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={SignInUser}
                // onClick={()=>setSignInUser(true)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <h1>Sign into Github below</h1>


          <p className="mt-10 text-sm text-center text-gray-500">
            dont have an account
            <Link href={"/auth/register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               Register Here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}