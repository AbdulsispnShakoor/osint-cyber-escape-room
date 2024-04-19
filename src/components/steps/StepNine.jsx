import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video4 from '../../assets/videos/OSINT CER task 5.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepNine = () => {
    
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
        <div  className='w-full lg:px-36  lg:w-full py-8 mx-auto'>
        <div className="video flex flex-wrap lg:flex-nowrap space-x-4 justify-between">
             <video className='lg:w-2/4' src={video4} autoPlay controls></video>
             <div className='flex flex-col gap-4'>
             <p className='py-2 px-4'>Excellent detective we are making progress thanks to the information you provided. We have arrested the accountant and questioned him. He has given some information, but he is too afraid of the shadow. All he explained is that the steal company was dealing with a company call “Svitzer” who are in charge of the movement of the drugs. <br /> <br />

The accountant told us the drugs are kept in the old offices which they had in 2009, when he first started laundering money for them and he specifically mentioned it was their “global HQ”. <br />
Use open-source tools at your disposal look through your folders and find a tool that will allow you to jump back in time on the internet.
We asked him who Sara was, he would not respond. <br />
</p>
<div className="flex flex-col gap-4 px-4">
  <h2 className='text-xl font-bold'>
  One-Find out what Svitzer do as a company?
  </h2>
  <h2 className='text-xl font-bold'>
  Two-Locate their address from 2009?
  </h2>
<p>
The only clue he gave is that it is in Copenhagen. <br />
Hurry Detectives “the Shadow” is still out there!
</p>

</div>
             </div>
        </div>
        </div>
       </div>
       <div className='lg:px-48'>
       <NextButtonNavigate navigatePropNext={'/stepten'}/>
       </div>
    </div>
  )
}

export default StepNine
