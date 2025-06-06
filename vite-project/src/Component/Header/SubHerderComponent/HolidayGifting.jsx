import React from 'react'
import man from "../../../assets/img/man.jpg"
import woman from "../../../assets/img/woman.jpg"

function HolidayGifting() {
    return (
        <>
            <div className='flex  justify-between gap-8 py-8 px-10 pl-20  rounded-md'>

                <div className='flex gap-50'>
                    <div className='text-black'>
                        <span className='text-gray-500 text-[0.75rem] font-bold'>HIGHLIGHTS</span>
                         
                        <div className='flex flex-col gap-2 font-[Figree] text-[1.09rem] mt-4'>
                        <p>Shop All New Arrivals</p>
                        <p>The Gift Guide</p>
                        <p> New Bottoms</p>
                        <p>New Tops</p>
                        <p>T-shirt Bundels</p>
                        <p>Under $100</p>
                        </div>
                         
                    </div>
                      <div className='text-black'>
                        <span className='text-gray-500 text-[0.75rem] font-bold'>FEATURED SHOPS</span>
                         
                        <div className='flex flex-col gap-2 font-[Figree] text-[1.09rem] mt-4'>
                        <p>The Holiday OutFit Edit</p>
                        <p>Giftable Sweaters</p>
                        <p>Uniform & Capsule</p>
                        <p>The Performance Chino Shop</p>
                        <p>Top Reted Men's Clothing</p>
                      
                        </div>
                         
                    </div>
                </div>


                        {/* Image Section  */}
                <div className='flex  gap-6 justify-between'>
                    <div className='relative w-60 h-60 rounded-md overflow-hidden'>
                        <img src={man} alt='image' className='w-60 h-60 rounded-md object-cover  ' />
                        <div className='absolute bottom-4 left-4 text-white text-lg font-semibold font-[figtree]'>
                            <p>The Holiday</p>
                            <p>outFit Edite</p>
                        </div>
                        <div className='absolute bottom-4 right-4 text-white text-xl font-[Figtree]'>
                            →
                        </div>
                    </div>

                 
                     <div className='relative w-60 h-60 rounded-md overflow-hidden'>
                        <img src={woman} alt='image' className='w-60 h-60 rounded-md object-cover  ' />
                        <div className='absolute bottom-4 left-4 text-white text-lg font-semibold font-[figtree]'>
                            <p>Giftable</p>
                            <p>Sweaters</p>
                        </div>
                        <div className='absolute bottom-4 right-4 text-white text-xl font-[Figtree]'>
                            →
                        </div>
                    </div>
                </div>





            </div>

        </>
    )
}

export default HolidayGifting