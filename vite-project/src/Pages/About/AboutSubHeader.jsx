import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cross from "../../assets/img/cross.png"
import  Dog from '../../assets/img/dog.jpeg'
import Store from './Store';

function AboutSubHeader() {

    const [showDropdown,setShowDropDown]= useState(true);

    const [activeDropdown,setActiveDropdown]= useState(null);

    const buttons=[
    'Stores',
    'Fatocries',
    'Enviromental Inltiatives',
    'Our Carbon Commitment',
    'Annual Impact Report',
    'Cleaner Fashion', 
    ]

    const dropdownComponents={
       'Stores': <Store/>,
    //    'New Arrivals': <NewArrivals/>,
    //    'sale': <SaleDropdown/>,
    }

      const handleClick=(label)=>{
         setActiveDropdown(prev=>prev===label ? null :label);

      }

      const handleOuterClick= ()=>{
         setActiveDropdown(null);
      }

     return (
    <div className="flex flex-col mt-5">
      <div className="w-full flex justify-center  overflow-x-auto whitespace-nowrap scrollbar-thin ">
        <div className="inline-flex  items-center gap-1 lg:gap-5 font-[Figtree]  text-[0.65rem] md:text-[0.87rem] z-20  md:min-w-max">
          {buttons.map(label => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className="hover:bg-black hover:text-white px-4 py-2 rounded-lg"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {activeDropdown && (
        
        <div className="absolute  top-[4rem] md:top-[7.100rem]  left-0  w-full bg-white shadow p-4 z-50">
           <div className='flex justify-end'>
            <img src={cross}  alt='image' onClickCapture={handleOuterClick}  className='text-right h-3 w-3'/>
           </div>
           {dropdownComponents[activeDropdown] || (
            <div className='flex flex-col items-center justify-center'>
                <img src={Dog}  alt='no contect' className='w-40 h-40 mb-4 rounded-md'/>
                <p className='text-gray-500 text-lg font-bold'>No Content Found Boss</p>
            </div>
           )}
        </div>

      )}
    </div>
  );

}

export default AboutSubHeader