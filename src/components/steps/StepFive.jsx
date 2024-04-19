import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import img1 from '../../assets/images/Group 14.png';
import img2 from '../../assets/images/Group 15.png';
import img3 from '../../assets/images/Group 16.png';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepFive = () => {
    
  return (
    <div className='lg:min-h-[70vh] px-4 sm:px-16 py-16 text-white'>
       <div className="top lg:px-48 flex items-center justify-between space-y-4 md:justify-between flex-wrap lg:flex-nowrap">
            <HeadingTwo/>
            <div className="time_prev flex items-center justify-center space-x-4 ">
                <PrevButtonNavigate navigatePropPrev={-1}/>
                <Timer />
            </div>
       </div>
       <div className="form w-full">
        <div  className='w-full lg:px-36  lg:w-3/4 py-8 mx-auto'>
        <div className="xl:px-48 flex items-center justify-center flex-wrap xl:flex-nowrap gap-4">
             <img src={img1} alt="image1" className='hover:scale-125  transition-all '/>
             <img src={img2} alt="image2" className='hover:scale-125  transition-all '/>
             <img src={img3} alt="image3" className='hover:scale-125  transition-all '/>
        </div>
        </div>
       </div>
       <div className='lg:px-48'>
       <NextButtonNavigate navigatePropNext={'/stepsix'}/>
       </div>
    </div>
  )
}

export default StepFive
