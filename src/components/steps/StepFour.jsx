import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video3 from '../../assets/videos/osint video 3.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepFour = () => {
    
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
        <div  className='w-full  xl:px-36  lg:w-3/4 py-8 mx-auto'>
        <div className="video xl:px-48">
             <video src={video3} autoPlay controls></video>
        </div>
        </div>
       </div>
       <div className='xl:px-48'>
             <p className='py-2 xl:px-48 text-center'>Well done detectives the Italian custom authorities were able to seize a number of drugs thanks to your work. Now that we have located the ship let’s focus back on tracking the Shadow. <br />
We have a number of photos we need to look at and start to locate where these are from and what they mean. Look at each photo with as much detail as possible, look at anything that will help you start to pinpoint exact locations of where they are taken. Discuss this with your colleagues and start thinking about different tool for image reverse search. You have a lot of options from Bing, google and Yandex or any other search engine. <br />
Just message me with the three countries and I Will speak to the local authorities to further investigate.</p>
       <NextButtonNavigate navigatePropNext={'/stepfive'}/>
       </div>
    </div>
  )
}

export default StepFour
