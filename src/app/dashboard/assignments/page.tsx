"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'

function Page() {

 const data = [
  {
    title: "Conducting User Research",
    course: "User Research",
    dueDate: "July 1, 2024",
    status: "Done",
  },
  {
    title: "Conducting User Research",
    course: "Graphics Design",
    dueDate: "Feb 18, 2023",
    status: "In Progress",
  },
  {
    title: "Conducting User Research",
    course: "Algorithm",
    dueDate: "Sept 27, 2025",
    status: "Pending",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
  {
    title: "Conducting User Research",
    course: "Data Structure",
    dueDate: "May 15, 2024",
    status: "Failed",
  },
 ]

 const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

   const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'text-green-600 bg-green-50'
      case 'progress':
        return 'text-blue-600 bg-blue-50'
      case 'pending':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

   const getStatusDot = (status: string) => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'bg-green-600'
      case 'progress':
        return 'bg-blue-600'
      case 'pending':
        return 'bg-red-600'
      default:
        return 'bg-gray-600'
    }
  }

   const renderPageNumbers = () => {
    const pages = []
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, 2, 3, 4, 5, '...', 10)
      }
    }
    
    return pages
  }



  return (
    <div>
       <div className='flex flex-wrap gap-3 justify-between items-center mb-10'>
        <div>
          <h1 className='text-base md:text-xl font-bold'>Assignment</h1>
          <p className='text-sm text-gray-400'>View and manage your course assignments</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
             <div className='p-2 rounded-[6px] border'>
                <Search className='w-4 h-4' />
             </div>
             <div className='flex items-center gap-1 text-base'>
               <p className='text-gray-400'>Filter by</p>
               <p className='text-orange-500'>dates | staus</p>
             </div>
          </div>
       </div>
        <div className='bg-white rounded-lg border'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b bg-gray-50'>
                <th className='text-left py-4 px-6 text-sm font-medium text-gray-500'>Assignment Title</th>
                <th className='text-left py-4 px-6 text-sm font-medium text-gray-500'>Course/lessons</th>
                <th className='text-left py-4 px-6 text-sm font-medium text-gray-500'>Due Date</th>
                <th className='text-left py-4 px-6 text-sm font-medium text-gray-500'>Status</th>
                <th className='text-left py-4 px-6 text-sm font-medium text-gray-500'>Submit</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index} className='border-b last:border-b-0 hover:bg-gray-50'>
                  <td className='py-4 px-6 text-sm font-medium'>{item.title}</td>
                  <td className='py-4 px-6 text-sm text-gray-500'>{item.course}</td>
                  <td className='py-4 px-6 text-sm text-gray-500'>{item.dueDate}</td>
                  <td className='py-4 px-6'>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className='py-4 px-6 text-sm text-gray-400'>
                    {item.status === 'Done' ? 'Submitted' : 'Upload'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='flex flex-wrap gap-3 items-center justify-between px-6 py-4 border-t'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
              className='border rounded px-2 py-1 text-sm'
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <span className='text-sm text-gray-600'>Row</span>
          </div>

          <div className='flex items-center gap-1'>
            {renderPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className='px-3 py-1 text-sm text-gray-400'>...</span>
                ) : (
                  <button
                    onClick={() => setCurrentPage(page as number)}
                    className={`px-3 py-1 text-sm rounded ${
                      currentPage === page
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className='ml-2 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed'
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page