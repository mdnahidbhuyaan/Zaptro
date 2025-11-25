import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPinIcon } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'

const Navbar = () => {
  const location = false
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* logo section */}
        <div className='flex gap-7 items-center'>
          <Link to='/'><h1 className='text-3xl font-bold'> <span className='text-red-600 font-serif'>Z</span>aptro</h1></Link>
          <div className='flex gap-1 items-center cursor-pointer text-gray-700'>
               <MapPinIcon className='text-red-500'/>
               <span className='font-semibold'>{location ? <div></div>:"Add Address"}</span>
               <FaCaretDown />
          </div>
        </div>
        {/* menu section */}
        <nav>
           <ul className='flex gap-7 items-center text-xl font-semibold'>
            <NavLink to={"/"} className={({isActive})=>`${isActive ? "border-b-3 transition-all border-red-500 rounded-sm" :"text-black"}cursor-pointer`}><li>Home </li></NavLink>
            <NavLink to={"/product"} className={({isActive})=>`${isActive ? "border-b-3 transition-all border-red-500 rounded-sm" :"text-black"}cursor-pointer`}><li>Product </li></NavLink>
            <NavLink to={"/about"} className={({isActive})=>`${isActive ? "border-b-3 transition-all border-red-500 rounded-sm" :"text-black"}cursor-pointer`}><li>About </li></NavLink>
            <NavLink to={"/contact"} className={({isActive})=>`${isActive ? "border-b-3 transition-all border-red-500 rounded-sm" :"text-black"}cursor-pointer`}><li>Contact</li></NavLink>
            
          
           </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
