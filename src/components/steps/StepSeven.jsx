import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import video4 from '../../assets/videos/OSINT CER task 4.mp4';
import Timer from '../../common/Timer'
import NextButtonNavigate from '../../common/NextButtonNavigate'

const StepSeven = () => {
    
  return (
    <div className='lg:min-h-[70vh] px-4 sm:px-16 py-16 text-white'>
       <div className="top xl:px-48 flex items-center justify-between space-y-4 md:justify-between flex-wrap lg:flex-nowrap">
            <HeadingTwo/>
            <div className="time_prev flex items-center justify-center space-x-4 ">
                <PrevButtonNavigate navigatePropPrev={-1}/>
                <Timer />
            </div>
       </div>
       <div className="form w-full">
        <div  className='w-full xl:px-36 lg:w-full py-8 mx-auto'>
        <div className="video flex flex-wrap items-center xl:flex-nowrap space-x-8 justify-center xl:justify-between">
             <video className='lg:w-2/4' src={video4} autoPlay controls></video>
             <div className='flex flex-col gap-4'>
             <p className='py-2 px-4'>Well done! so far, we have clues in Russia, Italy and the United Kingdom.

OK, we have some intelligence but nothing concrete, we know that the ‘Shadow’ is clearly laundering his money. Look through bank details, see what you can pick up and see if you can make a breakthrough to send some officers information in order to make some enquiries to anyone linked to these accounts. We know through our intelligence sources that the company is based in the UK.

Look for clues on the various bank statements, try and find a common theme to try and identify payments and people, that may become useful as you progress with your investigation.

Try and identify the company the ‘Shadow’ may be laundering his money through.

Hopefully his accountant will help the British Authorities to gather more information.

Use all physical tools and open source tools at your disposal.</p>
<div className="flex flex-col gap-4">
  <h2 className='text-2xl font-bold'>
    1-Locate which company they are laundering money through?
  </h2>
  <h2 className='text-2xl font-bold'>
  2- Find out more about the company, see if it still active?
  </h2>
  <h2 className='text-2xl font-bold'>
  3- Name of the accountant
  </h2>
  <h2 className='text-2xl font-bold'>
  4- Their Date of birth and address?
  </h2>
    <button className='px-8 py-2 text-white text-xl font-normal bg-slate-800 ml-8'>you must hurry detectives time is ticking</button>

</div>
             </div>
        </div>
        </div>
       </div>
       <div className='lg:px-48'>
       <NextButtonNavigate navigatePropNext={'/stepeight'}/>
       </div>
    </div>
  )
}

export default StepSeven
