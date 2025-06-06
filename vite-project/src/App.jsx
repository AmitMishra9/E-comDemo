import { useState } from 'react'
import SubHerder from './Component/Header/SubHerder'
import Slider1 from './Component/Slider/Slider1'
import TestimonialSlider from './Component/Slider/TestimonialSlider'
import Slider2 from './Component/Slider/Slider2'
import Category from './Component/Home/Category'
import Hero from './Component/Home/Hero'
import Banner from './Component/Home/Banner'
import Poster from './Component/Home/Poster'






function App() {

  return (
    <>
   
   <SubHerder/>
   <Hero/>
   <Category/>
   <Banner/>
   <Slider1/>
   <TestimonialSlider/>
   <Poster/>
   <Slider2/>
    </>
  )
}

export default App
