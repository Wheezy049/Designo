import { Bell, ChevronDown, Search, User2, X } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-[23px] bg-white border-b-2 border-gray-200'>
        <div className='flex items-center border border-orange-500 rounded-md p-2 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 transition-shadow'>
            <Search className='w-4 h-4 mr-2 text-orange-500' />
            <input type='text' placeholder='Search' className='focus:outline-none bg-transparent w-full' />
            <X className='w-4 h-4 ml-2 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors' />
        </div>
        <div className='flex gap-3 items-center justify-center'>
            <div className='p-2 border border-gray-200 rounded-[8px] relative'>
              <Bell className='w-6 h-6' />
              <span className='w-2 h-2 bg-red-500 absolute top-2 right-2 rounded'></span>
            </div>
            <div className='p-2 bg-gray-100 rounded-full'>
              <User2 className='w-6 h-6' />
            </div>
            <div className='flex gap-2 items-center text-black font-medium justify-center cursor-pointer'>
               <h2 className='text-xl'>John</h2>
               <ChevronDown className='w-6 h-6' />
            </div>
        </div>
    </div>
  )
}

export default Navbar