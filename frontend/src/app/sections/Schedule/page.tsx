import { Schedule } from '@/app/types/Schedule'
import { cabinetExtraBold, cabinetLight, cabinetRegular } from '@/app/utils/fonts';
import React from 'react'

const ScheduleSection = () => {
    const Schedule: Schedule[] = [
        {
            date: "9th May | Pre-event ",
            events: [
                {
                    time: "11:00 AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:30 PM",
                    title: "SecurityPal Special Orientation Session",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "1:30 PM",
                    title: "Ice Breaker Game",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "1:30 PM",
                    title: "Team Formation & Registration",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "3:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "3:30 PM",
                    title: "Team Bonding Game",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "5:00 PM",
                    title: "Closing Off",
                    venue: "Sagarmatha Hall",
                },
            ]
        },
        {
            date: "10th May | Day 1", 
            events: [
                {
                    time: "02:00 PM",
                    title: "Check-in Teams",
                    venue: "DWIT Complex",
                },
                {
                    time: "03:00 PM",
                    title: "Opening Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "4:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "05:00 PM",
                    title: "Talk Session 01",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "07:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
                {
                    time: "10:00 PM",
                    title: "Fun Game 01",
                    venue: "Coding Rooms",
                },
            ]
        },
        {
            date: "11th May | Day 2", 
            events: [
                {
                    time: "07:00 AM",
                    title: "Breakfast",
                    venue: "Cafeteria",
                },
                {
                    time: "10:00 AM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "11:00 AM",
                    title: "Workingshop 01",
                    venue: "Room 101,Building 13",
                },
                {
                    time: "01:00 PM",
                    title: "Talk Session 02",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "02:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "03:00 PM",
                    title: "Fun Game 02",
                    venue: "Courtyard",
                },
                {
                    time: "06:00 PM",
                    title: "Workshop 02",
                    venue: "Room 101,Building 13",
                },
                {
                    time: "03:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
            ]
        },
        {
            date: "12th May | Day 3",
            events: [
                {
                    time: "05:00 AM",
                    title: "Check Out | Teams",
                    venue: "DWIT Complex",
                },
                {
                    time: "07:00 AM",
                    title: "Breakfast",
                    venue: "Cafeteria",
                },
                {
                    time: "07:30 AM",
                    title: "Final Call",
                    venue: "Coding Rooms",
                },
                {
                    time: "09:00 AM",
                    title: "Pitching Sessions",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:00 PM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "01:00 PM",
                    title: "Winner Announcement & Closing Ceremony",
                    venue: "Sagarmatha Hall",
                },
            ]
        }
    ];
  return (
    <div className='flex flex-col justify-center'>
        <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>Event Schedule</h1>
        {Schedule.map((day:Schedule)=>(
            <div key ={day.date} className='flex flex-col text-white mb-10 md:mx-16 mx-8'>
                <div  className={`${cabinetExtraBold.className} md:text-3xl text-2xl primary-gradient-background p-[0.15rem] w-full rounded-md  md:text-start mb-10`}>
                    <div className='bg-violet md:p-10 p-5 rounded-md'>
                        <span className='text-primary-gradient-color'>
                        {day.date}    
                        </span>
                    </div>
                </div>
                <div className='grid grid grid-rows-1 md:grid-rows-4 md:grid-flow-col gap-6'>
                    {day.events.map((event,index)=>(
                        <div key = {index} className=" flex flex-row items-center mx-auto gap-16">
                            <div className={`${cabinetExtraBold.className} text-2xl md:w-full `}>
                                
                                {event.time}
                            </div>
                            <div className='flex flex-col justify-center items-start w-32 md:w-full gap-2'>
                                <p className={`${cabinetExtraBold.className} text-2xl md:min-w-[20rem] md:max-w-[20rem] `}>{event.title}</p>
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