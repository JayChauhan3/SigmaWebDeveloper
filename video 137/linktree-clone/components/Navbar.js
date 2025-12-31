"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
    return ( <>{showNavbar &&
        <nav className='bg-white w-[90vw] top-12 right-[5vw] rounded-full px-3.5 py-3 flex justify-between fixed'>
        <div className="flex gap-16 pl-7 justify-center items-center">
            <Link href={"/"}>
            <img src="logo.svg" alt="logo" width={115} height={70}/>
            </Link>
            <ul className='flex gap-8 items-center'>
                <Link href="/"><li>Products</li></Link>
                <Link href="/"><li>Templates </li></Link>
                <Link href="/"><li>Marketplace</li></Link>
                <Link href="/"><li>Learn</li></Link>
                <Link href="/"><li>Pricing</li></Link>
            </ul>
        </div>
        <div className="flex gap-3">
            <button className='bg-[#E9E9E9] px-7 py-5 min-h-14 rounded-lg font-bold text-[16px]'>Log in</button>
            <button className='bg-[#252D3E] px-7 py-5 min-h-14 text-white rounded-full font-bold text-[16px]' >Sign up free</button>
        </div>
    </nav>}
    </>

  );
};

export default Navbar