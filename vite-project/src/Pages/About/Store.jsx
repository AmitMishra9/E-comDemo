import React from 'react'
import s1 from "../../assets/img/s1.jpeg";
import s2 from "../../assets/img/s2.jpeg";
import s3 from "../../assets/img/s3.jpeg";
import s4 from "../../assets/img/s4.jpeg";
import s5 from "../../assets/img/s5.jpeg";
import s6 from "../../assets/img/s6.jpeg";
import s7 from "../../assets/img/s7.jpeg";
import s8 from "../../assets/img/s8.jpeg";
import s9 from "../../assets/img/s9.jpeg";



const data = [
  {
    image: s1,
    place: "Goa",
    title: "Sunny Beach Escape"
  },
  {
    image:  s2,
    place: "Manali",
    title: "Himalayan Retreat"
  },
  {
    image: s3,
    place: "Mumbai",
    title: "Urban City Vibes"
  },
  {
    image: s4,
    place: "Jaisalmer",
    title: "Golden Desert Safari"
  },
  {
    image: s5,
    place: "Sundarbans",
    title: "Wild Nature Tour"
  },
  {
    image: s6,
    place: "Varanasi",
    title: "Spiritual Temple Walk"
  },
  {
    image: s7,
    place: "Udaipur",
    title: "Romantic Lake Views"
  },
  {
    image: s8,
    place: "Shimla",
    title: "Snowy Mountain Fun"
  },
  {
    image: s9,
    place: "Kerala",
    title: "Backwaters and Boats"
  }
];






function Store() {
  return (
     <>
    <div className='flex flex-col items-center justify-center  h-screen '>
        <div className='flex flex-col items-center justify-center mb-14 '>
        <h1 className='font-bold font-[Manrope]'>Stores</h1>
        <p  className='text-[0.95rem] md:text-[1rem]  font-semibold'>Find one of Our 11 stores nearest you.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6 w-full max-w-6xl  overflow-y-auto px-4 scrollbar-hide' 
         style={{maxHeight: "75vh"}}
        >
             {
                data.map((item,index)=>(
                     <div key={index} className='flex- flex-col'>
                         <img src={item.image} alt={item.title} className='w-full  h-[220px] object-cover rounded-md'/>
                          <div className='mt-2'>
                            <p className='text-xs uppercase text-gray-400 font-bold'>{item.place}</p>
                            <h2 className='text-base font-semibold'>{item.title}</h2>
                          </div>
                     </div>
                ))
             }
        </div>

    </div>
    </>
  )
}

export default Store