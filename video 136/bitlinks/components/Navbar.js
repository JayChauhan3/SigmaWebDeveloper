import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
<nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
  <div className="logo font-bold text-2xl">
    <Link href="/">BitLinks</Link>
  </div>
  <ul className="flex justify-center gap-4 items-center">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/shorten">Shorten</Link></li>
    <li><Link href="/contact">Contact Us</Link></li>
    <li className="flex gap-3 items-center">
      <Link href="/shorten" className="flex items-center">
        <button className="shadow-lg text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2">
          Try Now
        </button>
      </Link>
      <Link href="/github" className="flex items-center">
        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
          GitHub
        </button>
      </Link>
    </li>
  </ul>
</nav>
  )
}

export default Navbar

                   