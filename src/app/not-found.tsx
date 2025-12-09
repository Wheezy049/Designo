import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <button className='bg-orange-500 rounded-[6px] items-center text-white text-base flex justify-center py-3 px-2'>
        <Link href="/dashboard">Go Back Home</Link>
      </button>
    </div>
  )
}

export default NotFound