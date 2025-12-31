const Navbar = () => {
  return (
    <nav className='flex bg-zinc-100 p-5 top-0 sticky z-50 shadow-md'>
      <ul className='flex list-none gap-8'>
        <ul className='flex list-none gap-8'>
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
      </ul>
    </nav>
  )
}

export default Navbar;