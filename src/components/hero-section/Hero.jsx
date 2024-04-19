import React from 'react'
import hero_img from '../../assets/images/header-img.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
   <div className="text-white">
  <section className="py-16 sm:py-12 lg:py-16">
    <div className="px-4 mx-auto lg:px-32 sm:px-6 ">
      <div className="grid items-start place-content-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-center lg:text-left text-4xl font-medium sm:text-6xl lg:text-7xl lg:w-[600px]">
            An Immersive <span className='text-[#38B6FF]'>OSINT</span>  Gamified <span className='text-[#38B6FF]'>Experience.</span> 
          </h1>
          <p className="mt-8 font-light text-base lg:w-[600px] sm:text-xl text-center lg:text-left">Introducing the OSINT Escape Room, a thrilling, top-tier training experience developed by experienced law enforcement experts from Britain and the Netherlands. Dive into interactive, real-world scenarios that transform learning into an adventure without breaking the bank.</p>
          <p className="mt-8 font-light text-base lg:w-[600px] sm:text-xl text-center lg:text-left">Unleash your potential with cutting-edge OSINT courses, designed to equip you with dynamic skills for the fast-paced demands of the workforce. Get ready to elevate your expertise and conquer the world of open-source intelligence!</p>
          <div className="mt-10 lg:space-x-2 flex items-center justify-center  flex-col  lg:items-start lg:justify-start lg:flex-row  sm:space-x-8">
          <Link to={'/contact'} className='gradient_btn '>Get Started</Link>
          <Link  to={'/whyosint'} className='border px-16 py-3 mt-4 md:mt-0'>Learn More</Link>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img className="w-[85%]" src={hero_img} alt="banner-image" />
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Hero
