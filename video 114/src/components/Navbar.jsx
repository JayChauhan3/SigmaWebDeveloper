import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-indigo-600 gap-8 text-white py-2'>
            <div className="logo">
              <span className='font-bold text-xl mx-9'>iTask</span>  
            </div>
            <ul className="flex gap-8 mx-9 font-normal text-lg ">
                <li className='cursor-pointer hover:font-bold hover:text-lg transition-all duration-200'>Home</li>
                <li className='cursor-pointer hover:font-bold hover:text-lg transition-all duration-200' >Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
