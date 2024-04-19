import React, { useContext, useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video8 from '../../assets/videos/Final osint cer video 8.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'
import { TimerContext } from '../../context/TimerContext';

const StepFifteen = () => {
    const {handleStop, handleStart} = useContext(TimerContext);

  return (
    <div className='lg:min-h-[70vh] px-4 sm:px-16 py-16 text-white'>
       <div className="top lg:px-48 flex items-center justify-between space-y-4 md:justify-between flex-wrap lg:flex-nowrap">
            <HeadingTwo/>
            <div onClick={handleStart} className="time_prev flex items-center justify-center space-x-4 ">
                <PrevButtonNavigate navigatePropPrev={-1} />
                <Timer />
            </div>
       </div>
       <div className="form w-full">
        <div  className='w-full lg:px-36  lg:w-2/4 py-8 mx-auto'>
        <div className="video">
             <video src={video8} autoPlay controls></video>
        </div>
        </div>
       </div>
       <div onClick={handleStop}  className='lg:px-48'>
             
       <NextButtonNavigate navigatePropNext={'/stepsend'}/>
       </div>
    </div>
  )
}

export default StepFifteen
