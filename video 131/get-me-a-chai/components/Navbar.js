// "use client"
// import React, { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'


// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)


//   return (
//     <nav className='flex justify-between items-center px-4 md:h-16'>

//       <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
//         <img className='invertImg' src="tea.gif" width={44} alt="" />
//         <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
//       </Link>

//       {/* <ul className='flex justify-between gap-4'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Projects</li>
//         <li>Sign Up</li>
//         <li>Login</li>
//       </ul> */}

//       <div className='relative flex justify-center items-center  md:block gap-4'>
//         {session && <>
//           <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
//             setTimeout(() => {
//               setShowdropdown(false)
//             }, 100);
//           }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//             </svg>
//           </button>

//           <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
//             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//               <li>
//                 <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//               </li>
//               <li>
//                 <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
//               </li>
//               <li>
//                 <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
//               </li>
//             </ul>
//           </div></>
//         }

//         {session && <button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut() }}>Logout</button>}
//         {!session && <Link href={"/login"}>
//           <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>}
//       </div>
//     </nav>
//   )
// }

// export default Navbar



"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/login')
  }

  return (
    <nav className='flex justify-between items-center px-4 md:h-16'>

      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="tea.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
      </Link>

      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className='relative flex justify-center items-center  md:block gap-4'>
        {session && <>
          <button 
            onClick={() => setShowdropdown(!showdropdown)} 
            id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown" 
            className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button"
          >
            {session.user.email}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div 
            ref={dropdownRef}
            className={`z-10 absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-200 ease-in-out ${
              showdropdown 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link 
                  href="/dashboard" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                  onClick={() => setShowdropdown(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${session.user.name}`} 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                  onClick={() => setShowdropdown(false)}
                >
                  Your Page
                </Link>
              </li>
              <li>
                <Link 
                  onClick={handleSignOut} 
                  href="#" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div></>
        }

        {session && <button 
          className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2' 
          onClick={handleSignOut}
        >
          Logout
        </button>}
        {!session && <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar