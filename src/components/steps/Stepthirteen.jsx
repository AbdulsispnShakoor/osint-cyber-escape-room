import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video7 from '../../assets/videos/OSINT CER last task video.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepThirteen = () => {
    
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
        <div  className='w-full xl:px-32  lg:w-full py-8 mx-auto'>
        <div className="video flex flex-wrap xl:flex-nowrap space-x-4 justify-center xl:justify-between">
             <video className='lg:w-2/4' src={video7} autoPlay controls></video>
             <div className='flex flex-col gap-4'>
             <p className='py-2 px-4'>Excellent Detectives, you found the ships location. We deployed Interpol to raid the yacht and they have recovered some coordinates on a piece of paper. <br />
Use any tools at your disposal to find out where this building is located. You will see these coordinates on screen. <br /> 

41°03'18.2"N  28°48'37.6"E

Find out where this building is:  <br /> 






</p>
<div className="flex flex-col gap-4 px-4">
  <h2 className='text-xl font-bold'>
    1. I need to know the full address, including street, city and country?
  </h2>
  <h2 className='text-xl font-bold'>
    2. What is the name of the building?
  </h2>
  <h2 className='text-xl font-bold'>
    3. Call me back as soon as you know! Hurry this is the best lead we have!
  </h2>
</div>
             </div>
        </div>
        </div>
       </div>
       <div className='lg:px-48'>
       <NextButtonNavigate navigatePropNext={'/stepfourteen'}/>
       </div>
    </div>
  )
}

export default StepThirteen
