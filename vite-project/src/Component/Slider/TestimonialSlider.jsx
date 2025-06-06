import React, { useState } from "react";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/man.jpg";
import img5 from "../../assets/img/woman.jpg";

const slides = [
  {
    text: "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
    author: "JonSnSF",
    product: "The Heavyweight Overshirt",
    image: img1,
  },
  {
    text: "Amazing fit and quality. Will buy another color.",
    author: "LisaM",
    product: "The Classic Cotton Shirt",
    image: img2,
  },
  {
    text: "Great quality, super comfortable. I wear it almost every day.",
    author: "Alex93",
    product: "Essential Tee",
    image: img3,
  },
  {
    text: "My go-to for any occasion. Highly recommend!",
    author: "KarenT",
    product: "Versatile Blazer",
    image: img4,
  },
  {
    text: "Love the design and feel of this product!",
    author: "RohitD",
    product: "Comfort Hoodie",
    image: img5,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-white py-10 px-4 md:px-12 ">
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/4 md:top-1/2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-black z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/4  md:top-1/2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-black z-10"
      >
        ❯
      </button>

      {/* Slider Content */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-4 mb-10 md:mb-0">
          <p className="text-sm text-gray-600 mb-2">People Are Talking</p>
          <div className="text-lg text-black mb-2">★★★★★</div>
          <p className="text-xl md:text-2xl font-medium text-black mb-4 max-w-md">
            “{slides[index].text}”
          </p>
          <p className="text-sm text-gray-700">
            -- {slides[index].author},{" "}
            <a href="#" className="underline text-gray-800">
              {slides[index].product}
            </a>
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={slides[index].image}
            alt="Product"
            className="w-[450px] h-[500px] object-cover rounded-md "
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2 mb-18">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      <hr className="border-b  md:border-b "></hr>
    </div>
  );
}
