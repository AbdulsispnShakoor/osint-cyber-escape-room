import React from 'react'
import gentium_logo from '../../assets/images/gentium_logo_black cyber.png'
import wolfmind_logo from '../../assets/images/logo-text-wolfmind.png'
import { useContext } from 'react'
import { TimerContext } from '../../context/TimerContext'

const StepEnd = () => {
const {formatTime, timer} = useContext(TimerContext);

  return (
    <div className='lg:min-h-[70vh] px-4 sm:px-16 py-16 text-white'>
       <div className="form w-full">
        <div  className='w-full lg:px-36  lg:w-3/4 py-8 mx-auto'>
             <h1 className='text-xl xl:text-6xl text-center leading-relaxed'>CONGRATULATIONS YOU HAVE COMPLETED THE INVESTIGATION:</h1>
        </div>
       </div>
       <div className='xl:px-48 flex item-center gap-4 xl:items-end justify-between flex-col xl:flex-row pt-32 '>
             <img className='px-24 md:w-1/2 mx-auto' src={wolfmind_logo} alt="wolfmind" />
              <div className='text-2xl border border-white text-center w-1/2 lg:p-6 px-4 mx-auto'>
       
                {
                  formatTime(timer)
                }
        
              </div>
             <img className='px-24 lg:w-1/2 mx-auto' src={gentium_logo} alt="gentium" />
       </div>
    </div>
  )
}

export default StepEnd
