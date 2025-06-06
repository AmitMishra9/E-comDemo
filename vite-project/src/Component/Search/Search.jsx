import React from 'react'
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/woman.jpg"



function Search() {

    const categories = [
        {
            name: "Women's Sweaters",
            image: img1,
        },
        {
            name: "Women's Bottom",
            image: img2
        },
        {
            name: "Women's Boots",
            image: img3,
        },
        {
            name: "Men's Best Sellers",
            image: img4,
        },
    ];

    return (
        <>
            <div className='min-h-screen bg-white '>

                <div className='flex justify-center border-2 border-gray-300 p-4'>
                    <div className='flex items-center justify-between  p-3 bg-[#f5f4f4] rounded w-[550px]'>
                        <input
                        type='text'
                        placeholder='search'
                        className='w-full outline-none p-1 text-sm font-seimbold font-[Figtree]' 
                        />
                    </div>
                    <button className='text-gray-500 text-sm ml-4'>Cancel</button>

                </div>

                {/* Categories section  */}
                <div className='mt-8 p-12'>
                    <h2 className='text-sm text-gray-300 mb-4 font-bold font-[Figtree] md:ml-9  '>Popular Categories</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 '>
                        {categories.map((cat, idx) => (
                            <div key={idx} className='text-center flex flex-col justify-center items-center '>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className='w-70 h-70 object-cover mb-2'/>
                                <p className='text-sm text-gray-700 underline font-[Figtree]'>{cat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search