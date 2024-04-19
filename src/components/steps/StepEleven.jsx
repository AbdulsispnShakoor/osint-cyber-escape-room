import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video5 from '../../assets/videos/_OSINT CER task 6.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepEleven = () => {
    
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
        <div  className='w-full lg:px-36  xl:w-3/4 py-8 mx-auto'>
        <div className="video lg:px-48">
             <video src={video5} autoPlay controls></video>
        </div>
        </div>
       </div>
       <div className='lg:px-48'>
             <p className=' text-center'>Well done. We have raided their address based on the information you provided us! Great job, but it’s not over yet. A member of the Shadow gang explained that one of his jobs is to travel every week to drop off some cash to a woman and her driver. He explained she is very well dressed and clearly looks like she lives a life of luxury.  <br /> <br />

He once asked what her name was, she simply replied with “I am his star”. From then on, she has been referred to as the ‘Star’. However last week there was a change of drop off location. He dropped off the money on an expensive looking yacht. <br /> <br />

Look for a connection with this woman, perhaps through bank statements and the word “STAR”. We need to find a connection with this yacht. <br /> 

Try and locate this yacht and where its live location is?


</p>
       <NextButtonNavigate navigatePropNext={'/steptwelev'}/>
       </div>
    </div>
  )
}

export default StepEleven
