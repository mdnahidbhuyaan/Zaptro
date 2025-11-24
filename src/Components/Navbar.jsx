import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* logo section */}
        <div className=''>
          <Link to='/'><h1 className='text-3xl font-bold'> <span className='text-red-600 font-serif'>Z</span>aptro</h1></Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
