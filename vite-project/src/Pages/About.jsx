import React from 'react'
import w1 from "../assets/img/w1.jpg"
import img1 from "../assets/img/woman.jpg"
import auto from "../assets/img/auto.png"
import img2 from "../assets/img/img1.jpeg"
import gp from "../assets/img/gp.png";
import AboutSubHerder from './about/aboutSubHeader'




function About() {
  return (
    <>
      {/*SubHeader*/}
       <AboutSubHerder/>
      {/* Banner Section */}
      <div className='h-screen flex justify-center'>
        <div className='absolute  bottom-15 text-amber-400 font-[figtree]'>
          <div className='flex flex-col gap-3 justify-center items-center leading-[0.75rem] mb-4 font-[figtree]'>
            <span className='text-5xl'>We believe</span>
            <span className='text-5xl'>We can all</span>
            <span className='text-5xl'>make</span>
            <span className='text-5xl'>a differnce.</span>
          </div>

          <div className='flex flex-col  items-center  justify-center '>
            <p className='font-bold text-shadow-amber-50'>Our way: Exceptional quality </p>
            <p className='font-bold t'>Ethical factories. Redical Transparency.</p>
          </div>
        </div>
        <img src={w1} alt='image' className='w-full h-full  object-cover' />
      </div>


      {/* Text Section */}

      <div className="px-4 md:px-32 py-10">
        <p className="text-center text-2xl leading-relaxed font-[Figtree] max-w-3xl mx-auto">
          At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things.
          <br />
          <br />
          We call it <strong>Radical Transparency.</strong>
        </p>
      </div>


      {/* Banner Section  */}
      <div className=' flex flex-col md:flex-row  justify-between items-center bg-[#e6ded8]   rounded-md '>

        <img src={img1} alt='iamge' className='h-[350px] w-[350px] lg:h-[600px] lg:w-[700px]  rounded-md ' />
        <div>
          <span className='font-bold  text-[0.75rem] leading-[0.75rem] '>OUR FACTORIES</span>
          <h1 className='text-[2.06rem] font-[Figtree] '>Our ethical approach.</h1>
          <p className='text-[1rem] leading-relaxed font-[Manrope] max-w-3xl mx-auto '>
            “We spend months finding the best factories around the
            world—the same ones that produce your
            favorite designer labels. We visit them
            often and build strong personal relationships
            with the owners. Each factory
            is given a compliance audit
            to evaluate factors like fair wages,
            reasonable hours, and environment.
            Our goal? A score of 90 or above for every factory.”</p>
        </div>
      </div>



      {/* Image Section  */}
      <div className="w-full h-120">
        <img src={auto} alt="img" className='w-full h-full object-cover' />
      </div>




      {/* Banner Section  */}
      <div className=' flex flex-col md:flex-row  justify-between items-center bg-[#e6ded8]  rounded-md '>
        <div className='pl-9'>
          <span className='font-bold text-[0.75rem] leading-[0.75rem] text-black uppercase'>
            OUR QUALITY
          </span>
          <h1 className='text-[2.5rem] font-[Figtree] font-semibold text-black leading-tight'>
            Designed <br /> to last.
          </h1>
          <p className='text-[1rem] leading-relaxed font-[Manrope] max-w-3xl text-black pt-2'>
            At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products—like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>

        <img src={img2} alt='iamge' className='h-[350px] w-[350px] lg:h-[600px] lg:w-[700px]   ' />
      </div>



      {/* Image Section  */}
      <div className="w-full h-120">
        <img src={auto} alt="img" className='w-full h-full object-cover' />
      </div>


      {/* Banner Section  */}
      <div className=' flex flex-col md:flex-row  justify-between items-center  rounded-md '>

        <img src={gp} alt='iamge' className='h-[350px] w-[350px] lg:h-[500px] lg:w-[600px]' />
        <div className='pl-9'>
          <span className='font-bold text-[0.75rem] leading-[0.75rem] text-black uppercase'>
            OUR PRICES
          </span>
          <h1 className='text-[2.5rem] font-[Figtree] font-semibold text-black leading-tight'>
            Radically Transparent.
          </h1>
          <p className='text-[1rem] leading-relaxed font-[Manrope] max-w-3xl text-black pt-2'>
            We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.
          </p>
        </div>

      </div>


     {/*image sction  */}
    <div>
        <h1 className='font-bold font-[Manrope] text-center text-[2rem]'>More to Explore</h1>

       <div className='flex flex-col md:flex-row  justify-center  gap-14 '>
        <div className='flex flex-col   justify-center items-center'>
         <img src={w1} alt='image'  className='h-80 w-80 object-cover rounded-md'/> 
         <p className='font-bold font-[Manrope] underline'>Our Products</p>
        </div>
        <div className='flex flex-col   justify-center items-center'>
         <img src={img1} alt='image' className='h-80 w-80 object-cover rounded-md'/> 
                  <p className='font-bold font-[Manrope] underline'>Our Stores</p>
        </div>
        <div className='flex flex-col   justify-center items-center'>
         <img src={img2} alt='image' className='h-80 w-80 object-cover rounded-md'/> 
                  <p className='font-bold font-[Manrope] underline'>Careers</p>
        </div>

        </div>
      
    </div>



    </>
  )
}

export default About