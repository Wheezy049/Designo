"use client"
import { Bell, ChevronDown, Menu, Search, User2, X } from 'lucide-react'
import React, { useState } from 'react'
import MobileNav from './mobileNav';

function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
    <div className='flex justify-between gap-4 items-center p-4 md:p-6 bg-white border-b-2 border-gray-200'>
      {/* Left side: Search on medium screens and up, Logo on small screens */}
      <div className="flex-1">
        {/* Search Bar for Medium+ screens */}
        <div className='hidden md:flex items-center border border-orange-500 rounded-md p-2 max-w-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 transition-shadow'>
          <Search className='w-4 h-4 mr-2 text-orange-500' />
          <input type='text' placeholder='Search' className='focus:outline-none bg-transparent w-full' />
          <X className='w-4 h-4 ml-2 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors' />
        </div>
        {/* Mobile Logo */}
        <div className='flex md:hidden items-center'>
          <span className='w-10 h-10 bg-white border-8 border-orange-500 rounded-[8px]'></span>
          <h1 className='ml-2 text-2xl font-medium uppercase'>Designo</h1>
        </div>
      </div>

      {/* Right side: User info and notifications */}
      <div className='flex gap-2 md:gap-4 items-center justify-center'>
        <div className='p-2 border border-gray-200 rounded-lg relative cursor-pointer'>
          <Bell className='w-6 h-6' />
          <span className='w-2 h-2 bg-red-500 absolute top-2 right-2 rounded'></span>
        </div>
        <div className='p-2 bg-gray-100 rounded-full'>
          <User2 className='w-6 h-6' />
        </div>
        <div className='hidden md:flex gap-2 items-center text-black font-medium justify-center cursor-pointer'>
          <h2 className='text-lg'>John</h2>
          <ChevronDown className='w-6 h-6' />
        </div>
        <div onClick={handleToggle} className='flex md:hidden gap-2 items-center text-black font-medium justify-center cursor-pointer'>
          {
            toggle ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />
          }
        </div>
      </div>
    </div>
    {
      toggle && (
        <MobileNav setToggle={setToggle} />
      )
    }
    </>
  )
}

export default Navbar