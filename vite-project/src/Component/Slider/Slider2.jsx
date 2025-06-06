import React, { useState, useEffect } from "react";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/man.jpg";
import img5 from "../../assets/img/woman.jpg";

import bg1 from "../../assets/img/bg1.png";
import bg2 from "../../assets/img/bg2.png";
import bg3 from "../../assets/img/bg3.jpg";


import { FiShoppingCart } from "react-icons/fi";


function Slider2() {
    const images = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img1 },
        { image: img3 },
        { image: img4 },
        { image: img2 },
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);

    // Update visible count based on screen width
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1280) setVisibleCount(5);
            else if (width >= 1024) setVisibleCount(4);
            else if (width >= 768) setVisibleCount(3);
            else if (width >= 500) setVisibleCount(2);
            else setVisibleCount(1);
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? images.length - visibleCount : prev - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + visibleCount >= images.length ? 0 : prev + 1
        );
    };

    const visibleImages = images.slice(
        startIndex,
        startIndex + visibleCount
    );

    return (
        <>
            <div className="flex flex-col items-center w-full px-4 mt-10 mb-16">
                {/* Heading */}
                <div className="text-center mb-4">
                    <h1 className="font-[Figtree] text-[2rem] font-semibold">
                        Everlane On You
                    </h1>
                    <p className="font-[Figtree] text-[18px] font-semibold mt-2">
                        Share your latest look with #EverlaneOnYou for a chance to be featured
                    </p>
                    <button className="text-[0.89rem] underline font-medium mt-2">
                        Add your Photo
                    </button>
                </div>

                {/* Slider Section */}
                <div className="relative w-full max-w-[1300px] flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 text-3xl text-gray-700 hover:text-black px-2"
                    >
                        ❮
                    </button>

                    {/* Images */}
                    <div className="flex overflow-hidden w-full justify-center gap-4 px-10">
                        {visibleImages.map((img, i) => (
                            <div key={i} className="relative w-full max-w-[225px] h-[225px]">
                                <img
                                    src={img.image}
                                    alt={`Slide ${i}`}
                                    className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out"
                                />
                                <FiShoppingCart className="absolute top-2 right-2 text-white bg-black bg-opacity-60 p-1 rounded-full text-[1.5rem] cursor-pointer" />
                            </div>
                        ))}
                    </div>


                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 text-3xl text-gray-700 hover:text-black px-2"
                    >
                        ❯
                    </button>
                </div>
            </div >

            <div className="flex  flex-col md:flex-row justify-center  gap-8 items-center px-3  py-8">

                <div className="p-8 flex flex-col items-center justify-center text-center">
                    <img src={bg2} alt="image" className="h-20 w-20 mb-4"/>
                    <h3 className="font-bold font-[Figtree] leading-tight mb-2">Complimentary Shipping</h3>
                    <p className="font-[Figtree] text-sm tracking-wider text-center leading-[1.6]">
                        Enjoy free shipping on U.S. orders over <br/>$100.
                    </p>               
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center">
                    <img src={bg1} alt="image" className="h-20 w-20 mb-4"/>
                    <h3 className="text-center font-bold font-[Figtree] leading-[0.75rem] mb-2">Consciously Crafted</h3>
                    <p className="font-[Figtree] leading-[0.75rem] tracking-wider leading-[1.6]">Designed with you and the planet in<br/>mind.</p>
                </div>

                <div className="p-8 flex flex-col items-center justify-center text-center">
                    <img src={bg3} alt="image" className=" h-20 w-20 mb-4"/>
                    <h3 className="text-center font-bold font-[Figtree] leading-[0.75rem] mb-1">Come Say Hi</h3>
                    <p className="font-[Figtree] leading-[0.75rem] tracking-wider leading-[1.6]">We have 11 stores across the U.S.</p>
                </div>

            </div>
        </>
    );
}



export default Slider2;
