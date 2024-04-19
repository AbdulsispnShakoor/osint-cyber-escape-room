import React, { useContext } from 'react'
import startBtn from '../../assets/images/startBtn.png';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../../context/TimerContext';

const Step0 = () => {
const navigate = useNavigate();
const {handleStart} = useContext(TimerContext)
// console.log(formatTime(timer))

  return (
    <div className='step0-bg min-h-[80vh] flex items-center justify-center gap-8 flex-col'>
      <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold'>Operation Shadow Trace</h1>
      <p className='text-sm md:text-2xl lg:text-3xl text-white font-normal'>CLICK TO START INVESTIGATION</p>
      <button className="btn cursor-pointer hover:scale-105 transition-all duration-200 ease-linear"  onClick={() => navigate("/stepone")}>
        <img src={startBtn} onClick={handleStart} alt="start" className='w-36 md:w-48 '/>
      </button>
    </div>
  )
}

export default Step0
