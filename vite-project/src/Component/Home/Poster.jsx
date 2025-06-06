import React from 'react'
import img4 from "../../assets/img/man.jpg";
import img5 from "../../assets/img/woman.jpg";

function Poster() {
    return (
         <div className='flex flex-col  items-center'>
        <div className='flex flex-col  md:flex-row items-center justify-center gap-5  px-4 py-5  '>
            <div className=" flex flex-col items-center  justify-center">
                <p className='font-[Figtree]  text-[1.09rem] mb-2 text-center leading-[1rem]'>Our Holiday gift Picks</p>
                <img src={img5} alt='image' className=' h-[300px] w-[250px]   lg:h-[550px] lg:w-[500px] rounded-md' />
                <div className='mt-3  flex justify-center flex-col gap-3' >
                    <p className='text-[1rem] font-[Figtree]  leading-[0.75rem] font-semibold text-center '>The best presents for everyone on your list</p>
                    <button className='text-[1rem] font-[Figtree]  leading-[0.75rem] font-bold underline text-center'>Read More</button>
                </div>
            </div>

            <div   className='flex flex-col items-center  justify-center"'>
                <p className='font-[Figtree]  text-[1.09rem] md:text[2.05rem] mb-2 text-center leading-[1rem] '>Cleaner Fashion</p>
                <img src={img4} alt='image' className='h-[300px] w-[250px]   lg:h-[550px] lg:w-[500px] rounded-md' />
                <div className='mt-3  flex justify-center flex-col gap-3' >
                    <p className='text-[1rem] font-[Figtree]  leading-[0.75rem] font-semibold text-center text-center '>See the Sustainabillity Effors behind each of our products</p>
                    <button className='text-[1rem] font-[Figtree]  leading-[0.75rem] font-bold underline text-center '>Learn  More</button>
                </div>
            </div>

                       
        </div>

   <hr className='text-center border-1  w-[300px]  lg:w-[1000px] 2xl:w-[1400px] mt-8 '></hr>          
             
        </div>
    )
}

export default Poster