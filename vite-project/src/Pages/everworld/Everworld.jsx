import React from 'react'
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/man.jpg";
import img5 from "../../assets/img/woman.jpg";
import img6 from "../../assets/img/w1.jpg";
import brands from "../../assets/img/brands.webp";




function Everworld() {
    return (
        <>
            <div className=''>
                {/* Header Section */}
                <div className='py-6 px-5'>
                <hr className='border-6 border-black'></hr>
                <span className='font-extrabold md:text-[9rem] font-[Fightree] '>everworld</span>
                <p className=' text-gray-900 '>We’re on a mission to clean up a dirty industry.<br></br>
                    These are the people, stories, and ideas that will help us get there.</p>
              </div>

                <div className='mt-14  py-4 px-4 '>
                    {/* Section Title */}
                    <h2 className="text-2xl font-bold font-[Manrope] mb-6">The Latest</h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[img1, img2, img3, img1, img2, img3].map((img, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <img
                                    src={img}
                                    alt="article"
                                    className="w-100 h-100  rounded-md"
                                />
                                <p className="font-semibold font-[Manrope] text-sm md:text-base">
                                    {
                                        index === 1
                                            ? "We Won A Glossy Award"
                                            : index === 2
                                                ? "Coordinate Your Style: Matching Outfits for Everyone"
                                                : index === 3
                                                    ? "Black Friday Fund 2023"
                                                    : index === 4
                                                        ? "What to Wear this Season: Holiday Outfits & Ideas"
                                                        : index === 5
                                                            ? "Thanksgiving Outfit Ideas"
                                                            : "How to Style Winter Whites"
                                    }
                                </p>
                                <button className="text-[0.60rem] border border-gray-500 rounded-xl py-1 px-2 w-fit font-semibold font-[Figtree]">
                                    {
                                        index === 1
                                            ? "Transparency"
                                            : index === 4
                                                ? "Holiday"
                                                : "Style"
                                    }
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 bg-black text-white text-xs rounded-md font-semibold font-[Manrope] hover:bg-gray-800">
                            Load More Articles
                        </button>
                    </div>
                </div>


                {/* Section -2   */}
                <div className='flex flex-col'>

                    <div className="relative w-full h-80 mt-18">
                        <img src={brands} alt='iamge' className='w-full h-full object-cover' />
                    </div>

                    <div className='mt-1 py-5 px-4'>
                        <h1 className='font-bold font-[Manrope] text-[1rem] md:text-[2rem] mb-8 ml-10'>Our Progress</h1>
                        <div className='flex justify-around gap-5'>
                            <div className='flex flex-col'>
                                <img src={img1} alt='image' className='h-90 w-90 bg-cover'/>
                                <p className='font-bold text-[0.75rem] md:text-[1rem]'>Carbon Commitment</p>
                            </div>
                            <div className='flex flex-col'>
                                <img src={img2} alt='image' className='h-90 w-90 bg-cover' />
                                <p className='font-bold text-[0.75rem] md:text-[1rem]'>Enviromenetal Initiatives</p>
                            </div>
                            <div className='flex flex-col'>
                                <img src={img3} alt='image' className='h-90 w-90 bg-cover' />
                                <p className='font-bold text-[0.75rem] md:text-[1rem]'>Better Factories</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-black p-18 '>
                        <h1 className='text-white font-bold text-[3rem]'>Follow us on Social for more</h1>
                        <button className='bg-white px-5 py-4 rounded-md font-[figtree]' >@Evriane Instagram</button>
                    </div>
   

                </div>


            </div>
        </>
    )
}

export default Everworld