import {  useContext, useLayoutEffect, useState } from 'react';
import { TimerContext } from '../context/TimerContext';


const Timer = () => {

const CountdownTimer = () => {
  const { timer,formatTime} = useContext(TimerContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-sm font-bold text-gray-800">
      
        {
          formatTime(timer)
        }
      </div>
    </div>
  );
};

  return (
    <div className="timer bg-gray-50 rounded-full w-16 h-16  border-2 border-dashed border-blue-700 text-white flex items-center justify-center font-bold text-3xl">
    <CountdownTimer />
   </div>
  )
}

export default Timer
