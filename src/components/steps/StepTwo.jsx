import React from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import shipImg from '../../assets/images/Shipnew.png';
import PrevButtonNavigate from '../../common/PrevButtonNavigate';
import NextButtonNavigate from '../../common/NextButtonNavigate';
import Timer from '../../common/Timer';


const StepTwo = () => {

    return (
    <div className='text-white px-4 sm:px-36 lg:px-64 py-16 flex justify-center flex-col gap-8'>
       <div className="top flex items-center justify-between space-y-4 md:justify-between flex-wrap md:flex-nowrap">
            <HeadingTwo/>
            <div className="time_prev flex items-center justify-center space-x-4 ">
                <PrevButtonNavigate navigatePropPrev={-1}/>
                <Timer />
            </div>
       </div>
       <img src={shipImg} alt="ship image" className='lg:w-2/4 self-center' />
       
    
        <NextButtonNavigate navigatePropNext={'/stepthree'}/>
    </div>
  )
}

export default StepTwo
