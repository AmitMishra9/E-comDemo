import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Slider1() {

    const [products, setProducts] = useState();

    useEffect(() => {
        const getPrducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                console.log("Slider1 ==> ", data);

            } catch (error) {
                console.error("Error Fetching Products:", error);
            }

        };
        getPrducts();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center bg-[#ffff]">
            <div className='text-center mt-8'>
                <h1 className='font-[Figtree]  text-[1rem]  md:text-[2rem] font-semibold'>Everlane Favorites</h1>
                <p className='font-[Figtree]  font-semibold'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
            </div>


            <div className="w-full px-4 py-8">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={5} 
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },    
                        640: { slidesPerView: 2 },    
                        768: { slidesPerView: 3 },   
                        1024: { slidesPerView: 4 },  
                        1280: { slidesPerView: 5 },   
                    }}
                >
                    {products?.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white shadow-md rounded-md  p-4 text-center mb-8">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-64 object-contain mb-4"
                                />
                                {/* <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3> */}
                                <p className="text-lg font-semibold mt-2">${product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Slider1