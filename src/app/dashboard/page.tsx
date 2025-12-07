"use client"
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Brush, Clock, BookOpen, FileText, Search, Palette, GraduationCap, CheckCircle } from 'lucide-react'
import React, { useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie
} from 'recharts';
import { ChevronDown } from 'lucide-react';

// Data for the bar chart
const barData = [
    { name: 'Jan', study: 40, test: 0 },
    { name: 'Feb', study: 20, test: 0 },
    { name: 'Mar', study: 65, test: 0 },
    { name: 'Apr', study: 38, test: 0 },
    { name: 'May', study: 15, test: 0 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm">
                <p className="font-semibold">{`${payload[0].value} Hr`}</p>
                <p className="text-xs">{`${payload[1]?.value || 0} Hr`}</p>
            </div>
        );
    }
    return null;
};

// Performance gauge component
const PerformanceGauge = ({ grade }: { grade: number }) => {
    const data = [
        { name: 'Completed', value: grade, fill: '#FF4500' },
        { name: 'Remaining', value: 10 - grade, fill: '#F5F5F5' },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center h-full">
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                    strokeWidth={0}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-white" />
                </div>
                <p className="text-gray-500 text-sm mt-4">Your Grade:</p>
                <p className="text-2xl font-bold text-gray-900">{grade.toFixed(3)}</p>
            </div>
        </div>
    );
};

// To-do list item component
const TodoItem = ({ text, date, checked: initialChecked }: { text: string; date: string; checked: boolean }) => {
    const [checked, setChecked] = useState(initialChecked);

    return (
        <div className="flex items-start gap-3 py-2">
            <Checkbox
                checked={checked}
                onCheckedChange={(value) => setChecked(value as boolean)}
                className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />
            <div className="flex-1">
                <p className={`text-sm font-medium ${checked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {text}
                </p>
                <p className="text-xs text-gray-400">{date}</p>
            </div>
        </div>
    );
};

const ClassItem = ({
    title,
    duration,
    lessons,
    icon: Icon,
    highlighted = false
}: {
    title: string;
    duration: string;
    lessons: string;
    icon: React.ElementType;
    highlighted?: boolean;
}) => {
    return (
        <div className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${highlighted
            ? 'border-orange-500 bg-orange-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
            }`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${highlighted ? 'bg-white' : 'bg-gray-100'
                }`}>
                <Icon className="w-6 h-6 text-gray-700" />
            </div>

            <div className="flex-1">
                <h3 className={`font-semibold mb-2 ${highlighted ? 'text-orange-500' : 'text-gray-900'
                    }`}>
                    {title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{lessons}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>Assignments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Upcoming lesson item component
const LessonItem = ({
    title,
    time,
    icon: Icon
}: {
    title: string;
    time: string;
    icon: React.ElementType;
}) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
            <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <Icon className="w-6 h-6 text-gray-700" />
            </div>

            <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{time}</p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-full">
                Join
            </Button>
        </div>
    );
};


function Page() {

    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className=''>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>Hello Josh 👋</h1>
                <p className='text-base font-medium text-gray-400'>Let&#39;s learn something new today!</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10'>
                {/* enrolled course card */}
                <Card className='flex flex-col xl:col-span-1'>
                    <CardHeader>
                        <CardTitle className='text-lg font-bold'>Recent enrolled courses</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <div className='bg-white border-2 border-gray-200 rounded-[8px] p-6'>
                            <div className='p-2 w-8 bg-gray-100 rounded-[6px] mb-3'>
                                <Brush className='w-4 h-4' />
                            </div>
                            <div>
                                <p className='text-sm whitespace-nowrap font-medium text-black mb-3'>Product Design Course</p>
                                <div className='flex justify-between gap-4 items-center whitespace-nowrap'>
                                    <Progress value={45} className='text-orange-500' />
                                    <p className='text-sm text-gray-400'><span className='text-orange-500'>14/30</span> class</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/* resource card */}
                <Card className='flex flex-1 flex-col xl:col-span-1'>
                    <CardHeader>
                        <CardTitle className='text-lg font-bold'>Your Resources</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>

                    </CardContent>
                </Card>
                {/* calender */}
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border [--cell-size:2.5rem] p-2 mx-auto"
                    classNames={{
                        day_button:
                            "data-[selected-single=true]:bg-orange-500 data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-orange-500 data-[selected-single=true]:hover:text-white",
                        caption_label: "text-orange-500 font-medium",
                        head_cell: "text-gray-500",
                        nav_button: "hover:bg-orange-100",
                    }}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                {/* hours spent card */}
                <Card className="flex flex-col lg:col-span-2 xl:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Hours Spent</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <div className='bg-white border-2 border-gray-200 rounded-[8px] px-2 py-5'>
                            <div className="flex items-center gap-4 mb-6 ml-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-sm bg-orange-500" />
                                    <span className="text-sm text-gray-600">Study</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-sm bg-orange-100" />
                                    <span className="text-sm text-gray-600">Online Test</span>
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                                        domain={[0, 80]}
                                        ticks={[0, 20, 40, 60, 80]}
                                        label={{ value: '', angle: -90, position: 'insideLeft' }}
                                    />
                                    <Tooltip content={CustomTooltip} cursor={{ fill: 'transparent' }} />
                                    <Bar
                                        dataKey="study"
                                        fill="#FF4500"
                                        radius={[8, 8, 8, 8]}
                                        barSize={50}
                                    />
                                    <Bar
                                        dataKey="test"
                                        fill="#F5EDE0"
                                        radius={[8, 8, 8, 8]}
                                        barSize={50}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* performance card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-bold">Performance</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <div className='bg-white border-2 border-gray-200 rounded-[8px] px-3 py-6'>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-sm bg-orange-500" />
                                <span className="text-sm text-gray-600">Assignment Submission Performance</span>
                                <button className="ml-auto flex items-center gap-1 text-sm text-gray-600">
                                    Monthly <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <PerformanceGauge grade={8.966} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* To do List card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">To do List</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <div className="space-y-1">
                            <TodoItem
                                text="Human Interaction Designs"
                                date="Tuesday, 30 June 2024"
                                checked={false}
                            />
                            <TodoItem
                                text="Design system Basics"
                                date="Monday, 24 June 2024"
                                checked={false}
                            />
                            <TodoItem
                                text="Introduction to UI"
                                date="Friday, 10 June 2024"
                                checked={true}
                            />
                            <TodoItem
                                text="Basics of Figma"
                                date="Friday, 05 June 2024"
                                checked={true}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {/* recent enrolled card */}
                <Card className="flex-1">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-bold">Recent enrolled classes</CardTitle>
                            <div className="flex items-center gap-3">
                                <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                                    All
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                                    <Search className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <ClassItem
                            title="User Experience (UX) Design"
                            duration="5:30hrs"
                            lessons="05 Lessons"
                            icon={GraduationCap}
                            highlighted={true}
                        />
                        <ClassItem
                            title="Visual Design and Branding"
                            duration="4:00hrs"
                            lessons="03 Lessons"
                            icon={Palette}
                            highlighted={false}
                        />
                    </CardContent>
                </Card>

                {/* Upcoming lesson card */}
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Upcoming Lesson</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <LessonItem
                            title="UX Design Fundamentals"
                            time="5:30pm"
                            icon={GraduationCap}
                        />
                        <LessonItem
                            title="Interaction Design"
                            time="9:00pm"
                            icon={CheckCircle}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Page