"use client"
import React from 'react'
import { BookText, Calendar1, FolderClosed, FolderDown, GraduationCap, MessagesSquare, Settings, StickyNote, Video } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MobileNav({ setToggle}: {setToggle: React.Dispatch<React.SetStateAction<boolean>>} ) {
  const pathname = usePathname();
  const items = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: <MessagesSquare />,
        },
        {
            name: 'Assignments',
            href: '/dashboard/assignments',
            icon: <BookText />,
        },
        {
            name: 'Schedule',
            href: '/dashboard/schedule',
            icon: <Calendar1 />,
        },
        {
            name: 'Recordings',
            href: '/dashboard/recordings',
            icon: <Video />,
        },
        {
            name: 'Discussions',
            href: '/dashboard/discussions',
            icon: <MessagesSquare />,
        },
        {
            name: 'Resources',
            href: '/dashboard/resources',
            icon: <FolderClosed />,
        },
        {
            name: 'Notes',
            href: '/dashboard/notes',
            icon: <StickyNote />,
        },
        {
            name: 'Downloads',
            href: '/dashboard/downloads',
            icon: <FolderDown />,
        },
        {
            name: 'Classes',
            href: '/dashboard/classes',
            icon: <MessagesSquare />,
        },
        {
            name: 'Courses',
            href: '/dashboard/courses',
            icon: <GraduationCap />,
        },
        {
            name: 'Settings',
            href: '/dashboard/settings',
            icon: <Settings />,
        }
    ]

  return (
    <div className='bg-white justify-center items-center w-full h-screen p-6'>
       {
                items.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={index}
                            href={item.href} 
                            onClick={() => setToggle(false)}
                            className={`flex items-center gap-4 px-6 py-3 mx-4 my-1 rounded-lg font-medium transition-colors duration-200
                        ${isActive
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-600 hover:bg-orange-100 hover:text-orange-600'}`}
                        >
                            <span className='w-4 h-4'>{item.icon}</span>
                            <span className='text-base'>{item.name}</span>
                        </Link>
                    )
                })
            }
    </div>
  )
}

export default MobileNav