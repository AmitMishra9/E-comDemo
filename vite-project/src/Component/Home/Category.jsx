import React, { useEffect, useState } from 'react'
import img1 from "../../assets/img/img1.jpeg"
import img3 from "../../assets/img/img2.jpeg"
import img2 from "../../assets/img/img3.jpeg"


function Category() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPrducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products?limit=5');
                const data = await res.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error("Error Fetching Products:", error);
            }
        };
        getPrducts();
    }, [])


    return (
        <div className="p-4 bg-[#f0ebea]">
            <p className='font-bold font-[figtree] text-center text-[1.2rem] lg:text[1rem] '>Shop by Category</p>
            <div className='upside flex   justify-center   p-4 rounded-xl'>
                <div className='flex  flex-col md:flex-row items-center gap-8'>
                    {products.map((product) => (
                        <div className="text-center  justify-center  p-5  mb-6" key={product.id}>
                            <img src={product.image} alt="product" className="h-60 w-60 rounded-md" />
                            <p className="text-[0.95rem] font-bold font-[Figtree] mb-2">₹{product.price}</p>
                            <button className="bg-black text-white p-2 rounded-lg">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>


            <div className="  px-3 py-5  downside flex flex-col md:flex-row gap-3 justify-center ">
                {[img1, img3, img2].map((img, idx) => (
                    <div
                        key={idx}
                        className="relative w-full sm:w-[80%] md:w-[300px] h-[400px] mx-auto overflow-hidden rounded-md"
                    >
                        <img
                            src={img}
                            alt="New Arrivals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                            <h1 className="text-2xl font-semibold mb-4">New Arrivals</h1>
                            <button className="bg-white text-black px-5 py-2 font-semibold rounded hover:bg-gray-200 transition">
                                SHOP THE LATEST
                            </button>
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default Category