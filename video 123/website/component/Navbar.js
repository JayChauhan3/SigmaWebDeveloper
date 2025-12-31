import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
        <nav className='bg-amber-700 text-lg font-black flex justify-between px-7 py-3 sticky top-0 z-50'>
            <div className="">Airbnb</div>
            <ul className='flex gap-5'>
               <Link href="/"><li>Home</li></Link> 
                <Link href="/contact"><li>Contact</li></Link> 
               <Link href="/about"> <li>About</li></Link> 
            </ul>
        </nav>
   
  );
};

export default Navbar
