import { Schedule } from '@/app/types/Schedule'
import { cabinetExtraBold, cabinetLight, cabinetRegular } from '@/app/utils/fonts';
import React from 'react'

const ScheduleSection = () => {
    const Schedule: Schedule[] = [
        {
            date: "9th May|Pre-event ", // Example date
            events: [
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:30AM",
                    title: "SecurityPal Special Orientation Session",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                }
            ]
        },
        {
            date: "10th May|Day 2", // Example date
            events: [
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:00AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                }
            ]
        }
    ];
  return (
    <div className='flex flex-col justify-center'>
        <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>Event Schedule</h1>
        {Schedule.map((day:Schedule)=>(
            <div key ={day.date} className='text-white mb-10 md:w-[80%] mx-auto'>

                <div  className={`${cabinetExtraBold.className} text-3xl primary-gradient-background p-[0.15rem] w-full rounded-md  md:text-start mb-10`}>
                    <div className='bg-violet p-10 rounded-md'>
                        <span className='text-primary-gradient-color'>
                        {day.date}    
                        </span>
                    </div>
                </div>
                <div className='grid grid grid-rows-1 md:grid-rows-4 md:grid-flow-col gap-7'>
                    {day.events.map((event,index)=>(
                        <div key = {index} className=" flex flex-row items-center mx-auto gap-16">
                            <div className={`${cabinetExtraBold.className} text-2xl`}>
                                
                                {event.time}
                            </div>
                            <div className='flex flex-col justify-center flex-wrap gap-2'>
                                <p className={`${cabinetExtraBold.className} text-2xl md:w-[10rem] md:min-w-[20rem] md:max-w-[30rem] `}>{event.title}</p>
                                <p className={`${cabinetLight.className} font-medium text-[#FCF7FF]`}>Venue: {event.venue}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        ))}

    </div>
  )
}

export default ScheduleSection