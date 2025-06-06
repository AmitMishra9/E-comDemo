import React from 'react'
import ManImg from '../../assets/img/woman.jpg'

function Hero() {
  return (
    <div
      className="h-[82vh] mt-2 bg-cover bg-center flex text-white p-8"
      style={{ backgroundImage: `url(${ManImg})` }}
    >
      <div className="bg-opacity-50 w-full flex items-center mt-12 md:mt-1">
        <div className="flex flex-col items-center justify-center text-center 
                        md:justify-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-[Figtree] text-white font-bold">
            Your Cozy Era
          </h1>
          <p className="mt-4 text-sm md:text-lg font-bold font-[Figtree]">
            Get peak comfy-chic
          </p>
          <span className="font-bold  font-[Figtree]">
            with new winter essentials.
          </span>

          <button className="mt-2 bg-white p-3 rounded-md text-black font-[Figtree] font-semibold ">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
