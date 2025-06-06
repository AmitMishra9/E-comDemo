import React from 'react'
import Cap from "../../assets/img/auto.png"

function Banner() {
    return (
       <div className="relative w-full h-60">
  <img src={Cap} alt="banner" className="w-full h-full object-cover" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
     We’re on a Mission To Clean Up the Industry
    </h1>
    <p className="mb-4 text-sm sm:text-base font-bold font-[figtree]">
      Read about our progress in our latest Impact Report.
    </p>
    <button className="bg-white text-black px-18 py-2 font-semibold rounded hover:bg-gray-200 transition font-[Manrope] font-bold">
      LEARN MORE
    </button>
  </div>
</div>

    )
}

export default Banner