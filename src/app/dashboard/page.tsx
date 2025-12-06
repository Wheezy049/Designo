"use client"
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Brush } from 'lucide-react'
import React, { useState } from 'react'

function Page() {

    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className=''>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>Hello Josh 👋</h1>
                <p className='text-base font-medium text-gray-400'>Let&#39;s learn something new today!</p>
            </div>
            <div className='flex justify-between gap-4 items-stretch'>
                <Card className='flex flex-col'>
                    <CardHeader>
                        <CardTitle className='text-xl'>Recent enrolled courses</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <div className='bg-white border-2 border-gray-200 rounded-[8px] p-6'>
                            <div className='p-2 w-10 bg-gray-100 rounded-[6px] mb-3'>
                                <Brush className='w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-[18px] whitespace-nowrap font-medium text-black mb-3'>Product Design Course</p>
                                <div className='flex justify-between gap-4 items-center whitespace-nowrap'>
                                    <Progress value={45} className='text-orange-500' />
                                    <p className='text-sm text-gray-400'><span className='text-orange-500'>14/30</span> class</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className='w-[400px] flex flex-col'>
                   <CardHeader>
                        <CardTitle className='text-xl'>Recent enrolled courses</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>

                    </CardContent>
                </Card>
                <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border [--cell-size:2.25rem] p-2"
    classNames={{
        day_button:
          "data-[selected-single=true]:bg-orange-500 data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-orange-500 data-[selected-single=true]:hover:text-white",
        caption_label: "text-orange-500 font-medium",
        head_cell: "text-gray-500",
        nav_button: "hover:bg-orange-100",
    }}
/>
            </div>
        </div>
    )
}

export default Page